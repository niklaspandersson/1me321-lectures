# Disposition – introduktionsserien (1ME321, vecka 1)

Arbetsdokument. Läget 2026-08-30.

**Ny bärande idé: Internet är en svart låda i film 1.**

Filmen börjar i det studenten faktiskt känner till – sin egen dator, kopplad
till "internet" – och **lådan öppnas aldrig i film 1**. För att motivera
IP-adresser räcker det att visa att det finns oerhört många uppkopplade
datorer på andra sidan; hur de är kopplade till varandra är film 2:s fråga.

Det löser tre saker på en gång:

- Studentens eget ord "internet" blir **användbart innan det är definierat**.
  Lådan behöver inget innehåll för att man ska kunna bygga vidare på den.
- Den verkliga omställningen kommer först och tydligt: sidan kommer inte
  från "internet", den kommer från **EN bestämd dator** som nås via lådan.
- **Klient och server blir namn på något studenten redan ser**, inte två
  nya begrepp som introduceras abstrakt.

Alla tre filmerna inleds med samma bild: grundfrågan *"Vad händer när vi
surfar till en webbsida?"* plus en karta över seriens tre filmer.

---

# NY DISPOSITION

## Film 1 – Webben och den svarta lådan

`F1a.md` · 13 bilder · ~10 min · **byggd** *(tidigare 16 bilder, ~11 min)*

Filmens två frågor är oförändrade sedan tidigare:
**Varifrån kommer sidan?** och **Hur tar den sig till min webbläsare?**

1. Gemensam inledning – grundfrågan
2. Tom webbläsare → adress → sidan laddad · *"Vad hände där emellan?"*
3. **Din dator och lådan** – din dator är kopplad till något vi kallar
   internet, ritat som en svart låda. Höger sida av bilden är tom.
   *"Internet är inte en dator."*
4. **Två frågor** – ställs medan bara lådan finns på skärmen
5. *Fråga 1* – Varifrån kommer sidan? EN bestämd dator på andra sidan → klient och server
6. *Fråga 1* – Begäran och svar *(HTTP nämns; en sida = många frågor)*
7. *Fråga 2* – IP-adressen: många datorer bakom lådan, adressen pekar ut en
8. *Fråga 2* – Webbadressens delar → *"ingen IP-adress någonstans, bara ett namn"*
9. *Fråga 2* – Från namn till IP-adress (DNS)
10. *Fråga 2* – Hela vägen: webbläsare → DNS → **[låda]** → server
11. Internet och webben – skillnaden, med lådan fortfarande stängd
12. Sammanfattning – båda frågorna
13. Utgång → film 2: *nu öppnar vi lådan*

### Vad som ändrats

- **Bild 3 är ny och ersätter dagens abstrakta klient/server-bild.** Den
  börjar i det kända, och den tomma högra halvan av bilden *är* frågan.
- **Frågorna ställs medan bara lådan finns på skärmen** (bild 4, före
  bild 5), så att "varifrån kommer sidan?" är genuint öppen när den ställs.
- **Rollerna namnges på bild 5**, som svar på fråga 1 – klient och server
  introduceras alltså inte, de döps.
- **Lådan öppnas aldrig.** Bilden "nätverk av nätverk" är borta ur film 1.
  På bild 7 visas i stället bara att det finns många uppkopplade datorer
  bakom lådan, som utspridda datorikoner – allt som behövs för att
  motivera varför en adress krävs.
- **IP-adressen kommer före webbadressen** (bild 7 före 8). Då landar
  observationen "det står ju inget nummer här, bara ett namn" på samma
  bild som URL:en, och DNS blir ett svar på en fråga studenten just
  ställt sig – i stället för något som förklaras innan den uppstått.
- **Flyttas till film 2:** LAN, router och gateway, nätverk av nätverk,
  och tidslinjen över Internets framväxt.
- **Internet och webben (bild 11) klarar sig med stängd låda.** Skillnaden
  är att Internet är infrastrukturen och webben en tjänst som använder
  den – det kräver inte att man vet hur infrastrukturen är byggd. Att
  Internet fanns ett par decennier före webben står kvar som text.
- **Bild 10 blir renare med stängd låda:** webbläsare → DNS → [låda] →
  server, i stället för en väg genom nätmaskor.
- **Ny komponent `InternetBox`** är filmens visuella ryggrad: samma bild
  på bild 3, 5, 6, 8, 10 och 13, som växer med ett steg i taget.

---

## Film 2 – Inuti lådan: TCP och IP

`F1b.md` · 15 bilder · ~17 min · **byggd** *(tidigare 14 bilder, ~16 min)*

1. Gemensam inledning – grundfrågan
2. **Lådan från film 1**, stängd – och filmens fråga: *hur kommer meddelandet fram, helt och i rätt ordning?*
3. **Inuti lådan: ditt eget nätverk** – LAN, routern som väg ut, gateway, WAN
4. **Nätverk av nätverk** – ingen mitt, ingen ägare *(historiken ligger i manus här)*
5. Det som ska skickas (HTTP-begäran som last)
6. Tre problem: uppdelning / ordning och förlust / vilket program
7. Protokollstacken (fyra lager)
8. **IP-paket och routrar** – vad nätet ger: paket, olika vägar, inga garantier
9. **Portnummer och anslutningen** *(sammanslagna)*
10. Segment och sekvensnummer
11. Bekräftelser och omsändning
12. Inkapsling och uppackning
13. Vad TCP gör och vad IP gör
14. Vad du behöver komma ihåg
15. Utgång → film 3

### Vad som ändrats

- **Bild 2 visar lådan stängd**, exakt som film 1 lämnade den, i stället
  för nätverksbilden. Skarven mellan filmerna blir då bokstavlig.
- **Bild 3 och 4 är nya** och öppnar lådan. De ärver LAN, router och
  gateway från film 1, och zoomar sedan ut till nätverk av nätverk.
  Filmen börjar därmed med en utlovad belöning i stället för ett nytt ämne.
- **IP flyttas före TCP** (bild 8, tidigare bild 10). Studenten ser först
  vad nätet faktiskt ger – paket, olika vägar, inga garantier – och TCP
  blir svaret på ett problem hen just sett. Det följer också stacken
  konsekvent nerifrån och upp.
- **Portnummer och TCP-anslutningen slås ihop** (bild 9). Portnumret är
  ett av anslutningens fyra värden; de hörde aldrig hemma på var sin bild.
- **Inkapslingen flyttas före "vad TCP gör och vad IP gör".** Inkapslingen
  är filmens sista *nya* moment, inte en sammanfattning. Nu avslutar
  bild 13 och 14 tillsammans i stället för att filmen slutar tre gånger.
- **Tidslinjen blev inte en egen bild.** Historiken ligger som manus till
  bild 4, där nätverksbilden på skärmen illustrerar utfallet medan talet
  ger bakgrunden. `Timeline`-komponenten är därmed oanvänd – säg till om
  den ska tillbaka som egen bild, det kostar ungefär en minut film.

---

## Film 3 – HTTP, HTML och CSS

`F1c.md` (ej byggd) · 11 bilder · ~10 min

1. Gemensam inledning – grundfrågan
2. Var vi står: hela resan – klient och server, lådan öppnad, transporten
3. HTTP-begäran i detalj (metod, sökväg, Host)
4. HTTP-svaret + statuskod (200, 404)
5. Svaret är ett HTML-dokument
6. Webbläsaren tolkar HTML-strukturen (träd)
7. Dokumentet pekar vidare på CSS, bilder och typsnitt
8. Därför blir en sida många begäranden
9. CSS påverkar presentationen
10. Hela kedjan sammanfattad
11. Övergång till kursens HTML-del

### Vad som ändrats

Nästan ingenting – film 3 påverkas minst av omläggningen. Två saker:

- **Bild 2 kan nu visa lådan öppnad.** Serien har en visuell båge: stängd
  låda i film 1, öppnad i film 2, hela bilden i film 3.
- **Film 3 äger HTTP.** Film 1 får bara *nämna* ordet (bild 4), film 2
  använder en begäran som last utan att förklara den. Först här förklaras
  vad som faktiskt står i den.

---

# ATT BESLUTA

1. **Går det här emot README.** Där ligger "nätverk av nätverk", "LAN,
   router och gateway" och "90 sekunders historik" uttryckligen i film 1.
   Om upplägget står fast bör README skrivas om.
2. **Film 2 är fortfarande seriens tyngsta** – 16–17 min mot 9–10 och 10.
   Den ryms i README:s ram, men om något ska flyttas är det därifrån.
3. **Bild 3 och bild 7 i film 2 rör båda routrar.** Bild 3 är struktur
   (vad lådan innehåller), bild 7 är mekanism (vad routrarna gör med
   paketen). Distinktionen håller, men den är värd att bevaka.
4. **Historiken flyttar till film 2.** Tidslinjen handlar om hur nätverk
   kopplades ihop, alltså om lådans insida. Att Internet är äldre än
   webben står kvar som en textrad i film 1 bild 11.

---

# VAD DET INNEBÄR I BILDSPELEN

Kort, för att kunna bedöma kostnaden:

- **Ny komponent:** den svarta lådan, som återkommer genom film 1 och
  öppnas i film 2. Internet-molnet finns redan i `LocalNetwork.vue` och
  kan lyftas ut. Lådans öppnande i film 2 kan använda samma
  view-transition-morfning som redan finns på plats.
- **`QuestionTrail`** behöver nya frågor för film 1 (samma antal, ny text).
- **Flyttas från F1a till F1b:** `LocalNetwork`, `NetworkOfNetworks`
  (översikt), `Timeline` stannar i F1a.
- **Fyra bilder utgår ur F1a**, tre tillkommer. Manus skrivs om för
  bild 3–5 och 9–11.
- **F1b:** en ny bild först, två slås ihop, två byter plats. Komponenterna
  finns redan.

---

# GAMMAL DISPOSITION (som byggd, för jämförelse)

## Film 1 – i dag, 16 bilder

1. Gemensam inledning
2. Tom webbläsare → adress → sidan laddad
3. Två frågor: Varifrån kommer sidan? / Hur tar den sig till min webbläsare?
4. *F1* Klient och server som roller
5. *F1* Begäran och svar
6. *F1* Var finns servern? Nätverket av nätverk
7. *F1* Ditt lokala nätverk (LAN, router, gateway, WAN)
8. *F1* Internets framväxt
9. *F1* Internet och webben
10. *F1* Svaret på fråga 1
11. *F2* Webbadressens delar
12. *F2* IP-adressen
13. *F2* Från namn till IP-adress (DNS)
14. *F2* Hela vägen (fyra steg)
15. Sammanfattning
16. Utgång → film 2

## Film 2 – i dag, 14 bilder

1. Gemensam inledning
2. Var vi slutade + filmens fråga
3. Det som ska skickas
4. Tre problem
5. Protokollstacken
6. Portnummer
7. TCP-anslutningen
8. Segment och sekvensnummer
9. Bekräftelser och omsändning
10. IP-paket och routrar
11. Vad TCP gör och vad IP gör
12. Inkapsling och uppackning
13. Vad du behöver komma ihåg
14. Utgång → film 3

---

# Egna anteckningar

<!-- Skriv fritt här eller direkt i listorna ovan. -->
