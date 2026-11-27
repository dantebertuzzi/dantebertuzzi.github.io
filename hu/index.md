---
lang: hu
permalink: /hu/
---

<div class="mast" markdown="1">
<div class="kicker mono"><span>Portfólió</span><span>1. munkaanyag</span><span>2026. november</span></div>

# Dante <em>Bertuzzi</em>

Statisztikus vagyok. Julia-csomagokat írok, amelyek reprodukálhatóvá teszik a brazil közadatokat — és annak a helynek az éghajlatát kutatom, ahol élek.
{: .dek}

<div class="abstract" markdown="1">
<div class="mono">Összefoglaló</div>

Brazília közadatai gazdagok, de nehezen hozzáférhetők: tömörített DBC-fájlok, Latin-1 kódolás, kiadásról kiadásra változó szerkezet. A munkám ezt a káoszt egyszer, nyílt forráskódú Julia-csomagokban kezeli, így az elemzés a kérdésnél kezdődhet, nem a fájlformátumnál. Eddig kilenc csomag fedi le az egészségügyi nyilvántartásokat, a választásokat, a bűnügyi statisztikákat, az óceáni biodiverzitást, az adatminőséget, a dokumentumsablonokat és a projektmenedzsmentet. Reprodukálható kutatást is végzek: legutóbbi preprintem szerint egy olyan száraz év, mint a 2012/13-as, amely Petrolinában korábban nagyjából 38 évente fordult elő, a lineáris trend szerint a sor végén körülbelül 12–18 évente jön el.

Kulcsszavak: statisztika · Julia · közadatok · reprodukálhatóság · félszáraz éghajlat
{: .kw .mono}
</div>

{% include figure-rainfall.html %}
</div>

<section id="packages" markdown="1">
{% include section-head.html num="1" title="Csomagok" lede="Nyílt forráskódú Julia, olvasásra írva: típusos sémák, kevés függőség, Tables.jl mindenhol, ahol illik." %}

{% include packages-table.html %}
</section>

<section id="research" markdown="1">
{% include section-head.html num="2" title="Kutatás" lede="A szövegben minden szám kódból születik, egységtesztekkel, részleges Python-ellenőrzéssel és a zárt képletek Lean-bizonyításaival." %}

Bertuzzi, D. de S. (2026). <span class="t">Menos chuva e mais calor em Petrolina-PE (1961–2025): tendências do regime meteorológico e o que elas implicam para a frequência de anos muito secos.</span> Preprint, Zenodo, v1.3.2. [doi:10.5281/zenodo.24608594](https://doi.org/10.5281/zenodo.24608594){: .mono} · [kód és adatok](https://github.com/dantebertuzzi/meteo){: .mono}
{: .cite}

<div class="stats">
  <div class="stat"><div class="v">−60 <small>mm / évtized</small></div><p>Az éves csapadék trendje 2020/21-ig, 95%-os intervallum: −87 és −33 között.</p></div>
  <div class="stat"><div class="v">+0.40 <small>°C / évtized</small></div><p>Minimumhőmérséklet; a szomszédos állomásokhoz mért törések korrekciójával 0,19–0,31. A maximum évtizedenként +0,27 °C-kal nőtt.</p></div>
  <div class="stat"><div class="v">38 → 12–18 <small>év</small></div><p>A 2012/13-ashoz hasonlóan száraz év visszatérési ideje: stacionárius éghajlat vs. a sor vége a lineáris trend szerint (kb. 27, ha a csökkenés lépcsőszerű volt).</p></div>
  <div class="stat"><div class="v">6 <small>állomás</small></div><p>Regionális gyakoriságelemzés, az ANA csapadékmérőivel és az INMET normál értékeivel ellenőrizve.</p></div>
</div>
</section>

<section id="methods" markdown="1">
{% include section-head.html num="3" title="Módszerek" lede="Így dolgozom, négy szabályban." %}

1. ### <span class="mono">3.1</span>A káoszt egyszer kell kezelni

   DBC-fájlok, Latin-1, évről évre változó szerkezet — mindezt a csomag kezeli, hogy később senkinek se kelljen.

2. ### <span class="mono">3.2</span>Előbb ellenőrizd a nullhipotézist, csak aztán bízz benne

   Több klasszikus választási-forenzikai nullhipotézis nem teljesül a szavazatszámokra. A csomag megméri, mekkora hibaarányt ad valójában a te adataidon.

3. ### <span class="mono">3.3</span>Minden szám kódból származik

   A tanulmányokat generálom, nem begépelem: az ábrák, a táblázatok és a szövegben szereplő számok mind ugyanabból a reprodukálható futtatásból jönnek.

4. ### <span class="mono">3.4</span>Kevés függőség, kis felület

   Hőtérképek a terminálban ábrázolókönyvtár nélkül; API-kliensek HTTP.jl nélkül. Gyorsan betöltődnek, könnyű karbantartani őket.
{: .methods}
</section>

<section id="contact" markdown="1">
{% include section-head.html num="4" title="Kapcsolat" %}

<div class="corr">
  <a class="gh big" href="{{ site.github }}">{% include icon-github.svg %}github.com/dantebertuzzi</a>
  <p>Ott szívesen fogadok issue-kat, pull requesteket és kérdéseket bármelyik csomagról.</p>
</div>
</section>
