import { Link } from "react-router-dom";
import {
  ListChecks,
  BookOpen,
  FileText,
  Layers,
  PencilRuler,
  ArrowRight,
  GraduationCap,
  Sparkles,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SourceBadge } from "@/components/SourceBadge";
import { allQuizzes, totalQuestions } from "@/data/quizzes";
import { topics } from "@/data/topics";
import { flashcards } from "@/data/flashcards";
import { acts } from "@/data/acts";

const features = [
  {
    to: "/testy",
    icon: ListChecks,
    title: "Testy",
    desc: "Oryginalny test z ustawy o SN (50 pytań z prawidłowymi odpowiedziami) oraz testy z pozostałych ustaw.",
    stat: `${totalQuestions} pytań · ${allQuizzes.length} testów`,
  },
  {
    to: "/zagadnienia",
    icon: BookOpen,
    title: "Zagadnienia",
    desc: "Pełne treści artykułów i instytucji z prezentacji wykładowcy — pogrupowane tematycznie.",
    stat: `${topics.length} działów`,
  },
  {
    to: "/cwiczenia",
    icon: PencilRuler,
    title: "Ćwiczenia",
    desc: "Schematy organizacyjne sądów z odpowiedziami do samodzielnego sprawdzenia.",
    stat: "schematy + tabele",
  },
  {
    to: "/fiszki",
    icon: Layers,
    title: "Fiszki",
    desc: "Szybka powtórka kluczowych faktów — odwracane karty z pytaniem i odpowiedzią.",
    stat: `${flashcards.length} fiszek`,
  },
  {
    to: "/akty",
    icon: FileText,
    title: "Akty prawne",
    desc: "Pełne teksty ustaw w PDF — otwierane bezpośrednio w aplikacji.",
    stat: `${acts.length} dokumenty`,
  },
];

export default function Home() {
  return (
    <div className="space-y-12">
      {/* HERO */}
      <section className="relative overflow-hidden rounded-2xl border border-border bg-card px-6 py-12 sm:px-10 sm:py-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)",
            backgroundSize: "22px 22px",
          }}
        />
        <div className="relative max-w-2xl space-y-5">
          <Badge variant="secondary" className="gap-1.5">
            <Sparkles className="size-3.5" /> Przygotowanie do zaliczenia
          </Badge>
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            Ustrój Organów
            <br />
            Ochrony Prawnej
          </h1>
          <p className="text-base text-muted-foreground sm:text-lg">
            Interaktywna platforma do nauki: prawdziwe pytania z testów z
            zaznaczonymi odpowiedziami, pełne treści ustaw oraz materiały z
            prezentacji — wszystko w jednym miejscu, żeby zdać na 5.
          </p>
          <div className="flex flex-wrap gap-3 pt-1">
            <Link to="/testy">
              <Button size="lg">
                <ListChecks /> Rozpocznij test
              </Button>
            </Link>
            <Link to="/zagadnienia">
              <Button size="lg" variant="outline">
                <BookOpen /> Przeglądaj zagadnienia
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { n: totalQuestions, l: "pytań testowych" },
          { n: topics.length, l: "działów teorii" },
          { n: flashcards.length, l: "fiszek" },
          { n: acts.length, l: "ustaw w PDF" },
        ].map((s) => (
          <Card key={s.l}>
            <CardContent className="py-5 text-center">
              <div className="text-2xl font-bold sm:text-3xl">{s.n}</div>
              <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                {s.l}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* LEGENDA ŹRÓDEŁ */}
      <section>
        <Card>
          <CardContent className="flex flex-col gap-3 py-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-1">
              <h2 className="text-sm font-semibold">Skąd pochodzą materiały?</h2>
              <p className="text-sm text-muted-foreground">
                Każdy materiał jest wyraźnie oznaczony, żeby było wiadomo, co
                jest oryginałem od wykładowcy, a co dodatkiem.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2">
                <SourceBadge origin="pani" size="sm" />
                <span className="text-xs text-muted-foreground">
                  oryginalne materiały i test wykładowcy
                </span>
              </div>
              <div className="flex items-center gap-2">
                <SourceBadge origin="ai" size="sm" />
                <span className="text-xs text-muted-foreground">
                  opracowane z AI na podstawie ustaw
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* FEATURES */}
      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <GraduationCap className="size-5 text-muted-foreground" />
          <h2 className="text-xl font-semibold tracking-tight">
            Jak się uczyć
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Link key={f.to} to={f.to} className="group">
              <Card className="h-full transition-all hover:border-muted-foreground/40 hover:shadow-md">
                <CardContent className="flex h-full flex-col gap-3 pt-6">
                  <div className="flex items-center justify-between">
                    <span className="grid size-10 place-items-center rounded-lg bg-secondary text-secondary-foreground">
                      <f.icon className="size-5" />
                    </span>
                    <ArrowRight className="size-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                  <Badge variant="outline" className="mt-auto w-fit">
                    {f.stat}
                  </Badge>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
