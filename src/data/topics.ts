import type { Topic } from "./types";

/*
 * Materiał merytoryczny ("Zagadnienia") opracowany na podstawie prezentacji
 * wykładowcy oraz treści ustaw:
 *  - Konstytucja RP z 2.04.1997 r.
 *  - Ustawa z 27.07.2001 r. — Prawo o ustroju sądów powszechnych (u.s.p.)
 *  - Ustawa z 8.12.2017 r. o Sądzie Najwyższym
 *  - Ustawa z 26.05.1982 r. — Prawo o adwokaturze
 * Cytaty przepisów są wierne; długie przepisy skrócono, zaznaczając to (…).
 */

export const topics: Topic[] = [
  /* ============ 1. ZASADY USTROJOWO-ORGANIZACYJNE ============ */
  {
    id: "zasady",
    title: "Zasady ustrojowo-organizacyjne",
    subtitle: "Konstytucyjne fundamenty wymiaru sprawiedliwości",
    icon: "Scale",
    act: "Konstytucja RP + Prawo o ustroju sądów powszechnych",
    origin: "pani",
    originNote: "Prezentacja „Zasady ustrojowo-organizacyjne”",
    pdf: "akty/prawo-o-ustroju-sadow-powszechnych.pdf",
    sections: [
      {
        id: "sadowy-wymiar",
        title: "1. Zasada sądowego wymiaru sprawiedliwości",
        intro:
          "Wymiar sprawiedliwości jest monopolem sądów — nie może być powierzony władzy wykonawczej ani ustawodawczej. Zasada pozostaje skorelowana z trójpodziałem władzy.",
        articles: [
          {
            ref: "Art. 10 Konstytucji RP",
            title: "Zasada podziału władz",
            text:
              "1. Ustrój Rzeczypospolitej Polskiej opiera się na podziale i równowadze władzy ustawodawczej, władzy wykonawczej i władzy sądowniczej.\n2. Władzę ustawodawczą sprawują Sejm i Senat, władzę wykonawczą Prezydent RP i Rada Ministrów, a władzę sądowniczą sądy i trybunały.",
            highlight:
              "Władza sądownicza = sądy i trybunały. Ustawodawcza = Sejm i Senat. Wykonawcza = Prezydent RP i Rada Ministrów.",
          },
          {
            ref: "Art. 173 Konstytucji RP",
            title: "Niezależność i odrębność sądów i Trybunałów",
            text: "Sądy i Trybunały są władzą odrębną i niezależną od innych władz.",
            highlight: "Odrębność + niezależność sądów i Trybunałów.",
          },
          {
            ref: "Art. 175 Konstytucji RP",
            title: "Kto sprawuje wymiar sprawiedliwości",
            text:
              "Wymiar sprawiedliwości w Rzeczypospolitej Polskiej sprawują Sąd Najwyższy, sądy powszechne, sądy administracyjne oraz sądy wojskowe.",
            highlight:
              "CZTERY kategorie sądów: SN, sądy powszechne, administracyjne, wojskowe. Trybunały (TK, TS) NIE sprawują wymiaru sprawiedliwości w rozumieniu art. 175.",
          },
          {
            ref: "Art. 1 u.s.p.",
            title: "Rodzaje i zadania sądów powszechnych",
            text:
              "§ 1. Sądami powszechnymi są sądy rejonowe, sądy okręgowe oraz sądy apelacyjne.\n§ 2. Sądy powszechne sprawują wymiar sprawiedliwości w zakresie nienależącym do sądów administracyjnych, sądów wojskowych oraz Sądu Najwyższego.\n§ 3. Sądy powszechne wykonują również inne zadania z zakresu ochrony prawnej.\n§ 4. Ilekroć w przepisach jest mowa o sądach bez bliższego określenia — rozumie się przez to sądy powszechne.",
            highlight:
              "Trójstopniowa struktura: sądy rejonowe → okręgowe → apelacyjne. Sądy powszechne mają domniemanie kompetencji (wszystko, co nie należy do SN, sądów administracyjnych i wojskowych).",
          },
          {
            ref: "Doktryna — pojęcie wymiaru sprawiedliwości",
            title: "Trzy koncepcje (brak definicji legalnej)",
            text:
              "Koncepcja podmiotowa — wymiar sprawiedliwości to działalność sądów.\nKoncepcja przedmiotowa — istotne są cechy działalności (w oderwaniu od podmiotu).\nKoncepcja podmiotowo-przedmiotowa — połączenie obu (cechy działalności + cechy podmiotu).\n\nZ art. 175 ust. 1 skorelowana jest koncepcja PRZEDMIOTOWA — przepis ustanawia normę kompetencyjną, na mocy której sądy mają MONOPOL w sprawowaniu wymiaru sprawiedliwości.",
            highlight:
              "Fundamentalna cecha wymiaru sprawiedliwości = rozstrzyganie sporów (konfliktów) o prawa lub obowiązki jednostki. Zasada ma wymiar ABSOLUTNY.",
          },
        ],
      },
      {
        id: "prawo-do-sadu",
        title: "2. Zasada prawa do sądu",
        articles: [
          {
            ref: "Art. 45 ust. 1 Konstytucji RP",
            title: "Prawo do sądu",
            text:
              "Każdy ma prawo do sprawiedliwego i jawnego rozpatrzenia sprawy bez nieuzasadnionej zwłoki przez właściwy, niezależny, bezstronny i niezawisły sąd.",
            highlight:
              "Czerpie treść z art. 6 ust. 1 EKPC oraz art. 14 ust. 1 MPPOiP. Umiejscowienie: rozdział „Wolności i prawa osobiste” → prawo do sądu jako indywidualne prawo podmiotowe.",
          },
          {
            ref: "Struktura prawa do sądu",
            title: "Trójelementowa struktura",
            text:
              "1. Prawo dostępu do sądu — prawo do uruchomienia postępowania przed sądem mającym atrybuty z art. 45 ust. 1 (ma charakter pierwotny).\n2. Prawo do odpowiednio ukształtowanej procedury sądowej — zgodnej z wymogami sprawiedliwości i jawności.\n3. Prawo do wyroku sądowego — do uzyskania wiążącego rozstrzygnięcia sprawy przez sąd.",
            highlight: "Dostęp → odpowiednia procedura → wyrok.",
          },
          {
            ref: "Art. 77 ust. 2 Konstytucji RP",
            title: "Symetryczność treściowa z art. 45 ust. 1",
            text:
              "„Ustawa nie może nikomu zamykać drogi sądowej dochodzenia naruszonych wolności lub praw.”",
            highlight:
              "Art. 45 ust. 1 = formuła POZYTYWNA prawa do sądu; art. 77 ust. 2 = formuła NEGATYWNA (zakaz zamykania drogi sądowej). Razem tworzą symetryczność treściową.",
          },
        ],
      },
      {
        id: "bezstronnosc",
        title: "3. Zasada bezstronności",
        articles: [
          {
            ref: "Art. 45 ust. 1 Konstytucji RP / art. 6 ust. 1 EKPC / art. 14 ust. 1 MPPOiP",
            title: "Bezstronność sądu",
            text:
              "Dyrektywa nakazująca zachowanie bezstronnego stosunku do uczestników postępowania i do sprawy. Dwa aspekty:\n• 1 aspekt — bezstronność w stosunku do stron postępowania;\n• 2 aspekt — bezstronność w stosunku do sprawy.",
            highlight:
              "Źródła zasady: Konstytucja RP (art. 45 ust. 1), EKPC (art. 6 ust. 1), MPPOiP (art. 14 ust. 1).",
          },
        ],
      },
      {
        id: "niezawislosc",
        title: "4. Zasada niezawisłości sędziowskiej",
        articles: [
          {
            ref: "Art. 178, 195, 199 Konstytucji RP",
            title: "Źródło i zakres",
            text:
              "Art. 45 ust. 1 — prawo do rozpatrzenia sprawy przez sąd niezawisły.\nArt. 195 ust. 1 — sędziowie TK w sprawowaniu urzędu są niezawiśli i podlegają tylko Konstytucji.\nArt. 199 ust. 3 — członkowie Trybunału Stanu w sprawowaniu funkcji są niezawiśli i podlegają tylko Konstytucji oraz ustawom.",
            highlight:
              "Istota: dyrektywa nakazująca sędziemu orzekanie na podstawie Konstytucji RP, ustaw i swego wewnętrznego przekonania. Nikt nie może wpływać na sędziego ani go w tej funkcji zastępować.",
          },
          {
            ref: "Treść niezawisłości",
            title: "Co oznacza niezawisłość",
            text:
              "• zakaz wywierania jakiegokolwiek wpływu na sędziego co do kierunku rozpoznania sprawy lub treści orzeczeń;\n• niezależność w rozstrzyganiu wątpliwości dotyczących stanu faktycznego i prawnego sprawy;\n• niezależność w wydawaniu wszelkich rozstrzygnięć w toku postępowania oraz orzeczenia kończącego;\n• brak odpowiedzialności karnej i dyscyplinarnej za orzeczenia wydane zgodnie z własnym sumieniem, w granicach swobodnej oceny dowodów i na podstawie ustawy.",
          },
          {
            ref: "Gwarancje ustrojowe niezawisłości",
            title: "Siedem gwarancji",
            text:
              "1. Odpowiedni poziom etyczno-moralny (nieskazitelny charakter kandydata).\n2. Odpowiednie przygotowanie zawodowe.\n3. Stałość zawodu sędziowskiego.\n4. Niepołączalność stanowiska sędziego z innym zawodem.\n5. Materialna niezależność sędziego.\n6. Immunitet sędziowski.\n7. Samorządność sędziowska.",
            highlight: "Te 7 gwarancji to klasyczne pytanie egzaminacyjne.",
          },
        ],
      },
      {
        id: "kolegialnosc-czynnik",
        title: "5–6. Zasada kolegialności i udziału czynnika społecznego",
        articles: [
          {
            ref: "Zasada kolegialności",
            title: "Kolegialność orzekania",
            text:
              "Dyrektywa, zgodnie z którą rozstrzygnięcia sądów powinny zapadać kolegialnie. Jej przeciwieństwem jest jednoosobowy skład sądu.\nZalety: wszechstronna i rzetelna ocena stanu faktycznego oraz ograniczenie wpływu indywidualnych cech sędziego na treść decyzji.",
          },
          {
            ref: "Art. 182 Konstytucji RP / Art. 4 u.s.p.",
            title: "Udział czynnika społecznego",
            text:
              "Art. 182 Konstytucji: „Udział obywateli w sprawowaniu wymiaru sprawiedliwości określa ustawa”.\nArt. 4 § 1 u.s.p.: w sprawowaniu wymiaru sprawiedliwości obywatele biorą udział przez uczestnictwo ławników w rozpoznawaniu spraw przed sądami w pierwszej instancji, chyba że ustawy stanowią inaczej.\n§ 2: Przy rozstrzyganiu spraw ławnicy mają równe prawa z sędziami i asesorami sądowymi.",
            highlight:
              "Czynnik społeczny = ŁAWNICY, orzekający co do zasady w I instancji, z równymi prawami co sędziowie.",
          },
        ],
      },
    ],
  },

  /* ============ 2. ORGANIZACJA I ORGANY SĄDÓW POWSZECHNYCH ============ */
  {
    id: "organizacja",
    title: "Organizacja i organy sądów powszechnych",
    subtitle: "Prezes, kolegium, dyrektor — schematy organizacyjne",
    icon: "Building2",
    act: "Prawo o ustroju sądów powszechnych (art. 21–32)",
    origin: "ai",
    originNote: "Opracowano z AI na podstawie ustawy; arkusz schematów pochodzi od wykładowcy",
    pdf: "akty/prawo-o-ustroju-sadow-powszechnych.pdf",
    sections: [
      {
        id: "organy",
        title: "Organy sądów (art. 21)",
        intro:
          "Każdy szczebel sądownictwa ma własny zestaw organów. Kolegium występuje tylko w sądzie okręgowym i apelacyjnym.",
        articles: [
          {
            ref: "Art. 21 § 1 u.s.p.",
            title: "Organami sądu są",
            text:
              "1) w sądzie rejonowym — prezes sądu i dyrektor sądu (z zastrzeżeniem art. 21a § 1);\n2) w sądzie okręgowym — prezes sądu, kolegium sądu i dyrektor sądu;\n3) w sądzie apelacyjnym — prezes sądu, kolegium sądu i dyrektor sądu.",
            highlight:
              "Sąd rejonowy: prezes + dyrektor. Sąd okręgowy i apelacyjny: prezes + KOLEGIUM + dyrektor. Kolegium tylko w SO i SA!",
          },
          {
            ref: "Art. 21a § 1 u.s.p.",
            title: "Dyrektor w sądzie rejonowym — FAKULTATYWNY",
            text:
              "W sądzie rejonowym MOŻNA powołać dyrektora sądu, jeżeli uzasadniają to względy organizacyjne (w szczególności wielkość sądu lub odległość od sądu okręgowego). W sądzie rejonowym, w którym nie powołuje się dyrektora, zadania dyrektora wykonuje dyrektor przełożonego sądu okręgowego.",
            highlight:
              "ODPOWIEDŹ na ćwiczenie: stanowisko dyrektora w sądzie rejonowym jest FAKULTATYWNE („można powołać”). W SO i SA dyrektor jest obligatoryjny.",
          },
          {
            ref: "Art. 32 § 1 u.s.p.",
            title: "Powołanie i zwierzchnictwo nad dyrektorem",
            text:
              "Dyrektora sądu zatrudnia się na podstawie powołania. Dyrektora sądu powołuje i odwołuje MINISTER SPRAWIEDLIWOŚCI.\nW zakresie budżetowym (art. 177 § 4) dyrektor sądu apelacyjnego podlega bezpośrednio Ministrowi Sprawiedliwości, a dyrektorzy sądów okręgowych i rejonowych — dyrektorowi przełożonego sądu apelacyjnego.",
            highlight:
              "ODPOWIEDŹ na ćwiczenie: dyrektora powołuje i odwołuje Minister Sprawiedliwości — to on jest zwierzchnikiem dyrektora sądu (nie prezes).",
          },
        ],
      },
      {
        id: "prezes",
        title: "Prezes sądu (art. 22, 22b)",
        articles: [
          {
            ref: "Art. 22 § 1 u.s.p.",
            title: "Kompetencje prezesa sądu",
            text:
              "Prezes sądu:\n1) kieruje sądem i reprezentuje sąd na zewnątrz (z wyjątkiem spraw należących do kompetencji dyrektora), a w szczególności:\n   a) kieruje działalnością administracyjną sądu w zakresie wskazanym w art. 8 pkt 2,\n   b) jest zwierzchnikiem służbowym sędziów, asesorów sądowych, referendarzy sądowych i asystentów sędziów danego sądu,\n   c) powierza sędziom, asesorom i referendarzom pełnienie funkcji i zwalnia z nich;\n2) dokonuje analizy orzecznictwa pod względem jednolitości i informuje o jej wynikach;\n3) pełni inne czynności przewidziane w ustawie oraz przepisach odrębnych.",
            highlight:
              "Prezes = pion ORZECZNICZY/administracyjny (art. 8 pkt 2) i zwierzchnik służbowy sędziów. Dyrektor = pion finansowo-gospodarczy (art. 8 pkt 1).",
          },
          {
            ref: "Art. 22b § 1–2 u.s.p.",
            title: "Zastępowanie prezesa (uzupełnienie ćwiczenia)",
            text:
              "§ 1. Prezesa sądu zastępuje WICEPREZES sądu, a w razie jego nieobecności — wyznaczony sędzia.\n§ 2. Jeżeli prezes sądu nie został powołany, funkcję prezesa wykonuje — przez okres nie dłuższy niż SZEŚĆ miesięcy — wiceprezes sądu. Gdy powołano więcej niż jednego wiceprezesa, funkcję prezesa wykonuje wiceprezes najstarszy służbą. Jeżeli nie powołano wiceprezesa, funkcję prezesa — przez okres nie dłuższy niż 6 miesięcy — wykonuje najstarszy służbą sędzia pełniący funkcję przewodniczącego wydziału w tym sądzie.",
          },
        ],
      },
      {
        id: "powolanie-prezesow",
        title: "Powoływanie i odwoływanie prezesów (art. 23–27)",
        articles: [
          {
            ref: "Art. 23–25 u.s.p.",
            title: "Kto, spośród kogo, na jak długo",
            text:
              "PREZES SĄDU APELACYJNEGO — powołuje Minister Sprawiedliwości spośród sędziów SA albo SO; po powołaniu przedstawia go zgromadzeniu ogólnemu sędziów SA.\nPREZES SĄDU OKRĘGOWEGO — powołuje Minister Sprawiedliwości spośród sędziów SA, SO albo SR.\nPREZES SĄDU REJONOWEGO — powołuje Minister Sprawiedliwości spośród sędziów SO albo SR.\nWiceprezesów powołuje Minister Sprawiedliwości na wniosek prezesa danego sądu.",
            highlight:
              "Wszystkich prezesów powołuje MINISTER SPRAWIEDLIWOŚCI. Im wyższy sąd, tym węższy krąg kandydatów „w dół” (np. prezesa SR — spośród sędziów SO albo SR).",
          },
          {
            ref: "Art. 26 u.s.p.",
            title: "Kadencja prezesów",
            text:
              "Prezes SA i prezes SO — 6 lat; nie mogą być ponownie powołani na prezesa/wiceprezesa w tym sądzie przed upływem 6 lat od zakończenia kadencji.\nPrezes SR — 4 lata, najwyżej na dwie kolejne kadencje; nie może być powołany na prezesa/wiceprezesa SR przed upływem 4 lat od zakończenia funkcji.",
            highlight:
              "SA/SO: 6 lat. SR: 4 lata, maks. 2 kolejne kadencje.",
          },
          {
            ref: "Art. 27 u.s.p.",
            title: "Odwołanie prezesa/wiceprezesa w toku kadencji",
            text:
              "PODMIOT: Minister Sprawiedliwości. PRZYCZYNY:\n1) rażące lub uporczywe niewywiązywanie się z obowiązków służbowych;\n2) gdy dalszego pełnienia funkcji nie da się pogodzić z dobrem wymiaru sprawiedliwości;\n3) stwierdzenie szczególnie niskiej efektywności w nadzorze administracyjnym lub organizacji pracy;\n4) złożenie rezygnacji z funkcji.\nOdwołanie następuje po zasięgnięciu opinii kolegium właściwego sądu. Negatywna opinia KRS jest wiążąca, jeżeli uchwałę podjęto większością 2/3 głosów.",
          },
        ],
      },
      {
        id: "kolegium",
        title: "Kolegium sądu (art. 28, 30)",
        articles: [
          {
            ref: "Art. 28 u.s.p.",
            title: "Kolegium sądu apelacyjnego",
            text:
              "SKŁAD: prezes SA oraz prezesi sądów okręgowych z obszaru właściwości SA.\nPRZEWODNICZĄCY: prezes SA, a w razie jego nieobecności — najstarszy służbą członek kolegium.\nUCHWAŁY: większością głosów; quorum — co najmniej połowa wszystkich członków.\nGŁOSOWANIE: tajne, jeżeli zażąda tego choćby jeden obecny członek.\nCZĘSTOTLIWOŚĆ: nie rzadziej niż raz na kwartał.\nTRYB ZWOŁANIA: prezes SA z własnej inicjatywy lub na wniosek 1/3 członków kolegium.",
            highlight:
              "Kolegium SA = prezes SA + prezesi SO. Quorum: połowa. Tajne na żądanie 1 członka. Posiedzenia min. raz na kwartał.",
          },
          {
            ref: "Art. 30 u.s.p.",
            title: "Kolegium sądu okręgowego",
            text:
              "SKŁAD: prezes SO oraz prezesi sądów rejonowych z obszaru właściwości SO.\nDo kolegium SO stosuje się odpowiednio przepisy o kolegium SA (przewodniczący, uchwały, głosowanie, częstotliwość, tryb zwołania).",
            highlight: "Kolegium SO = prezes SO + prezesi sądów rejonowych.",
          },
        ],
      },
    ],
  },

  /* ============ 3. STATUS SĘDZIEGO ============ */
  {
    id: "status",
    title: "Status sędziego",
    subtitle: "Od powołania do stanu spoczynku (art. 65–81 u.s.p.)",
    icon: "Gavel",
    act: "Prawo o ustroju sądów powszechnych",
    origin: "pani",
    originNote: "Prezentacja „Status sędziego”",
    pdf: "akty/prawo-o-ustroju-sadow-powszechnych.pdf",
    sections: [
      {
        id: "powstanie",
        title: "Powstanie stosunku służbowego",
        articles: [
          {
            ref: "Art. 65 u.s.p.",
            title: "Powstanie stosunku służbowego",
            text:
              "§ 1. Stosunek służbowy sędziego nawiązuje się po doręczeniu mu aktu powołania.\n§ 2. Sędzia powinien zgłosić się w celu objęcia pierwszego stanowiska w ciągu 14 dni od otrzymania aktu powołania.\n§ 3. W razie nieusprawiedliwionego nieobjęcia pierwszego stanowiska w terminie, powołanie traci moc; okoliczność tę stwierdza Minister Sprawiedliwości.",
            highlight:
              "Nawiązanie = doręczenie aktu powołania (raz, przy pierwszym stanowisku). Skuteczność uzależniona od objęcia stanowiska w ciągu 14 dni.",
          },
          {
            ref: "Art. 66 u.s.p.",
            title: "Ślubowanie",
            text:
              "§ 1. Przy powołaniu sędzia składa ślubowanie WOBEC PREZYDENTA RP wg roty: „Ślubuję uroczyście jako sędzia sądu powszechnego służyć wiernie Rzeczypospolitej Polskiej, stać na straży prawa, obowiązki sędziego wypełniać sumiennie, sprawiedliwość wymierzać zgodnie z przepisami prawa, bezstronnie według mego sumienia, dochować tajemnicy prawnie chronionej, a w postępowaniu kierować się zasadami godności i uczciwości.”; można dodać: „Tak mi dopomóż Bóg.”.\n§ 2. Odmowa złożenia ślubowania jest równoznaczna ze zrzeczeniem się stanowiska sędziowskiego.",
            highlight:
              "Ślubowanie sędziego — wobec PREZYDENTA RP. (Dla porównania: referendarz — wobec prezesa sądu, adwokat — wobec dziekana.)",
          },
        ],
      },
      {
        id: "ustanie",
        title: "Ustanie stosunku służbowego",
        articles: [
          {
            ref: "Art. 68 u.s.p.",
            title: "Ustanie stosunku służbowego",
            text:
              "§ 1. Stosunek służbowy rozwiązuje się z mocy prawa, jeżeli sędzia zrzekł się urzędu. Zrzeczenie jest skuteczne po upływie 3 miesięcy od złożenia oświadczenia Ministrowi Sprawiedliwości, chyba że Minister określi inny termin. O zrzeczeniu Minister zawiadamia KRS i Prezydenta RP.\n§ 2. Prawomocny wyrok sądu dyscyplinarnego o złożeniu z urzędu oraz prawomocne orzeczenie środka karnego (pozbawienie praw publicznych, zakaz zajmowania stanowiska sędziego) powoduje z mocy prawa utratę urzędu — stosunek służbowy wygasa z chwilą uprawomocnienia.\n§ 3. Stosunek służbowy wygasa z dniem utraty obywatelstwa polskiego.",
            highlight:
              "Zrzeczenie się urzędu skuteczne po 3 miesiącach. Tło konstytucyjne: art. 179 (powołanie na czas nieoznaczony) i art. 180 (nieusuwalność).",
          },
        ],
      },
      {
        id: "spoczynek",
        title: "Stan spoczynku",
        articles: [
          {
            ref: "Art. 69 u.s.p.",
            title: "Przejście w stan spoczynku",
            text:
              "§ 1. Sędzia przechodzi w stan spoczynku z dniem ukończenia 65. roku życia, chyba że nie później niż na 6 i nie wcześniej niż na 12 miesięcy przed ukończeniem tego wieku oświadczy KRS wolę dalszego zajmowania stanowiska i przedstawi zaświadczenie o zdolności zdrowotnej.\n§ 1b. KRS może wyrazić zgodę na dalsze zajmowanie stanowiska, jeżeli uzasadnia to interes wymiaru sprawiedliwości lub ważny interes społeczny. Uchwała KRS jest ostateczna.\n§ 2b. Sędzia będący kobietą przechodzi na swój wniosek w stan spoczynku po ukończeniu 60 lat, niezależnie od stażu.\n§ 3. Za zgodą KRS sędzia może zajmować stanowisko nie dłużej niż do ukończenia 70. roku życia.",
            highlight:
              "Zasada: 65 lat. Kobieta-sędzia: na wniosek od 60 lat. Max do 70 lat za zgodą KRS (uchwała ostateczna, niezaskarżalna).",
          },
          {
            ref: "Art. 70 u.s.p.",
            title: "Przeniesienie w stan spoczynku (choroba) — OBLIGATORYJNE",
            text:
              "§ 1. Sędziego przenosi się w stan spoczynku na jego wniosek albo na wniosek właściwego kolegium sądu, jeżeli z powodu choroby lub utraty sił został uznany przez lekarza orzecznika ZUS za trwale niezdolnego do pełnienia obowiązków.\n§ 3a. Od orzeczenia lekarza orzecznika przysługuje sprzeciw do komisji lekarskiej ZUS w ciągu 14 dni od doręczenia.",
            highlight:
              "Art. 70 = przeniesienie OBLIGATORYJNE (choroba/utrata sił, trwała niezdolność). Orzeka lekarz orzecznik ZUS; sprzeciw — 14 dni.",
          },
          {
            ref: "Art. 71 u.s.p.",
            title: "Przeniesienie w stan spoczynku — FAKULTATYWNE",
            text:
              "§ 2. Sędzia MOŻE być przeniesiony w stan spoczynku, jeżeli bez uzasadnionej przyczyny nie poddał się badaniu (na żądanie kolegium albo Ministra Sprawiedliwości).\n§ 3. Sędzia może być również przeniesiony w stan spoczynku, na wniosek Ministra Sprawiedliwości, w razie zmiany ustroju sądów lub granic okręgów sądowych, jeżeli nie został przeniesiony do innego sądu (koresponduje z art. 180 ust. 5 Konstytucji).",
            highlight: "Art. 71 = przeniesienie FAKULTATYWNE.",
          },
          {
            ref: "Art. 73 u.s.p.",
            title: "Decyzje KRS i odwołanie do SN",
            text:
              "§ 1. W sprawach przeniesienia w stan spoczynku (art. 70 i 71) decyzję podejmuje Krajowa Rada Sądownictwa.\n§ 2. Od decyzji KRS przysługuje odwołanie do Sądu Najwyższego.\n§ 3. Odwołanie wnosi się za pośrednictwem KRS w terminie miesiąca od doręczenia decyzji.",
            highlight: "Odwołanie od decyzji KRS → do Sądu Najwyższego (1 miesiąc).",
          },
        ],
      },
      {
        id: "przeniesienie-delegowanie",
        title: "Przeniesienie i delegowanie",
        articles: [
          {
            ref: "Art. 75 u.s.p.",
            title: "Przeniesienie sędziego na inne miejsce służbowe",
            text:
              "§ 1. Przeniesienie sędziego na inne miejsce służbowe może nastąpić tylko ZA JEGO ZGODĄ.\n§ 2. Zgoda nie jest wymagana m.in. w razie: zniesienia stanowiska/sądu/wydziału lub przeniesienia siedziby sądu; niedopuszczalności zajmowania stanowiska (art. 6 — powinowactwo); gdy wymaga tego powaga stanowiska (orzeczenie sądu dyscyplinarnego); przeniesienia w wyniku kary dyscyplinarnej.\n§ 3. Decyzję wydaje MINISTER SPRAWIEDLIWOŚCI.\n§ 4. W przypadkach z § 2 pkt 1 i 2 przysługuje odwołanie do Sądu Najwyższego.",
            highlight:
              "Zasada: zgoda sędziego. Wyjątki — enumeratywne. Organ: Minister Sprawiedliwości.",
          },
          {
            ref: "Art. 77 u.s.p.",
            title: "Delegowanie sędziego",
            text:
              "§ 1. Minister Sprawiedliwości może delegować sędziego, ZA JEGO ZGODĄ, do pełnienia obowiązków m.in.: w innym sądzie (równorzędnym, niższym, wyjątkowo wyższym); w Ministerstwie Sprawiedliwości; w Kancelarii Prezydenta RP; w Sądzie Najwyższym; w sądzie administracyjnym — na czas określony, nie dłuższy niż 2 lata, albo na czas nieokreślony.\n§ 8. Prezes sądu apelacyjnego może delegować sędziego do sądu równorzędnego lub niższego na obszarze apelacji — za zgodą sędziego — na okres nie dłuższy niż 6 miesięcy w roku.",
            highlight:
              "Delegowanie wymaga ZGODY sędziego (wola sędziego = warunek konstytutywny). Min. Sprawiedliwości: do 2 lat / bezterminowo; prezes SA: do 6 miesięcy w roku.",
          },
          {
            ref: "Art. 22a § 4a–4b u.s.p.",
            title: "Przeniesienie do innego wydziału",
            text:
              "§ 4a. Przeniesienie sędziego do innego wydziału WYMAGA ZGODY sędziego.\n§ 4b. Zgoda nie jest wymagana, jeżeli: przeniesienie następuje do wydziału rozpoznającego sprawy z tego samego zakresu; żaden inny sędzia w wydziale nie wyraził zgody; przenoszony sędzia jest przydzielony do wydziału, o którym mowa w § 2.\n§ 5. Od zmiany podziału czynności sędzia może odwołać się do KRS w terminie 7 dni.",
            highlight:
              "ODPOWIEDŹ na ćwiczenie: przeniesienie do innego wydziału CO DO ZASADY wymaga zgody sędziego (z wyjątkami).",
          },
          {
            ref: "Art. 79 u.s.p.",
            title: "Podległość poleceniom administracyjnym",
            text:
              "Sędzia nie może, powołując się na zasadę niezawisłości, uchylić się od wykonania poleceń w zakresie czynności administracyjnych, jeżeli z mocy ustawy należą do obowiązków sędziowskich, a także poleceń dotyczących sprawności postępowania; MOŻE jednak domagać się wydania polecenia na piśmie.",
            highlight:
              "Czynności administracyjne ≠ sfera niezawisłości (art. 9b). Sędzia może żądać polecenia na piśmie.",
          },
        ],
      },
    ],
  },

  /* ============ 4. SĄD NAJWYŻSZY ============ */
  {
    id: "sn",
    title: "Sąd Najwyższy",
    subtitle: "Ustrój, izby i organy SN",
    icon: "Landmark",
    act: "Ustawa z dnia 8 grudnia 2017 r. o Sądzie Najwyższym",
    origin: "ai",
    originNote: "Opracowano z AI na podstawie ustawy o SN i testu wykładowcy",
    pdf: "akty/ustawa-o-sadzie-najwyzszym.pdf",
    sections: [
      {
        id: "pozycja",
        title: "Pozycja ustrojowa i izby",
        articles: [
          {
            ref: "Pozycja SN",
            title: "Sąd Najwyższy — podstawy",
            text:
              "Sąd Najwyższy jest organem władzy sądowniczej. Ma siedzibę w WARSZAWIE i dzieli się na IZBY (nie na wydziały).\nSN sprawuje wymiar sprawiedliwości m.in. przez zapewnienie zgodności z prawem i jednolitości orzecznictwa sądów powszechnych i sądów wojskowych — przez rozpoznawanie środków odwoławczych oraz podejmowanie uchwał rozstrzygających zagadnienia prawne (nie dotyczy sądów administracyjnych — te nadzoruje NSA).\nRegulamin SN określa PREZYDENT RP, po zasięgnięciu opinii Kolegium SN, w drodze rozporządzenia.",
            highlight:
              "Siedziba: Warszawa. Podział: na izby. SN zapewnia jednolitość orzecznictwa sądów powszechnych i wojskowych (nie administracyjnych).",
          },
          {
            ref: "Izby Sądu Najwyższego",
            title: "Pięć izb SN",
            text:
              "1) Izba Cywilna;\n2) Izba Karna;\n3) Izba Pracy i Ubezpieczeń Społecznych;\n4) Izba Kontroli Nadzwyczajnej i Spraw Publicznych;\n5) Izba Odpowiedzialności Zawodowej.\n\nIzba Dyscyplinarna została zniesiona.",
            highlight:
              "Izbą SN NIE JEST Izba Dyscyplinarna (zniesiona). Pamiętaj o Izbie Odpowiedzialności Zawodowej.",
          },
        ],
      },
      {
        id: "organy-sn",
        title: "Organy SN",
        articles: [
          {
            ref: "Organy Sądu Najwyższego",
            title: "Katalog organów",
            text:
              "Organami SN są: Pierwszy Prezes SN, Prezes SN, Zgromadzenie Ogólne Sędziów SN, zgromadzenie sędziów izby SN, zgromadzenie sędziów orzekających w Izbie Odpowiedzialności Zawodowej, zgromadzenie sędziów wyznaczonych do orzekania w Izbie Odpowiedzialności Zawodowej oraz Kolegium SN.",
            highlight:
              "Coroczną informację o działalności SN Pierwszy Prezes składa: Prezydentowi RP, KRS, Sejmowi i Senatowi.",
          },
          {
            ref: "Pierwszy Prezes SN",
            title: "Powoływanie Pierwszego Prezesa SN",
            text:
              "Powołuje go PREZYDENT RP na 6-letnią kadencję spośród 5 kandydatów wybranych przez Zgromadzenie Ogólne Sędziów SN; może być ponownie powołany tylko raz.\nKandydata ma prawo zgłosić każdy sędzia SN (wyłącznie jednego). Zgłoszenia dokonuje się przewodniczącemu Zgromadzenia Ogólnego Sędziów SN.\nDo wyboru kandydatów wymagana jest obecność co najmniej 84 członków Zgromadzenia.\nW czasie nieobecności zastępuje go wyznaczony przez niego Prezes SN, a w razie niemożności — Prezes SN najstarszy służbą.",
            highlight: "Pierwszy Prezes SN: Prezydent RP, 6 lat, 5 kandydatów, max 2 kadencje.",
          },
          {
            ref: "Prezes SN",
            title: "Powoływanie Prezesa SN (kierującego izbą)",
            text:
              "Powołuje go PREZYDENT RP, po zasięgnięciu opinii Pierwszego Prezesa SN, na 3-letnią kadencję spośród 3 kandydatów przedstawionych przez zgromadzenie sędziów izby SN; może być ponownie wybrany tylko dwukrotnie.\nDo wyboru wymagana jest obecność co najmniej 2/3 członków zgromadzenia sędziów izby SN.\nKandydatów na Prezesa kierującego Izbą Odpowiedzialności Zawodowej przedstawia zgromadzenie sędziów orzekających w tej izbie.",
            highlight: "Prezes SN: Prezydent RP (opinia I Prezesa), 3 lata, 3 kandydatów, max 2 razy ponownie.",
          },
          {
            ref: "Kolegium SN",
            title: "Skład Kolegium SN",
            text:
              "Kolegium SN tworzą: Pierwszy Prezes SN, Prezesi SN oraz sędziowie wybrani przez zgromadzenia sędziów izby SN na okres 3 lat.\nPrzewodniczącym Kolegium jest Pierwszy Prezes SN. Do podjęcia uchwały wymagana jest obecność co najmniej 2/3 liczby członków Kolegium.",
          },
        ],
      },
      {
        id: "sedziowie-sn",
        title: "Sędziowie SN i test niezawisłości",
        articles: [
          {
            ref: "Wymagania na sędziego SN",
            title: "Kto może zostać sędzią SN",
            text:
              "Osoba, która m.in.: ma wyłącznie obywatelstwo polskie i pełnię praw cywilnych i publicznych; nie była skazana za UMYŚLNE przestępstwo ścigane z oskarżenia publicznego lub umyślne przestępstwo skarbowe; ukończyła 40 lat; jest nieskazitelnego charakteru; ukończyła wyższe studia prawnicze (mgr); wyróżnia się wysokim poziomem wiedzy prawniczej; jest zdolna zdrowotnie; ma co najmniej 10-letni staż (sędzia, prokurator, adwokat, radca, notariusz i in.); nie była związana z organami bezpieczeństwa państwa.",
            highlight:
              "Wiek: 40 lat (nie 35!). Niekaralność za UMYŚLNE przestępstwa (nie nieumyślne). Staż: co najmniej 10 lat.",
          },
          {
            ref: "Nabór i stosunek służbowy",
            title: "Powołanie sędziego SN",
            text:
              "Liczbę wolnych stanowisk obwieszcza PREZYDENT RP, po zasięgnięciu opinii Pierwszego Prezesa SN. Kandydaturę zgłasza się KRS w terminie miesiąca od obwieszczenia. Nawiązanie stosunku służbowego następuje na podstawie aktu powołania. Sędzia zgłasza się w celu objęcia stanowiska w terminie 14 dni od doręczenia aktu powołania.\nSędzia SN przechodzi w stan spoczynku z dniem ukończenia 65 lat (kobieta — może od 60 lat; oświadczenie Pierwszemu Prezesowi SN). Datę przejścia/przeniesienia w stan spoczynku stwierdza Prezydent RP.",
            highlight:
              "Obwieszcza Prezydent RP. Zgłoszenie do KRS w 1 miesiąc. Akt powołania, 14 dni na zgłoszenie.",
          },
          {
            ref: "Test niezawisłości i bezstronności",
            title: "Test niezawisłości sędziego SN",
            text:
              "Przeprowadzany NA WNIOSEK (nie z urzędu); dotyczy sędziów SN oraz sędziów delegowanych do orzekania w SN. Wniosek składa się w terminie tygodnia od zawiadomienia o składzie — po upływie terminu prawo wygasa. Wniosek niespełniający wymogów podlega odrzuceniu bez wzywania do uzupełnienia.\nSN rozpoznaje wniosek na posiedzeniu NIEJAWNYM w składzie 5 SĘDZIÓW losowanych spośród całego składu SN, po wysłuchaniu sędziego (wysłuchanie względnie obligatoryjne). Postanowienie jest zaskarżalne w drodze odwołania (legitymacja: wnioskodawca i sędzia, którego dotyczy).",
            highlight:
              "Na wniosek. Termin: tydzień (wygasa). Skład: 5 sędziów losowanych, posiedzenie niejawne. Środek: odwołanie.",
          },
        ],
      },
    ],
  },

  /* ============ 5. ADWOKATURA ============ */
  {
    id: "adwokatura",
    title: "Adwokatura",
    subtitle: "Samorząd zawodowy, organy, dyscyplinarka",
    icon: "Briefcase",
    act: "Ustawa z dnia 26 maja 1982 r. — Prawo o adwokaturze",
    origin: "pani",
    originNote: "Prezentacja „Prawo o adwokaturze”",
    pdf: "akty/prawo-o-adwokaturze.pdf",
    sections: [
      {
        id: "podstawy-adw",
        title: "Podstawy i zadania",
        articles: [
          {
            ref: "Art. 1–2 pr. adw.",
            title: "Czym jest adwokatura",
            text:
              "Adwokaturę stanowi ogół adwokatów oraz aplikantów adwokackich. Samorządność zawodowa adwokatury wynika z art. 17 ust. 1 Konstytucji RP (samorząd zawodu zaufania publicznego).",
            highlight: "Adwokatura = ogół adwokatów + aplikantów adwokackich.",
          },
          {
            ref: "Zadania adwokatury i samorządu",
            title: "Zadania",
            text:
              "Zadania adwokatury: 1) udzielanie pomocy prawnej; 2) współdziałanie w ochronie praw i wolności obywatelskich; 3) współdziałanie w kształtowaniu i stosowaniu prawa.\nZadania samorządu obejmują m.in.: tworzenie warunków wykonywania zadań adwokatury, reprezentowanie adwokatury i ochronę jej praw, nadzór nad wykonywaniem zawodu, doskonalenie zawodowe i kształcenie aplikantów, ustalanie i krzewienie zasad etyki.",
          },
          {
            ref: "Art. 4 pr. adw.",
            title: "Czynności zawodowe",
            text:
              "Zawód adwokata polega na świadczeniu pomocy prawnej, w szczególności na: udzielaniu porad prawnych, sporządzaniu opinii prawnych, opracowywaniu projektów aktów prawnych oraz występowaniu przed sądami i urzędami. Jest to KATALOG OTWARTY. Poświadczenie odpisu dokonane przez adwokata-pełnomocnika ma charakter dokumentu urzędowego.",
            highlight: "Art. 4 ust. 1 — otwarty katalog czynności pomocy prawnej.",
          },
        ],
      },
      {
        id: "wykonywanie",
        title: "Wykonywanie zawodu",
        articles: [
          {
            ref: "Formy wykonywania zawodu",
            title: "Formy",
            text:
              "Adwokat może wykonywać zawód w: kancelarii adwokackiej (indywidualnej), zespole adwokackim, spółce (cywilnej oraz osobowej w rozumieniu KSH).",
          },
          {
            ref: "Art. 4b, 4c, 4d pr. adw.",
            title: "Zakaz i zawieszenie wykonywania zawodu",
            text:
              "Adwokat NIE może wykonywać zawodu, jeżeli: pozostaje w stosunku pracy (poza pracownikami naukowymi i naukowo-dydaktycznymi); jest trwale niezdolny; jest ubezwłasnowolniony; orzeczono zawieszenie w czynnościach zawodowych.\nO trwałej niezdolności orzeka okręgowa rada adwokacka (uchwała po wysłuchaniu adwokata). Adwokat zawieszony nie może występować przed sądami i organami; traci czynne i bierne prawo wyborcze do organów samorządu.",
            highlight:
              "Stosunek pracy wyklucza wykonywanie zawodu (niezależność vs podległość pracodawcy). Wyjątek: pracownicy naukowi i naukowo-dydaktyczni.",
          },
          {
            ref: "Art. 5 pr. adw.",
            title: "Ślubowanie",
            text:
              "Adwokat przed rozpoczęciem czynności zawodowych składa ślubowanie WOBEC DZIEKANA: „Ślubuję uroczyście w swej pracy adwokata przyczyniać się ze wszystkich sił do ochrony praw i wolności obywatelskich oraz umacniania porządku prawnego RP, obowiązki swe wypełniać gorliwie, sumiennie i zgodnie z przepisami prawa, zachować tajemnicę zawodową, a w postępowaniu swoim kierować się zasadami godności, uczciwości, słuszności i sprawiedliwości społecznej.”.",
            highlight: "Ślubowanie adwokata — wobec DZIEKANA okręgowej rady adwokackiej.",
          },
          {
            ref: "Art. 8, 8a pr. adw.",
            title: "Immunitet i obowiązkowe OC",
            text:
              "Art. 8 — adwokat przy wykonywaniu zawodu korzysta z wolności słowa i pisma; nadużycie tej wolności (zniewaga/zniesławienie strony, pełnomocnika, świadka, biegłego, tłumacza) podlega ściganiu tylko dyscyplinarnie. To immunitet MATERIALNY (czyn nie jest przestępstwem, lecz deliktem dyscyplinarnym).\nArt. 8a — adwokat podlega obowiązkowemu ubezpieczeniu OC za szkody przy wykonywaniu czynności (nie dotyczy adwokatów niewykonujących zawodu).",
            highlight:
              "Immunitet adwokacki = materialny, bezwzględny, częściowy, trwały. Obejmuje też aplikantów adwokackich.",
          },
        ],
      },
      {
        id: "organy-adw",
        title: "Organy adwokatury i izb",
        articles: [
          {
            ref: "Art. 9–11 pr. adw.",
            title: "Organy adwokatury",
            text:
              "Organy adwokatury: Krajowy Zjazd Adwokatury, Naczelna Rada Adwokacka, Wyższy Sąd Dyscyplinarny, Rzecznik Dyscyplinarny Adwokatury, Wyższa Komisja Rewizyjna.\nOsobowość prawną mają: Naczelna Rada Adwokacka, izby adwokackie oraz zespoły adwokackie.\nWybory odbywają się w głosowaniu tajnym przy nieograniczonej liczbie kandydatów. Kadencja organów trwa 4 lata. Tej samej funkcji w Prezydium NRA i prezydiach ORA nie można sprawować dłużej niż dwie następujące po sobie kadencje.",
            highlight:
              "5 organów adwokatury. Osobowość prawna: NRA, izby, zespoły. Kadencja: 4 lata.",
          },
          {
            ref: "Izba adwokacka (art. 38–52 pr. adw.)",
            title: "Izby adwokackie i ich organy",
            text:
              "Izbę adwokacką stanowią wszyscy adwokaci wpisani na listę prowadzoną przez właściwą okręgową radę adwokacką oraz aplikanci. Obecnie są 24 izby adwokackie. Organy izby: zgromadzenie izby, okręgowa rada adwokacka, sąd dyscyplinarny, rzecznik dyscyplinarny, komisja rewizyjna.\nSkład ORA: dziekan + 5–15 członków + 2–4 zastępców. Dziekan reprezentuje ORA i może udzielić ostrzeżenia za uchybienie mniejszej wagi. Zwyczajne zgromadzenie izby odbywa się raz do roku.",
            highlight: "24 izby. Organy izby (5). ORA: dziekan + 5–15 członków + 2–4 zastępców.",
          },
          {
            ref: "Krajowy Zjazd / NRA",
            title: "Krajowy Zjazd Adwokatury i NRA",
            text:
              "Krajowy Zjazd Adwokatury odbywa się co 4 lata; stanowią go delegaci (nie mniej niż 6 z każdej izby). Wybiera m.in. prezesa NRA, prezesa Wyższego Sądu Dyscyplinarnego, Rzecznika Dyscyplinarnego Adwokatury, przewodniczącego Wyższej Komisji Rewizyjnej; ustala liczbę izb.\nNaczelną Radę Adwokacką tworzą: prezes NRA, adwokaci wybrani przez Zjazd oraz dziekani ORA. Prezydium NRA jest organem wykonawczym NRA.",
            highlight: "Krajowy Zjazd Adwokatury — co 4 lata.",
          },
        ],
      },
      {
        id: "dyscyplinarka-adw",
        title: "Odpowiedzialność dyscyplinarna",
        articles: [
          {
            ref: "Art. 80 pr. adw.",
            title: "Podstawy odpowiedzialności",
            text:
              "Adwokaci i aplikanci adwokaccy podlegają odpowiedzialności dyscyplinarnej za postępowanie sprzeczne z prawem, zasadami etyki lub godnością zawodu bądź za naruszenie obowiązków zawodowych; adwokaci również za niespełnienie obowiązku ubezpieczenia OC.",
          },
          {
            ref: "Kary dyscyplinarne",
            title: "Katalog kar (art. 81 pr. adw.)",
            text:
              "1) upomnienie;\n2) nagana (+ fakultatywnie zakaz patronatu od roku do 5 lat);\n3) kara pieniężna (+ fakultatywnie zakaz patronatu od roku do 5 lat);\n4) zawieszenie w czynnościach zawodowych na czas od 3 miesięcy do 5 lat (+ obligatoryjnie zakaz patronatu od 2 do 10 lat);\n5) wydalenie z adwokatury.\nKara pieniężna: od półtorakrotności do dwunastokrotności minimalnego wynagrodzenia. Wydalenie = skreślenie z listy bez prawa ubiegania się o ponowny wpis przez 10 lat.",
            highlight:
              "5 kar: upomnienie, nagana, kara pieniężna, zawieszenie (3 mies.–5 lat), wydalenie (zakaz wpisu 10 lat).",
          },
          {
            ref: "Etapy i strony postępowania",
            title: "Postępowanie dyscyplinarne",
            text:
              "Etapy: 1) dochodzenie; 2) postępowanie przed sądem dyscyplinarnym; 3) postępowanie wykonawcze.\nStrony: w dochodzeniu — obwiniony i pokrzywdzony; przed sądem dyscyplinarnym — oskarżyciel, obwiniony i pokrzywdzony.\nSąd dyscyplinarny izby orzeka w I instancji; Wyższy Sąd Dyscyplinarny w składzie 3 sędziów rozpoznaje sprawy jako instancja odwoławcza. Termin środków odwoławczych: 14 dni.",
            highlight: "3 etapy postępowania. WSD orzeka w II instancji w składzie 3 sędziów.",
          },
        ],
      },
    ],
  },

  /* ============ 6. REFERENDARZE, ŁAWNICY, PRACOWNICY ============ */
  {
    id: "dzial4",
    title: "Referendarze, ławnicy i pracownicy sądów",
    subtitle: "Dział IV u.s.p. (art. 147–175)",
    icon: "Users",
    act: "Prawo o ustroju sądów powszechnych (Dział IV)",
    origin: "pani",
    originNote: "Prezentacja „Dział IV — ustrój sądów powszechnych”",
    pdf: "akty/prawo-o-ustroju-sadow-powszechnych.pdf",
    sections: [
      {
        id: "pracownicy",
        title: "Pracownicy sądów (art. 147)",
        articles: [
          {
            ref: "Art. 147 u.s.p.",
            title: "Kategorie pracowników sądów",
            text:
              "§ 1. Referendarze sądowi i starsi referendarze sądowi — wykonują czynności z zakresu ochrony prawnej inne niż wymiar sprawiedliwości.\n§ 2. Kuratorzy sądowi (rodzinni i dla dorosłych) — służba kuratorska, czynności wychowawczo-resocjalizacyjne i profilaktyczne.\n§ 3. Urzędnicy i inni pracownicy sądowi.\n§ 4. Asystenci sędziów i starsi asystenci sędziów.",
            highlight:
              "Referendarze, kuratorzy, urzędnicy/pracownicy, asystenci sędziów. Asystent = organ pomocniczy sędziego (przygotowanie spraw do rozpoznania).",
          },
        ],
      },
      {
        id: "referendarze",
        title: "Referendarze sądowi (art. 149–153b)",
        articles: [
          {
            ref: "Status referendarza",
            title: "Pozycja referendarza",
            text:
              "Referendarz sądowy wykonuje czynności sądów w zakresie ochrony prawnej; NIE sprawuje wymiaru sprawiedliwości (ten zastrzeżono w Konstytucji wyłącznie dla sądów i sędziów). Jest pracownikiem mianowanym, niezależnym co do treści wydawanych orzeczeń i zarządzeń (art. 151 § 1). Niezależność referendarza wynika z ustawy i nie jest tożsama z niezawisłością sędziów (z Konstytucji).",
            highlight:
              "Referendarz — czynności ochrony prawnej, niezależność (ustawowa), ale NIE wymiar sprawiedliwości.",
          },
          {
            ref: "Art. 149 u.s.p.",
            title: "Wymagania na referendarza",
            text:
              "Mianowany może być ten, kto: 1) ma obywatelstwo polskie i pełnię praw cywilnych i obywatelskich; 2) jest nieskazitelnego charakteru; 3) ukończył wyższe studia prawnicze (mgr); 4) ukończył 24 lata; 5) zdał egzamin referendarski, sędziowski, prokuratorski, notarialny, adwokacki lub radcowski albo ukończył aplikację sędziowską/prokuratorską.",
            highlight: "Wiek referendarza: 24 lata. Nabór w drodze konkursu (art. 149a).",
          },
          {
            ref: "Art. 150 u.s.p.",
            title: "Mianowanie i awans",
            text:
              "Stosunek pracy nawiązuje się na podstawie mianowania. Referendarza mianuje i rozwiązuje z nim stosunek pracy PREZES SĄDU APELACYJNEGO. Starszym referendarzem może zostać ten, kto był referendarzem co najmniej 10 lat, nie był karany dyscyplinarnie i uzyskiwał pozytywne oceny. Ślubowanie składa się wobec prezesa sądu okręgowego (a w SA — wobec prezesa SA).",
            highlight: "Mianuje prezes SA. Starszy referendarz: ≥ 10 lat.",
          },
          {
            ref: "Art. 152 u.s.p.",
            title: "Odpowiedzialność dyscyplinarna referendarzy",
            text:
              "Kary dyscyplinarne: 1) nagana; 2) nagana z ostrzeżeniem; 3) nagana z obniżeniem wynagrodzenia zasadniczego o 10% na okres dwóch lat; 4) wydalenie z pracy. Orzekają komisje dyscyplinarne: w I instancji — powoływane przez prezesów sądów okręgowych; w II instancji — komisja powołana przez Ministra Sprawiedliwości. Za przewinienia mniejszej wagi — odpowiedzialność porządkowa (kara upomnienia wymierzana przez prezesa sądu).",
            highlight: "4 kary dyscyplinarne referendarza. I instancja: prezes SO; II instancja: Minister Sprawiedliwości.",
          },
        ],
      },
      {
        id: "lawnicy",
        title: "Ławnicy (art. 158–175)",
        articles: [
          {
            ref: "Art. 158 u.s.p.",
            title: "Kto może być ławnikiem (7 przesłanek)",
            text:
              "Ławnikiem może być wybrany ten, kto: 1) ma obywatelstwo polskie i pełnię praw cywilnych i obywatelskich; 2) jest nieskazitelnego charakteru; 3) ukończył 30 lat; 4) jest zatrudniony, prowadzi działalność gospodarczą lub mieszka w miejscu kandydowania co najmniej od roku; 5) nie przekroczył 70 lat; 6) jest zdolny zdrowotnie; 7) posiada co najmniej wykształcenie średnie lub średnie branżowe.",
            highlight:
              "7 przesłanek (kumulatywnie). Wiek 30–70 lat. NIE jest wymagane wykształcenie prawnicze. Kryteria oceniane na dzień wyboru.",
          },
          {
            ref: "Art. 159 u.s.p.",
            title: "Kto NIE może być ławnikiem",
            text:
              "Ławnikami nie mogą być m.in.: osoby zatrudnione w sądach i prokuraturze; osoby z organów, od których orzeczeń można żądać drogi sądowej; funkcjonariusze Policji i osoby związane ze ściganiem przestępstw; adwokaci i aplikanci adwokaccy; radcowie prawni i aplikanci radcowscy; duchowni; żołnierze w czynnej służbie; funkcjonariusze Służby Więziennej; radni gminy, powiatu i województwa. Nie można być ławnikiem w więcej niż jednym sądzie.",
            highlight: "Przesłanki negatywne — katalog zamknięty, oceniany na dzień wyborów.",
          },
          {
            ref: "Art. 160–165 u.s.p.",
            title: "Wybór i kadencja ławników",
            text:
              "Ławników do sądów okręgowych i rejonowych wybierają RADY GMIN w głosowaniu tajnym (zadanie zlecone z zakresu administracji rządowej). Liczbę ławników ustala kolegium sądu okręgowego. Kandydatów zgłaszają radom gmin: prezesi sądów, stowarzyszenia i organizacje (poza partiami politycznymi) oraz co najmniej 50 obywateli — w terminie do 30 czerwca ostatniego roku kadencji. Wybory odbywają się najpóźniej w październiku. Kadencja ławników trwa 4 lata kalendarzowe następujące po roku wyborów.",
            highlight: "Wybierają rady gmin (tajnie). Zgłoszenie do 30 czerwca (min. 50 obywateli). Kadencja: 4 lata.",
          },
          {
            ref: "Art. 169–171 u.s.p.",
            title: "Niezawisłość i udział ławnika",
            text:
              "§ 1. W zakresie orzekania ławnicy są niezawiśli i podlegają tylko Konstytucji oraz ustawom. Mają równe prawa z sędziami (art. 4 § 2), ale NIE mogą przewodniczyć rozprawie ani naradzie, ani wykonywać czynności sędziego poza rozprawą. Ławnik może być wyznaczony do udziału w rozprawach do 12 dni w ciągu roku (liczba może być zwiększona z ważnych przyczyn). Prezes sądu może przydzielić dodatkowego ławnika do dłuższej sprawy.",
            highlight:
              "Ławnik: niezawisły, równe prawa z sędzią, ale bez przewodniczenia. Max 12 dni rozpraw w roku.",
          },
          {
            ref: "Art. 166–167 u.s.p.",
            title: "Wygaśnięcie mandatu i odwołanie ławnika",
            text:
              "Mandat ławnika wygasa w razie prawomocnego skazania za przestępstwo lub wykroczenie (także skarbowe) — stwierdza to rada gminy. Rada gminy może odwołać ławnika na wniosek prezesa sądu w razie: niewykonywania obowiązków; zachowania godzącego w powagę sądu; niezdolności do wykonywania obowiązków. W czasie kadencji nie powołuje się ławnika do obowiązków m.in. przy wszczęciu postępowania o odwołanie lub postępowania karnego.",
            highlight: "Odwołanie ławnika — wyłączna kompetencja rady gminy, na wniosek prezesa sądu. Katalog przyczyn zamknięty.",
          },
        ],
      },
    ],
  },

  /* ============ 7. IMMUNITETY ============ */
  {
    id: "immunitety",
    title: "Immunitety — aspekt porównawczy",
    subtitle: "Sędziowski, prokuratorski, adwokacki",
    icon: "ShieldCheck",
    act: "Konstytucja RP, u.s.p., Prawo o prokuraturze, Prawo o adwokaturze",
    origin: "pani",
    originNote: "Materiał „Immunitety — aspekt porównawczy”",
    pdf: "akty/prawo-o-ustroju-sadow-powszechnych.pdf",
    sections: [
      {
        id: "teoria",
        title: "Teoria immunitetu",
        articles: [
          {
            ref: "Pojęcie i podział",
            title: "Definicja i klasyfikacja",
            text:
              "Immunitet = zwolnienie od podlegania powszechnie wiążącym obowiązkom prawnym; wyłączenie pewnych osób spod prawa karnego materialnego lub procesowego.\nDWIE GRUPY:\n• MATERIALNY — uchyla karalność czynu (nieodpowiedzialność w oznaczonym zakresie); ma zawsze charakter BEZWZGLĘDNY.\n• PROCESOWY — pozwala (lub nie) na ściganie i pozbawienie wolności.\nProcesowy dzieli się na: trwały / nietrwały (kryterium czasu) oraz bezwzględny / względny (czy może być uchylony przez organ).",
            highlight:
              "Materialny = uchyla karalność, bezwzględny. Procesowy = przeszkoda w ściganiu, może być względny (uchylany) lub bezwzględny.",
          },
        ],
      },
      {
        id: "sedziowski",
        title: "Immunitet sędziowski",
        articles: [
          {
            ref: "Art. 181 Konstytucji RP / Art. 80 u.s.p.",
            title: "Podstawa i charakter",
            text:
              "Art. 181 Konstytucji: sędzia nie może być — bez uprzedniej zgody sądu określonego w ustawie — pociągnięty do odpowiedzialności karnej ani pozbawiony wolności (wyjątek: gorący uczynek, gdy zatrzymanie jest niezbędne).\nArt. 80 u.s.p.: sędzia nie może być zatrzymany ani pociągnięty do odpowiedzialności karnej bez zezwolenia właściwego sądu dyscyplinarnego. O zatrzymaniu powiadamia się prezesa sądu apelacyjnego (może nakazać natychmiastowe zwolnienie). Sąd dyscyplinarny wydaje uchwałę zezwalającą, jeżeli zachodzi dostatecznie uzasadnione podejrzenie popełnienia przestępstwa (rozpoznanie w terminie 14 dni).",
            highlight:
              "CHARAKTER: formalny (procesowy), TRWAŁY (obejmuje sędziów w stanie spoczynku), ZUPEŁNY (czyny związane i niezwiązane z urzędem), WZGLĘDNY (uchylany uchwałą sądu dyscyplinarnego). Sędzia NIE może się go zrzec. Nie obejmuje odpowiedzialności cywilnej.",
          },
          {
            ref: "Przymus adwokacko-radcowski",
            title: "Procedura uchylenia immunitetu",
            text:
              "Procedurę inicjuje wniosek prokuratora; jeżeli wniosek nie pochodzi od prokuratora — musi być sporządzony i podpisany przez adwokata albo radcę prawnego (przymus adwokacko-radcowski chroni przed wnioskami pochopnymi). Wstępną kontrolę (formalną i merytoryczną) przeprowadza prezes sądu dyscyplinarnego, który odmawia przyjęcia wniosku oczywiście bezzasadnego.",
          },
        ],
      },
      {
        id: "porownanie",
        title: "Immunitet prokuratorski i adwokacki",
        articles: [
          {
            ref: "Art. 135 Prawa o prokuraturze",
            title: "Immunitet prokuratorski",
            text:
              "Prokurator (i Prokurator Generalny) nie może być pociągnięty do odpowiedzialności karnej ani tymczasowo aresztowany bez zezwolenia sądu dyscyplinarnego, a zatrzymany — bez zgody przełożonego dyscyplinarnego (wyjątek: gorący uczynek). Sąd dyscyplinarny wydaje uchwałę zezwalającą przy dostatecznie uzasadnionym podejrzeniu; rozpoznaje wniosek w terminie 14 dni.",
            highlight: "CHARAKTER: procesowy, względny (jak sędziowski).",
          },
          {
            ref: "Art. 8 Prawa o adwokaturze",
            title: "Immunitet adwokacki",
            text:
              "Adwokat przy wykonywaniu zawodu korzysta z wolności słowa i pisma. Nadużycie tej wolności — stanowiące ściganą z oskarżenia prywatnego zniewagę lub zniesławienie strony, jej pełnomocnika lub obrońcy, kuratora, świadka, biegłego albo tłumacza — podlega ściganiu TYLKO dyscyplinarnie.",
            highlight:
              "CHARAKTER: MATERIALNY, BEZWZGLĘDNY (nie do uchylenia), CZĘŚCIOWY (wąski zakres), TRWAŁY. Ogranicza się do postępowania sądowego; obejmuje też aplikantów adwokackich. Nie obejmuje odpowiedzialności cywilnej.",
          },
        ],
      },
    ],
  },

  /* ============ 8. KONSTYTUCJA RP — ORGANY OCHRONY PRAWNEJ ============ */
  {
    id: "konstytucja",
    title: "Konstytucja RP — władza sądownicza",
    subtitle: "Konstytucyjne podstawy organów ochrony prawnej",
    icon: "Scale",
    act: "Konstytucja Rzeczypospolitej Polskiej z dnia 2 kwietnia 1997 r.",
    origin: "ai",
    originNote: "Opracowano z AI na podstawie tekstu Konstytucji RP",
    pdf: "akty/konstytucja-rp.pdf",
    sections: [
      {
        id: "wladza-sadownicza",
        title: "Władza sądownicza w Konstytucji",
        intro:
          "Rozdział VIII Konstytucji („Sądy i Trybunały”) określa ustrojową pozycję sądów oraz gwarancje niezależności i niezawisłości.",
        articles: [
          {
            ref: "Art. 173 i 175 Konstytucji RP",
            title: "Odrębność i wymiar sprawiedliwości",
            text:
              "Art. 173: Sądy i Trybunały są władzą odrębną i niezależną od innych władz.\nArt. 175 ust. 1: Wymiar sprawiedliwości sprawują Sąd Najwyższy, sądy powszechne, sądy administracyjne oraz sądy wojskowe.",
            highlight:
              "Trybunał Konstytucyjny i Trybunał Stanu należą do władzy sądowniczej, ale NIE sprawują wymiaru sprawiedliwości w rozumieniu art. 175.",
          },
          {
            ref: "Art. 178 Konstytucji RP",
            title: "Niezawisłość sędziów",
            text:
              "1. Sędziowie w sprawowaniu swojego urzędu są niezawiśli i podlegają tylko Konstytucji oraz ustawom.\n2. Sędziom zapewnia się warunki pracy i wynagrodzenie odpowiadające godności urzędu oraz zakresowi ich obowiązków.\n3. Sędzia nie może należeć do partii politycznej, związku zawodowego ani prowadzić działalności publicznej nie dającej się pogodzić z zasadami niezależności sądów i niezawisłości sędziów (apolityczność).",
            highlight: "Sędzia podlega TYLKO Konstytucji i ustawom. Obowiązuje go apolityczność.",
          },
          {
            ref: "Art. 179–181 Konstytucji RP",
            title: "Powołanie, nieusuwalność, immunitet",
            text:
              "Art. 179: Sędziowie są powoływani przez Prezydenta RP, na wniosek Krajowej Rady Sądownictwa, na czas nieoznaczony.\nArt. 180: Sędziowie są nieusuwalni; złożenie z urzędu, zawieszenie, przeniesienie może nastąpić jedynie na mocy orzeczenia sądu i tylko w przypadkach określonych w ustawie.\nArt. 181: Sędzia nie może być bez uprzedniej zgody sądu pociągnięty do odpowiedzialności karnej ani pozbawiony wolności (immunitet formalny).",
            highlight:
              "Powołuje Prezydent RP na wniosek KRS, na czas NIEOZNACZONY. Nieusuwalność (art. 180) + immunitet (art. 181).",
          },
        ],
      },
      {
        id: "krs-sn-rpo",
        title: "KRS, SN, sądownictwo administracyjne",
        articles: [
          {
            ref: "Art. 186–187 Konstytucji RP",
            title: "Krajowa Rada Sądownictwa",
            text:
              "Art. 186 ust. 1: Krajowa Rada Sądownictwa stoi na straży niezależności sądów i niezawisłości sędziów.\nArt. 187: KRS składa się m.in. z Pierwszego Prezesa SN, Ministra Sprawiedliwości, Prezesa NSA, 15 sędziów oraz członków wybranych przez Sejm (4) i Senat (2). Kadencja wybranych członków trwa 4 lata.",
            highlight: "KRS = strażnik niezależności sądów i niezawisłości sędziów (art. 186).",
          },
          {
            ref: "Art. 183–185 Konstytucji RP",
            title: "Sąd Najwyższy i sądy administracyjne",
            text:
              "Art. 183: Sąd Najwyższy sprawuje nadzór nad działalnością sądów powszechnych i wojskowych w zakresie orzekania. Pierwszego Prezesa SN powołuje Prezydent RP na 6-letnią kadencję spośród kandydatów przedstawionych przez Zgromadzenie Ogólne Sędziów SN.\nArt. 184: NSA oraz inne sądy administracyjne sprawują kontrolę działalności administracji publicznej.\nArt. 185: Prezesa NSA powołuje Prezydent RP na 6-letnią kadencję.",
            highlight: "SN nadzoruje orzecznictwo sądów powszechnych i wojskowych; NSA kontroluje administrację.",
          },
          {
            ref: "Art. 45 i 77 ust. 2 Konstytucji RP",
            title: "Prawo do sądu",
            text:
              "Art. 45 ust. 1: Każdy ma prawo do sprawiedliwego i jawnego rozpatrzenia sprawy bez nieuzasadnionej zwłoki przez właściwy, niezależny, bezstronny i niezawisły sąd.\nArt. 77 ust. 2: Ustawa nie może nikomu zamykać drogi sądowej dochodzenia naruszonych wolności lub praw.",
            highlight: "Art. 45 = formuła pozytywna; art. 77 ust. 2 = formuła negatywna prawa do sądu.",
          },
        ],
      },
    ],
  },

  /* ============ 9. PROKURATURA ============ */
  {
    id: "prokuratura",
    title: "Prawo o prokuraturze",
    subtitle: "Skład, struktura i niezależność prokuratora",
    icon: "ShieldCheck",
    act: "Ustawa z dnia 28 stycznia 2016 r. — Prawo o prokuraturze",
    origin: "ai",
    originNote: "Opracowano z AI na podstawie tekstu ustawy (t.j. Dz.U. 2024 poz. 390)",
    pdf: "akty/prawo-o-prokuraturze.pdf",
    sections: [
      {
        id: "sklad-struktura",
        title: "Skład i struktura",
        articles: [
          {
            ref: "Art. 1 Prawa o prokuraturze",
            title: "Kogo stanowi prokuratura",
            text:
              "§ 1. Prokuraturę stanowią: Prokurator Generalny, Prokurator Krajowy, pozostali zastępcy Prokuratora Generalnego oraz prokuratorzy powszechnych jednostek organizacyjnych prokuratury i prokuratorzy Instytutu Pamięci Narodowej.\n§ 2. Prokurator Generalny jest naczelnym organem prokuratury. Urząd Prokuratora Generalnego sprawuje Minister Sprawiedliwości.\n§ 3. Prokuratorami powszechnych jednostek są prokuratorzy Prokuratury Krajowej, prokuratur regionalnych, prokuratur okręgowych i prokuratur rejonowych.",
            highlight:
              "Prokurator Generalny = naczelny organ prokuratury, a jego urząd sprawuje MINISTER SPRAWIEDLIWOŚCI. Struktura jest czteroszczeblowa: Prokuratura Krajowa → regionalne → okręgowe → rejonowe.",
          },
          {
            ref: "Art. 2 Prawa o prokuraturze",
            title: "Zadania prokuratury",
            text:
              "Prokuratura wykonuje zadania w zakresie ścigania przestępstw oraz stoi na straży praworządności.",
            highlight: "Dwa zadania: ściganie przestępstw + stanie na straży praworządności.",
          },
        ],
      },
      {
        id: "niezaleznosc-immunitet",
        title: "Niezależność i immunitet",
        articles: [
          {
            ref: "Art. 7 Prawa o prokuraturze",
            title: "Niezależność prokuratora a podległość służbowa",
            text:
              "§ 1. Prokurator przy wykonywaniu czynności określonych w ustawach jest niezależny (z zastrzeżeniem § 2–6 oraz art. 8 i 9).\n§ 2. Prokurator jest obowiązany wykonywać zarządzenia, wytyczne i polecenia prokuratora przełożonego.\n§ 3. Polecenie dotyczące treści czynności procesowej przełożony wydaje na piśmie, a na żądanie prokuratora — wraz z uzasadnieniem.\n§ 4. Jeżeli prokurator nie zgadza się z poleceniem dotyczącym treści czynności procesowej, może żądać jego zmiany lub wyłączenia go od wykonania czynności.",
            highlight:
              "Prokurator jest NIEZALEŻNY, ale NIE niezawisły — podlega poleceniom przełożonego (inaczej niż sędzia). Polecenie co do treści czynności procesowej — na piśmie.",
          },
          {
            ref: "Art. 135 Prawa o prokuraturze",
            title: "Immunitet prokuratorski",
            text:
              "Prokurator (i Prokurator Generalny) nie może być pociągnięty do odpowiedzialności karnej ani tymczasowo aresztowany bez zezwolenia sądu dyscyplinarnego, a zatrzymany — bez zgody przełożonego dyscyplinarnego (wyjątek: gorący uczynek). Sąd dyscyplinarny wydaje uchwałę zezwalającą przy dostatecznie uzasadnionym podejrzeniu popełnienia przestępstwa; rozpoznaje wniosek w terminie 14 dni.",
            highlight: "Immunitet prokuratorski: procesowy, względny (uchylany uchwałą sądu dyscyplinarnego).",
          },
        ],
      },
    ],
  },

  /* ============ 10. RADCOWIE PRAWNI ============ */
  {
    id: "radcowie",
    title: "Radcowie prawni",
    subtitle: "Zawód, samorząd i różnice względem adwokatury",
    icon: "Briefcase",
    act: "Ustawa z dnia 6 lipca 1982 r. o radcach prawnych",
    origin: "ai",
    originNote: "Opracowano z AI na podstawie tekstu ustawy (t.j. ze zm.)",
    pdf: "akty/ustawa-o-radcach-prawnych.pdf",
    sections: [
      {
        id: "zawod-radcy",
        title: "Wykonywanie zawodu",
        articles: [
          {
            ref: "Art. 8 ustawy o radcach prawnych",
            title: "Formy wykonywania zawodu",
            text:
              "Radca prawny wykonuje zawód: w ramach stosunku pracy, na podstawie umowy cywilnoprawnej, w kancelarii radcy prawnego oraz w spółce (cywilnej, jawnej, partnerskiej, komandytowej lub komandytowo-akcyjnej). Wyłącznym przedmiotem działalności spółek jest świadczenie pomocy prawnej.",
            highlight:
              "NAJWAŻNIEJSZA RÓŻNICA: radca prawny MOŻE wykonywać zawód w ramach stosunku pracy — adwokatowi stosunek pracy zasadniczo to uniemożliwia (art. 4b pr. adw.). Radca będący w stosunku pracy nie może jednak być obrońcą w sprawach karnych.",
          },
          {
            ref: "Art. 11–13 ustawy o radcach prawnych",
            title: "Immunitet i niezależność opinii",
            text:
              "Art. 11: radca prawny przy wykonywaniu czynności korzysta z wolności słowa i pisma; nadużycie (zniewaga/zniesławienie strony, pełnomocnika, obrońcy, kuratora, świadka, biegłego, tłumacza) ścigane jest tylko dyscyplinarnie.\nArt. 12: radca korzysta z ochrony przysługującej funkcjonariuszowi publicznemu.\nArt. 13: radca nie jest związany poleceniem co do treści opinii prawnej.",
            highlight:
              "Immunitet radcy prawnego — MATERIALNY (jak adwokacki). Co do treści opinii prawnej radca jest niezależny.",
          },
        ],
      },
      {
        id: "samorzad-radcow",
        title: "Samorząd i odpowiedzialność dyscyplinarna",
        articles: [
          {
            ref: "Art. 42–44 ustawy o radcach prawnych",
            title: "Organy samorządu",
            text:
              "Organami samorządu są: Krajowy Zjazd Radców Prawnych, Krajowa Rada Radców Prawnych, Wyższa Komisja Rewizyjna, Wyższy Sąd Dyscyplinarny, Główny Rzecznik Dyscyplinarny oraz organy okręgowe (zgromadzenie i rada okręgowej izby radców prawnych, okręgowa komisja rewizyjna, okręgowy sąd dyscyplinarny, rzecznik dyscyplinarny). Członkami organów mogą być tylko radcowie prawni. Kadencja trwa 4 lata; wybory są tajne, przy nieograniczonej liczbie kandydatów.",
            highlight:
              "Struktura samorządu radców jest analogiczna do adwokatury (krajowy zjazd, krajowa rada, sądy dyscyplinarne, izby okręgowe). Kadencja: 4 lata.",
          },
          {
            ref: "Art. 65 ustawy o radcach prawnych",
            title: "Kary dyscyplinarne",
            text:
              "Karami dyscyplinarnymi są: 1) upomnienie; 2) nagana; 3) kara pieniężna; 4) zawieszenie prawa do wykonywania zawodu radcy prawnego na czas od 3 miesięcy do 5 lat (wobec aplikantów — zawieszenie w prawach aplikanta od roku do 3 lat); 5) pozbawienie prawa do wykonywania zawodu radcy prawnego (wobec aplikantów — wydalenie z aplikacji). Kara pieniężna: od półtorakrotności do dwunastokrotności minimalnego wynagrodzenia.",
            highlight:
              "Pozbawienie prawa do wykonywania zawodu = skreślenie z listy bez prawa ubiegania się o ponowny wpis przez 10 lat.",
          },
        ],
      },
    ],
  },
];

export function getTopic(id: string): Topic | undefined {
  return topics.find((t) => t.id === id);
}
