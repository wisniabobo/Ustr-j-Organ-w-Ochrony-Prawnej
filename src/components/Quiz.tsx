import * as React from "react";
import {
  Check,
  X,
  Info,
  RotateCcw,
  ChevronRight,
  Trophy,
  CheckCircle2,
  CircleHelp,
} from "lucide-react";
import type { QuizBank } from "@/data/types";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Progress } from "./ui/progress";
import { Card, CardContent } from "./ui/card";

function sameSet(a: string[], b: string[]) {
  if (a.length !== b.length) return false;
  const sb = new Set(b);
  return a.every((x) => sb.has(x));
}

export function Quiz({ bank }: { bank: QuizBank }) {
  const [order] = React.useState(() => bank.questions.map((_, i) => i));
  const [idx, setIdx] = React.useState(0);
  const [selected, setSelected] = React.useState<string[]>([]);
  const [checked, setChecked] = React.useState(false);
  const [score, setScore] = React.useState(0);
  const [answeredIds, setAnsweredIds] = React.useState<Set<number>>(new Set());
  const [finished, setFinished] = React.useState(false);

  const q = bank.questions[order[idx]];
  const isMulti = !!q.multi;
  const total = bank.questions.length;

  const toggle = (key: string) => {
    if (checked) return;
    setSelected((prev) => {
      if (isMulti) {
        return prev.includes(key)
          ? prev.filter((k) => k !== key)
          : [...prev, key];
      }
      return [key];
    });
  };

  const check = () => {
    if (selected.length === 0) return;
    setChecked(true);
    const correct = sameSet(selected, q.correct);
    if (correct && !answeredIds.has(q.id)) {
      setScore((s) => s + 1);
    }
    setAnsweredIds((prev) => new Set(prev).add(q.id));
  };

  const next = () => {
    if (idx + 1 >= total) {
      setFinished(true);
      return;
    }
    setIdx((i) => i + 1);
    setSelected([]);
    setChecked(false);
  };

  const reveal = () => {
    setSelected(q.correct);
    setChecked(true);
    setAnsweredIds((prev) => new Set(prev).add(q.id));
  };

  const restart = () => {
    setIdx(0);
    setSelected([]);
    setChecked(false);
    setScore(0);
    setAnsweredIds(new Set());
    setFinished(false);
  };

  if (finished) {
    const pct = Math.round((score / total) * 100);
    const great = pct >= 90;
    const ok = pct >= 60;
    return (
      <Card className="animate-fade-in">
        <CardContent className="flex flex-col items-center gap-4 py-10 text-center">
          <div
            className={cn(
              "grid size-16 place-items-center rounded-full",
              great
                ? "bg-success/15 text-success"
                : ok
                  ? "bg-amber-500/15 text-amber-500"
                  : "bg-destructive/15 text-destructive"
            )}
          >
            <Trophy className="size-8" />
          </div>
          <div>
            <h3 className="text-2xl font-bold">
              {score} / {total}
            </h3>
            <p className="text-muted-foreground">
              Twój wynik: {pct}%{" "}
              {great
                ? "— świetnie, gotowe na 5!"
                : ok
                  ? "— dobrze, jeszcze chwila powtórki."
                  : "— powtórz materiał i spróbuj ponownie."}
            </p>
          </div>
          <Progress
            value={pct}
            className="max-w-sm"
            indicatorClassName={
              great ? "bg-success" : ok ? "bg-amber-500" : "bg-destructive"
            }
          />
          <Button onClick={restart} className="mt-2">
            <RotateCcw /> Rozwiąż ponownie
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3 text-sm">
        <span className="font-medium text-muted-foreground">
          Pytanie {idx + 1} / {total}
        </span>
        <span className="flex items-center gap-1.5 text-muted-foreground">
          <CheckCircle2 className="size-4 text-success" /> {score} poprawnych
        </span>
      </div>
      <Progress value={((idx + (checked ? 1 : 0)) / total) * 100} />

      <Card className="animate-fade-in">
        <CardContent className="space-y-5 pt-6">
          <div className="flex items-start gap-3">
            <span className="grid size-7 shrink-0 place-items-center rounded-md bg-secondary text-xs font-semibold text-secondary-foreground">
              {q.id}
            </span>
            <div className="space-y-1">
              <h3 className="text-base font-semibold leading-snug sm:text-lg">
                {q.question}
              </h3>
              {isMulti && (
                <Badge variant="secondary" className="mt-1">
                  Wielokrotnego wyboru
                </Badge>
              )}
            </div>
          </div>

          <div className="space-y-2.5">
            {q.options.map((opt) => {
              const isSel = selected.includes(opt.key);
              const isCorrect = q.correct.includes(opt.key);
              const showState = checked;
              return (
                <button
                  key={opt.key}
                  type="button"
                  onClick={() => toggle(opt.key)}
                  disabled={checked}
                  className={cn(
                    "flex w-full items-start gap-3 rounded-lg border p-3 text-left text-sm transition-all",
                    !showState &&
                      (isSel
                        ? "border-primary bg-accent"
                        : "border-border hover:border-muted-foreground/40 hover:bg-accent/50"),
                    showState &&
                      isCorrect &&
                      "border-success bg-success/10",
                    showState &&
                      isSel &&
                      !isCorrect &&
                      "border-destructive bg-destructive/10",
                    showState &&
                      !isCorrect &&
                      !isSel &&
                      "border-border opacity-60"
                  )}
                >
                  <span
                    className={cn(
                      "grid size-6 shrink-0 place-items-center rounded-md border text-xs font-bold uppercase",
                      isMulti ? "rounded-md" : "rounded-full",
                      !showState && isSel && "border-primary bg-primary text-primary-foreground",
                      !showState && !isSel && "border-border text-muted-foreground",
                      showState && isCorrect && "border-success bg-success text-success-foreground",
                      showState && isSel && !isCorrect && "border-destructive bg-destructive text-destructive-foreground",
                      showState && !isCorrect && !isSel && "border-border text-muted-foreground"
                    )}
                  >
                    {showState && isCorrect ? (
                      <Check className="size-3.5" />
                    ) : showState && isSel && !isCorrect ? (
                      <X className="size-3.5" />
                    ) : (
                      opt.key
                    )}
                  </span>
                  <span className="pt-0.5">{opt.text}</span>
                </button>
              );
            })}
          </div>

          {checked && q.note && (
            <div className="flex gap-2.5 rounded-lg border border-border bg-muted/50 p-3 text-sm">
              <Info className="mt-0.5 size-4 shrink-0 text-foreground/70" />
              <p className="text-muted-foreground">{q.note}</p>
            </div>
          )}
          {checked && q.basis && (
            <p className="text-xs text-muted-foreground">
              Podstawa prawna: <span className="font-medium">{q.basis}</span>
            </p>
          )}

          <div className="flex flex-wrap items-center gap-2 pt-1">
            {!checked ? (
              <>
                <Button onClick={check} disabled={selected.length === 0}>
                  Sprawdź odpowiedź
                </Button>
                <Button variant="ghost" onClick={reveal}>
                  <CircleHelp /> Pokaż odpowiedź
                </Button>
              </>
            ) : (
              <>
                <span
                  className={cn(
                    "flex items-center gap-1.5 text-sm font-medium",
                    sameSet(selected, q.correct)
                      ? "text-success"
                      : "text-destructive"
                  )}
                >
                  {sameSet(selected, q.correct) ? (
                    <>
                      <Check className="size-4" /> Dobrze!
                    </>
                  ) : (
                    <>
                      <X className="size-4" /> Poprawna odpowiedź:{" "}
                      {q.correct.join(", ").toUpperCase()}
                    </>
                  )}
                </span>
                <Button onClick={next} className="ml-auto">
                  {idx + 1 >= total ? "Zakończ" : "Następne"}
                  <ChevronRight />
                </Button>
              </>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
