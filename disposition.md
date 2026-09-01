# Disposition – introduktionsserien (1ME321, vecka 1)

Arbetsdokument. Läget 2026-09-01. Beskriver serien **som den är byggd**.

**Bärande idé: Internet är en svart låda i film 1.**

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

Serien har en visuell båge: **stängd låda i film 1, öppnad i film 2, hela
bilden i film 3.** Alla tre filmerna inleds med samma bild: grundfrågan
*"Vad händer när vi surfar till en webbsida?"* plus en karta över seriens
tre filmer (`SeriesOpening`).

---

## Film 1 – Webben och den svarta lådan

`F1a.md` · 12 bilder · ~10 min · **byggd**

Filmens två frågor: **Varifrån kommer sidan?** och
**Hur tar den sig till min webbläsare?**

1. Gemensam inledning – grundfrågan
2. Tom webbläsare → adress → sidan laddad · *"Vad hände där emellan?"*
3. **Två frågor** – ställs innan lådan visats, så att "varifrån kommer
   sidan?" är genuint öppen när den ställs
4. *Fråga 1* – **Varifrån kommer sidan?** Din dator → lådan → EN bestämd
   dator på andra sidan → rollerna döps till klient och server
5. *Fråga 1* – Begäran och svar *(HTTP nämns; en sida = många frågor)*
6. *Fråga 2* – IP-adressen: många datorer bakom lådan, adressen pekar ut en
7. *Fråga 2* – Webbadressens delar → *"ingen IP-adress någonstans, bara ett namn"*
8. *Fråga 2* – Från namn till IP-adress (DNS)
9. *Fråga 2* – Hela vägen: DNS-uppslag → begäran genom lådan → serverns svar
10. Internet och webben – skillnaden, med lådan fortfarande stängd
11. Sammanfattning – båda frågorna
12. Utgång → film 2: *nu öppnar vi lådan*

**Komponenter:** `SeriesOpening`, `BrowserFrame`, `QuestionTrail`,
`InternetBox` (bild 4, 5, 9, 12 – filmens visuella ryggrad, växer ett steg
i taget), `InternetCrowd` (bild 6), `AddressAnatomy`, `DnsLookup`.

**Att hålla reda på:**

- Bild 4 gör två saker: etablerar din dator + lådan, och svarar på fråga 1.
  Den är filmens tyngsta bild räknat i klick (4 st).
- IP-adressen kommer före webbadressen, så att *"det står ju inget nummer
  här, bara ett namn"* landar på samma bild som URL:en och DNS blir svaret
  på en fråga studenten just ställt sig.
- Att Internet fanns ett par decennier före webben står som textrad på
  bild 10; själva historiken ligger i film 2.

---

## Film 2 – Inuti lådan: TCP och IP

`F1b.md` · 15 bilder · ~17 min · **byggd**

1. Gemensam inledning – grundfrågan
2. **Lådan från film 1**, stängd, exakt som film 1 lämnade den – och filmens
   fråga: *hur kommer meddelandet fram, helt och i rätt ordning?*
3. **Inuti lådan: ditt eget nätverk** – LAN, routern som väg ut, gateway, WAN
4. **Nätverk av nätverk** – ingen mitt, ingen ägare *(historiken ligger i manus här)*
5. Det som ska skickas (HTTP-begäran som last)
6. Tre problem: uppdelning / ordning och förlust / vilket program
7. Protokollstacken (fyra lager)
8. **IP-paket och routrar** – vad nätet ger: paket, olika vägar, inga garantier
9. **Portnummer och anslutningen** – portnumret är ett av anslutningens fyra värden
10. Segment och sekvensnummer
11. Bekräftelser och omsändning
12. Inkapsling och uppackning
13. Vad TCP gör och vad IP gör
14. Vad du behöver komma ihåg
15. Utgång → film 3

**Komponenter:** `SeriesOpening`, `InternetBox` (bild 2, skarven mot film 1),
`LocalNetwork`, `NetworkOfNetworks`, `ProtocolStack` (även bild 15),
`PortDelivery`, `TcpSegments`, `TcpReliability`, `Encapsulation`.

**Att hålla reda på:**

- Ordningen är stacken nerifrån och upp: IP (bild 8) före TCP, så att
  studenten först ser vad nätet faktiskt ger – paket, olika vägar, inga
  garantier – och TCP blir svaret på ett problem hen just sett.
- Inkapslingen (bild 12) är filmens sista *nya* moment, inte en
  sammanfattning. Bild 13 och 14 avslutar tillsammans.
- Bild 3 och bild 8 rör båda routrar: bild 3 är struktur (vad lådan
  innehåller), bild 8 är mekanism (vad routrarna gör med paketen).
  Distinktionen håller, men är värd att bevaka.
- Historiken har ingen egen bild. Den ligger som manus till bild 4, där
  nätverksbilden illustrerar utfallet medan talet ger bakgrunden.

---

## Film 3 – HTTP, HTML och CSS

`F1c.md` · **ej byggd** · 11 bilder · ~10 min

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

**Att hålla reda på:**

- **Film 3 äger HTTP.** Film 1 bild 5 *nämner* bara ordet, film 2 använder
  en begäran som last utan att förklara den. Först här förklaras vad som
  faktiskt står i den.
- Bild 2 visar lådan öppnad och sluter seriens visuella båge.

---

# ATT BESLUTA

1. **Går det här emot README.** Där ligger "nätverk av nätverk", "LAN,
   router och gateway" och "90 sekunders historik" uttryckligen i film 1.
   Om upplägget står fast bör README skrivas om.
2. **Film 2 är fortfarande seriens tyngsta** – 17 min mot 10 och 10.
   Den ryms i README:s ram, men om något ska flyttas är det därifrån.
3. **Oanvända komponenter:** `Timeline`, `ClientServerDiagram`, `Counter`.
   `Timeline` blev aldrig en egen bild – säg till om historiken ska tillbaka
   som egen bild i film 2, det kostar ungefär en minut film.
   (`JourneyMap` används bara av demo-decket `slides.md`.)

---

# Egna anteckningar

<!-- Skriv fritt här eller direkt i listorna ovan. -->
