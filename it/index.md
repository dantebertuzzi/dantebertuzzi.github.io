---
lang: it
permalink: /it/
---

<div class="mast" markdown="1">
<div class="kicker mono"><span>Portfolio</span><span>Documento di lavoro n. 1</span><span>Novembre 2026</span></div>

# Dante <em>Bertuzzi</em>

Statistico. Scrivo pacchetti Julia che rendono riproducibili i dati pubblici brasiliani — e studio il clima del luogo in cui vivo.
{: .dek}

<div class="abstract" markdown="1">
<div class="mono">Sommario</div>

I dati pubblici in Brasile sono ricchi e difficili da raggiungere: file DBC compressi, codifiche Latin-1, tracciati che cambiano da una versione all’altra. Il mio lavoro assorbe questo caos una volta sola, in pacchetti Julia open source, così l’analisi può partire dalla domanda invece che dal formato del file. Finora nove pacchetti coprono registri sanitari, elezioni, statistiche sulla criminalità, la biodiversità oceanica, la qualità dei dati, i modelli di documento e la gestione di progetti. Scrivo anche ricerca riproducibile: il mio ultimo preprint stima che un anno secco come il 2012/13, un tempo atteso circa ogni 38 anni a Petrolina, con la tendenza lineare alla fine della serie arrivi circa ogni 12–18.

Parole chiave: statistica · Julia · dati pubblici · riproducibilità · semiarido
{: .kw .mono}
</div>

{% include figure-rainfall.html %}
</div>

<section id="packages" markdown="1">
{% include section-head.html num="1" title="Pacchetti" lede="Julia open source, scritto per essere letto: schemi tipizzati, poche dipendenze, Tables.jl ovunque sia possibile." %}

{% include packages-table.html %}
</section>

<section id="research" markdown="1">
{% include section-head.html num="2" title="Ricerca" lede="Ogni numero nel testo è generato dal codice, con test unitari, una verifica parziale in Python e dimostrazioni in Lean delle formule chiuse." %}

Bertuzzi, D. de S. (2026). <span class="t">Menos chuva e mais calor em Petrolina-PE (1961–2025): tendências do regime meteorológico e o que elas implicam para a frequência de anos muito secos.</span> Preprint, Zenodo, v1.3.2. [doi:10.5281/zenodo.24608594](https://doi.org/10.5281/zenodo.24608594){: .mono} · [codice e dati](https://github.com/dantebertuzzi/meteo){: .mono}
{: .cite}

<div class="stats">
  <div class="stat"><div class="v">−60 <small>mm / decennio</small></div><p>Tendenza delle precipitazioni annue fino al 2020/21, intervallo al 95% da −87 a −33.</p></div>
  <div class="stat"><div class="v">+0.40 <small>°C / decennio</small></div><p>Temperatura minima; da 0,19 a 0,31 correggendo le discontinuità rispetto alle stazioni vicine. La massima è salita di +0,27 °C per decennio (0,19 con la correzione).</p></div>
  <div class="stat"><div class="v">38 → 12–18 <small>anni</small></div><p>Tempo di ritorno di un anno secco come il 2012/13: clima stazionario contro fine della serie con la tendenza lineare (circa 27 se il calo è stato un gradino). Gli anni piovosi dal 2021/22 al 2024/25 suggeriscono che la fine della retta esagera la siccità attuale.</p></div>
  <div class="stat"><div class="v">6 <small>stazioni</small></div><p>Analisi regionale di frequenza: la stazione 82983 e i 5 pluviometri ANA, 291 anni-stazione.</p></div>
</div>
</section>

<section id="methods" markdown="1">
{% include section-head.html num="3" title="Metodi" lede="Come lavoro, in quattro regole." %}

1. ### <span class="mono">3.1</span>Assorbire il caos una volta sola

   File DBC, Latin-1, tracciati che cambiano da un anno all’altro — gestiti dentro il pacchetto, così nessuno a valle deve farlo.

2. ### <span class="mono">3.2</span>Verificare l’ipotesi nulla prima di fidarsene

   Diverse ipotesi nulle classiche della forensica elettorale non valgono per i conteggi dei voti. Il pacchetto misura il tasso di errore che ottiene davvero sui tuoi dati.

3. ### <span class="mono">3.3</span>Ogni numero viene dal codice

   Gli articoli sono generati, non digitati: figure, tabelle e numeri nel testo escono tutti dalla stessa esecuzione riproducibile.

4. ### <span class="mono">3.4</span>Poche dipendenze, superficie ridotta

   Heatmap nel terminale senza librerie grafiche; client API senza HTTP.jl. Veloci da caricare, facili da mantenere.
{: .methods}
</section>

<section id="contact" markdown="1">
{% include section-head.html num="4" title="Corrispondenza" %}

<div class="corr">
  <a class="gh big" href="{{ site.github }}">{% include icon-github.svg %}github.com/dantebertuzzi</a>
  <p>Issue, pull request e domande su qualsiasi pacchetto sono benvenute lì.</p>
</div>
</section>
