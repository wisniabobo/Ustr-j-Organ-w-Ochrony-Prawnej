import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Lightbulb, Hash } from "lucide-react";
import { getTopic } from "@/data/topics";
import { getActByPdf } from "@/data/acts";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TopicIcon } from "@/components/icons";
import { SourceBadge } from "@/components/SourceBadge";
import { PdfViewer } from "@/components/PdfViewer";

export default function TopicPage() {
  const { id = "" } = useParams();
  const topic = getTopic(id);

  if (!topic) {
    return (
      <div className="space-y-4">
        <p className="text-muted-foreground">Nie znaleziono działu.</p>
        <Link to="/zagadnienia">
          <Button variant="outline">
            <ArrowLeft /> Wróć do zagadnień
          </Button>
        </Link>
      </div>
    );
  }

  const act = getActByPdf(topic.pdf);

  return (
    <div className="space-y-8">
      <Link
        to="/zagadnienia"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Wszystkie zagadnienia
      </Link>

      <header className="space-y-4">
        <div className="flex items-start gap-4">
          <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-secondary text-secondary-foreground">
            <TopicIcon name={topic.icon} className="size-6" />
          </span>
          <div className="space-y-1">
            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
              {topic.title}
            </h1>
            <p className="text-muted-foreground">{topic.subtitle}</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <SourceBadge origin={topic.origin} />
          <Badge variant="outline">{topic.act}</Badge>
          {topic.pdf && act && (
            <PdfViewer
              pdf={topic.pdf}
              title={act.title}
              citation={act.citation}
            />
          )}
        </div>
        {topic.originNote && (
          <p className="text-xs text-muted-foreground">
            Źródło materiału: {topic.originNote}.
          </p>
        )}
      </header>

      {/* Spis treści sekcji */}
      <Card>
        <CardContent className="py-4">
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-muted-foreground">
            W tym dziale
          </p>
          <div className="flex flex-wrap gap-2">
            {topic.sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-1 rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground transition-colors hover:bg-accent"
              >
                <Hash className="size-3" />
                {s.title}
              </a>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="space-y-10">
        {topic.sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="scroll-mt-20 space-y-4"
          >
            <div className="space-y-1.5 border-l-2 border-primary pl-4">
              <h2 className="text-xl font-semibold tracking-tight">
                {section.title}
              </h2>
              {section.intro && (
                <p className="text-sm text-muted-foreground">{section.intro}</p>
              )}
            </div>

            <div className="space-y-4">
              {section.articles.map((art, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardContent className="space-y-3 pt-5">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge variant="secondary" className="font-mono text-[11px]">
                        {art.ref}
                      </Badge>
                      <span className="text-sm font-semibold">{art.title}</span>
                    </div>
                    <p className="whitespace-pre-line text-sm leading-relaxed text-foreground/90">
                      {art.text}
                    </p>
                    {art.highlight && (
                      <div className="flex gap-2.5 rounded-lg border border-amber-500/30 bg-amber-500/10 p-3">
                        <Lightbulb className="mt-0.5 size-4 shrink-0 text-amber-500" />
                        <p className="text-sm text-foreground/90">
                          <span className="font-semibold">Zapamiętaj: </span>
                          {art.highlight}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>

      {topic.pdf && act && (
        <Card className="border-dashed">
          <CardContent className="flex flex-col items-center gap-3 py-6 text-center">
            <p className="text-sm text-muted-foreground">
              Chcesz sprawdzić dokładne brzmienie przepisów?
            </p>
            <PdfViewer
              pdf={topic.pdf}
              title={act.title}
              citation={act.citation}
              variant="default"
            />
          </CardContent>
        </Card>
      )}
    </div>
  );
}
