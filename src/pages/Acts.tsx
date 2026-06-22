import { FileText, BookMarked } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PdfViewer } from "@/components/PdfViewer";
import { acts } from "@/data/acts";

export default function Acts() {
  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="flex items-center gap-2">
          <FileText className="size-6" />
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Akty prawne
          </h1>
        </div>
        <p className="max-w-2xl text-muted-foreground">
          Pełne teksty ustaw omawianych na zajęciach. Kliknij „Zobacz pełną treść
          ustawy”, aby otworzyć dokument PDF bez wychodzenia z aplikacji.
        </p>
      </header>

      <div className="grid gap-4 sm:grid-cols-2">
        {acts.map((a) => (
          <Card key={a.id} className="flex flex-col">
            <CardContent className="flex flex-1 flex-col gap-3 pt-6">
              <div className="flex items-start justify-between gap-3">
                <span className="grid size-11 place-items-center rounded-lg bg-secondary text-secondary-foreground">
                  <BookMarked className="size-5" />
                </span>
                <Badge variant="outline">PDF</Badge>
              </div>
              <div className="space-y-1">
                <h2 className="font-semibold leading-snug">{a.title}</h2>
                <p className="text-xs text-muted-foreground">{a.citation}</p>
              </div>
              <p className="text-sm text-muted-foreground">{a.description}</p>
              <div className="mt-auto pt-2">
                <PdfViewer
                  pdf={a.pdf}
                  title={a.title}
                  citation={a.citation}
                  variant="default"
                  label="Zobacz pełną treść ustawy"
                />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
