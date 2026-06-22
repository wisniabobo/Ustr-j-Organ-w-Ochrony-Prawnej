import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SourceBadge } from "@/components/SourceBadge";
import { TopicIcon } from "@/components/icons";
import { topics } from "@/data/topics";

export default function Topics() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="flex items-center gap-2">
          <BookOpen className="size-6" />
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Zagadnienia
          </h1>
        </div>
        <p className="max-w-2xl text-muted-foreground">
          Pełne treści przepisów i instytucji omawianych na zajęciach,
          pogrupowane w działy. Każdy przepis opatrzony jest dokładnym artykułem,
          a najważniejsze punkty wyróżniono. Przy każdym dziale znajdziesz
          przycisk do pełnego tekstu ustawy.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {topics.map((t) => {
          const count = t.sections.reduce(
            (n, s) => n + s.articles.length,
            0
          );
          return (
            <Link key={t.id} to={`/zagadnienia/${t.id}`} className="group">
              <Card className="h-full transition-all hover:border-muted-foreground/40 hover:shadow-md">
                <CardContent className="flex h-full gap-4 pt-6">
                  <span className="grid size-11 shrink-0 place-items-center rounded-lg bg-secondary text-secondary-foreground">
                    <TopicIcon name={t.icon} className="size-5" />
                  </span>
                  <div className="flex-1 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h2 className="font-semibold leading-snug">{t.title}</h2>
                      <ArrowRight className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1" />
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {t.subtitle}
                    </p>
                    <div className="flex flex-wrap items-center gap-1.5 pt-2">
                      <SourceBadge origin={t.origin} size="sm" />
                      <Badge variant="outline">{t.sections.length} sekcji</Badge>
                      <Badge variant="outline">{count} przepisów</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
