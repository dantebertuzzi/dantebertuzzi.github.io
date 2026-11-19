#!/usr/bin/env ruby
# frozen_string_literal: true

# Atualiza _data/packages.yml com dados do GitHub:
#   - activity: commits por semana nas últimas 52 semanas (/stats/commit_activity)
#   - version:  campo version do Project.toml no branch padrão
#
# Uso: GITHUB_TOKEN=... ruby scripts/update_packages.rb
# Só usa a biblioteca padrão do Ruby.

require "base64"
require "json"
require "net/http"
require "yaml"

DATA = File.expand_path("../_data/packages.yml", __dir__)
TOKEN = ENV.fetch("GITHUB_TOKEN", nil)

def github(path)
  uri = URI("https://api.github.com#{path}")
  req = Net::HTTP::Get.new(uri)
  req["Accept"] = "application/vnd.github+json"
  req["X-GitHub-Api-Version"] = "2022-11-28"
  req["Authorization"] = "Bearer #{TOKEN}" if TOKEN
  Net::HTTP.start(uri.host, uri.port, use_ssl: true) { |http| http.request(req) }
end

# O GitHub responde 202 enquanto calcula as estatísticas; tenta de novo.
def weekly_commits(repo)
  8.times do |attempt|
    res = github("/repos/#{repo}/stats/commit_activity")
    if res.code == "200"
      weeks = JSON.parse(res.body).map { |w| w["total"] }
      return weeks if weeks.size == 52
    end
    sleep(2 + attempt * 3)
  end
  nil
end

def project_version(repo)
  res = github("/repos/#{repo}/contents/Project.toml")
  return nil unless res.code == "200"

  toml = Base64.decode64(JSON.parse(res.body)["content"])
  toml[/^version\s*=\s*"([^"]+)"/, 1]
end

packages = YAML.load_file(DATA)
changed = false

packages.each do |pkg|
  repo = pkg["code"].sub(%r{\Ahttps://github.com/}, "")
  if (weeks = weekly_commits(repo))
    changed ||= weeks != pkg["activity"]
    pkg["activity"] = weeks
  else
    warn "#{pkg["name"]}: estatísticas indisponíveis, mantendo as anteriores"
  end
  if (version = project_version(repo))
    changed ||= version != pkg["version"]
    pkg["version"] = version
  else
    warn "#{pkg["name"]}: Project.toml não encontrado, mantendo a versão anterior"
  end
  puts format("%-22s v%-8s %4d commits", pkg["name"], pkg["version"], pkg["activity"].sum)
end

out = +"# Pacotes da Tabela 1. As descrições e os rótulos de área ficam em _data/i18n.yml.\n"
out << "# activity e version são atualizados por scripts/update_packages.rb (workflow semanal).\n"
packages.each do |p|
  out << "\n- name: #{p["name"]}\n  slug: #{p["slug"]}\n  url: #{p["url"]}\n  code: #{p["code"]}\n"
  out << "  docs: #{p["docs"]}\n" if p["docs"]
  out << "  domain: #{p["domain"]}\n  version: \"#{p["version"]}\"\n"
  out << "  activity: [#{p["activity"].join(", ")}]\n"
end
File.write(DATA, out)
puts(changed ? "dados atualizados" : "sem mudanças")
