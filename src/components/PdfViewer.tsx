import * as React from "react";
import { FileText, ExternalLink, Download } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogHeader } from "./ui/dialog";

export function PdfViewer({
  pdf,
  title,
  citation,
  label = "Zobacz pełną treść ustawy",
  variant = "outline",
  size = "sm",
}: {
  pdf: string;
  title: string;
  citation?: string;
  label?: string;
  variant?: "outline" | "secondary" | "default" | "ghost";
  size?: "sm" | "default" | "lg";
}) {
  const [open, setOpen] = React.useState(false);
  // base="./" => zasoby ładowane są względem index.html
  const url = `${import.meta.env.BASE_URL}${pdf}`;

  return (
    <>
      <Button variant={variant} size={size} onClick={() => setOpen(true)}>
        <FileText />
        {label}
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} className="h-[92vh]">
        <DialogHeader
          title={title}
          description={citation}
          onClose={() => setOpen(false)}
          right={
            <div className="hidden gap-2 sm:flex">
              <a href={url} target="_blank" rel="noreferrer">
                <Button variant="outline" size="sm">
                  <ExternalLink /> Nowa karta
                </Button>
              </a>
              <a href={url} download>
                <Button variant="outline" size="sm">
                  <Download /> Pobierz
                </Button>
              </a>
            </div>
          }
        />
        <div className="min-h-0 flex-1 bg-muted">
          <object
            data={url}
            type="application/pdf"
            className="h-full w-full"
            aria-label={title}
          >
            <iframe src={url} title={title} className="h-full w-full" />
            <div className="grid h-full place-items-center p-6 text-center text-sm text-muted-foreground">
              <div>
                <p>Twoja przeglądarka nie wyświetla PDF w oknie.</p>
                <a href={url} target="_blank" rel="noreferrer" className="mt-3 inline-block">
                  <Button size="sm">
                    <ExternalLink /> Otwórz PDF w nowej karcie
                  </Button>
                </a>
              </div>
            </div>
          </object>
        </div>
      </Dialog>
    </>
  );
}
