---
theme: seriph
title: Välkommen till webben
info: |
  ## Film 1 – Välkommen till webben
  Din dator, en svart låda som heter internet, och datorn på andra sidan.
  Vi ställer tre frågor och öppnar lådan först på slutet.
drawings:
  persist: false
# view-transition krävs för att frågan ska morfa till rubriken på nästa bild.
# Det här blocket är både deckets config och första bildens frontmatter, så
# övergången måste sättas här för att gälla från bild 1.
transition: view-transition
duration: 10min
layout: center
class: text-center
---

<SeriesOpening :film="1" />

<!--
Alla tre filmerna i den här serien börjar med samma fråga: vad händer när vi surfar till en webbsida?

Du skriver en adress, trycker Enter, och en tredjedels sekund senare är sidan där. Det är den resan vi ska packa upp, och vi behöver tre filmer på oss.

Den här första filmen handlar om webben och nätet: vem det är som svarar i andra änden, och hur vi över huvud taget hittar dit.
-->

---
layout: center
class: text-center
clicks: 3
---

<BrowserFrame
  :caret="$clicks < 1"
  :url="$clicks >= 1 ? 'https://lnu.se' : ''"
  :mock="$clicks >= 2 ? 'site' : ''"
  height="14rem"
  :caption="$clicks >= 2 ? 'ungefär 2 sekunder senare' : ($clicks >= 1 ? 'du trycker Enter …' : 'du skriver en adress …')"
/>

<div class="mt-8 h-20 flex items-center justify-center">
  <div v-if="$clicks >= 3" class="text-3xl font-semibold">
    <span class="inline-block" style="view-transition-name: fragan">Vad hände där emellan?</span>
  </div>
</div>

<!--
Låt oss börja med den bild du känner igen. En tom webbläsare, ett tomt adressfält och en markör som blinkar. Du har sett den tusentals gånger, och du vet precis vad du ska göra.

Under de kommande veckorna ska du lära dig att bygga det som dyker upp efter det. Men innan vi skriver en enda rad kod ska vi stanna kvar i det här ögonblicket, för det som händer sedan är faktiskt ganska anmärkningsvärt.

[click] Jag skriver adressen till Linnéuniversitetet och trycker Enter.

[click] Ungefär en tredjedels sekund senare är sidan där.

Det som hände däremellan är vad den här filmserien handlar om.
-->

---
clicks: 2
class: flex flex-col justify-center
---

<h1><span class="inline-block" style="view-transition-name: fragan">Vad hände där emellan?</span></h1>

<InternetBox v-click="1" :step="1" />

<div v-click="2" class="text-center text-lg">
<strong>Internet är inte en dator.</strong> Det är inte något som har webbsidor.
</div>

<!--
Vi börjar i det du redan vet.

[click] Här är din dator. Den är kopplad till något du säkert kallar internet, och just nu ritar jag det som en svart låda. Vi vet att den finns, vi vet att trafiken går igenom den, men vi ska inte titta in i den än.

Om jag frågade dig varifrån sidan kom skulle du förmodligen svara: från internet. De flesta skulle svara så.

[click] Men internet är inte en dator. Det är inte något som har webbsidor liggande. Något på andra sidan lådan måste ha haft den där sidan och skickat den till dig.

Och då har vi tre frågor att reda ut.
-->

---
layout: center
clicks: 2
---

# Två frågor

<QuestionTrail list :reveal="$clicks" />

<!--
[click] Först: varifrån kommer sidan? Vad är det för något på andra sidan lådan, och vad kallas det?

[click] Sedan: hur tar den sig till min webbläsare? Det finns oerhört många datorer där ute. Vad krävs för att ett meddelande ska hitta rätt bland dem?

Svarar vi på båda vet vi vem webbläsaren pratade med och hur den hittade dit. Lådan i mitten låter vi vara stängd — vad som händer inuti den är nästa films fråga.
-->

---
clicks: 3
class: flex flex-col justify-center
---

<QuestionTrail :active="1" />

# Varifrån kommer sidan?

<InternetBox v-click="1" :step="$clicks >= 2 ? 3 : 2" />

<div v-click="3" class="text-center text-gray-500 text-sm">
Klient och server är <strong>roller i ett samtal</strong> – inte två sorters maskiner.
</div>

<!--
[click] På andra sidan lådan står en bestämd dator. Inte internet i största allmänhet, utan en maskin som går att peka ut, och som kan stå i en annan stad eller ett annat land. På den kör ett program vars enda uppgift är att vänta på frågor och skicka tillbaka det som efterfrågas.

[click] De två rollerna har namn. Din webbläsare tar initiativet och frågar för din räkning: den kallas klient. Programmet som väntar och svarar kallas server.

[click] Lägg märke till att det är roller i ett samtal, inte två sorters maskiner. Ordet server används dessutom både om programmet och om datorn som kör det. En och samma serverdator kan köra flera serverprogram samtidigt: en webbserver, en e-postserver och annat.

Det viktiga just nu är rollerna. En frågar, en svarar.
-->

---
clicks: 3
class: flex flex-col justify-center
---

<QuestionTrail :active="1" />

# Begäran och svar

<InternetBox v-click="1" :step="$clicks >= 2 ? 5 : 4" />

<div v-click="3" class="text-center text-sm text-gray-500">
Formatet heter <strong>HTTP</strong> – och en enda sida blir oftast <strong>många</strong> frågor: HTML-dokumentet pekar vidare på CSS, bilder och typsnitt.
</div>

<!--
Samtalet har alltid samma form.

[click] Webbläsaren skickar en begäran: ge mig sidan kurser. Den går genom lådan, vad den nu innehåller.

[click] Servern skickar ett svar, antingen dokumentet eller ett besked om varför det inte gick. Servern hör aldrig av sig på eget initiativ, den svarar bara när den blir tillfrågad.

[click] Formatet för frågorna och svaren heter HTTP, och det är också det du ser i början av adressen. Vad som står i dem öppnar vi i film tre.

En viktig detalj: en enda sida är sällan en enda fråga. Dokumentet som kommer tillbaka pekar vidare på CSS-filer, bilder och typsnitt, och för var och en av dem måste webbläsaren fråga igen. Bakom en vanlig webbsida ligger ofta dussintals frågor och svar.

Där är fråga ett besvarad. Nästa fråga: hur hittade webbläsaren dit?
-->

---
clicks: 3
class: flex flex-col justify-center
---

<QuestionTrail :active="2" />

# IP-adressen

<InternetBox v-click="1" :step="$clicks" crowd />

<div v-click="3" class="text-center">
Genom lådan når du oerhört många datorer. En <strong>IP-adress</strong> pekar ut exakt en av dem.
</div>

<!--
Andra frågan: hur tar sig begäran till just den servern? Vi börjar med att se hur stort problemet är.

[click] Servern vi pratat om är inte ensam på andra sidan. Genom lådan når du oerhört många datorer — miljardtals, i praktiken. Vi behöver inte veta hur de är kopplade till varandra för att se problemet: hur pekar man ut en enda av dem?

[click] Genom att varje ansluten dator har en adress.

[click] Den kallas IP-adress, och den pekar ut exakt vilken dator som är mottagaren. Den på bilden är en IPv4-adress. Det finns också IPv6-adresser, som ser annorlunda ut och ger plats för många fler. Formaten behöver du inte lära dig nu.

När data skickas iväg står mottagarens IP-adress på den, så att den kan hitta fram. Lägg också märke till att en IP-adress inte är ett permanent namn på en fysisk maskin: flyttar en webbplats till en annan server får den en annan IP-adress. Adressen på bilden är förresten reserverad för dokumentation, den pekar inte på någon riktig server.

Nätverket adresserar alltså med nummer. Håll kvar det.
-->

---
layout: two-cols
layoutClass: gap-8
clicks: 3
---

<QuestionTrail :active="2" />

# Webbadressens delar

<AddressAnatomy v-click="1" :highlight="$clicks >= 2 ? 'domain' : ''" />

<div v-click="3" class="text-lg">

Ingen IP-adress någonstans. Bara ett **namn**.

</div>

::right::

<div v-click="1" class="mt-2 text-sm text-gray-500">

- **https://** – protokoll, hur vi frågar (film 3)
- **www.lnu.se** – domännamn, vem vi frågar
- **/kurser** – sökväg, vad vi vill ha

</div>

<!--
Låt oss då titta igen på det du faktiskt skrev.

[click] En webbadress, en URL, i flera delar. Först https, som talar om hur vi ska prata med den andra datorn. Det är ett protokoll, och vi återkommer till det i film tre. Sist en sökväg, som talar om vilken sida vi vill ha av alla sidor som finns där.

[click] Och i mitten domännamnet: www.lnu.se.

[click] Och där är problemet. Det står inget nummer här. Ingen IP-adress någonstans i adressen, bara ett namn. Domännamnet är dessutom ett namn och inte en plats: det säger ingenting om var servern finns, lika lite som mitt namn säger var jag bor.

Så hur går det ihop? Nätverket kan bara adressera med nummer, och jag skrev bara ett namn.
-->

---
clicks: 2
class: flex flex-col justify-center
---

<QuestionTrail :active="2" />

# Från namn till IP-adress

<DnsLookup v-click="1" :answered="$clicks >= 2" />

<div v-click="2" class="text-center">
<strong>DNS</strong> – Domain Name System – är uppslagningen som webbläsaren gör <em>innan</em> den skickar något.
</div>

<!--
Svaret är att det görs en översättning, innan något skickas.

[click] Domännamn är gjorda för människor: de går att komma ihåg, att säga högt och att trycka på en affisch. De kan dessutom vara desamma även när webbplatsen flyttar till en annan server. Men lådan kan bara adressera med IP-adresser.

[click] Alltså behövs en översättning, och den sköts av DNS, Domain Name System. Innan webbläsaren skickar något ställer den frågan: vilken IP-adress hör till det här namnet?

I verkligheten är DNS ett stort hierarkiskt system av servrar, och svaren sparas undan en tid så att frågan inte behöver ställas om varje gång. Den processen räcker det att känna igen. Modellen du behöver är: namn in, adress ut.
-->

---
clicks: 5
class: flex flex-col justify-center
---

<QuestionTrail :active="2" />

# Hela vägen

<InternetBox v-click="1" :step="$clicks >= 4 ? 5 : 4" />

<div class="max-w-2xl mx-auto space-y-1 text-left text-sm">
  <div v-click="2">1. Webbläsaren slår upp <code>www.lnu.se</code> hos <strong>DNS</strong> och får en <strong>IP-adress</strong>.</div>
  <div v-click="3">2. Webbläsaren skickar sin <strong>begäran</strong> till den adressen, genom lådan.</div>
  <div v-click="5">3. <strong>Servern svarar</strong>, och svaret kommer tillbaka samma väg.</div>
</div>

<!--
Nu har vi allt som behövs för att svara på fråga två.

[click] Bilden är densamma som förut.

[click] Webbläsaren slår upp domännamnet i adressen mot DNS och får tillbaka en IP-adress.

[click] Den skickar sedan sin begäran till servern på den adressen, genom lådan.

[click] Meddelandet går genom internet — och exakt hur det går till är nästa films fråga.

[click] Och servern svarar. Svaret kommer tillbaka samma väg.

Där är fråga två besvarad. Kvar är den fråga vi sköt upp.
-->

---
clicks: 2
class: flex flex-col justify-center
---

<QuestionTrail done />

# Internet och webben

<div v-click="1" class="grid grid-cols-2 gap-6 max-w-3xl mx-auto mt-2">
  <div class="p-4 border-2 border-slate-500 bg-slate-50 rounded-lg">
    <div class="font-bold text-lg">Internet</div>
    <ul class="mt-2 text-sm space-y-1">
      <li>infrastrukturen som transporterar data</li>
      <li>bär alla sorters trafik</li>
      <li>fanns i ett par decennier före webben</li>
    </ul>
  </div>
  <div class="p-4 border-2 border-blue-600 bg-blue-50 rounded-lg">
    <div class="font-bold text-lg">Webben</div>
    <ul class="mt-2 text-sm space-y-1">
      <li>en av tjänsterna som använder den</li>
      <li>webbadresser, HTTP, HTML och CSS</li>
      <li>tillkom kring 1990</li>
    </ul>
  </div>
</div>

<div v-click="2" class="mt-6 text-center text-lg">
Internet är <strong>vägnätet</strong>. Webben är <strong>en av verksamheterna</strong> som kör på det.
</div>

<!--
En sista sak, innan vi sammanfattar. Två ord används ofta som om de betydde samma sak, och det gör de inte.

Du sa förmodligen "internet" i början av filmen, om alltihop. De flesta gör det.

[click] Men lådan — det är Internet. Infrastrukturen som transporterar data, och som bär alla sorters trafik. Den fanns i ett par decennier innan webben ens var påtänkt. Det är svårt att hävda att två saker är samma sak när den ena är tjugo år äldre.

Webben är en av tjänsterna som använder den. Webbadresser, HTTP, och dokumenten som kommer tillbaka. Den tillkom kring 1990, när Tim Berners-Lee byggde ett enklare sätt att publicera och länka dokument ovanpå det som redan fanns.

Det du tittat på i den här filmen — begäran och svar, adresser, dokument — det är webben. Lådan de färdas igenom är Internet.

[click] E-post, videosamtal och onlinespel åker på samma infrastruktur utan att för den skull vara webben. Precis som samma vägnät används av bussar, lastbilar och privatbilar. Liknelsen är förenklad, men den duger för vårt syfte.

För kursen betyder det: HTML, CSS och HTTP hör till webben. IP och det som finns i lådan hör till Internet.
-->

---
layout: center
clicks: 1
---

<QuestionTrail done />

# Sammanfattning

<div v-click="1" class="grid grid-cols-2 gap-x-8 gap-y-4 max-w-3xl mx-auto mt-6 text-left">
  <div class="text-gray-500">Varifrån kommer sidan?</div>
  <div>Från ett <strong>webbserverprogram</strong> på en bestämd dator – rollerna heter <strong>klient</strong> och <strong>server</strong></div>
  <div class="text-gray-500">Hur tar den sig till min webbläsare?</div>
  <div><strong>DNS</strong> slår upp domännamnet till en <strong>IP-adress</strong>, begäran skickas dit genom lådan, och servern svarar</div>
</div>

<!--
[click] Varifrån kommer sidan? Från ett webbserverprogram på en bestämd dator någonstans. Rollerna heter klient och server.

Hur tar den sig till min webbläsare? DNS slår upp domännamnet till en IP-adress, begäran skickas dit genom lådan, och servern svarar.

Vad som händer inuti lådan har vi medvetet låtit vara. Det är nästa films fråga.
-->

---
layout: center
class: text-center
clicks: 1
---

<div class="w-[34rem] mx-auto">
  <InternetBox :step="5" />
</div>

<div class="mt-4 text-2xl font-semibold">
Hur tar sig meddelandet igenom lådan?
</div>

<div v-click="1" class="mt-6 text-gray-500">
<strong>Film 2:</strong> TCP och IP – vi öppnar lådan
<br />
<strong>Film 3:</strong> HTTP, HTML och CSS – vad som faktiskt står i begäran och svaret
</div>

<!--
Vi vet nu vem som svarar, hur vi hittar dit, och ungefär vad ordet internet betyder. Men vi har fortfarande behandlat själva transporten som en låda som bara fungerar.

Och den döljer en hel del. Meddelanden delas i praktiken upp i mindre paket, som kan ta olika vägar genom näten och komma fram i fel ordning. Och servern kan köra flera program samtidigt, så meddelandet måste hitta rätt bland dem också.

[click] Hur det löses är film två, där vi öppnar lådan på riktigt och går på djupet i TCP och IP.

I film tre öppnar vi själva innehållet: begäran och svaret, HTTP, HTML och CSS. Och där börjar det som du sedan ska arbeta praktiskt med under resten av kursen.

Vi ses i nästa film.
-->
