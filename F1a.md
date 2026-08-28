---
theme: seriph
title: Välkommen till webben
info: |
  ## Film 1 – Välkommen till webben
  Webbläsare, servrar och Internet.
  Vi utgår från en tom webbläsare och ställer två frågor till den.
drawings:
  persist: false
transition: fade-out
duration: 11min
layout: center
class: text-center
---

<BrowserFrame caret height="14rem" />

<div class="mt-8 text-sm uppercase tracking-widest text-gray-400">
  Webbteknik 1 · Film 1 av 3
</div>

<div class="mt-1 text-2xl font-semibold">Välkommen till webben</div>

<!--
Den här bilden känner du igen. En tom webbläsare, ett tomt adressfält och en markör som blinkar. Du har sett den tusentals gånger, och du vet precis vad du ska göra: skriva en adress och trycka Enter.

Under de kommande veckorna ska du lära dig att bygga det som dyker upp efter det. Men innan vi skriver en enda rad kod ska vi stanna kvar i det här ögonblicket, för det som händer sedan är faktiskt ganska anmärkningsvärt.

Låt oss skriva adressen.
-->

---
layout: center
class: text-center
clicks: 1
---

<BrowserFrame
  url="https://www.lnu.se"
  :mock="$clicks >= 1 ? 'site' : ''"
  height="14rem"
  :caption="$clicks >= 1 ? 'ungefär 0,3 sekunder senare' : 'du trycker Enter …'"
/>

<div class="mt-8 text-3xl font-semibold" v-if="$clicks >= 1">
  Vad hände där emellan?
</div>

<!--
Jag skriver adressen till Linnéuniversitetet och trycker Enter.

Ungefär en tredjedels sekund senare är sidan där.

Det som hände däremellan är vad den här filmserien handlar om. Din dator hittade en helt annan dator, som kan stå i en annan stad eller ett annat land, bad den om ett dokument, fick tillbaka det och ritade upp det på skärmen. Ingen av de delarna är magi, men de är inte heller självklara.

Vi ska packa upp det steg för steg. Och som du snart ska se räcker det med två frågor för att förstå hela den resan.
-->

---
layout: two-cols
layoutClass: gap-8
clicks: 2
---

# Om några veckor sitter du på andra sidan

<div v-click="1">

Det som visas i fönstret är i grunden text som någon har skrivit:

- **HTML** beskriver vad innehållet **är**
- **CSS** beskriver hur det ska **se ut**

I den här kursen är det du som skriver den texten.

```html
<h1>Min första webbsida</h1>
<p>Det här är innehållet
   som du själv har skrivit.</p>
```

</div>

::right::

<div v-click="2" class="mt-16">
  <BrowserFrame url="https://min-sida.se" mock="simple" height="9rem" small />
</div>

<div v-click="2" class="mt-6 text-sm text-gray-500 text-center">
Från den som skriver i adressfältet<br />till den som svarar.
</div>

<!--
En sak ska sägas direkt om kursen. Det du ser i fönstret är i grunden text som någon har skrivit. HTML beskriver vad innehållet är: att det här är en rubrik och det där ett stycke. CSS beskriver hur det ska presenteras, med färger, avstånd och layout.

I den här kursen är det du som skriver den texten. Du går från att vara den som skriver i adressfältet till att vara den som svarar.

Och då behöver du veta två saker: varifrån ett sådant dokument kommer, och hur det tar sig hela vägen till någons skärm. Låt oss ställa precis de frågorna till den tomma webbläsaren.
-->

---
layout: center
clicks: 1
---

# Två frågor till den tomma webbläsaren

<div v-click="1">

<QuestionTrail list />

<div class="mt-10 text-sm text-gray-500 text-center">
Svaren på de här två frågorna är den här filmen.
</div>

</div>

<!--
Vi ställer två frågor till den tomma webbläsaren.

Först: varifrån kommer sidan som dyker upp? Vem eller vad är det som svarar, och var finns den?

Sedan: hur tar den sig hela vägen till just min webbläsare? Vad krävs för att ett meddelande ska hitta rätt bland alla världens datorer?

Svarar vi på båda vet vi exakt vilken dator webbläsaren pratade med och hur den hittade dit. Vad som faktiskt stod i meddelandena, HTTP, HTML och CSS, tittar vi på i film tre.

Första frågan: varifrån kommer sidan?
-->

---
clicks: 2
class: flex flex-col justify-center
---

<QuestionTrail :active="1" />

# Vem är det som svarar?

<ClientServerDiagram v-click="1" focus="roles" />

<div v-click="2" class="text-center text-gray-500 text-sm">
Klient och server är <strong>roller i ett samtal</strong> – inte två sorters maskiner.
</div>

<!--
Låt oss börja med vem som svarar. I andra änden sitter ingen människa som väntar på dig, utan ett program. Ett webbserverprogram, vars enda uppgift är att vänta på frågor och skicka tillbaka det som efterfrågas.

Webbläsaren, som tar initiativet och frågar för din räkning, kallas klient.

Klient och server är alltså roller i ett samtal, inte två bestämda sorters maskiner. Ordet server används dessutom både om programmet och om datorn som kör det. En och samma serverdator kan mycket väl köra flera serverprogram samtidigt: en webbserver, en e-postserver och annat.

Det viktiga just nu är rollerna. En frågar, en svarar.
-->

---
clicks: 2
class: flex flex-col justify-center
---

<QuestionTrail :active="1" />

# Webben är frågor och svar

<ClientServerDiagram v-click="1" focus="exchange" />

<div v-click="2">

Formatet för frågorna och svaren heter **HTTP** – och en enda sida blir oftast **många** frågor: HTML-dokumentet pekar vidare på CSS, bilder och typsnitt.

</div>

<!--
Samtalet har alltid samma form: en begäran och ett svar.

Webbläsaren skickar en begäran: ge mig sidan kurser. Servern skickar ett svar, antingen dokumentet eller ett besked om varför det inte gick. Servern hör aldrig av sig på eget initiativ, den svarar bara när den blir tillfrågad.

Formatet för frågorna och svaren heter HTTP, och det är också det du ser i början av adressen.

En viktig detalj: en enda sida är sällan en enda fråga. Dokumentet som kommer tillbaka pekar vidare på CSS-filer, bilder och typsnitt, och för var och en av dem måste webbläsaren fråga igen. Bakom en vanlig webbsida ligger ofta dussintals frågor och svar. Vi öppnar en riktig HTTP-begäran i film tre.
-->

---
clicks: 2
class: flex flex-col justify-center
---

<QuestionTrail :active="1" />

# Var finns servern?

<NetworkOfNetworks v-click="1" focus="overview" />

<div v-click="2" class="text-center">
<strong>Internet</strong> = <em>internetworking</em>: nätverk som är sammankopplade med andra nätverk.
Det finns ingen central Internet-dator.
</div>

<!--
Vi vet nu vem som svarar. Men var finns den? Nästan aldrig i ditt hus. Den står i ett datacenter någonstans, och mellan er finns Internet.

Ordet Internet kommer från internetworking, sammankoppling av nätverk, och det är precis vad det är. Din dator sitter i ett litet nätverk hemma eller på universitetet. Det nätverket är kopplat till din internetleverantörs nätverk, som är kopplat till fler nätverk, som till slut är kopplade till det nätverk där servern står.

Lägg märke till att det inte finns någon central Internet-dator på bilden, och ingen som äger alltihop. Det hela fungerar därför att alla anslutna nätverk följer samma spelregler för hur data skickas vidare.
-->

---
clicks: 2
class: flex flex-col justify-center
---

<QuestionTrail :active="1" />

# Ut ur ditt eget nätverk

<LocalNetwork v-click="1" focus="gateway" />

<div v-click="2" class="text-sm text-gray-500">
<strong>LAN</strong> lokalt nätverk · <strong>router</strong> kopplar ihop nätverk · <strong>gateway</strong> vägen ut · <strong>WAN</strong> nätverk över större områden
<br />
Begrepp att känna igen – inte att memorera nu.
</div>

<!--
Zoomar vi in på din ände av bilden ser det ut så här.

Ditt lokala nätverk kallas ett LAN, local area network. Det är datorn, mobilen och skrivaren hemma, eller nätet på universitetet. För att nå något utanför måste trafiken passera en router. Routern kopplar ihop nätverk och avgör vart trafiken ska skickas vidare.

Vägen ut ur ett nätverk kallas gateway, och hemma sitter den funktionen oftast i samma låda som routern. Du kommer också att höra ordet WAN, om nätverk över större geografiska områden.

De här orden behöver du bara känna igen. Poängen är enkel: din data måste lämna ditt eget nätverk för att nå servern.
-->

---
clicks: 2
class: flex flex-col justify-center
---

# Varför ser det ut så här?

<Timeline v-click="1" />

<div v-click="2" class="mt-6 text-center">
Man byggde inte om alla nätverk till ett enda. Man kom överens om <strong>gemensamma protokoll</strong> så att olika nätverk kunde prata med varandra.
</div>

<!--
Varför byggdes det på det här sättet? Väldigt kort historik.

På sextiotalet var datorer dyra och sällsynta, och man började koppla ihop dem för att kunna dela på dem. Problemet var att nätverken byggdes på olika sätt och inte förstod varandra.

Lösningen på sjuttiotalet var inte att bygga om alla nätverk till ett enda stort. Man kom i stället överens om gemensamma protokoll, alltså regler för hur data ska skickas, så att olika slags nätverk kunde lämna över data till varandra. Där föddes idén om ett nätverk av nätverk.

Under åttiotalet växte det här, framför allt inom forskning och större organisationer.

Och först kring 1990 kom webben, när Tim Berners-Lee byggde ett enklare sätt att publicera och länka dokument ovanpå den infrastruktur som redan fanns.
-->

---
clicks: 2
class: flex flex-col justify-center
---

# Därför är webben inte samma sak som Internet

<div v-click="1">

| Internet | Webben |
|---|---|
| infrastrukturen som kopplar ihop nätverk | en tjänst som använder infrastrukturen |
| transporterar alla sorters data | webbadresser, HTTP, HTML och CSS |
| fanns långt före webben | tillkom kring 1990 |

</div>

<div v-click="2" class="mt-6 text-center text-lg">
Internet är <strong>vägnätet</strong>. Webben är <strong>en av verksamheterna</strong> som kör på det.
</div>

<!--
Det leder fram till en skillnad som är värd att ha klar för sig, eftersom orden ofta används som om de betydde samma sak.

Internet fanns i ett par decennier innan webben. Internet är infrastrukturen som transporterar data mellan nätverk. Webben är en av tjänsterna som använder den: dokument med webbadresser, hämtade med HTTP.

E-post, videosamtal och onlinespel åker på samma infrastruktur utan att för den skull vara webben. Precis som samma vägnät används av bussar, lastbilar och privatbilar. Liknelsen är förenklad, men den duger för vårt syfte.

För kursen betyder det: HTML, CSS och HTTP hör till webben. IP och nätverken under hör till Internet.
-->

---
clicks: 2
class: flex flex-col justify-center
---

<QuestionTrail :active="2" />

# Vi vet varifrån sidan kommer

<div v-click="1">

Ett **webbserverprogram**, som svarar på begäranden – och som körs på en dator någonstans ute i **nätverket av nätverk** som är Internet.

</div>

<div v-click="2" class="mt-6 text-center text-lg">
Men hur skickar vi ens ett meddelande dit? Det är nästa fråga.
</div>

<!--
Nu vet vi varifrån sidan kommer: ett webbserverprogram, som svarar när det blir tillfrågat, och som körs någonstans ute bland alla de sammankopplade nätverk vi kallar Internet.

Kvar är den andra frågan: hur tar sig frågan dit, och svaret tillbaka? Det är dags att skicka något genom de här näten. Och för det behövs en adress.
-->

---
layout: two-cols
layoutClass: gap-8
clicks: 3
---

<QuestionTrail :active="2" />

# Vad var det du skrev, egentligen?

<AddressAnatomy v-click="1" :highlight="$clicks >= 2 ? 'domain' : ''" />

<div v-click="3" class="text-lg">

Domännamnet är ett **namn** – inte en plats.

</div>

::right::

<div v-click="1" class="mt-2 text-sm text-gray-500">

- **https://** – protokoll, hur vi frågar (film 3)
- **www.lnu.se** – domännamn, vem vi frågar
- **/kurser** – sökväg, vad vi vill ha

</div>

<!--
Innan vi skickar något, låt oss titta igen på det du faktiskt skrev. En webbadress, en URL, i flera delar.

Först https, som talar om hur vi ska prata med den andra datorn. Det är ett protokoll, och vi återkommer till det i film tre. Sist en sökväg, som talar om vilken sida vi vill ha av alla sidor som finns där. Och i mitten domännamnet: www.lnu.se.

Lägg märke till en sak: domännamnet är ett namn, inte en plats. Det står ingenstans i adressen var servern finns, lika lite som mitt namn säger var jag bor. Kom ihåg det.
-->

---
clicks: 1
class: flex flex-col justify-center
---

<QuestionTrail :active="2" />

# Hur hittar vi rätt dator?

<div v-click="1">

Nätverket bryr sig inte om namn. Varje ansluten dator behöver en adress i nätverket – en **IP-adress**:

```text
203.0.113.42
```

- adressen pekar ut exakt vilken dator på Internet som är mottagaren
- adressen hör till en anslutning, inte till en viss maskin för alltid
- exemplet ovan är reserverat för dokumentation och pekar inte på någon riktig server

</div>

<!--
Nätverket däremot bryr sig inte om namn. Varje ansluten dator behöver en adress, och den kallas IP-adress. Den på bilden är en IPv4-adress. Det finns också IPv6-adresser, som ser annorlunda ut och ger plats för många fler. Formaten behöver du inte lära dig nu.

Funktionen är det viktiga. När data skickas iväg står mottagarens IP-adress på den, så att den kan hitta fram till exakt rätt dator. Precis hur den hittar dit genom alla nätverk är nästa films fråga.

Lägg också märke till att en IP-adress inte är ett permanent namn på en fysisk maskin. Flyttar en webbplats till en annan server får den en annan IP-adress.

Men titta tillbaka på adressen vi skrev. Det stod inget nummer där. Bara ett namn.
-->

---
clicks: 2
class: flex flex-col justify-center
---

<QuestionTrail :active="2" />

# Men jag skrev ju inget nummer

<DnsLookup v-click="1" :answered="$clicks >= 2" />

<div v-click="2" class="text-center">
<strong>DNS</strong> – Domain Name System – är uppslagningen som webbläsaren gör <em>innan</em> den skickar något.
</div>

<!--
Jag skrev ju aldrig något nummer. Jag skrev www.lnu.se.

Domännamn är gjorda för människor: de går att komma ihåg, att säga högt och att trycka på en affisch. De kan dessutom vara desamma även när webbplatsen flyttar till en annan server. Men nätverket kan bara adressera med IP-adresser.

Alltså behövs en översättning, och den sköts av DNS, Domain Name System. Innan webbläsaren skickar något ställer den frågan: vilken IP-adress hör till det här namnet?

I verkligheten är DNS ett stort hierarkiskt system av servrar, och svaren sparas undan en tid så att frågan inte behöver ställas om varje gång. Den processen räcker det att känna igen. Modellen du behöver är: namn in, adress ut.

Nu har vi allt som behövs för att svara på hur frågan hittar fram.
-->

---
layout: center
clicks: 5
---

<QuestionTrail :active="2" />

# Så tar sig frågan till servern

<NetworkOfNetworks v-click="1" focus="path" />

<div class="max-w-2xl mx-auto mt-6 space-y-2 text-left">
  <div v-click="2">1. Webbläsaren slår upp <code>www.lnu.se</code> hos <strong>DNS</strong> och får tillbaka en <strong>IP-adress</strong>.</div>
  <div v-click="3">2. Webbläsaren skickar ett meddelande – en <strong>begäran</strong> – till den adressen.</div>
  <div v-click="4">3. Meddelandet skickas från min dator, via Internet, till servern.</div>
  <div v-click="5">4. <strong>Servern svarar.</strong></div>
</div>

<!--
Nu har vi allt som behövs för att svara på båda frågorna på en gång.

Webbläsaren slår upp domännamnet i URLen mot DNS och får tillbaka en IP-adress.

Den skickar sedan ett meddelande, en begäran, till servern på den adressen.

Meddelandet skickas från min dator, via Internet, till servern.

Och servern svarar.

Det är ett bra ställe att landa den här filmen på. Precis hur meddelandet hittar rätt väg genom alla de där nätverken, delas upp och sätts ihop igen utan att gå förlorat, är nästa films fråga.
-->

---
layout: center
clicks: 1
---

<QuestionTrail done />

# Tillbaka till den tomma webbläsaren

<div v-click="1" class="grid grid-cols-2 gap-x-8 gap-y-4 max-w-3xl mx-auto mt-6 text-left">
  <div class="text-gray-500">Varifrån kommer sidan?</div>
  <div>Ett <strong>webbserverprogram</strong>, någonstans i <strong>nätverket av nätverk</strong></div>
  <div class="text-gray-500">Hur tar den sig till min webbläsare?</div>
  <div><strong>DNS</strong> slår upp namnet till en <strong>IP-adress</strong>, och begäran skickas via Internet fram till servern, som svarar</div>
</div>

<!--
Nu kan vi gå tillbaka till den tomma webbläsaren och besvara båda frågorna.

Varifrån kommer sidan? Från ett webbserverprogram, som väntar på begäranden och skickar svar, och som körs någonstans ute i nätverket av nätverk vi kallar Internet.

Hur tar den sig till min webbläsare? Domännamnet slås upp av DNS till en IP-adress, webbläsaren skickar sin begäran dit, och meddelandet skickas via Internet till servern, som svarar.

Det är där vi står nu. Webbläsaren vet vilken server den pratar med, och frågan har hittat fram.
-->

---
layout: center
class: text-center
clicks: 1
---

<BrowserFrame url="https://www.lnu.se" height="6.5rem" caption="frågan hittade fram och servern svarade — men vi vet inte hur, i detalj" small />

<div class="mt-8 text-2xl font-semibold">
Hur säkerställs att meddelandet verkligen kommer helt fram?
</div>

<div v-click="1" class="mt-6 text-gray-500">
<strong>Film 2:</strong> TCP och IP – hur data delas upp, skickas och sätts ihop igen
<br />
<strong>Film 3:</strong> HTTP, HTML och CSS – vad som faktiskt står i begäran och svaret
</div>

<!--
"Skickas via Internet" döljer en hel del. Meddelanden delas i praktiken upp i mindre paket, som skickas vidare av routrar och kan ta olika vägar genom näten och komma fram i fel ordning. Och servern kan köra flera program samtidigt, så meddelandet måste hitta rätt bland dem också.

Hur det löses är film två, där vi går på djupet i TCP och IP.

I film tre öppnar vi själva innehållet: begäran och svaret, HTTP, HTML och CSS. Och där börjar det som du sedan ska arbeta praktiskt med under resten av kursen.

Vi ses i nästa film.
-->
