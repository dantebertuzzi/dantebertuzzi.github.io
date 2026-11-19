---
layout: default
---

<div class="mast" markdown="1">
<div class="kicker mono"><span data-i18n="k1">Portfólio</span><span data-i18n="k2">Texto para discussão nº 1</span><span data-i18n="k3">Novembro de 2026</span></div>

# Dante <em>Bertuzzi</em>

Estatístico. Escrevo pacotes Julia que tornam reprodutíveis os dados públicos brasileiros — e estudo o clima do lugar onde moro.
{: .dek data-i18n="dek"}

<div class="abstract" markdown="1">
<div class="mono" data-i18n="abs_l">Resumo</div>

Os dados públicos no Brasil são ricos e difíceis de alcançar: arquivos DBC comprimidos, codificação Latin-1, layouts que mudam a cada nova versão. Meu trabalho absorve essa bagunça uma vez só, em pacotes Julia de código aberto, para que a análise comece pela pergunta e não pelo formato do arquivo. Até agora, dez pacotes cobrem registros de saúde, eleições, estatísticas criminais, o Banco Central, biodiversidade marinha, qualidade de dados, modelos de documentos e gestão de projetos. Também faço pesquisa reprodutível: meu preprint mais recente estima que um ano tão seco quanto 2012/13, antes esperado a cada 38 anos em Petrolina, agora acontece a cada 12, aproximadamente.
{: data-i18n="abs"}

Palavras-chave: estatística · Julia · dados públicos · reprodutibilidade · semiárido
{: .kw .mono data-i18n="kw"}
</div>

{% include figure-rainfall.html %}
</div>

<section id="packages" markdown="1">
{% include section-head.html num="1" title="Pacotes" lede="Julia de código aberto, escrito para ser lido: esquemas tipados, poucas dependências, Tables.jl sempre que couber." %}

{% include packages-table.html %}
</section>

<section id="research" markdown="1">
{% include section-head.html num="2" title="Pesquisa" lede="Todo número no texto é gerado pelo código, com testes unitários e uma verificação independente em Python." %}

Bertuzzi, D. de S. (2026). <span class="t">Menos chuva e mais calor em Petrolina-PE (1961–2025): tendências do regime meteorológico e o que elas implicam para a frequência de anos muito secos.</span> Preprint, Zenodo. [doi:10.5281/zenodo.23438824](https://doi.org/10.5281/zenodo.23438824){: .mono} · [código e dados](https://github.com/dantebertuzzi/meteo){: .mono data-i18n="cite_code"}
{: .cite}

<div class="stats">
  <div class="stat"><div class="v">−60 <small data-i18n="u1">mm / década</small></div><p data-i18n="st1">Tendência da chuva anual até 2020/21, intervalo de 95% de −87 a −33.</p></div>
  <div class="stat"><div class="v">+0.39 <small data-i18n="u2">°C / década</small></div><p data-i18n="st2">Temperatura mínima. A máxima subiu +0,28 °C por década.</p></div>
  <div class="stat"><div class="v">38 → 12 <small data-i18n="u3">anos</small></div><p data-i18n="st3">Tempo de retorno de um ano tão seco quanto 2012/13: clima estacionário vs. média recente.</p></div>
  <div class="stat"><div class="v">6 <small data-i18n="u4">estações</small></div><p data-i18n="st4">Análise regional de frequência, conferida com os pluviômetros da ANA e as normais do INMET.</p></div>
</div>
</section>

<section id="methods" markdown="1">
{% include section-head.html num="3" title="Métodos" lede="Como trabalho, em quatro regras." %}

1. ### <span class="mono">3.1</span>Absorver a bagunça uma vez só
   {: data-i18n="m1h"}

   Arquivos DBC, Latin-1, layouts que mudam de um ano para outro — tudo resolvido dentro do pacote, para que ninguém depois precise resolver.
   {: data-i18n="m1p"}

2. ### <span class="mono">3.2</span>Testar a hipótese nula antes de confiar nela
   {: data-i18n="m2h"}

   Várias hipóteses nulas clássicas da forense eleitoral não valem para contagens de votos. O pacote mede a taxa de erro que de fato entrega nos seus dados.
   {: data-i18n="m2p"}

3. ### <span class="mono">3.3</span>Todo número vem do código
   {: data-i18n="m3h"}

   Artigos são gerados, não digitados: figuras, tabelas e os números do texto saem todos da mesma execução reprodutível.
   {: data-i18n="m3p"}

4. ### <span class="mono">3.4</span>Poucas dependências, superfície pequena
   {: data-i18n="m4h"}

   Mapas de calor no terminal sem biblioteca gráfica; clientes de API sem HTTP.jl. Rápidos de carregar, fáceis de manter.
   {: data-i18n="m4p"}
{: .methods}
</section>

<section id="contact" markdown="1">
{% include section-head.html num="4" title="Correspondência" %}

<div class="corr">
  <a class="gh big" href="{{ site.github }}">{% include icon-github.svg %}github.com/dantebertuzzi</a>
  <p data-i18n="s4p">Issues, pull requests e dúvidas sobre qualquer pacote são bem-vindos lá.</p>
</div>
</section>
