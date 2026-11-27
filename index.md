---
lang: pt
permalink: /
---

<div class="mast" markdown="1">
<div class="kicker mono"><span>Portfólio</span><span>Texto para discussão nº 1</span><span>Novembro de 2026</span></div>

# Dante <em>Bertuzzi</em>

Estatístico. Escrevo pacotes Julia que tornam reprodutíveis os dados públicos brasileiros — e estudo o clima do lugar onde moro.
{: .dek}

<div class="abstract" markdown="1">
<div class="mono">Resumo</div>

Os dados públicos no Brasil são ricos e difíceis de alcançar: arquivos DBC comprimidos, codificação Latin-1, layouts que mudam a cada nova versão. Meu trabalho absorve essa bagunça uma vez só, em pacotes Julia de código aberto, para que a análise comece pela pergunta e não pelo formato do arquivo. Até agora, nove pacotes cobrem registros de saúde, eleições, estatísticas criminais, biodiversidade marinha, qualidade de dados, modelos de documentos e gestão de projetos. Também faço pesquisa reprodutível: meu preprint mais recente estima que um ano tão seco quanto 2012/13, antes esperado a cada 38 anos em Petrolina, pela tendência linear, no fim da série volta a cada 12 a 18 anos, aproximadamente.

Palavras-chave: estatística · Julia · dados públicos · reprodutibilidade · semiárido
{: .kw .mono}
</div>

{% include figure-rainfall.html %}
</div>

<section id="packages" markdown="1">
{% include section-head.html num="1" title="Pacotes" lede="Julia de código aberto, escrito para ser lido: esquemas tipados, poucas dependências, Tables.jl sempre que couber." %}

{% include packages-table.html %}
</section>

<section id="research" markdown="1">
{% include section-head.html num="2" title="Pesquisa" lede="Todo número no texto é gerado pelo código, com testes unitários, uma verificação parcial em Python e provas em Lean das fórmulas fechadas." %}

Bertuzzi, D. de S. (2026). <span class="t">Menos chuva e mais calor em Petrolina-PE (1961–2025): tendências do regime meteorológico e o que elas implicam para a frequência de anos muito secos.</span> Preprint, Zenodo, v1.3.2. [doi:10.5281/zenodo.24608594](https://doi.org/10.5281/zenodo.24608594){: .mono} · [código e dados](https://github.com/dantebertuzzi/meteo){: .mono}
{: .cite}

<div class="stats">
  <div class="stat"><div class="v">−60 <small>mm / década</small></div><p>Tendência da chuva anual até 2020/21, intervalo de 95% de −87 a −33.</p></div>
  <div class="stat"><div class="v">+0.40 <small>°C / década</small></div><p>Temperatura mínima; de 0,19 a 0,31 corrigindo quebras frente às vizinhas. A máxima subiu +0,27 °C por década.</p></div>
  <div class="stat"><div class="v">38 → 12–18 <small>anos</small></div><p>Período de retorno de um ano tão seco quanto 2012/13: clima estacionário vs. fim da série sob a tendência linear (cerca de 27 se a queda foi um degrau).</p></div>
  <div class="stat"><div class="v">6 <small>estações</small></div><p>Análise regional de frequência, conferida com os pluviômetros da ANA e as normais do INMET.</p></div>
</div>
</section>

<section id="methods" markdown="1">
{% include section-head.html num="3" title="Métodos" lede="Como trabalho, em quatro regras." %}

1. ### <span class="mono">3.1</span>Absorver a bagunça uma vez só

   Arquivos DBC, Latin-1, layouts que mudam de um ano para outro — tudo resolvido dentro do pacote, para que ninguém depois precise resolver.

2. ### <span class="mono">3.2</span>Testar a hipótese nula antes de confiar nela

   Várias hipóteses nulas clássicas da forense eleitoral não valem para contagens de votos. O pacote mede a taxa de erro que de fato entrega nos seus dados.

3. ### <span class="mono">3.3</span>Todo número vem do código

   Artigos são gerados, não digitados: figuras, tabelas e os números do texto saem todos da mesma execução reprodutível.

4. ### <span class="mono">3.4</span>Poucas dependências, superfície pequena

   Mapas de calor no terminal sem biblioteca gráfica; clientes de API sem HTTP.jl. Rápidos de carregar, fáceis de manter.
{: .methods}
</section>

<section id="contact" markdown="1">
{% include section-head.html num="4" title="Correspondência" %}

<div class="corr">
  <a class="gh big" href="{{ site.github }}">{% include icon-github.svg %}github.com/dantebertuzzi</a>
  <p>Issues, pull requests e dúvidas sobre qualquer pacote são bem-vindos lá.</p>
</div>
</section>
