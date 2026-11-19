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

I dati pubblici in Brasile sono ricchi e difficili da raggiungere: file DBC compressi, codifiche Latin-1, tracciati che cambiano da una versione all’altra. Il mio lavoro assorbe questo caos una volta sola, in pacchetti Julia open source, così l’analisi può partire dalla domanda invece che dal formato del file. Finora dieci pacchetti coprono registri sanitari, elezioni, statistiche sulla criminalità, la banca centrale, la biodiversità oceanica, la qualità dei dati, i modelli di documento e la gestione di progetti. Scrivo anche ricerca riproducibile: il mio ultimo preprint stima che un anno secco come il 2012/13, un tempo atteso circa ogni 38 anni a Petrolina, ora arrivi circa ogni 12.

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
{% include section-head.html num="2" title="Ricerca" lede="Ogni numero nel testo è generato dal codice, con test unitari e una verifica indipendente in Python." %}

Bertuzzi, D. de S. (2026). <span class="t">Menos chuva e mais calor em Petrolina-PE (1961–2025): tendências do regime meteorológico e o que elas implicam para a frequência de anos muito secos.</span> Preprint, Zenodo. [doi:10.5281/zenodo.23438824](https://doi.org/10.5281/zenodo.23438824){: .mono} · [codice e dati](https://github.com/dantebertuzzi/meteo){: .mono}
{: .cite}

<div class="stats">
  <div class="stat"><div class="v">−60 <small>mm / decennio</small></div><p>Tendenza delle precipitazioni annue fino al 2020/21, intervallo al 95% da −87 a −33.</p></div>
  <div class="stat"><div class="v">+0.39 <small>°C / decennio</small></div><p>Temperatura minima. La massima è salita di +0,28 °C per decennio.</p></div>
  <div class="stat"><div class="v">38 → 12 <small>anni</small></div><p>Tempo di ritorno di un anno secco come il 2012/13: clima stazionario contro media recente.</p></div>
  <div class="stat"><div class="v">6 <small>stazioni</small></div><p>Analisi regionale di frequenza, verificata con i pluviometri ANA e le normali INMET.</p></div>
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
