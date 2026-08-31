---
theme: seriph
title: TCP och IP
info: |
  ## Film 2 – TCP och IP
  Hur webbläsarens begäran faktiskt tar sig fram till servern.
  Vi följer den ner genom protokollstacken och upp igen.
drawings:
  persist: false
# Samma övergång som i film 1. Blocket är både deckets config och första
# bildens frontmatter, så den måste sättas här för att gälla från bild 1.
transition: view-transition
duration: 17min
layout: center
class: text-center
---

<SeriesOpening :film="2" />

<!--
Samma fråga som förra filmen började med: vad händer när vi surfar till en webbsida?

I film ett kom vi en bit på väg. Vi vet att det är ett webbserverprogram som svarar, att det körs på en dator någonstans i nätverket av nätverk, och att DNS översätter domännamnet till en IP-adress så att begäran kan skickas dit.

Den här filmen handlar om transporten: hur begäran faktiskt tar sig fram.
-->

---
layout: center
class: text-center
clicks: 1
---

<div class="w-[34rem] mx-auto">
  <InternetBox :step="5" />
</div>

<div class="mt-6 h-16 flex items-center justify-center">
  <div v-if="$clicks >= 1" class="text-2xl font-semibold">
    Hur kommer meddelandet fram – helt och i rätt ordning?
  </div>
</div>

<!--
Så här långt kom vi i film ett. Din dator, en bestämd server på andra sidan, och begäran och svaret som färdas mellan dem.

Men mitt i bilden står den där lådan, och vi bestämde oss för att inte titta i den. "Skickas genom internet" gömmer en hel del arbete.

[click] Frågan vi ska svara på är den här: hur kommer meddelandet fram, helt och i rätt ordning?

En sak innan vi börjar. Den här filmen är den mest tekniska i serien. Du kommer att höra en del nya ord. Du behöver inte memorera dem den här veckan, och jag säger mot slutet exakt vad du bör ta med dig.

Vi börjar med att öppna lådan.
-->

---
clicks: 3
class: flex flex-col justify-center
---

# Inuti lådan: ditt eget nätverk

<LocalNetwork v-click="1" :focus="$clicks >= 2 ? 'gateway' : 'lan'" />

<div v-click="3" class="text-sm text-gray-500 text-center">
<strong>LAN</strong> lokalt nätverk · <strong>router</strong> kopplar ihop nätverk · <strong>gateway</strong> vägen ut · <strong>WAN</strong> nätverk över större områden
<br />
Begrepp att känna igen – inte att memorera nu.
</div>

<!--
Vi börjar i din ände, för där finns redan ett nätverk.

[click] Datorn, mobilen och skrivaren hemma sitter ihop i ett litet nätverk. Det kallas ett LAN, local area network. Detsamma gäller nätet på universitetet, fast större.

[click] För att nå något utanför det måste trafiken passera en router. Routern kopplar ihop nätverk och avgör vart trafiken ska skickas vidare. Vägen ut ur ett nätverk kallas gateway, och hemma sitter den funktionen oftast i samma låda som routern.

[click] Du kommer också att höra ordet WAN, om nätverk över större geografiska områden. De här orden behöver du bara känna igen.

Poängen är enkel: din data måste lämna ditt eget nätverk för att nå servern. Och på andra sidan routern ligger inte "internet" som en enda sak — där ligger fler nätverk.
-->

---
clicks: 2
class: flex flex-col justify-center
---

# Nätverk av nätverk

<NetworkOfNetworks v-click="1" focus="overview" />

<div v-click="2" class="max-w-2xl mx-auto text-center">
<strong>Internet</strong> = <em>internetworking</em>: nätverk sammankopplade med andra nätverk.
Det finns ingen central Internet-dator.
</div>

<!--
[click] Så här ser det ut när vi zoomar ut. Ditt nätverk är kopplat till din internetleverantörs nätverk, som är kopplat till fler nätverk, som till slut är kopplade till det nätverk där servern står. Varje koppling är en router, precis som din.

[click] Ordet Internet kommer från internetworking, sammankoppling av nätverk, och det är precis vad det är.

Två saker är värda att lägga märke till. Det finns ingen central Internet-dator på bilden, och ingen som äger alltihop.

Och varför byggdes det så här? Väldigt kort: på sextiotalet började man koppla ihop datorer, men näten byggdes på olika sätt och förstod inte varandra. Lösningen på sjuttiotalet var inte att bygga om alla nätverk till ett enda stort. Man kom i stället överens om gemensamma protokoll, alltså regler för hur data ska skickas, så att olika slags nätverk kunde lämna över data till varandra. Där föddes idén om ett nätverk av nätverk, och det är därför det fungerar än i dag att vem som helst kan koppla in ett nytt nät.

Lådan är alltså öppnad. Nu ska vi skicka något genom den.
-->

---
clicks: 2
class: flex flex-col justify-center
---

# Det som ska skickas

<div v-click="1">

```http
GET /kurser HTTP/1.1
Host: www.lnu.se
```

</div>

<div v-click="2" class="mt-4 text-center text-gray-500">
Ett fyrtiotal tecken. Vad de betyder tittar vi på i film 3 – här är de bara <strong>lasten som ska fram</strong>.
</div>

<!--
Låt oss börja med det konkreta. Det här är vad webbläsaren faktiskt vill skicka.

[click] Två rader text. Ge mig sökvägen /kurser, och det gäller värden www.lnu.se.

[click] Ett fyrtiotal tecken, alltså. Vad de betyder i detalj tittar vi på i film tre. I den här filmen är de bara lasten: det som ska transporteras från en dator till en annan, helt och oförändrat.

Och det visar sig vara ett problem med flera delar.
-->

---
clicks: 3
class: flex flex-col justify-center
---

# Tre problem på vägen

<div class="max-w-2xl mx-auto mt-4 space-y-4 text-left text-lg">
  <div v-click="1">1. Data skickas inte i ett enda stycke. Det måste <strong>delas upp</strong>.</div>
  <div v-click="2">2. Delarna kan komma fram <strong>i fel ordning</strong> – eller inte alls.</div>
  <div v-click="3">3. Serverdatorn kör <strong>flera program</strong>. Vilket ska ha det?</div>
</div>

<!--
Tre saker står i vägen.

[click] För det första skickas data inte i ett enda stycke. Nätet transporterar små portioner, så meddelandet måste delas upp. Ett fyrtiotal tecken hade i och för sig fått plats, men ett HTML-dokument eller en bild gör det inte, och lösningen måste fungera för båda.

[click] För det andra är nätet inte pålitligt. Delarna kan ta olika vägar, komma fram i en annan ordning än de skickades, eller försvinna helt på vägen.

[click] Och för det tredje: när paketet väl når rätt dator kör den datorn flera program samtidigt. En webbserver, kanske en e-postserver. Någon måste avgöra vilket av dem som ska ha meddelandet.

De tre problemen löses inte av en enda teknik, utan av flera som ligger i lager på varandra.
-->

---
clicks: 5
class: flex flex-col justify-center
---

# Protokollstacken

<ProtocolStack v-click="1" :reveal="$clicks" />

<div v-click="5" class="mt-2 text-center text-gray-500">
Varje lager löser sin del och lämnar resten till lagret under.
</div>

<!--
Lösningen är byggd i lager. Varje lager har ett eget ansvar och använder lagret under sig.

[click] Överst ligger applikationslagret. Där hör HTTP hemma, alltså det vi faktiskt vill be om. Det är film tre.

[click] Under det ligger transportlagret. Där ligger TCP, som ska se till att allt kommer fram, i ordning, och till rätt program. Det är två av våra tre problem.

[click] Under det ligger internetlagret med IP, som adresserar och ser till att data kan ta sig fram till rätt dator genom alla nätverken. Det pratade vi om i film ett.

[click] Och längst ner länklagret: Ethernet, Wi-Fi och liknande. Det sköter ett steg i taget, från din dator till routern, från routern till nästa. Det behöver du bara känna igen.

[click] Poängen med att bygga så här är att varje lager löser sin del och lämnar resten till lagret under. TCP behöver inte veta något om Wi-Fi. IP behöver inte veta att det är en webbsida som skickas.

Den här filmen handlar om de två lagren i mitten. Vi tar dem nerifrån och upp: först IP, som är vad nätet faktiskt ger oss, och sedan TCP, som bygger det vi saknar ovanpå.
-->

---
clicks: 4
class: flex flex-col justify-center
---

<ProtocolStack compact active="internet" />

# IP-paket och routrar

<div v-click="1" class="w-[36rem] mx-auto">
  <NetworkOfNetworks focus="path" :route="$clicks >= 3 ? 2 : 1" />
</div>

<div v-click="2" class="text-center text-sm text-gray-500">
Varje paket bär <strong>avsändarens och mottagarens IP-adress</strong>. Routern läser adressen och väljer nästa steg.
</div>

<div v-click="4" class="mt-2 text-center">
IP lovar inte att paketen kommer fram, eller att de kommer i ordning. <strong>Det är därför TCP finns.</strong>
</div>

<!--
Vi börjar underifrån, med internetlagret. Där heter portionerna paket.

[click] Här är nätverket vi just tittade på, och vägen ett paket kan ta genom det.

[click] Varje paket bär med sig avsändarens och mottagarens IP-adress. Ingen router känner till hela vägen fram. Varje router läser mottagaradressen, tittar i sin tabell och avgör en enda sak: vilket håll paketet ska skickas åt härnäst. Sedan är det nästa routers problem.

[click] Och därför kan nästa paket ta en annan väg. Om en länk blir överbelastad eller går sönder väljer routrarna något annat, utan att någon behöver frågas. Det är precis den flexibiliteten som gör att Internet fortsätter fungera när delar av det slutar fungera.

[click] Priset för flexibiliteten är att IP inte lovar någonting. Paket kan komma i oordning, och de kan försvinna. IP:s uppgift är adressering och vidarebefordran, inget annat.

Det är alltså det nätet ger oss: paket som kanske kommer fram. Allt annat måste lösas ovanpå.
-->

---
clicks: 5
class: flex flex-col justify-center
---

<ProtocolStack compact active="transport" />

# Portnummer och anslutningen

<PortDelivery v-click="1" :step="$clicks" />

<div v-click="4" class="text-center text-sm">
En <strong>anslutning</strong> identifieras av fyra värden:
<code class="mx-1">198.51.100.7:51514</code> ⟷ <code class="mx-1">203.0.113.42:443</code>
</div>

<div v-click="5" class="mt-3 text-center text-gray-500 text-sm">
Anslutningen är <strong>logisk</strong> – ingen ledning reserveras, inget hålls öppet i nätet.
</div>

<!--
Ett lager upp ligger transportlagret, och där löser TCP det som IP lämnade olöst. Vi börjar med det enklaste av våra tre problem: vilket program på servern ska ha meddelandet?

[click] Serverdatorn kör flera serverprogram samtidigt, precis som vi sa i film ett. Varje program lyssnar på ett eget nummer, en port. Webbservern lyssnar vanligtvis på port 443 för HTTPS, e-postservern på 25, fjärrinloggning på 22.

[click] IP-adressen tar meddelandet fram till rätt dator.

[click] Och portnumret avgör vilket av programmen på den datorn som ska ha det. 443, alltså webbservern. Kort sagt: IP-adressen pekar ut datorn, portnumret pekar ut programmet.

[click] Och det är de här värdena som utgör en anslutning. Innan TCP skickar något upprättar det en anslutning mellan två program, och den identifieras av fyra saker: avsändarens IP-adress och port, och mottagarens IP-adress och port. Webbläsaren får ett tillfälligt portnummer av operativsystemet, här 51514. Servern sitter på sin 443.

De fyra värdena räcker för att skilja den här anslutningen från alla andra. Därför kan du ha femton flikar öppna mot samma server utan att svaren blandas ihop.

[click] Ordet anslutning kan leda tankarna fel. Det reserveras ingen ledning genom Internet, och ingenting hålls öppet längs vägen. Anslutningen finns bara som bokföring i de två programmens ändar: vad har jag skickat, vad har jag fått, vad väntar jag på.

Nu när anslutningen finns kan vi ta itu med de två andra problemen.
-->

---
clicks: 4
class: flex flex-col justify-center
---

<ProtocolStack compact active="transport" />

# Segment och sekvensnummer

<TcpSegments v-click="1" :step="$clicks" />

<!--
Programmet lämnar över sin data till TCP som en ström av byte. TCP ser ingen HTTP-begäran, bara tecken efter tecken.

[click] Här är strömmen: hela begäran som en enda följd av byte.

[click] TCP delar den i segment och numrerar dem. Lägg märke till att snittet går rakt igenom orden. TCP räknar byte och bryr sig inte om var HTTP har sina gränser. Numret är det viktiga: det säger var i strömmen just den här biten hör hemma.

[click] Segmenten skickas iväg var för sig och kan ta olika vägar. Så här kan de komma fram hos servern: i en helt annan ordning än de skickades.

[click] Men eftersom varje segment bär sitt nummer kan mottagarens TCP lägga dem i ordning igen. Programmet på andra sidan får aldrig se röran. Det får samma byte-ström som skickades, i samma ordning.

Det löser problem två, halva vägen. Kvar är: vad händer med det som inte kommer fram alls?
-->

---
clicks: 4
class: flex flex-col justify-center
---

<ProtocolStack compact active="transport" />

# Bekräftelser och omsändning

<TcpReliability v-click="1" :step="$clicks" />

<div v-click="4" class="text-center text-gray-500 text-sm">
Ingen bekräftelse inom rimlig tid – då skickas segmentet om.
</div>

<!--
[click] Webbläsaren skickar sina segment. Ett och två kommer fram. Segment tre försvinner på vägen: en router kastar det för att den är överbelastad, eller så går det förlorat på en trådlös länk. Det händer, och nätet säger inte till.

[click] Servern bekräftar det den har fått. Bekräftelsen säger i praktiken: jag har allt fram till och med segment två.

[click] Webbläsaren väntar på en bekräftelse för segment tre. Den kommer inte, och då skickar webbläsaren om det.

[click] Det är hela mekanismen: bekräftelser på det som kommit fram, och omsändning av det som inte bekräftats i tid. Det är det som gör TCP tillförlitligt, trots att nätet under inte lovar någonting.

Där är alla tre problemen lösta. Återstår att se hur lagren faktiskt samarbetar när ett meddelande skickas.
-->

---
clicks: 7
class: flex flex-col justify-center
---

# Inkapsling och uppackning

<Encapsulation v-click="1" :step="$clicks" />

<!--
När meddelandet skickas går det ner genom stacken, och varje lager lägger till sin egen information framför datan. Det kallas inkapsling.

[click] Överst har vi HTTP-begäran. Det är den vi vill ha fram.

[click] TCP lägger till sitt huvud: portnummer, så att rätt program får det, och sekvensnummer, så att ordningen går att återställa. Nu är det ett TCP-segment.

[click] IP lägger till sitt huvud: avsändarens och mottagarens IP-adress. Nu är det ett IP-paket.

[click] Länklagret lägger till sitt, för nästa steg i nätet, och skickar iväg det.

[click] Paketet tar sig genom näten, från router till router. Hos servern sker sedan exakt samma sak baklänges. Länklagret tar av sitt huvud och lämnar upp ett IP-paket.

[click] IP läser sitt huvud, ser att paketet är framme, tar av det och lämnar upp ett TCP-segment.

[click] TCP läser portnumret och sekvensnumret, sätter ihop segmenten i ordning, tar av sitt huvud, och lämnar över exakt samma byte som webbläsaren skickade till programmet på port 443.

Webbserverprogrammet ser aldrig något av det som hände under vägen. Det får bara sin HTTP-begäran. Det är hela poängen med att bygga i lager.

Låt oss samla ihop vad de två lagren i mitten faktiskt gjorde.
-->

---
clicks: 2
class: flex flex-col justify-center
---

# Vad TCP gör och vad IP gör

<div v-click="1" class="grid grid-cols-2 gap-6 max-w-3xl mx-auto mt-4">
  <div class="p-4 border-2 border-cyan-600 bg-cyan-50 rounded-lg">
    <div class="font-mono font-bold text-lg">TCP</div>
    <ul class="mt-2 text-sm space-y-1">
      <li>anslutning mellan två <strong>program</strong></li>
      <li>delar upp och numrerar</li>
      <li>bekräftar och skickar om</li>
      <li>levererar i rätt ordning</li>
    </ul>
  </div>
  <div class="p-4 border-2 border-orange-600 bg-orange-50 rounded-lg">
    <div class="font-mono font-bold text-lg">IP</div>
    <ul class="mt-2 text-sm space-y-1">
      <li>adresserar till en <strong>dator</strong></li>
      <li>ett paket i taget</li>
      <li>routrar väljer nästa steg</li>
      <li>lovar ingenting om leverans</li>
    </ul>
  </div>
</div>

<div v-click="2" class="mt-6 text-center text-lg">
IP flyttar paket mellan datorer. TCP gör den flytten <strong>tillförlitlig</strong> mellan två program.
</div>

<!--
Det här är filmens viktigaste bild, och den enda du behöver kunna återge.

[click] TCP arbetar mellan två program. Det upprättar en anslutning, delar upp datan, numrerar delarna, bekräftar det som kommit fram, skickar om det som saknas och levererar allt i rätt ordning.

IP arbetar mellan datorer. Det adresserar ett paket i taget, routrarna väljer nästa steg, och ingen lovar att paketet kommer fram.

[click] Sammanfattat: IP flyttar paket mellan datorer, TCP gör den flytten tillförlitlig mellan två program. Kan du den meningen har du filmens kärna.

-->

---
clicks: 3
class: flex flex-col justify-center
---

# Vad du behöver komma ihåg

<div v-click="1" class="max-w-3xl mx-auto mt-2">

**Förstå ordentligt:** IP adresserar och skickar paket mellan datorer. TCP ger två program en tillförlitlig och ordnad förbindelse ovanpå det.

</div>

<div v-click="2" class="max-w-3xl mx-auto mt-4 text-gray-600">

**Känna igen:** portnummer, protokollstack, inkapsling, segment, sekvensnummer, bekräftelse, omsändning.

</div>

<div v-click="3" class="mt-6 text-center text-gray-500">
Resten av kursen handlar om lagret ovanpå.
</div>

<!--
Nu ska jag vara tydlig med vad du förväntas ha med dig, för det här var mycket på kort tid.

[click] Det här ska du förstå ordentligt: IP adresserar och skickar paket mellan datorer, TCP ger två program en tillförlitlig och ordnad förbindelse ovanpå det. Kan du den skillnaden har du det som kursen bygger vidare på.

[click] Det här räcker det att du känner igen när du hör det: portnummer, protokollstack, inkapsling, segment, sekvensnummer, bekräftelse, omsändning. Du ska inte kunna räkna upp fälten i ett TCP-huvud, och du kommer inte att behöva det.

[click] Resten av kursen handlar om lagret ovanpå det vi gått igenom här.
-->

---
layout: center
class: text-center
clicks: 1
---

<div class="w-[38rem] mx-auto">
  <ProtocolStack active="app" />
</div>

<div class="mt-6 text-2xl font-semibold">
Vad står det egentligen i begäran och i svaret?
</div>

<div v-click="1" class="mt-6 text-gray-500">
<strong>Film 3:</strong> HTTP, HTML och CSS – och därifrån börjar du bygga själv
</div>

<!--
Transporten är på plats. Begäran kommer fram till rätt program på rätt dator, hel och i rätt ordning, och svaret kommer tillbaka samma väg.

Kvar är översta lagret: vad står det egentligen i begäran, och vad kommer tillbaka?

[click] Det är film tre. Där öppnar vi en riktig HTTP-begäran och ett riktigt svar, tittar på statuskoder, och följer HTML-dokumentet som kommer tillbaka och de CSS-filer och bilder det pekar vidare på. Och där börjar det du sedan ska arbeta praktiskt med under resten av kursen.

Vi ses.
-->
