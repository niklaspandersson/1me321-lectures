---
theme: seriph
title: Från adress till webbsida
info: |
  ## Film 1 – Från adress till webbsida
  Adressen du skriver rymmer två uppgifter: hitta rätt dator, och prata med den.
  Filmen svarar på båda, och lämnar transporten till film 2.
drawings:
  persist: false
# view-transition krävs för att frågan ska morfa till rubriken på nästa bild.
# Det här blocket är både deckets config och första bildens frontmatter, så
# övergången måste sättas här för att gälla från bild 1.
transition: view-transition
duration: 13min
layout: center
class: text-center
---

<SeriesOpening :film="1" />

<!--
Båda filmerna i den här serien börjar med samma fråga: vad händer när vi surfar till en webbsida?

Du skriver en adress, trycker Enter, och två sekunder senare är sidan där. Det är den resan vi ska packa upp, och vi behöver två filmer på oss.

Den här första filmen handlar om samtalet: vem det är som svarar i andra änden, hur vi hittar dit, och vad som faktiskt sägs. Film två handlar om transporten däremellan.
-->

---
layout: center
class: text-center
clicks: 3
---

<BrowserFrame
  :caret="$clicks < 1"
  :url="$clicks >= 1 ? 'https://lnu.se/student' : ''"
  :mock="$clicks >= 2 ? './assets/lnu-student.jpeg' : ''"
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

[click] Det som hände däremellan är vad den här filmserien handlar om.
-->

---
clicks: 3
class: flex flex-col justify-center
---

<h1><span class="inline-block" style="view-transition-name: fragan">Vad hände där emellan?</span></h1>

<AddressAnatomy v-click="1" :legend="$clicks >= 2" />

<div v-click="3" class="grid grid-cols-2 gap-6 max-w-3xl mx-auto mt-4">
  <div class="p-3 border-2 border-blue-600 bg-blue-50 rounded-lg text-center">
    <div class="font-bold">1. Hitta datorn</div>
    <div class="text-sm text-gray-600 mt-1"><code>lnu.se</code></div>
  </div>
  <div class="p-3 border-2 border-emerald-600 bg-emerald-50 rounded-lg text-center">
    <div class="font-bold">2. Prata med den</div>
    <div class="text-sm text-gray-600 mt-1"><code>https://</code> och <code>/student</code></div>
  </div>
</div>

<!--
Svaret börjar inte med något nytt. Det börjar med det du själv skrev.

[click] Det här är en webbadress, en URL. Det enda du gjorde var att skriva den och trycka Enter, och ändå räckte den för att en dator någonstans skulle skicka tillbaka en hel sida.

[click] Den består av tre delar, och var och en av dem är egentligen en fråga. Först https, som säger hur vi ska prata med den andra datorn. Sedan lnu.se, som säger vem vi ska prata med. Och sist en sökväg, /student, som säger vad vi vill ha av allt som finns där.

Hur vi frågar, vem vi frågar, vad vi vill ha. Tre delar, tre frågor. Och när vi har svarat på alla tre vet vi vad som hände.

[click] I praktiken är det två uppgifter som ska utföras. Först måste webbläsaren hitta rätt dator, och där är det lnu.se som gäller. Sedan ska den prata med den datorn, och där är det https och sökvägen som gäller.

Vi tar dem i den ordningen, för man kan inte prata med någon förrän man hittat dem. Uppe i hörnet kommer adressen ligga kvar genom hela filmen, så att du hela tiden ser vilken del vi håller på med.

Vi börjar med att hitta datorn.
-->

---
clicks: 4
class: flex flex-col justify-center
---

<AddressTrail active="domain" />

# Vem är `lnu.se`?

<InternetBox v-click="1" :step="$clicks - 1" />

<div v-click="4" class="text-center text-gray-500 text-sm">
Klient och server är <strong>roller i ett samtal</strong> – inte två sorters maskiner.
</div>

<!--
Vi börjar i det du redan vet.

[click] Här är din dator.

[click] Den är kopplad till internet. Just nu ritar jag internet som en sluten fyrkant, för vi ska inte titta in i det än. Vi vet att det finns, och vi vet att trafiken går igenom det.

Om jag frågade dig varifrån sidan kom skulle du förmodligen svara: från internet. De flesta skulle svara så.

Men internet är inte en dator. Det är inte något som har webbsidor liggande. Något på andra sidan måste ha haft den där sidan och skickat den till dig.

[click] Och det är precis vad lnu.se betyder. Det pekar ut en bestämd dator. Inte internet i största allmänhet, utan en maskin som går att peka ut, och som kan stå i en annan stad eller ett annat land. På den kör ett program vars enda uppgift är att vänta på frågor och skicka tillbaka det som efterfrågas.

[click] De två rollerna har namn. Din webbläsare tar initiativet och frågar för din räkning: den kallas klient. Programmet som väntar och svarar kallas server.

Lägg märke till att det är roller i ett samtal, inte två sorters maskiner. Ordet server används dessutom både om programmet och om datorn som kör det. En och samma serverdator kan köra flera serverprogram samtidigt: en webbserver, en e-postserver och annat.

Det viktiga just nu är rollerna. En är aktiv och frågar, en är passiv och svarar.
-->

---
clicks: 2
class: flex flex-col justify-center
---

<AddressTrail active="domain" />

# IP-adressen

<InternetCrowd :step="$clicks" />

<div v-click="1" class="text-center">
Genom internet når du oerhört många datorer. <span v-click="2"> En <strong>IP-adress</strong> pekar ut exakt en av dem.</span>
</div>

<!--
Nu vet vi att det finns en bestämd dator på andra sidan. Men hur pekar man ut den? Här är klienten och servern vi pratat om. Vi börjar med att se hur stort problemet är.

[click] Servern är nämligen inte ensam på andra sidan. Genom internet når du oerhört många datorer — miljardtals, i praktiken. Vi behöver inte veta hur de är kopplade till varandra för att se problemet: hur pekar man ut en enda av dem?

[click] Genom att varje ansluten dator har en adress. Den kallas IP-adress, och den pekar ut exakt vilken dator som är mottagaren. Den på bilden är en IPv4-adress. Det finns också IPv6-adresser, som ser annorlunda ut och ger plats för många fler. Formaten behöver du inte lära dig nu.

När data skickas iväg står mottagarens IP-adress på den, så att den kan hitta fram. Lägg också märke till att en IP-adress inte är ett permanent namn på en fysisk maskin: flyttar en webbplats till en annan server får den en annan IP-adress. Adressen på bilden är förresten reserverad för dokumentation, den pekar inte på någon riktig server.
-->

---
clicks: 2
class: flex flex-col justify-center
---

<AddressTrail active="domain" />

# Men det står ju inget nummer

<AddressAnatomy legend :highlight="$clicks >= 1 ? 'domain' : ''" />

<div v-click="2" class="text-center text-lg">

Nätverket adresserar med **nummer**. Du skrev ett **namn**.

</div>

<!--
Då går vi tillbaka till adressen, och tittar på delen vi håller på med.

[click] Det här är vem vi frågar. Och där är problemet: det står inget nummer här. Ingen IP-adress någonstans i adressen, bara ett namn.

Domännamnet är dessutom ett namn och inte en plats. Det säger ingenting om var servern finns, lika lite som mitt namn säger var jag bor.

[click] Så hur går det ihop? Nätverket kan bara adressera med nummer, och du skrev bara ett namn. Något måste översätta.
-->

---
clicks: 2
class: flex flex-col justify-center
---

<AddressTrail active="domain" />

# Från namn till IP-adress

<DnsLookup v-click="1" :step="$clicks >= 2 ? 1 : 0" />

<div v-click="2" class="text-center">
<strong>DNS</strong> – Domain Name System – är uppslagningen som görs <em>innan</em> något kan skickas till servern.
</div>

<!--
Svaret är att det görs en översättning, innan något skickas.

[click] Domännamn är gjorda för människor: de går att komma ihåg, att säga högt och att trycka på en affisch. De kan dessutom vara desamma även när webbplatsen flyttar till en annan server. Men nätverket kan bara adressera med IP-adresser.

[click] Alltså behövs en översättning, och den sköts av DNS, Domain Name System. Innan webbläsaren skickar något ställer den frågan: vilken IP-adress hör till det här namnet?

I verkligheten är DNS ett stort hierarkiskt system av servrar, och svaren sparas undan en tid så att frågan inte behöver ställas om varje gång. Den processen räcker det att känna igen. Modellen du behöver är: namn in, adress ut.

Och därmed är den första uppgiften klar. Vi har hittat datorn.
-->

---
clicks: 3
class: flex flex-col justify-center
---

<AddressTrail :done="['domain']" active="protocol" />

# Begäran och svar

<InternetBox :step="$clicks + 3" />

<div v-click="3" class="text-center text-sm text-gray-500">
Reglerna för hur frågan och svaret ska se ut heter <strong>HTTP</strong> – och det är precis det som står först i adressen.
</div>

<!--
Nu vet webbläsaren vilken dator den ska prata med. Då är det dags för den andra uppgiften: att faktiskt prata med den.

[click] Webbläsaren skickar en begäran: ge mig sidan student. Den går genom internet, till IP-adressen vi just slog upp.

[click] Servern skickar ett svar, antingen det som efterfrågades eller ett besked om varför det inte gick. Och lägg märke till en sak: servern hör aldrig av sig på eget initiativ. Den svarar bara när den blir tillfrågad.

[click] Men för att det här ska fungera måste båda parter vara överens om hur en fråga ser ut och hur ett svar ser ut. Servern vet ju inte vem som ringer. Det kan vara vilken webbläsare som helst, på vilken sorts dator som helst, någonstans i världen.

Därför finns det ett regelverk. Det heter HTTP, HyperText Transfer Protocol, och ett sådant regelverk kallas ett protokoll. Det är precis det som står först i adressen: https, alltså HTTP med kryptering.

Så nu vet vi vad delen "hur vi frågar" betyder. Låt oss titta på vad som faktiskt står i en begäran.
-->

---
clicks: 4
class: flex flex-col justify-center
---

<AddressTrail :done="['domain']" :active="['protocol', 'path']" />

# Vad står det i begäran?

<HttpExchange v-click="1" :step="$clicks - 1" />

<!--
Det här är hela grejen. En HTTP-begäran är inte mer mystisk än några rader text.

[click] Så här ser den ut. Det är faktiskt allt webbläsaren skickar när den ber om sidan.

[click] Först en metod: GET. Den säger vad vi vill göra, och GET betyder hämta. Det finns fler metoder — POST använder man till exempel när man skickar in ett formulär — men GET är den absolut vanligaste, och det är den din webbläsare använder varje gång du bara vill se en sida.

[click] Sedan sökvägen: /student. Känner du igen den? Det är sista delen av adressen du skrev, ordagrant. Den säger vilken resurs vi vill ha av allt som finns på servern.

[click] Och så en rad som säger Host: lnu.se. Det är domännamnet, också det ordagrant från adressen. Man kan tycka att det är överflödigt — vi har ju redan slagit upp adressen och kopplat upp oss mot rätt dator. Men en och samma server kan vara värd för många olika webbplatser samtidigt, på samma IP-adress. Host-raden säger vilken av dem vi menar.

Titta på vad som hände här. Två av tre delar av adressen du skrev står ordagrant i begäran, och den tredje avgjorde vart den skickades. Adressen var hela tiden en instruktion.
-->

---
clicks: 4
class: flex flex-col justify-center
---

<AddressTrail :done="['domain']" active="protocol" />

# Och vad står det i svaret?

<HttpExchange :step="$clicks >= 4 ? 6 : $clicks + 3" />

<div v-click="3" class="text-center text-sm text-gray-500">
<strong>200</strong> betyder att det gick bra. <strong>404</strong> – att resursen inte finns – har du sett själv.
</div>

<!--
Svaret har samma form: några rader text, och sedan innehållet.

[click] Här är det. Överst en statuskod.

[click] 200 OK betyder att det gick bra och att det du bad om följer med. Statuskoden är serverns korta besked om hur det gick, innan du ens tittar på innehållet.

[click] Du har garanterat sett en annan: 404, som betyder att resursen inte finns. Och kanske 500, som betyder att något gick fel inne i servern. De är inte felmeddelanden från webbläsaren — de kommer från servern, i den här raden.

Sedan står det vad för slags innehåll som följer: text/html. Och efter det kommer själva innehållet.

[click] Och där är det. Ett HTML-dokument. Det är alltså inte en bild av en sida som kommer tillbaka, och inte en färdig sida heller — det är ett textdokument som beskriver innehållet och strukturen. HTML är det första du kommer att lära dig skriva i den här kursen, och nu vet du var i resan det dyker upp.

Webbläsarens uppgift är sedan att läsa det dokumentet och rita upp det på skärmen.
-->

---
clicks: 2
class: flex flex-col justify-center
---

<AddressTrail :done="['domain', 'protocol']" active="path" />

# En sida är många begäranden

<ResourceFanout :step="$clicks" />

<div v-click="2" class="text-center text-sm text-gray-500">
Bakom en vanlig webbsida ligger ofta <strong>dussintals</strong> begäranden och svar.
</div>

<!--
En sista sak om samtalet, och den är viktigare än den låter.

När webbläsaren läser HTML-dokumentet hittar den referenser till andra saker.

[click] Där står att sidan använder en stilmall. Där står att det ska finnas en bild. Där står att ett skript ska laddas. Men innehållet i dem finns inte i dokumentet — bara sökvägar till dem.

[click] Så webbläsaren får fråga igen. Och igen. Varje referens blir en ny begäran, med en ny sökväg, till samma server eller till en annan.

Titta på sökvägarna. Det är samma sorts sökväg som /student, den delen av adressen vi tittade på nyss. Allting på webben har en adress, inte bara sidor.

Det betyder att när du öppnade lnu.se skickades inte en begäran. Det skickades kanske femtio, på under en sekund, och sidan byggdes upp allteftersom svaren kom tillbaka.

Och det är också därför den där stilmallen är intressant. CSS, som bestämmer hur sidan ser ut, är en helt egen fil som hämtas för sig. HTML och CSS är det du ska börja bygga i den här kursen, och nu vet du precis hur de tar sig till en webbläsare.
-->

---
clicks: 2
class: flex flex-col justify-center
---

<AddressTrail done />

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
Innan vi sammanfattar ska vi reda ut två ord som ofta används som om de betydde samma sak. Det gör de inte.

Du sa förmodligen "internet" i början av filmen, om alltihop. De flesta gör det.

[click] Men internet är infrastrukturen. Det som transporterar data, och som bär alla sorters trafik. Det fanns i ett par decennier innan webben ens var påtänkt. Det är svårt att hävda att två saker är samma sak när den ena är tjugo år äldre.

Webben är en av tjänsterna som använder den. Webbadresser, HTTP, och dokumenten som kommer tillbaka. Den tillkom kring 1990, när Tim Berners-Lee byggde ett enklare sätt att publicera och länka dokument ovanpå det som redan fanns.

Och nu kan du placera allt du sett i den här filmen. Adressen, begäran och svaret, statuskoden, HTML-dokumentet — det är webben. Det de färdas igenom är Internet.

[click] E-post, videosamtal och onlinespel åker på samma infrastruktur utan att för den skull vara webben. Precis som samma vägnät används av bussar, lastbilar och privatbilar. Liknelsen är förenklad, men den duger för vårt syfte.

För kursen betyder det: HTML, CSS och HTTP hör till webben. IP och transporten hör till Internet.
-->

---
clicks: 3
class: flex flex-col justify-center
---

<AddressTrail done />

# Adressen, del för del

<div class="max-w-4xl mx-auto mt-4 space-y-3 text-left">
  <div v-click="1" class="flex items-baseline gap-4">
    <code class="text-xl font-bold text-blue-700 w-32 shrink-0">lnu.se</code>
    <div><strong>Vem vi frågar.</strong> <strong>DNS</strong> översätter namnet till en <strong>IP-adress</strong>, som pekar ut en bestämd dator bland miljardtals. Där kör ett <strong>serverprogram</strong>.</div>
  </div>
  <div v-click="2" class="flex items-baseline gap-4">
    <code class="text-xl font-bold text-blue-700 w-32 shrink-0">https://</code>
    <div><strong>Hur vi frågar.</strong> <strong>HTTP</strong> är reglerna för samtalet: webbläsaren som <strong>klient</strong> skickar en <strong>begäran</strong>, servern skickar ett <strong>svar</strong> med en statuskod.</div>
  </div>
  <div v-click="3" class="flex items-baseline gap-4">
    <code class="text-xl font-bold text-blue-700 w-32 shrink-0">/student</code>
    <div><strong>Vad vi vill ha.</strong> Sökvägen till en <strong>resurs</strong>. Svaret är ett <strong>HTML-dokument</strong> som pekar vidare på fler resurser – därför blir en sida många begäranden.</div>
  </div>
</div>

<!--
Så: hela filmen ligger i adressen du skrev.

[click] lnu.se — vem vi frågar. DNS översätter namnet till en IP-adress, som pekar ut en bestämd dator bland miljardtals. På den kör ett serverprogram som väntar på frågor.

[click] https — hur vi frågar. HTTP är reglerna för samtalet. Din webbläsare är klienten och skickar en begäran; servern skickar ett svar, med en statuskod som säger hur det gick.

[click] /student — vad vi vill ha. Sökvägen till en bestämd resurs. Svaret var ett HTML-dokument, och det pekade vidare på stilmallar, bilder och skript, som var och en krävde en ny begäran.

Tre delar i en adress, och du kan förklara alla tre.
-->

---
layout: center
class: text-center
clicks: 1
---

<div class="w-[34rem] mx-auto">
  <InternetBox :step="5" />
</div>

<div class="mt-4 h-10 flex items-center justify-center">
  <div v-if="$clicks >= 1" class="text-2xl font-semibold">
    Hur tar sig meddelanden genom internet?
  </div>
</div>

<!--
Men det finns en sak vi har fuskat med hela filmen igenom.

Varje gång något skickades sa jag "genom internet", och så ritade jag en fyrkant. Begäran gick in på ena sidan och kom ut på den andra. Hur den bar sig åt har vi inte sagt ett ord om.

Och det döljer en hel del. Meddelanden delas i praktiken upp i mindre paket, som kan ta olika vägar genom näten och komma fram i fel ordning, eller inte alls. Och servern kör flera program samtidigt, så meddelandet måste hitta rätt bland dem också.

[click] Hur allt det löses är film två. Där öppnar vi fyrkanten och tittar på vad som faktiskt finns i internet, och på TCP och IP — protokollen som ser till att din begäran kommer fram, hel och i rätt ordning.

Efter den filmen är resan komplett, och då börjar det du ska arbeta praktiskt med under resten av kursen: HTML och CSS.

Vi ses i nästa film.
-->
