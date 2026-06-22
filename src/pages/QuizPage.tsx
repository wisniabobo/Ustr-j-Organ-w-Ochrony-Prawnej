import { Link, useParams } from "react-router-dom";
import { ArrowLeft, BookText } from "lucide-react";
import { getQuiz } from "@/data/quizzes";
import { getActByPdf, acts } from "@/data/acts";
import { Quiz } from "@/components/Quiz";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SourceBadge } from "@/components/SourceBadge";
import { PdfViewer } from "@/components/PdfViewer";

// Mapowanie testu na PDF aktu prawnego
const quizPdf: Record<string, string> = {
  sn: "akty/ustawa-o-sadzie-najwyzszym.pdf",
  adwokatura: "akty/prawo-o-adwokaturze.pdf",
  radcowie: "akty/ustawa-o-radcach-prawnych.pdf",
  prokuratura: "akty/prawo-o-prokuraturze.pdf",
  konstytucja: "akty/konstytucja-rp.pdf",
  status: "akty/prawo-o-ustroju-sadow-powszechnych.pdf",
  dzial4: "akty/prawo-o-ustroju-sadow-powszechnych.pdf",
  zasady: "akty/prawo-o-ustroju-sadow-powszechnych.pdf",
  immunitety: "akty/prawo-o-ustroju-sadow-powszechnych.pdf",
};

export default function QuizPage() {
  const { id = "" } = useParams();
  const bank = getQuiz(id);

  if (!bank) {
    return (
      <div className="space-y-4">
        <p className="text-muted-foreground">Nie znaleziono testu.</p>
        <Link to="/testy">
          <Button variant="outline">
            <ArrowLeft /> Wróć do testów
          </Button>
        </Link>
      </div>
    );
  }

  const pdf = quizPdf[bank.id];
  const act = getActByPdf(pdf) ?? acts.find((a) => a.id === "sn");

  return (
    <div className="space-y-6">
      <Link
        to="/testy"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" /> Wszystkie testy
      </Link>

      <header className="space-y-3">
        <div className="flex flex-wrap items-center gap-2">
          <SourceBadge origin={bank.origin} />
          <Badge variant="secondary">{bank.questions.length} pytań</Badge>
          {bank.id === "sn" && (
            <Badge variant="success">Oryginalny klucz odpowiedzi</Badge>
          )}
        </div>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {bank.title}
        </h1>
        <p className="max-w-2xl text-sm text-muted-foreground">
          {bank.description}
        </p>
        <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
          <BookText className="size-4" />
          <span>{bank.act}</span>
        </div>
        {pdf && act && (
          <div className="pt-1">
            <PdfViewer pdf={pdf} title={act.title} citation={act.citation} />
          </div>
        )}
      </header>

      <Quiz bank={bank} />

      <p className="text-center text-xs text-muted-foreground">
        Źródło: {bank.source}
      </p>
    </div>
  );
}
