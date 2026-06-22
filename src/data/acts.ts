import type { ActDoc } from "./types";

// PDF-y znajdują się w katalogu /public/akty i są kopiowane do builda.
// Wszystkie teksty to OFICJALNE akty prawne pobrane z ISAP (Sejm RP):
//  - Konstytucja RP — tekst ogłoszony (Dz.U. 1997 nr 78 poz. 483),
//  - pozostałe ustawy — teksty ujednolicone (z naniesionymi zmianami).
// Nie zawierają materiałów wykładowcy.
export const acts: ActDoc[] = [
  {
    id: "konstytucja",
    title: "Konstytucja Rzeczypospolitej Polskiej",
    citation: "Konstytucja RP z dnia 2 kwietnia 1997 r. (Dz.U. 1997 nr 78 poz. 483)",
    pdf: "akty/konstytucja-rp.pdf",
    description:
      "Ustrojowe podstawy władzy sądowniczej: sądy i trybunały, niezawisłość i nieusuwalność sędziów, KRS, prawo do sądu.",
  },
  {
    id: "usp",
    title: "Prawo o ustroju sądów powszechnych",
    citation:
      "Ustawa z dnia 27 lipca 2001 r. — Prawo o ustroju sądów powszechnych",
    pdf: "akty/prawo-o-ustroju-sadow-powszechnych.pdf",
    description:
      "Sądy rejonowe, okręgowe i apelacyjne; status sędziego, referendarze, ławnicy, odpowiedzialność dyscyplinarna.",
  },
  {
    id: "sn",
    title: "Ustawa o Sądzie Najwyższym",
    citation: "Ustawa z dnia 8 grudnia 2017 r. o Sądzie Najwyższym",
    pdf: "akty/ustawa-o-sadzie-najwyzszym.pdf",
    description:
      "Ustrój i organizacja Sądu Najwyższego: izby, organy, powoływanie sędziów i Pierwszego Prezesa, test niezawisłości.",
  },
  {
    id: "adw",
    title: "Prawo o adwokaturze",
    citation: "Ustawa z dnia 26 maja 1982 r. — Prawo o adwokaturze",
    pdf: "akty/prawo-o-adwokaturze.pdf",
    description:
      "Samorząd zawodowy adwokatury, organy adwokatury i izb, wykonywanie zawodu, odpowiedzialność dyscyplinarna.",
  },
  {
    id: "radcowie",
    title: "Ustawa o radcach prawnych",
    citation: "Ustawa z dnia 6 lipca 1982 r. o radcach prawnych (t.j. ze zm.)",
    pdf: "akty/ustawa-o-radcach-prawnych.pdf",
    description:
      "Wykonywanie zawodu radcy prawnego (m.in. w stosunku pracy), samorząd radców prawnych, immunitet, odpowiedzialność dyscyplinarna.",
  },
  {
    id: "prokuratura",
    title: "Prawo o prokuraturze",
    citation: "Ustawa z dnia 28 stycznia 2016 r. — Prawo o prokuraturze (t.j. Dz.U. 2024 poz. 390 ze zm.)",
    pdf: "akty/prawo-o-prokuraturze.pdf",
    description:
      "Skład i struktura prokuratury, Prokurator Generalny (Minister Sprawiedliwości), niezależność i podległość prokuratora, immunitet.",
  },
];

export function getActByPdf(pdf?: string): ActDoc | undefined {
  if (!pdf) return undefined;
  return acts.find((a) => a.pdf === pdf);
}
