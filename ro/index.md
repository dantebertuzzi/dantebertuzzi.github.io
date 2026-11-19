---
lang: ro
permalink: /ro/
---

<div class="mast" markdown="1">
<div class="kicker mono"><span>Portofoliu</span><span>Document de lucru nr. 1</span><span>Noiembrie 2026</span></div>

# Dante <em>Bertuzzi</em>

Statistician. Scriu pachete Julia care fac reproductibile datele publice din Brazilia — și studiez clima locului în care trăiesc.
{: .dek}

<div class="abstract" markdown="1">
<div class="mono">Rezumat</div>

Datele publice din Brazilia sunt bogate și greu de accesat: fișiere DBC comprimate, codificări Latin-1, structuri care se schimbă de la o versiune la alta. Munca mea rezolvă această dezordine o singură dată, în pachete Julia open-source, astfel încât analiza să poată începe de la întrebare, nu de la formatul fișierului. Până acum, zece pachete acoperă registre de sănătate, alegeri, statistici despre criminalitate, banca centrală, biodiversitatea oceanică, calitatea datelor, șabloane de documente și managementul proiectelor. Fac și cercetare reproductibilă: cel mai recent preprint al meu estimează că un an la fel de secetos ca 2012/13, care odinioară era de așteptat cam o dată la 38 de ani în Petrolina, vine acum cam o dată la 12.

Cuvinte-cheie: statistică · Julia · date publice · reproductibilitate · semiarid
{: .kw .mono}
</div>

{% include figure-rainfall.html %}
</div>

<section id="packages" markdown="1">
{% include section-head.html num="1" title="Pachete" lede="Julia open-source, scris ca să fie citit: scheme tipizate, puține dependențe, Tables.jl oriunde se potrivește." %}

{% include packages-table.html %}
</section>

<section id="research" markdown="1">
{% include section-head.html num="2" title="Cercetare" lede="Fiecare număr din text este generat de cod, cu teste unitare și o verificare independentă în Python." %}

Bertuzzi, D. de S. (2026). <span class="t">Menos chuva e mais calor em Petrolina-PE (1961–2025): tendências do regime meteorológico e o que elas implicam para a frequência de anos muito secos.</span> Preprint, Zenodo. [doi:10.5281/zenodo.23438824](https://doi.org/10.5281/zenodo.23438824){: .mono} · [cod și date](https://github.com/dantebertuzzi/meteo){: .mono}
{: .cite}

<div class="stats">
  <div class="stat"><div class="v">−60 <small>mm / deceniu</small></div><p>Tendința precipitațiilor anuale până în 2020/21, interval de încredere 95% între −87 și −33.</p></div>
  <div class="stat"><div class="v">+0.39 <small>°C / deceniu</small></div><p>Temperatura minimă. Maxima a crescut cu +0,28 °C pe deceniu.</p></div>
  <div class="stat"><div class="v">38 → 12 <small>ani</small></div><p>Perioada de revenire a unui an la fel de secetos ca 2012/13: climă staționară față de media recentă.</p></div>
  <div class="stat"><div class="v">6 <small>stații</small></div><p>Analiză regională de frecvență, verificată cu pluviometrele ANA și normalele INMET.</p></div>
</div>
</section>

<section id="methods" markdown="1">
{% include section-head.html num="3" title="Metode" lede="Cum lucrez, în patru reguli." %}

1. ### <span class="mono">3.1</span>Rezolvă dezordinea o singură dată

   Fișiere DBC, Latin-1, structuri care se schimbă de la an la an — gestionate în interiorul pachetului, ca nimeni după tine să nu mai fie nevoit s-o facă.

2. ### <span class="mono">3.2</span>Verifică ipoteza nulă înainte să te bazezi pe ea

   Mai multe ipoteze nule clasice din criminalistica electorală nu sunt valabile pentru numărul de voturi. Pachetul măsoară rata de eroare pe care o obține efectiv pe datele tale.

3. ### <span class="mono">3.3</span>Fiecare număr vine din cod

   Lucrările sunt generate, nu tastate: figurile, tabelele și numerele din text ies toate din aceeași rulare reproductibilă.

4. ### <span class="mono">3.4</span>Puține dependențe, suprafață mică

   Hărți termice în terminal fără bibliotecă grafică; clienți API fără HTTP.jl. Se încarcă repede și sunt ușor de întreținut.
{: .methods}
</section>

<section id="contact" markdown="1">
{% include section-head.html num="4" title="Corespondență" %}

<div class="corr">
  <a class="gh big" href="{{ site.github }}">{% include icon-github.svg %}github.com/dantebertuzzi</a>
  <p>Issue-urile, pull request-urile și întrebările despre orice pachet sunt binevenite acolo.</p>
</div>
</section>
