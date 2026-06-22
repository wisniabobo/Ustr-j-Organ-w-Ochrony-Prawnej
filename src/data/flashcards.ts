import type { Flashcard } from "./types";

export const flashcards: Flashcard[] = [
  // Zasady ustrojowe
  { cat: "Zasady", q: "Kto sprawuje wymiar sprawiedliwości w RP (art. 175 Konstytucji)?", a: "Sąd Najwyższy, sądy powszechne, sądy administracyjne oraz sądy wojskowe (4 kategorie)." },
  { cat: "Zasady", q: "Jakie są trzy władze wg art. 10 Konstytucji?", a: "Ustawodawcza (Sejm i Senat), wykonawcza (Prezydent RP i Rada Ministrów), sądownicza (sądy i trybunały)." },
  { cat: "Zasady", q: "Sądami powszechnymi są… (art. 1 u.s.p.)", a: "Sądy rejonowe, okręgowe i apelacyjne (struktura trójstopniowa)." },
  { cat: "Zasady", q: "Z czego wynika symetryczność treściowa art. 45 ust. 1 i art. 77 ust. 2 Konstytucji?", a: "Art. 45 ust. 1 to formuła pozytywna prawa do sądu, art. 77 ust. 2 — negatywna (zakaz zamykania drogi sądowej)." },
  { cat: "Zasady", q: "Wymień 7 gwarancji ustrojowych niezawisłości sędziowskiej.", a: "Poziom etyczno-moralny, przygotowanie zawodowe, stałość zawodu, niepołączalność, niezależność materialna, immunitet, samorządność sędziowska." },
  { cat: "Zasady", q: "Jak obywatele uczestniczą w wymiarze sprawiedliwości (art. 182 Konstytucji, art. 4 u.s.p.)?", a: "Przez udział ławników w rozpoznawaniu spraw w I instancji; ławnicy mają równe prawa z sędziami." },

  // Organizacja
  { cat: "Organizacja", q: "Organy sądu okręgowego i apelacyjnego (art. 21 u.s.p.)?", a: "Prezes sądu, kolegium sądu, dyrektor sądu. (W sądzie rejonowym: prezes + dyrektor, bez kolegium.)" },
  { cat: "Organizacja", q: "Czy stanowisko dyrektora w sądzie rejonowym jest obligatoryjne?", a: "Nie — jest fakultatywne („można powołać”, art. 21a § 1). W SO i SA — obligatoryjne." },
  { cat: "Organizacja", q: "Kto powołuje i odwołuje dyrektora sądu?", a: "Minister Sprawiedliwości (art. 32 § 1)." },
  { cat: "Organizacja", q: "Na jaką kadencję powołuje się prezesa SA i SO, a na jaką prezesa SR?", a: "Prezes SA i SO — 6 lat; prezes SR — 4 lata, najwyżej dwie kolejne kadencje (art. 26)." },
  { cat: "Organizacja", q: "Kto powołuje prezesów sądów powszechnych?", a: "Minister Sprawiedliwości (art. 23–25)." },
  { cat: "Organizacja", q: "Z kogo składa się kolegium sądu okręgowego?", a: "Prezes SO + prezesi sądów rejonowych z obszaru jego właściwości (art. 30)." },
  { cat: "Organizacja", q: "Kto zastępuje prezesa sądu?", a: "Wiceprezes sądu, a w razie jego nieobecności — wyznaczony sędzia (art. 22b § 1)." },

  // Status sędziego
  { cat: "Status sędziego", q: "Kiedy nawiązuje się stosunek służbowy sędziego?", a: "Po doręczeniu aktu powołania (art. 65 § 1). Zgłoszenie do objęcia stanowiska — 14 dni." },
  { cat: "Status sędziego", q: "Wobec kogo sędzia składa ślubowanie?", a: "Wobec Prezydenta RP (art. 66). Odmowa = zrzeczenie się stanowiska." },
  { cat: "Status sędziego", q: "Po jakim czasie skuteczne jest zrzeczenie się urzędu przez sędziego?", a: "Po upływie 3 miesięcy od złożenia oświadczenia Ministrowi Sprawiedliwości (art. 68 § 1)." },
  { cat: "Status sędziego", q: "W jakim wieku sędzia przechodzi w stan spoczynku?", a: "Co do zasady z dniem ukończenia 65 lat; kobieta-sędzia może na wniosek od 60 lat (art. 69)." },
  { cat: "Status sędziego", q: "Kto orzeka o trwałej niezdolności sędziego do pełnienia obowiązków?", a: "Lekarz orzecznik ZUS; sprzeciw do komisji lekarskiej ZUS w 14 dni (art. 70)." },
  { cat: "Status sędziego", q: "Gdzie odwołać się od decyzji KRS o przeniesieniu w stan spoczynku?", a: "Do Sądu Najwyższego, w terminie miesiąca, za pośrednictwem KRS (art. 73)." },
  { cat: "Status sędziego", q: "Czy przeniesienie sędziego na inne miejsce służbowe wymaga zgody?", a: "Co do zasady tak (art. 75 § 1); wyjątki enumeratywne. Decyduje Minister Sprawiedliwości." },

  // Immunitety
  { cat: "Immunitety", q: "Jaki charakter ma immunitet sędziowski?", a: "Formalny (procesowy), trwały, zupełny, względny (uchylany uchwałą sądu dyscyplinarnego). Nie obejmuje odpowiedzialności cywilnej." },
  { cat: "Immunitety", q: "Jaki charakter ma immunitet adwokacki (art. 8 pr. adw.)?", a: "Materialny, bezwzględny, częściowy, trwały. Obejmuje też aplikantów adwokackich." },
  { cat: "Immunitety", q: "Kto wyraża zgodę na pociągnięcie sędziego do odpowiedzialności karnej?", a: "Właściwy sąd dyscyplinarny (uchwała), gdy zachodzi dostatecznie uzasadnione podejrzenie. Wyjątek: gorący uczynek." },
  { cat: "Immunitety", q: "Kogo powiadamia się o zatrzymaniu sędziego?", a: "Prezesa sądu apelacyjnego właściwego ze względu na miejsce zatrzymania — może nakazać natychmiastowe zwolnienie (art. 80 § 2)." },
  { cat: "Immunitety", q: "Różnica: immunitet materialny vs procesowy?", a: "Materialny uchyla karalność czynu (bezwzględny); procesowy jest tylko przeszkodą w ściganiu (może być względny)." },

  // Sąd Najwyższy
  { cat: "Sąd Najwyższy", q: "Ile izb ma Sąd Najwyższy i które?", a: "Pięć: Cywilna, Karna, Pracy i Ubezpieczeń Społecznych, Kontroli Nadzwyczajnej i Spraw Publicznych, Odpowiedzialności Zawodowej. (Izba Dyscyplinarna zniesiona.)" },
  { cat: "Sąd Najwyższy", q: "Jak powoływany jest Pierwszy Prezes SN?", a: "Przez Prezydenta RP na 6 lat spośród 5 kandydatów wybranych przez Zgromadzenie Ogólne Sędziów SN; max dwukrotnie." },
  { cat: "Sąd Najwyższy", q: "Jak powoływany jest Prezes SN kierujący izbą?", a: "Przez Prezydenta RP (po opinii I Prezesa) na 3 lata spośród 3 kandydatów; może być wybrany ponownie tylko dwukrotnie." },
  { cat: "Sąd Najwyższy", q: "Ile lat trzeba mieć, by zostać sędzią SN?", a: "Ukończone 40 lat, co najmniej 10-letni staż prawniczy, niekaralność za umyślne przestępstwa." },
  { cat: "Sąd Najwyższy", q: "Kto określa regulamin SN?", a: "Prezydent RP, po zasięgnięciu opinii Kolegium SN, w drodze rozporządzenia." },
  { cat: "Sąd Najwyższy", q: "Test niezawisłości sędziego SN — w jakim składzie i trybie?", a: "Na wniosek; posiedzenie niejawne; skład 5 sędziów losowanych z całego składu SN." },

  // Adwokatura
  { cat: "Adwokatura", q: "Kto stanowi adwokaturę?", a: "Ogół adwokatów oraz aplikantów adwokackich." },
  { cat: "Adwokatura", q: "Wymień organy adwokatury.", a: "Krajowy Zjazd Adwokatury, Naczelna Rada Adwokacka, Wyższy Sąd Dyscyplinarny, Rzecznik Dyscyplinarny Adwokatury, Wyższa Komisja Rewizyjna." },
  { cat: "Adwokatura", q: "Ile jest izb adwokackich?", a: "24 izby adwokackie." },
  { cat: "Adwokatura", q: "Jakie podmioty mają osobowość prawną?", a: "Naczelna Rada Adwokacka, izby adwokackie, zespoły adwokackie." },
  { cat: "Adwokatura", q: "Kary dyscyplinarne w adwokaturze?", a: "Upomnienie, nagana, kara pieniężna, zawieszenie w czynnościach (3 mies.–5 lat), wydalenie z adwokatury (zakaz wpisu 10 lat)." },
  { cat: "Adwokatura", q: "Co ile odbywa się Krajowy Zjazd Adwokatury i kadencja organów?", a: "Zjazd co 4 lata; kadencja organów — 4 lata." },
  { cat: "Adwokatura", q: "Wobec kogo adwokat składa ślubowanie?", a: "Wobec dziekana okręgowej rady adwokackiej (art. 5)." },

  // Referendarze i ławnicy
  { cat: "Referendarze i ławnicy", q: "Kto mianuje referendarza sądowego?", a: "Prezes sądu apelacyjnego (art. 150 § 3). Wymóg wieku: 24 lata." },
  { cat: "Referendarze i ławnicy", q: "Kary dyscyplinarne referendarza?", a: "Nagana, nagana z ostrzeżeniem, nagana z obniżeniem wynagrodzenia o 10% na 2 lata, wydalenie z pracy (art. 152)." },
  { cat: "Referendarze i ławnicy", q: "Ile lat trzeba mieć, by zostać ławnikiem?", a: "Ukończone 30 lat i nieprzekroczone 70 lat (art. 158)." },
  { cat: "Referendarze i ławnicy", q: "Kto wybiera ławników?", a: "Rady gmin, w głosowaniu tajnym (art. 160). Kadencja: 4 lata." },
  { cat: "Referendarze i ławnicy", q: "Do ilu dni rozpraw w roku można wyznaczyć ławnika?", a: "Do 12 dni (z możliwością zwiększenia z ważnych przyczyn, art. 170)." },
  { cat: "Referendarze i ławnicy", q: "Czy ławnik może przewodniczyć rozprawie?", a: "Nie — choć jest niezawisły i ma równe prawa z sędzią, nie może przewodniczyć rozprawie ani naradzie (art. 169)." },
];

export const flashcardCategories = Array.from(
  new Set(flashcards.map((f) => f.cat))
);
