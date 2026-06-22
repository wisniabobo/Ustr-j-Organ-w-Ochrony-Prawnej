import { Link } from "react-router-dom";
import { ListChecks, ArrowRight, FileCheck2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SourceBadge } from "@/components/SourceBadge";
import { allQuizzes } from "@/data/quizzes";

export default function Quizzes() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="flex items-center gap-2">
          <ListChecks className="size-6" />
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Testy
          </h1>
        </div>
        <p className="max-w-2xl text-muted-foreground">
          Wybierz test. Pierwszy z nich to oryginalny test wykładowcy z ustawy o
          Sądzie Najwyższym z zaznaczonymi prawidłowymi odpowiedziami. Pozostałe
          opracowano na podstawie treści ustaw z zajęć.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {allQuizzes.map((q) => (
          <Link key={q.id} to={`/testy/${q.id}`} className="group">
            <Card className="h-full transition-all hover:border-muted-foreground/40 hover:shadow-md">
              <CardContent className="flex h-full flex-col gap-3 pt-6">
                <div className="flex items-start justify-between gap-3">
                  <SourceBadge origin={q.origin} />
                  <Badge variant="outline">{q.questions.length} pytań</Badge>
                </div>
                {q.id === "sn" && (
                  <Badge className="w-fit gap-1">
                    <FileCheck2 className="size-3.5" /> Oryginalny klucz odpowiedzi
                  </Badge>
                )}
                <div className="space-y-1">
                  <h2 className="text-lg font-semibold leading-snug">
                    {q.title}
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {q.description}
                  </p>
                </div>
                <div className="mt-auto flex items-center justify-between border-t border-border pt-3 text-sm">
                  <span className="text-xs text-muted-foreground">{q.act}</span>
                  <span className="flex items-center gap-1 font-medium text-foreground">
                    Rozwiąż
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
