// Ćwiczenia ze schematu organizacyjnego (arkusz „Schematy nr 1").
// Pytania pochodzą z arkusza wykładowcy; odpowiedzi opracowano na podstawie
// Prawa o ustroju sądów powszechnych (art. 21–32).

export interface Exercise {
  id: number;
  prompt: string;
  answer: string;
  basis: string;
}

export const exercises: Exercise[] = [
  {
    id: 1,
    prompt: "Uzupełnij schemat: organy sądu rejonowego, okręgowego i apelacyjnego.",
    answer:
      "Sąd rejonowy: a) prezes sądu, b) dyrektor sądu (z zastrzeżeniem art. 21a § 1 — fakultatywnie).\nSąd okręgowy: a) prezes sądu, b) kolegium sądu, c) dyrektor sądu.\nSąd apelacyjny: a) prezes sądu, b) kolegium sądu, c) dyrektor sądu.",
    basis: "art. 21 u.s.p.",
  },
  {
    id: 2,
    prompt: "Stanowisko dyrektora w sądzie rejonowym jest: a) obligatoryjne b) fakultatywne c) mieszane",
    answer:
      "b) fakultatywne — w sądzie rejonowym „można powołać” dyrektora, jeżeli uzasadniają to względy organizacyjne. W sądzie apelacyjnym i okręgowym dyrektor jest obligatoryjny.",
    basis: "art. 21a § 1 u.s.p.",
  },
  {
    id: 3,
    prompt: "Zwierzchnikiem służbowym dyrektora sądu jest: a) Minister Sprawiedliwości b) prezes sądu c) przewodniczący wydziału",
    answer:
      "a) Minister Sprawiedliwości — to on powołuje i odwołuje dyrektora sądu. W zakresie budżetowym dyrektorzy SR i SO podlegają dyrektorowi przełożonego sądu apelacyjnego, a dyrektor SA — bezpośrednio Ministrowi Sprawiedliwości.",
    basis: "art. 32 § 1, art. 177 § 4 u.s.p.",
  },
  {
    id: 4,
    prompt: "Uzupełnij tabelę: kompetencje prezesa sądu.",
    answer:
      "Prezes sądu: 1) kieruje sądem i reprezentuje go na zewnątrz (poza kompetencjami dyrektora) — kieruje działalnością administracyjną (art. 8 pkt 2), jest zwierzchnikiem służbowym sędziów, asesorów, referendarzy i asystentów, powierza i zwalnia z funkcji; 2) dokonuje analizy orzecznictwa pod względem jednolitości; 3) pełni inne czynności przewidziane w ustawie.",
    basis: "art. 22 § 1 u.s.p.",
  },
  {
    id: 5,
    prompt: "Przeniesienie sędziego do innego wydziału: a) zawsze wymaga zgody b) co do zasady wymaga zgody c) nie wymaga zgody",
    answer:
      "b) co do zasady wymaga zgody sędziego (art. 22a § 4a). Zgoda nie jest wymagana w wyjątkach z § 4b (m.in. przeniesienie do wydziału z tego samego zakresu spraw; gdy żaden inny sędzia nie wyraził zgody).",
    basis: "art. 22a § 4a–4b u.s.p.",
  },
  {
    id: 6,
    prompt: "Uzupełnij: zasady zastępowania prezesa sądu i wykonywania funkcji, gdy prezesa nie powołano.",
    answer:
      "Prezesa sądu zastępuje WICEPREZES, a w razie jego nieobecności — wyznaczony sędzia. Jeżeli prezesa nie powołano, funkcję prezesa wykonuje — przez okres nie dłuższy niż 6 miesięcy — wiceprezes (gdy jest ich kilku — najstarszy służbą). Jeżeli nie powołano wiceprezesa, funkcję prezesa — przez okres nie dłuższy niż 6 miesięcy — wykonuje najstarszy służbą sędzia pełniący funkcję przewodniczącego wydziału.",
    basis: "art. 22b § 1–2 u.s.p.",
  },
  {
    id: 7,
    prompt: "Procedura powoływania prezesów: kto, spośród kogo, na jak długo.",
    answer:
      "Prezes SA — Minister Sprawiedliwości, spośród sędziów SA albo SO, na 6 lat.\nPrezes SO — Minister Sprawiedliwości, spośród sędziów SA, SO albo SR, na 6 lat.\nPrezes SR — Minister Sprawiedliwości, spośród sędziów SO albo SR, na 4 lata, najwyżej dwie kolejne kadencje.\nOgraniczenie: prezesi SA i SO nie mogą być ponownie powołani na prezesa/wiceprezesa w tym sądzie przed upływem 6 lat od zakończenia kadencji.",
    basis: "art. 23–26 u.s.p.",
  },
  {
    id: 8,
    prompt: "Wskaż podmiot i przyczyny odwołania prezesa i wiceprezesa sądu w trakcie kadencji.",
    answer:
      "PODMIOT: Minister Sprawiedliwości (po zasięgnięciu opinii kolegium właściwego sądu).\nPRZYCZYNY: a) rażące lub uporczywe niewywiązywanie się z obowiązków służbowych; b) gdy dalszego pełnienia funkcji nie da się pogodzić z dobrem wymiaru sprawiedliwości; c) szczególnie niska efektywność w nadzorze administracyjnym/organizacji pracy; d) złożenie rezygnacji.\nNegatywna opinia KRS jest wiążąca, jeżeli podjęto ją większością 2/3 głosów.",
    basis: "art. 27 u.s.p.",
  },
  {
    id: 9,
    prompt: "Uzupełnij tabelę: kolegium sądu apelacyjnego i okręgowego (skład, przewodniczący, uchwały, głosowanie, częstotliwość, tryb zwołania).",
    answer:
      "Kolegium SA — skład: prezes SA + prezesi SO z obszaru właściwości. Kolegium SO — skład: prezes SO + prezesi SR z obszaru właściwości.\nPrzewodniczący: prezes danego sądu, w razie nieobecności — najstarszy służbą członek.\nUchwały: większością głosów; quorum — co najmniej połowa wszystkich członków.\nGłosowanie: tajne na żądanie choćby jednego członka.\nCzęstotliwość: nie rzadziej niż raz na kwartał.\nTryb zwołania: prezes z własnej inicjatywy lub na wniosek 1/3 członków kolegium.",
    basis: "art. 28, 30 u.s.p.",
  },
];
