import type { QuizBank } from "./types";

// Źródło: plik "Ustawa o Sądzie Najwyższym — prawidłowe odpowiedzi".
// Odpowiedzi poprawne były w oryginale zaznaczone na zielono; pytania
// wielokrotnego wyboru oznaczono multi: true. Wyjaśnienia (note) pochodzą
// z komentarzy w nawiasach zawartych w oryginalnym teście oraz z treści ustawy
// z dnia 8 grudnia 2017 r. o Sądzie Najwyższym.

export const quizSN: QuizBank = {
  id: "sn",
  title: "Ustawa o Sądzie Najwyższym",
  short: "Sąd Najwyższy",
  description:
    "Oryginalny test wykładowcy — 50 pytań z prawidłowymi odpowiedziami. Część pytań jest wielokrotnego wyboru.",
  act: "Ustawa z dnia 8 grudnia 2017 r. o Sądzie Najwyższym",
  source: "Test wykładowcy „Ustawa o Sądzie Najwyższym — prawidłowe odpowiedzi”",
  origin: "pani",
  accent: "text-emerald-500",
  questions: [
    {
      id: 1,
      question: "Zaznacz zdanie prawdziwe:",
      options: [
        { key: "a", text: "Sąd Najwyższy jest organem władzy sądowniczej" },
        {
          key: "b",
          text: "Sąd Najwyższy sprawuje wymiar sprawiedliwości przez zapewnienie zgodności z prawem i jednolitości orzecznictwa sądów powszechnych, sądów wojskowych oraz administracyjnych przez rozpoznawanie środków odwoławczych oraz podejmowanie uchwał rozstrzygających zagadnienia prawne",
        },
        { key: "c", text: "Sąd Najwyższy ma siedzibę w Krakowie" },
        { key: "d", text: "Sąd Najwyższy dzieli się na Wydziały" },
      ],
      correct: ["a"],
      note: "SN ma siedzibę w Warszawie (nie w Krakowie) i dzieli się na Izby (nie na Wydziały). Odp. b jest błędna, bo SN zapewnia jednolitość orzecznictwa sądów powszechnych i wojskowych — nie sądów administracyjnych (te nadzoruje NSA).",
    },
    {
      id: 2,
      question: "Izbą Sądu Najwyższego nie jest:",
      options: [
        { key: "a", text: "Izba Karna" },
        { key: "b", text: "Izba Cywilna" },
        { key: "c", text: "Izba Odpowiedzialności Zawodowej" },
        { key: "d", text: "Izba Dyscyplinarna" },
      ],
      correct: ["d"],
      note: "Izby SN: Cywilna, Karna, Pracy i Ubezpieczeń Społecznych, Kontroli Nadzwyczajnej i Spraw Publicznych oraz Odpowiedzialności Zawodowej. Izba Dyscyplinarna została zniesiona.",
    },
    {
      id: 3,
      question: "Regulamin Sądu Najwyższego określa:",
      options: [
        {
          key: "a",
          text: "Prezydent Rzeczypospolitej Polskiej, po zasięgnięciu opinii Kolegium Sądu Najwyższego, w drodze rozporządzenia",
        },
        {
          key: "b",
          text: "Prezydent Rzeczypospolitej Polskiej, po zasięgnięciu opinii Kolegium Sądu Najwyższego, w drodze ustawy",
        },
        {
          key: "c",
          text: "Minister Sprawiedliwości, po zasięgnięciu opinii Kolegium Sądu Najwyższego, w drodze rozporządzenia",
        },
        {
          key: "d",
          text: "Minister Sprawiedliwości, po zasięgnięciu opinii Kolegium Sądu Najwyższego, w drodze ustawy",
        },
      ],
      correct: ["a"],
    },
    {
      id: 4,
      question:
        "Coroczna informacja o działalności Sądu Najwyższego jest składana przez Pierwszego Prezesa Sądu Najwyższego:",
      multi: true,
      options: [
        { key: "a", text: "Prezydentowi Rzeczypospolitej Polskiej" },
        { key: "b", text: "Krajowej Radzie Sądownictwa" },
        { key: "c", text: "Sejmowi" },
        { key: "d", text: "Senatowi" },
      ],
      correct: ["a", "b", "c", "d"],
    },
    {
      id: 5,
      question:
        "Sygnalizowanie nieprawidłowości lub luk w prawie stanowi zadanie zastrzeżone dla:",
      options: [
        { key: "a", text: "Prezesa Sądu Najwyższego" },
        { key: "b", text: "Pierwszego Prezesa Sądu Najwyższego" },
        { key: "c", text: "Zgromadzenia Ogólnego Sędziów Sądu Najwyższego" },
        {
          key: "d",
          text: "zgromadzenia sędziów orzekających w Izbie Odpowiedzialności Zawodowej",
        },
      ],
      correct: ["b"],
    },
    {
      id: 6,
      question: "Sąd Najwyższy:",
      options: [
        {
          key: "a",
          text: "może wydawać zbiór swoich orzeczeń; nazwa „Orzecznictwo Sądu Najwyższego” z oznaczeniem odpowiedniej izby podlega ochronie prawnej",
        },
        {
          key: "b",
          text: "wydaje zbiór swoich orzeczeń; nazwa „Orzecznictwo Sądu Najwyższego” z oznaczeniem odpowiedniej izby podlega ochronie prawnej",
        },
        {
          key: "c",
          text: "może wydawać zbiór swoich orzeczeń; nazwa „Orzecznictwo Sądu Najwyższego” z oznaczeniem odpowiedniej izby nie podlega ochronie prawnej",
        },
        {
          key: "d",
          text: "wydaje zbiór swoich orzeczeń; nazwa „Orzecznictwo Sądu Najwyższego” z oznaczeniem odpowiedniej izby nie podlega ochronie prawnej",
        },
      ],
      correct: ["a"],
    },
    {
      id: 7,
      question:
        "Przepisy Ustawy z dnia 27 lipca 2001 r. – Prawo o ustroju sądów powszechnych:",
      options: [
        { key: "a", text: "stosuje się wprost w zakresie uregulowanym ustawą o Sądzie Najwyższym" },
        { key: "b", text: "stosuje się wprost w zakresie nieuregulowanym ustawą o Sądzie Najwyższym" },
        { key: "c", text: "stosuje się odpowiednio w zakresie uregulowanym ustawą o Sądzie Najwyższym" },
        { key: "d", text: "stosuje się odpowiednio w zakresie nieuregulowanym ustawą o Sądzie Najwyższym" },
      ],
      correct: ["d"],
    },
    {
      id: 8,
      question: "Organami Sądu Najwyższego są:",
      multi: true,
      options: [
        { key: "a", text: "Pierwszy Prezes Sądu Najwyższego" },
        { key: "b", text: "Prezes Sądu Najwyższego" },
        { key: "c", text: "Zgromadzenie Ogólne Sędziów Sądu Najwyższego" },
        { key: "d", text: "Kolegium Sądu Najwyższego" },
      ],
      correct: ["a", "b", "c", "d"],
      note: "Pełny katalog organów SN: Pierwszy Prezes SN, Prezes SN, Zgromadzenie Ogólne Sędziów SN, zgromadzenie sędziów izby SN, zgromadzenie sędziów orzekających w Izbie Odpowiedzialności Zawodowej, zgromadzenie sędziów wyznaczonych do orzekania w Izbie Odpowiedzialności Zawodowej oraz Kolegium SN.",
    },
    {
      id: 9,
      question: "Pierwszy Prezes Sądu Najwyższego jest powoływany:",
      options: [
        {
          key: "a",
          text: "przez Prezydenta RP na pięcioletnią kadencję spośród 6 kandydatów wybranych przez Zgromadzenie Ogólne Sędziów SN i może zostać ponownie powołany tylko raz",
        },
        {
          key: "b",
          text: "przez Prezydenta RP na sześcioletnią kadencję spośród 5 kandydatów wybranych przez Zgromadzenie Ogólne Sędziów SN i może zostać ponownie powołany tylko raz",
        },
        {
          key: "c",
          text: "przez Ministra Sprawiedliwości na pięcioletnią kadencję spośród 6 kandydatów wybranych przez Zgromadzenie Ogólne Sędziów SN i może zostać ponownie powołany tylko raz",
        },
        {
          key: "d",
          text: "przez Ministra Sprawiedliwości na sześcioletnią kadencję spośród 5 kandydatów wybranych przez Zgromadzenie Ogólne Sędziów SN i może zostać ponownie powołany tylko raz",
        },
      ],
      correct: ["b"],
      note: "Pierwszego Prezesa SN powołuje Prezydent RP na 6-letnią kadencję spośród 5 kandydatów wybranych przez Zgromadzenie Ogólne Sędziów SN.",
    },
    {
      id: 10,
      question:
        "Kandydata na stanowisko Pierwszego Prezesa Sądu Najwyższego ma prawo zgłosić:",
      options: [
        { key: "a", text: "każdy sędzia sądu powszechnego; można zgłosić wyłącznie jednego kandydata" },
        { key: "b", text: "każdy sędzia sądu powszechnego; można zgłosić wyłącznie dwóch kandydatów" },
        { key: "c", text: "każdy sędzia Sądu Najwyższego; można zgłosić wyłącznie jednego kandydata" },
        { key: "d", text: "każdy sędzia Sądu Najwyższego; można zgłosić wyłącznie dwóch kandydatów" },
      ],
      correct: ["c"],
    },
    {
      id: 11,
      question:
        "Zgłoszenia kandydata na stanowisko Pierwszego Prezesa Sądu Najwyższego dokonuje się:",
      options: [
        { key: "a", text: "przewodniczącemu Zgromadzenia Ogólnego Sędziów Sądu Najwyższego" },
        { key: "b", text: "Ministrowi Sprawiedliwości" },
        { key: "c", text: "Kolegium Sądu Najwyższego" },
        { key: "d", text: "Prezydentowi RP" },
      ],
      correct: ["a"],
    },
    {
      id: 12,
      question:
        "Zgromadzeniu Ogólnemu Sędziów SN dokonującemu wyboru Pierwszego Prezesa SN przewodniczy:",
      options: [
        { key: "a", text: "bezwzględnie Pierwszy Prezes Sądu Najwyższego" },
        {
          key: "b",
          text: "wyłącznie Sędzia SN, którego kandydatura nie została zgłoszona, wyznaczony przez Prezydenta RP",
        },
        {
          key: "c",
          text: "Pierwszy Prezes SN, a gdy nie jest to możliwe lub gdy zgłoszono jego kandydaturę – sędzia SN, którego kandydatura nie została zgłoszona, wyznaczony przez Ministra Sprawiedliwości",
        },
        {
          key: "d",
          text: "Pierwszy Prezes SN, a gdy nie jest to możliwe lub gdy zgłoszono jego kandydaturę – sędzia SN, którego kandydatura nie została zgłoszona, wyznaczony przez Prezydenta RP",
        },
      ],
      correct: ["d"],
    },
    {
      id: 13,
      question:
        "Do dokonania przez Zgromadzenie Ogólne Sędziów SN wyboru kandydatów na stanowisko Pierwszego Prezesa SN wymagana jest obecność:",
      options: [
        { key: "a", text: "84 członków Zgromadzenia Ogólnego Sędziów SN" },
        { key: "b", text: "co najmniej 84 członków Zgromadzenia Ogólnego Sędziów SN" },
        { key: "c", text: "85 członków Zgromadzenia Ogólnego Sędziów SN" },
        { key: "d", text: "co najmniej 85 członków Zgromadzenia Ogólnego Sędziów SN" },
      ],
      correct: ["b"],
    },
    {
      id: 14,
      question: "Po wybraniu kandydatów na stanowisko Pierwszego Prezesa SN:",
      options: [
        {
          key: "a",
          text: "przewodniczący ZO albo inna osoba wskazana przez ZO przekazuje w terminie 7 dni od głosowania listę kandydatów; protokół głosowania jest elementem fakultatywnym listy",
        },
        {
          key: "b",
          text: "przewodniczący ZO albo inna osoba wskazana przez ZO przekazuje w terminie 7 dni od głosowania listę kandydatów; protokół głosowania jest elementem obligatoryjnym listy",
        },
        {
          key: "c",
          text: "przewodniczący ZO albo inna osoba wskazana przez ZO przekazuje niezwłocznie listę kandydatów; protokół głosowania jest elementem fakultatywnym listy",
        },
        {
          key: "d",
          text: "przewodniczący ZO albo inna osoba wskazana przez ZO przekazuje niezwłocznie listę kandydatów; protokół głosowania jest elementem obligatoryjnym listy",
        },
      ],
      correct: ["d"],
    },
    {
      id: 15,
      question:
        "Jeżeli kandydaci na stanowisko Pierwszego Prezesa SN nie zostali wybrani zgodnie z zasadami określonymi w ustawie:",
      options: [
        { key: "a", text: "obowiązki Pierwszego Prezesa SN wykonuje w dalszym ciągu poprzedni Pierwszy Prezes SN" },
        {
          key: "b",
          text: "obowiązki Pierwszego Prezesa SN wykonuje sędzia SN wskazany przez Prezydenta RP, powołany na 6-letnią kadencję",
        },
        {
          key: "c",
          text: "obowiązki Pierwszego Prezesa SN wykonuje sędzia SN wskazany przez Prezydenta RP, zobowiązany w terminie tygodnia do zwołania ZO w celu wyboru kandydatów",
        },
        {
          key: "d",
          text: "obowiązki Pierwszego Prezesa SN wykonuje sędzia SN wskazany przez Ministra Sprawiedliwości, zobowiązany w terminie tygodnia do zwołania ZO",
        },
      ],
      correct: ["c"],
    },
    {
      id: 16,
      question: "W czasie nieobecności Pierwszego Prezesa SN zastępuje go:",
      options: [
        { key: "a", text: "wyłącznie Prezes Sądu Najwyższego" },
        { key: "b", text: "Prezes Sądu Najwyższego wyznaczony przez Prezydenta RP" },
        { key: "c", text: "wyłącznie Prezes SN najstarszy służbą na stanowisku sędziego" },
        {
          key: "d",
          text: "wyznaczony przez niego Prezes SN, a w przypadku niemożności wyznaczenia – Prezes SN najstarszy służbą na stanowisku sędziego",
        },
      ],
      correct: ["d"],
    },
    {
      id: 17,
      question: "Prezes Sądu Najwyższego jest powoływany przez:",
      options: [
        { key: "a", text: "Prezydenta RP, po zasięgnięciu opinii Pierwszego Prezesa SN" },
        { key: "b", text: "Prezydenta RP; Pierwszy Prezes SN nie ma jakiegokolwiek wpływu na kandydaturę" },
        { key: "c", text: "Ministra Sprawiedliwości, po zasięgnięciu opinii Pierwszego Prezesa SN" },
        { key: "d", text: "Ministra Sprawiedliwości; Pierwszy Prezes SN nie ma jakiegokolwiek wpływu na kandydaturę" },
      ],
      correct: ["a"],
    },
    {
      id: 18,
      question: "Prezes Sądu Najwyższego jest powoływany:",
      options: [
        {
          key: "a",
          text: "na trzyletnią kadencję spośród 6 kandydatów przedstawionych przez zgromadzenie sędziów izby SN i może zostać ponownie wybrany tylko dwukrotnie",
        },
        {
          key: "b",
          text: "na sześcioletnią kadencję spośród 3 kandydatów przedstawionych przez zgromadzenie sędziów izby SN i może zostać ponownie wybrany tylko dwukrotnie",
        },
        {
          key: "c",
          text: "na trzyletnią kadencję spośród 3 kandydatów przedstawionych przez zgromadzenie sędziów izby SN i może zostać ponownie wybrany tylko dwukrotnie",
        },
        {
          key: "d",
          text: "na trzyletnią kadencję spośród 6 kandydatów przedstawionych przez zgromadzenie sędziów izby SN i może zostać ponownie wybrany tylko raz",
        },
      ],
      correct: ["c"],
    },
    {
      id: 19,
      question: "Do dokonania wyboru Prezesa Sądu Najwyższego wymagana jest obecność:",
      options: [
        { key: "a", text: "co najmniej 2/3 członków zgromadzenia sędziów izby SN" },
        { key: "b", text: "2/3 członków zgromadzenia sędziów izby SN" },
        { key: "c", text: "½ członków zgromadzenia sędziów izby SN" },
        { key: "d", text: "co najmniej ½ członków zgromadzenia sędziów izby SN" },
      ],
      correct: ["a"],
    },
    {
      id: 20,
      question: "Zgromadzenie Ogólne Sędziów Sądu Najwyższego:",
      options: [
        { key: "a", text: "może rozpatrywać sprawy z inicjatywy co najmniej 3 sędziów SN" },
        { key: "b", text: "może rozpatrywać sprawy z inicjatywy co najmniej 5 sędziów SN" },
        { key: "c", text: "może rozpatrywać sprawy z inicjatywy co najmniej 6 sędziów SN" },
        { key: "d", text: "może rozpatrywać sprawy z inicjatywy co najmniej 9 sędziów SN" },
      ],
      correct: ["b"],
    },
    {
      id: 21,
      question: "Uchwały Zgromadzenia Ogólnego Sędziów SN zapadają:",
      options: [
        {
          key: "a",
          text: "zwykłą większością głosów w obecności co najmniej 2/3 liczby sędziów każdej z izb; głosowanie jest, co do zasady, tajne",
        },
        {
          key: "b",
          text: "zwykłą większością głosów w obecności co najmniej 2/3 liczby sędziów każdej z izb; głosowanie jest, w każdym przypadku, tajne",
        },
        {
          key: "c",
          text: "zwykłą większością głosów w obecności co najmniej 2/3 liczby sędziów każdej z izb, z wyłączeniem Izby Odpowiedzialności Zawodowej; głosowanie jest, w każdym przypadku, tajne",
        },
        {
          key: "d",
          text: "zwykłą większością głosów w obecności co najmniej 2/3 liczby sędziów każdej z izb, z wyłączeniem Izby Odpowiedzialności Zawodowej; głosowanie jest, co do zasady, jawne",
        },
      ],
      correct: ["d"],
    },
    {
      id: 22,
      question: "Głosowanie nad uchwałą zgromadzenia sędziów izby SN jest:",
      options: [
        { key: "a", text: "tajne pod warunkiem zgłoszenia takiego żądania przez 1 z obecnych członków zgromadzenia" },
        { key: "b", text: "tajne pod warunkiem zgłoszenia takiego żądania przez 2 z obecnych członków zgromadzenia" },
        { key: "c", text: "jawne pod warunkiem zgłoszenia takiego żądania przez 1 z obecnych członków zgromadzenia" },
        { key: "d", text: "jawne pod warunkiem zgłoszenia takiego żądania przez 2 z obecnych członków zgromadzenia" },
      ],
      correct: ["a"],
    },
    {
      id: 23,
      question:
        "Kandydatów na stanowisko Prezesa SN kierującego pracą Izby Odpowiedzialności Zawodowej przedstawia:",
      options: [
        { key: "a", text: "Zgromadzenie Ogólne Sędziów Sądu Najwyższego" },
        { key: "b", text: "Kolegium Sądu Najwyższego" },
        { key: "c", text: "Pierwszy Prezes Sądu Najwyższego" },
        { key: "d", text: "zgromadzenie sędziów orzekających w Izbie Odpowiedzialności Zawodowej" },
      ],
      correct: ["d"],
    },
    {
      id: 24,
      question: "Kolegium Sądu Najwyższego tworzą:",
      multi: true,
      options: [
        { key: "a", text: "Pierwszy Prezes Sądu Najwyższego" },
        { key: "b", text: "Prezesi Sądu Najwyższego" },
        { key: "c", text: "sędziowie wybrani przez zgromadzenia sędziów izby SN na okres 2 lat" },
        { key: "d", text: "sędziowie wybrani przez zgromadzenia sędziów izby SN na okres 3 lat" },
      ],
      correct: ["a", "b", "d"],
      note: "Kolegium SN tworzą: Pierwszy Prezes SN, Prezesi SN oraz sędziowie wybrani przez zgromadzenia sędziów izby SN na okres 3 lat (nie 2 lat).",
    },
    {
      id: 25,
      question: "Zaznacz zdania prawdziwe:",
      multi: true,
      options: [
        {
          key: "a",
          text: "funkcji członka/zastępcy Kolegium SN wybranego przez zgromadzenie sędziów Izby Odpowiedzialności Zawodowej nie można łączyć z funkcją członka/zastępcy Kolegium SN wybranego przez zgromadzenie innej izby",
        },
        {
          key: "b",
          text: "funkcję członka/zastępcy Kolegium SN wybranego przez zgromadzenie Izby Odpowiedzialności Zawodowej można łączyć z funkcją członka/zastępcy wybranego przez zgromadzenie innej izby",
        },
        { key: "c", text: "przewodniczącym Kolegium SN jest Pierwszy Prezes Sądu Najwyższego" },
        { key: "d", text: "do podjęcia uchwały Kolegium SN wymagana jest obecność co najmniej 2/3 liczby członków Kolegium SN" },
      ],
      correct: ["a", "c", "d"],
    },
    {
      id: 26,
      question:
        "Prezes SN kierujący pracą danej izby, uznając, że izba ta nie jest właściwa do rozpoznania sprawy:",
      options: [
        { key: "a", text: "zwraca się do Pierwszego Prezesa SN o wskazanie właściwej izby; Pierwszy Prezes SN jest tym związany" },
        { key: "b", text: "zwraca się do Pierwszego Prezesa SN o wskazanie właściwej izby; Pierwszy Prezes SN może odmówić przekazania sprawy do innej izby" },
        { key: "c", text: "zwraca się do Prezesa SN tej izby, która jest właściwa; Prezes tej izby jest tym związany" },
        { key: "d", text: "zwraca się do Prezesa SN tej izby, która jest właściwa; Prezes tej izby może odmówić przyjęcia sprawy" },
      ],
      correct: ["b"],
    },
    {
      id: 27,
      question:
        "Test niezawisłości i bezstronności sędziego w rozumieniu ustawy o Sądzie Najwyższym:",
      multi: true,
      options: [
        { key: "a", text: "jest przeprowadzany z urzędu" },
        { key: "b", text: "jest przeprowadzany na wniosek" },
        { key: "c", text: "dotyczy wyłącznie sędziów Sądu Najwyższego" },
        {
          key: "d",
          text: "dotyczy sędziów SN oraz sędziów delegowanych do pełnienia czynności sędziowskich w SN",
        },
      ],
      correct: ["b", "d"],
    },
    {
      id: 28,
      question: "Wniosek dotyczący testu niezawisłości i bezstronności sędziego składa się:",
      options: [
        { key: "a", text: "w terminie tygodnia od zawiadomienia o składzie; upływ terminu nie ma wpływu na uprawnienie do złożenia wniosku później" },
        { key: "b", text: "w terminie tygodnia od zawiadomienia o składzie; po upływie terminu prawo do złożenia wniosku wygasa" },
        { key: "c", text: "w terminie 2 tygodni od zawiadomienia o składzie; upływ terminu nie ma wpływu na uprawnienie później" },
        { key: "d", text: "w terminie 2 tygodni od zawiadomienia o składzie; po upływie terminu prawo do złożenia wniosku wygasa" },
      ],
      correct: ["b"],
    },
    {
      id: 29,
      question:
        "Wniosek dotyczący testu niezawisłości i bezstronności sędziego, który nie spełnia wymogów prawem przewidzianych:",
      options: [
        { key: "a", text: "podlega odrzuceniu bez wzywania do uzupełnienia braków formalnych" },
        { key: "b", text: "podlega odrzuceniu po uprzednim wezwaniu do uzupełnienia braków formalnych" },
        { key: "c", text: "pozostawia się bez rozpoznania" },
        { key: "d", text: "podlega oddaleniu" },
      ],
      correct: ["a"],
    },
    {
      id: 30,
      question:
        "Do czasu rozpoznania wniosku dotyczącego testu niezawisłości i bezstronności sędzia, którego wniosek dotyczy:",
      options: [
        { key: "a", text: "bezwzględnie nie może podejmować żadnych dalszych czynności" },
        { key: "b", text: "może, bez wyjątku, podejmować dalsze czynności" },
        { key: "c", text: "co do zasady nie podejmuje dalszych czynności, z wyjątkiem czynności niecierpiącej zwłoki" },
        { key: "d", text: "nie podejmuje czynności niecierpiącej zwłoki" },
      ],
      correct: ["c"],
    },
    {
      id: 31,
      question:
        "Wysłuchanie sędziego SN, względem którego złożono wniosek dotyczący testu niezawisłości i bezstronności, jest:",
      options: [
        { key: "a", text: "bezwzględnie fakultatywne" },
        { key: "b", text: "względnie fakultatywne" },
        { key: "c", text: "bezwzględnie obligatoryjne" },
        { key: "d", text: "względnie obligatoryjne" },
      ],
      correct: ["d"],
      note: "SN rozpoznaje wniosek na posiedzeniu niejawnym w składzie 5 sędziów losowanych spośród całego składu SN, po wysłuchaniu sędziego, którego wniosek dotyczy — chyba że wysłuchanie jest niemożliwe lub bardzo utrudnione. Wysłuchanie może nastąpić na piśmie. Sędzia, którego wniosek dotyczy, jest wyłączony z losowania.",
    },
    {
      id: 32,
      question: "Wniosek dotyczący testu niezawisłości i bezstronności:",
      multi: true,
      options: [
        { key: "a", text: "podlega rozpoznaniu na posiedzeniu jawnym" },
        { key: "b", text: "podlega rozpoznaniu na posiedzeniu niejawnym" },
        { key: "c", text: "podlega rozpoznaniu w składzie 5 sędziów" },
        { key: "d", text: "podlega rozpoznaniu w składzie 3 sędziów" },
      ],
      correct: ["b", "c"],
    },
    {
      id: 33,
      question:
        "Postanowienie wydane wskutek rozpoznania wniosku dotyczącego testu niezawisłości i bezstronności:",
      options: [
        { key: "a", text: "jest zaskarżalne w drodze odwołania; legitymacja przysługuje podmiotowi, który złożył wniosek oraz sędziemu, którego orzeczenie dotyczy" },
        { key: "b", text: "jest zaskarżalne w drodze zażalenia; legitymacja przysługuje wyłącznie sędziemu, którego orzeczenie dotyczy" },
        { key: "c", text: "jest zaskarżalne w drodze zażalenia; legitymacja przysługuje wyłącznie podmiotowi, który złożył wniosek" },
        { key: "d", text: "nie jest zaskarżalne" },
      ],
      correct: ["a"],
    },
    {
      id: 34,
      question:
        "Do pełnienia urzędu na stanowisku sędziego Sądu Najwyższego może być powołana osoba, która:",
      multi: true,
      options: [
        {
          key: "a",
          text: "nie była prawomocnie skazana za nieumyślne przestępstwo ścigane z oskarżenia publicznego lub umyślne przestępstwo skarbowe (…)",
        },
        { key: "b", text: "ukończyła 35 lat" },
        { key: "c", text: "wyróżnia się wysokim poziomem wiedzy prawniczej" },
        { key: "d", text: "jest zdolna, ze względu na stan zdrowia, do pełnienia obowiązków sędziego" },
      ],
      correct: ["c", "d"],
      note: "Pełne wymagania: 1) wyłącznie obywatelstwo polskie i pełnia praw cywilnych i publicznych; 2) niekaralność za UMYŚLNE przestępstwo ścigane z oskarżenia publicznego lub umyślne przestępstwo skarbowe; 3) ukończone 40 lat; 4) nieskazitelny charakter; 5) wyższe studia prawnicze (mgr) w RP lub uznane zagraniczne; 6) wysoki poziom wiedzy prawniczej; 7) zdolność zdrowotna; 8) co najmniej 10-letni staż (m.in. sędzia, prokurator, adwokat, radca, notariusz); 9) brak służby/pracy/współpracy z organami bezpieczeństwa państwa. Odp. a jest błędna (powinno być „umyślne”), odp. b jest błędna (40, nie 35 lat).",
    },
    {
      id: 35,
      question:
        "Liczbę wolnych stanowisk sędziego przewidzianych do objęcia w poszczególnych izbach SN obwieszcza:",
      options: [
        { key: "a", text: "Minister Sprawiedliwości, po zasięgnięciu opinii Prezesa SN" },
        { key: "b", text: "Minister Sprawiedliwości, po zasięgnięciu opinii Pierwszego Prezesa SN" },
        { key: "c", text: "Prezydent RP, po zasięgnięciu opinii Prezesa SN" },
        { key: "d", text: "Prezydent RP, po zasięgnięciu opinii Pierwszego Prezesa SN" },
      ],
      correct: ["d"],
    },
    {
      id: 36,
      question:
        "Każda osoba, która spełnia warunki do objęcia stanowiska sędziego SN, może zgłosić swoją kandydaturę:",
      options: [
        { key: "a", text: "Krajowej Radzie Sądownictwa w terminie miesiąca od dnia obwieszczenia o wolnych stanowiskach" },
        { key: "b", text: "Krajowej Radzie Sądownictwa w terminie dwóch miesięcy od dnia obwieszczenia" },
        { key: "c", text: "Prezydentowi RP w terminie miesiąca od dnia obwieszczenia" },
        { key: "d", text: "Prezydentowi RP w terminie dwóch miesięcy od dnia obwieszczenia" },
      ],
      correct: ["a"],
    },
    {
      id: 37,
      question:
        "Uchwała w przedmiocie pozostawienia bez rozpoznania zgłoszenia na wolne stanowisko sędziowskie:",
      options: [
        { key: "a", text: "nie jest zaskarżalna" },
        { key: "b", text: "jest zaskarżalna w drodze apelacji" },
        { key: "c", text: "jest zaskarżalna w drodze odwołania" },
        { key: "d", text: "jest zaskarżalna w drodze zażalenia" },
      ],
      correct: ["a"],
    },
    {
      id: 38,
      question: "Nawiązanie stosunku służbowego sędziego SN następuje:",
      options: [
        { key: "a", text: "na podstawie umowy o pracę" },
        { key: "b", text: "na podstawie umowy cywilnoprawnej" },
        { key: "c", text: "na podstawie aktu powołania" },
        { key: "d", text: "żadna z powyższych odpowiedzi nie jest prawidłowa" },
      ],
      correct: ["c"],
    },
    {
      id: 39,
      question: "Sędzia zgłasza się w celu objęcia stanowiska w terminie:",
      options: [
        { key: "a", text: "7 dni od dnia doręczenia aktu powołania" },
        { key: "b", text: "14 dni od dnia doręczenia aktu powołania" },
        { key: "c", text: "21 dni od dnia doręczenia aktu powołania" },
        { key: "d", text: "30 dni od dnia doręczenia aktu powołania" },
      ],
      correct: ["b"],
    },
    {
      id: 40,
      question: "Zgoda sędziego na przeniesienie na stanowisko w innej izbie:",
      options: [
        { key: "a", text: "ma charakter bezwzględny" },
        { key: "b", text: "ma charakter względny" },
        { key: "c", text: "co do zasady nie jest wymagana" },
        { key: "d", text: "nie jest wymagana, ponieważ przeniesienie do innej izby nie jest dopuszczalne" },
      ],
      correct: ["b"],
      note: "Sędzia może być wyznaczony przez Pierwszego Prezesa SN do udziału w rozpoznaniu określonej sprawy w innej izbie oraz — za zgodą sędziego — do orzekania na czas określony w innej izbie. Wyznaczenie BEZ zgody może nastąpić na okres nie dłuższy niż 6 miesięcy w roku.",
    },
    {
      id: 41,
      question: "Stosunek służbowy sędziego SN wygasa w przypadku:",
      multi: true,
      options: [
        { key: "a", text: "śmierci" },
        { key: "b", text: "zrzeczenia się pełnienia urzędu na stanowisku sędziego SN lub statusu sędziego w stanie spoczynku" },
        { key: "c", text: "prawomocnego orzeczenia środka karnego w postaci pozbawienia praw publicznych lub zakazu zajmowania stanowiska sędziego" },
        { key: "d", text: "nabycia obywatelstwa obcego państwa, chyba że sędzia zrzekł się go w terminie 14 dni od nabycia" },
      ],
      correct: ["a", "b", "c"],
    },
    {
      id: 42,
      question: "Sędzia Sądu Najwyższego:",
      options: [
        { key: "a", text: "przechodzi w stan spoczynku z dniem ukończenia 65 roku życia" },
        { key: "b", text: "może przejść w stan spoczynku z dniem ukończenia 65 roku życia" },
        { key: "c", text: "przechodzi w stan spoczynku z dniem ukończenia 66 roku życia" },
        { key: "d", text: "może przejść w stan spoczynku z dniem ukończenia 66 roku życia" },
      ],
      correct: ["a"],
    },
    {
      id: 43,
      question: "Sędzia Sądu Najwyższego będący kobietą:",
      options: [
        { key: "a", text: "może przejść w stan spoczynku z dniem ukończenia 60. roku życia; składa oświadczenie Prezesowi SN" },
        { key: "b", text: "może przejść w stan spoczynku z dniem ukończenia 60. roku życia; składa oświadczenie Pierwszemu Prezesowi SN" },
        { key: "c", text: "przechodzi w stan spoczynku z dniem ukończenia 60. roku życia; składa oświadczenie Prezesowi SN" },
        { key: "d", text: "przechodzi w stan spoczynku z dniem ukończenia 60. roku życia; składa oświadczenie Pierwszemu Prezesowi SN" },
      ],
      correct: ["b"],
    },
    {
      id: 44,
      question: "Trwała niezdolność do pełnienia obowiązków sędziego:",
      multi: true,
      options: [
        { key: "a", text: "stanowi przesłankę obligatoryjną przeniesienia sędziego w stan spoczynku" },
        { key: "b", text: "stanowi przesłankę fakultatywną przeniesienia sędziego w stan spoczynku" },
        { key: "c", text: "nie wpływa na dalsze zajmowanie stanowiska sędziego" },
        { key: "d", text: "wpływa na dalsze zajmowanie stanowiska sędziego" },
      ],
      correct: ["a", "d"],
      note: "Sędziego SN przenosi się w stan spoczynku na jego wniosek albo na wniosek Kolegium SN, jeżeli z powodu choroby lub utraty sił został uznany przez lekarza orzecznika ZUS za trwale niezdolnego do pełnienia obowiązków sędziego.",
    },
    {
      id: 45,
      question:
        "W sprawach przeniesienia sędziego w stan spoczynku z powodu trwałej niezdolności do pracy uchwałę podejmuje:",
      options: [
        { key: "a", text: "Kolegium SN na wniosek zainteresowanego sędziego albo Pierwszego Prezesa SN" },
        { key: "b", text: "KRS na wniosek zainteresowanego sędziego albo Prezesa SN" },
        { key: "c", text: "KRS wyłącznie na wniosek Pierwszego Prezesa SN" },
        { key: "d", text: "KRS na wniosek zainteresowanego sędziego albo Kolegium SN" },
      ],
      correct: ["d"],
    },
    {
      id: 46,
      question:
        "Datę przejścia / przeniesienia sędziego SN w stan spoczynku stwierdza:",
      options: [
        { key: "a", text: "Minister Sprawiedliwości" },
        { key: "b", text: "Prezydent RP" },
        { key: "c", text: "Kolegium Sądu Najwyższego" },
        { key: "d", text: "Pierwszy Prezes Sądu Najwyższego" },
      ],
      correct: ["b"],
    },
    {
      id: 47,
      question: "Delegowanie sędziego sądu powszechnego do Sądu Najwyższego jest możliwe na okres:",
      options: [
        { key: "a", text: "oznaczony, nie dłuższy niż rok" },
        { key: "b", text: "oznaczony, nie dłuższy niż 2 lata" },
        { key: "c", text: "oznaczony, nie dłuższy niż 3 lata" },
        { key: "d", text: "nieoznaczony" },
      ],
      correct: ["b"],
    },
    {
      id: 48,
      question:
        "Liczba sędziów delegowanych do pełnienia czynności sędziowskich w SN nie może być większa niż:",
      options: [
        { key: "a", text: "10% liczby stanowisk sędziów SN" },
        { key: "b", text: "20% liczby stanowisk sędziów SN" },
        { key: "c", text: "30% liczby stanowisk sędziów SN" },
        { key: "d", text: "40% liczby stanowisk sędziów SN" },
      ],
      correct: ["c"],
    },
    {
      id: 49,
      question: "Obowiązek zachowania tajemnicy sędziowskiej:",
      multi: true,
      options: [
        { key: "a", text: "jest limitowany czasowo" },
        { key: "b", text: "jest nieograniczony czasowo" },
        { key: "c", text: "ma charakter względny" },
        { key: "d", text: "ma charakter bezwzględny" },
      ],
      correct: ["b", "c"],
    },
    {
      id: 50,
      question:
        "Zakaz pozostawania w innym stosunku służbowym, stosunku pracy i podejmowania innych zajęć i sposobów zarobkowania:",
      multi: true,
      options: [
        { key: "a", text: "ma charakter względny" },
        { key: "b", text: "ma charakter bezwzględny" },
        { key: "c", text: "nie ma zastosowania do sędziego SN" },
        { key: "d", text: "ma zastosowanie do sędziego SN" },
      ],
      correct: ["a", "d"],
    },
  ],
};
