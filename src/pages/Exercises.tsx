import * as React from "react";
import { PencilRuler, Eye, EyeOff } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SourceBadge } from "@/components/SourceBadge";
import { PdfViewer } from "@/components/PdfViewer";
import { exercises } from "@/data/schematy";

function ExerciseCard({
  prompt,
  answer,
  basis,
  n,
}: {
  prompt: string;
  answer: string;
  basis: string;
  n: number;
}) {
  const [show, setShow] = React.useState(false);
  return (
    <Card>
      <CardContent className="space-y-3 pt-5">
        <div className="flex items-start gap-3">
          <span className="grid size-7 shrink-0 place-items-center rounded-md bg-secondary text-xs font-semibold text-secondary-foreground">
            {n}
          </span>
          <p className="text-sm font-medium leading-snug">{prompt}</p>
        </div>

        {show ? (
          <div className="space-y-2 rounded-lg border border-success/30 bg-success/5 p-3">
            <p className="whitespace-pre-line text-sm leading-relaxed">
              {answer}
            </p>
            <p className="text-xs text-muted-foreground">Podstawa: {basis}</p>
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-border p-4 text-center text-xs text-muted-foreground">
            Spróbuj odpowiedzieć samodzielnie, a potem odsłoń rozwiązanie.
          </div>
        )}

        <Button
          variant={show ? "ghost" : "outline"}
          size="sm"
          onClick={() => setShow((s) => !s)}
        >
          {show ? (
            <>
              <EyeOff /> Ukryj odpowiedź
            </>
          ) : (
            <>
              <Eye /> Pokaż odpowiedź
            </>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

export default function Exercises() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="flex items-center gap-2">
          <PencilRuler className="size-6" />
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Ćwiczenia — schematy organizacyjne
          </h1>
        </div>
        <p className="max-w-2xl text-muted-foreground">
          Zadania ze schematu organizacji sądów powszechnych (arkusz z zajęć).
          Najpierw odpowiedz samodzielnie, potem odsłoń rozwiązanie opracowane na
          podstawie ustawy.
        </p>
        <div className="flex flex-wrap items-center gap-2">
          <SourceBadge origin="pani" size="sm" />
          <span className="text-xs text-muted-foreground">arkusz ćwiczeń</span>
          <SourceBadge origin="ai" size="sm" />
          <span className="text-xs text-muted-foreground">rozwiązania</span>
        </div>
        <div className="pt-1">
          <PdfViewer
            pdf="akty/prawo-o-ustroju-sadow-powszechnych.pdf"
            title="Prawo o ustroju sądów powszechnych"
            citation="Ustawa z dnia 27 lipca 2001 r."
            label="Zobacz pełną treść ustawy"
          />
        </div>
      </header>

      <div className="grid gap-4">
        {exercises.map((e) => (
          <ExerciseCard
            key={e.id}
            n={e.id}
            prompt={e.prompt}
            answer={e.answer}
            basis={e.basis}
          />
        ))}
      </div>

      <Badge variant="outline" className="mx-auto block w-fit">
        {exercises.length} ćwiczeń
      </Badge>
    </div>
  );
}
