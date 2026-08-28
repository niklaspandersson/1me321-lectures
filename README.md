# Revamp av inspelade föreläsningar - Webbteknik 1

Kursen handlar främst om att bygga webbsidor med HTML & CSS, men skall även innehålla en orientering i hur webben fungerar. Denna orientering är viktig för att ge studenten en förståelse för hur webbläsaren och servern kommunicerar, samt hur HTML och CSS transporteras över nätverket.

Det här repositoryt skall innehålla bildspel och manus för alla nyinspelningar av föreläsningarna i kursen. Bildspelen är gjorda i slidev, och manusen är främst skrivna i markdown. Separata komponenter skapas vid behov.

## Vecka 1 - Introduktion till webbteknik

Denna modul innehåller de tre första inspelade föreläsningarna i kursen. De är tänkta att ge en introduktion till webben och hur webbläsare och servrar kommunicerar med varandra. Filmerna är avsedda att ses i ordning.

### Film 1: Välkommen till webben – webbläsare, servrar och Internet

Filnamn: F1a.md
Cirka 9–11 minuter.
Den här filmen blir både kursintroduktion och teknisk orientering.

- Vad studenten kommer att skapa under kursen
- Skillnaden mellan Internet och webben
- Webbläsaren som klient
- Webbservern som serverprogram
- Begäran och svar som webbens grundmodell
- Internet som ett nätverk av nätverk
- LAN, router och gateway på en orienterande nivå
- IP-adressen som datorns nätverksadress
- DNS som översättning från namn till IP-adress
- Högst 90 sekunders internethistorik
- Kort förhandsvisning av TCP, HTTP, HTML och CSS
  Filmen ska sluta med att webbläsaren har hittat serverns IP-adress.
  Budskapet till studenten blir:
  Nu vet vi vilken server vi vill nå. I nästa film undersöker vi hur informationen faktiskt transporteras dit.

WAN kan nämnas, men behöver inte få en längre separat utläggning. Historiken ska främst förklara varför vi har ett nätverk av nätverk, inte redovisa en full kronologi.

### Film 2: TCP/IP – hur webbläsaren kommunicerar med servern

Filnamn: F1b.md
Cirka 14–17 minuter.
Här behåller vi det tekniska djupet. Skillnaden är att studenten redan vet vart berättelsen är på väg.

- Klient och server som programroller
- En konkret HTTP-begäran som utgångspunkt
- Varför gemensamma protokoll behövs
- En första översikt över protokollstacken
- Portnummer och hur rätt serverprogram identifieras
- TCP:s logiska anslutning
- Byte-ström och segmentering
- Sekvensnummer och ordnad leverans
- Bekräftelser och omsändning av förlorad data
- IP-adressering
- IP-paket och routrarnas uppgift
- Skillnaden mellan TCP:s och IP:s ansvar
- Inkapsling ned genom protokollstacken
- Uppackning hos servern
  Här bör du uttryckligen hjälpa nybörjaren att prioritera:
  Du behöver inte komma ihåg alla detaljer i TCP. Det viktiga just nu är att TCP ger programmen en tillförlitlig och ordnad kommunikation, medan IP ser till att paketen kan adresseras och skickas genom nätet.

Det gör att vi kan gå på djupet utan att studenten tror att allt kommer på tentan eller måste memoreras efter första veckan.

### Film 3: Från serverns svar till HTML och CSS

Filnamn: F1c.md
Cirka 9–12 minuter.
Den här filmen ska landa i det som kursen faktiskt handlar mest om.

- Den fullständiga resan från URL till server
- HTTP-begäran och HTTP-svar
- En enkel statuskod
- Servern skickar tillbaka ett HTML-dokument
- Webbläsaren tolkar HTML-strukturen
- HTML-dokumentet refererar till CSS, bilder och andra resurser
- Webbläsaren gör därför flera nya begäranden
- CSS påverkar presentationen av HTML-dokumentet
- Hela kedjan sammanfattas
- Tydlig övergång till kursens kommande HTML-del
  Avslutningen kan exempelvis vara:
  Nätverkstekniken gör att dokumentet kan transporteras från servern till webbläsaren. HTTP beskriver hur webbläsaren frågar efter dokumentet. HTML beskriver innehållet och strukturen, medan CSS beskriver hur innehållet presenteras. Det är de två sista delarna vi nu ska börja arbeta praktiskt med.

Vad studenten bör ta med sig
Efter introduktionsserien bör studenten verkligen förstå:

- skillnaden mellan Internet och webben
- klient–server-modellen
- begäran och svar
- skillnaden mellan domännamn och IP-adress
- TCP:s respektive IP:s huvudsakliga uppgift
- att HTTP används mellan webbläsare och webbserver
- att HTML och CSS är resurser som transporteras via denna infrastruktur
  Studenten behöver bara känna igen:
- LAN, WAN och gateway
- portnummer
- protokollstack och inkapsling
- TCP-segment, sekvensnummer och omsändning
- den hierarkiska DNS-processen
  Detta ger oss rätt balans: TCP/IP kan fortfarande behandlas ordentligt, men första mötet med kursen känns som en inbjudan till webbutveckling snarare än en komprimerad nätverkskurs.
