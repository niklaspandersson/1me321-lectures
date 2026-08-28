---
theme: seriph
title: Från webbadress till webbsida
info: |
  ## Film 1 – Från webbadress till webbsida
  En innehållsprototyp för 1ME321.
drawings:
  persist: false
transition: fade-out
duration: 8min
---

# Från webbadress<br>till webbsida

## Vad händer efter att du trycker på Enter?

`https://www.example.se/nyheter`

<!--
När vi besöker en webbplats ser det ut som en enda enkel handling: vi skriver en adress och trycker på Enter. Men innan sidan syns måste flera olika tekniker samarbeta. I den här filmen följer vi hela resan, steg för steg.
-->

---

<JourneyMap />

# En handling – flera steg

Webbläsaren behöver lösa sex uppgifter:

1. tolka **webbadressen**
2. hitta rätt **IP-adress** med **DNS**
3. skapa en stabil anslutning med **TCP**
4. be om en resurs med **HTTP**
5. tolka **HTML** och **CSS**

> Målet: kunna förklara vägen från adressfält till färdig sida.

<!--
Den här kartan återkommer under filmen. Den visar var vi befinner oss i kedjan. Lägg märke till att DNS leder oss till en IP-adress, medan TCP och HTTP har olika roller när webbläsaren och servern sedan kommunicerar.
-->

---

<JourneyMap active="Webbadress" />

# 1. Webbadressen beskriver målet

`https://www.example.se/nyheter`

| Del | Exempel | Berättar |
|---|---|---|
| protokoll | `https` | hur webbläsaren ska kommunicera |
| domännamn | `www.example.se` | vilken värd som ska kontaktas |
| sökväg | `/nyheter` | vilken resurs vi vill hämta |

Webbadressen är en **beskrivning**, inte själva innehållet.

<!--
Först delar webbläsaren upp adressen. HTTPS anger vilket protokoll som ska användas, domännamnet identifierar värden och sökvägen pekar ut den resurs vi vill ha. Adressen innehåller däremot ännu inte den nätverksadress som datorerna använder.
-->

---

<JourneyMap active="DNS" />

# 2. DNS slår upp domännamnet

Webbläsaren frågar:

> Vilken IP-adress hör till `www.example.se`?

DNS svarar till exempel:

> `www.example.se` → `203.0.113.42`

DNS fungerar ungefär som en distribuerad kontaktlista. Svaret kan finnas sparat i en **cache**, annars skickas frågan vidare i DNS-systemet.

<!--
Människor använder gärna namn, men nätverket behöver en IP-adress. DNS översätter därför domännamnet till en IP-adress. Liknelsen med en kontaktlista är användbar, men DNS är ett distribuerat system, inte en enda central katalog. Tidigare svar kan också vara cachade för att uppslagningen ska gå snabbare.
-->

---

<JourneyMap active="IP" />

# 3. IP pekar ut vägen

IP-adressen identifierar vart data ska skickas.

```text
din enhet  →  router  →  flera nätverk  →  servern
              paket kan ta olika vägar
```

- **IP** adresserar och vidarebefordrar paket
- routrar väljer nästa steg mot målet
- nätverket lovar inte att alla paket kommer fram i ordning

<!--
IP gör det möjligt att skicka data mellan nätverk. Informationen delas upp i paket som routrar skickar vidare mot destinationen. IP fokuserar på adressering och vägval. Det garanterar inte i sig att allt kommer fram, eller att paketen anländer i rätt ordning.
-->

---

<JourneyMap active="TCP" />

# 4. TCP skapar en pålitlig anslutning

TCP ordnar kommunikationen mellan webbläsaren och servern:

- delar upp datan i hanterbara delar
- numrerar delarna
- upptäcker om något saknas
- skickar om och sätter ihop i rätt ordning

IP hittar fram. **TCP ser till att samtalet håller ihop.**

<!--
Ovanpå IP använder webben vanligtvis TCP. TCP skapar en anslutning och håller reda på datadelarna. Om något tappas bort kan det skickas igen, och mottagaren kan sätta ihop allt i rätt ordning. Skillnaden att minnas är: IP hjälper paketen att hitta fram, TCP gör överföringen pålitlig.
-->

---

<JourneyMap active="HTTP" />

# 5. HTTP formulerar frågan

När anslutningen finns skickar webbläsaren en **HTTP-begäran**:

```http
GET /nyheter HTTP/1.1
Host: www.example.se
```

Begäran betyder ungefär:

> Ge mig resursen `/nyheter` från värden `www.example.se`.

<!--
TCP transporterar data, men HTTP ger webbkommunikationen en begriplig struktur. Här använder webbläsaren metoden GET för att be om resursen med sökvägen nyheter. Host-raden talar om vilket domännamn frågan gäller, eftersom en server kan hantera flera webbplatser.
-->

---

<JourneyMap active="HTTP" />

# 6. Servern svarar med HTTP

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8

<!doctype html>
...
```

Svaret innehåller:

- en **statuskod**, till exempel `200` eller `404`
- metadata i **headers**
- en **body** med resursens innehåll

<!--
Servern svarar också enligt HTTP. Statuskoden berättar hur det gick. 200 betyder att begäran lyckades, medan 404 betyder att resursen inte hittades. Content-Type berättar hur innehållet ska tolkas. Efter den tomma raden kommer själva resursen, här ett HTML-dokument.
-->

---

<JourneyMap active="HTML/CSS" />

# 7. HTML beskriver innehållet

```html
<article>
  <h1>Dagens nyheter</h1>
  <p>En kort sammanfattning.</p>
</article>
```

Webbläsaren tolkar elementen och bygger en struktur:

```text
article
├── h1
└── p
```

<!--
HTML beskriver vad innehållet är och hur det är strukturerat. Webbläsaren läser elementen och bygger en trädstruktur i minnet. Rubriken och stycket blir barn till article-elementet. Det här är sidans struktur, men ännu inte dess fullständiga utseende.
-->

---

<JourneyMap active="HTML/CSS" />

# 8. CSS beskriver presentationen

```css
article {
  max-width: 42rem;
}

h1 {
  color: darkblue;
}
```

Webbläsaren kombinerar **HTML-strukturen** med **CSS-reglerna** och ritar resultatet på skärmen.

En sida hämtar ofta fler resurser: CSS-filer, bilder, typsnitt och skript. Varje resurs kan innebära en ny HTTP-begäran.

<!--
CSS beskriver hur HTML-innehållet ska presenteras. Webbläsaren kopplar reglerna till rätt element, räknar ut layouten och ritar sidan. HTML-dokumentet är ofta bara början: det kan hänvisa till flera andra filer som webbläsaren också behöver hämta.
-->

---

<JourneyMap active="HTTP" />

# HTTPS: HTTP med skydd

I vår webbadress stod `https`.

Det innebär att HTTP-kommunikationen skyddas med **TLS**:

- innehållet krypteras under överföringen
- servern kan styrka sin identitet med ett certifikat
- mottagaren kan upptäcka om data har ändrats på vägen

HTTPS ändrar inte vad HTTP-begäran betyder – det skyddar transporten.

<!--
Vi har förenklat kedjan något. Eftersom adressen använder HTTPS sker också ett TLS-steg som skyddar kommunikationen. Krypteringen hindrar andra på vägen från att läsa innehållet, certifikatet hjälper webbläsaren att kontrollera serverns identitet och skyddet gör manipulation upptäckbar.
-->

---

<JourneyMap />

# Hela resan

1. **Webbadressen** delas upp i protokoll, domän och sökväg.
2. **DNS** översätter domännamnet till en **IP-adress**.
3. **IP** hjälper paketen att hitta till rätt dator.
4. **TCP** ger en ordnad och pålitlig anslutning.
5. **HTTP** beskriver begäran och svaret.
6. **HTML/CSS** tolkas och ritas som en webbsida.

Allt detta kan börja hända på bråkdelen av en sekund.

<!--
Nu kan vi se kedjan som en helhet. Varje del löser ett eget problem, och delarna bygger på varandra. Det centrala är inte att memorera varje teknisk detalj, utan att kunna skilja rollerna åt och berätta resan i rätt ordning.
-->

---

<JourneyMap />

# Kan du förklara resan?

Pausa filmen och försök svara med egna ord:

1. Varför behövs DNS när webbläsaren redan har ett domännamn?
2. Vad är skillnaden mellan IP:s och TCP:s uppgifter?
3. Vad innehåller ett HTTP-svar?
4. Hur blir HTML och CSS till det du ser på skärmen?

**Nästa steg:** vi börjar arbeta med HTML-strukturen.

<!--
Avsluta gärna med att pausa och formulera svaren högt eller skriftligt. Om du kan beskriva varje stegs roll och hur det leder vidare till nästa har du den mentala modell som resten av kursen bygger vidare på.
-->
