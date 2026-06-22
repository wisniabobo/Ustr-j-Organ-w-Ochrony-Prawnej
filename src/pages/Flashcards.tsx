import * as React from "react";
import {
  Layers,
  ChevronLeft,
  ChevronRight,
  RotateCcw,
  Shuffle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SourceBadge } from "@/components/SourceBadge";
import { cn } from "@/lib/utils";
import {
  flashcards as allCards,
  flashcardCategories,
} from "@/data/flashcards";

export default function Flashcards() {
  const [cat, setCat] = React.useState<string>("Wszystkie");
  const [deck, setDeck] = React.useState(allCards);
  const [idx, setIdx] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);

  const rebuild = React.useCallback(
    (category: string, shuffle = false) => {
      let cards =
        category === "Wszystkie"
          ? allCards
          : allCards.filter((c) => c.cat === category);
      if (shuffle) cards = [...cards].sort(() => Math.random() - 0.5);
      setDeck(cards);
      setIdx(0);
      setFlipped(false);
    },
    []
  );

  const selectCat = (c: string) => {
    setCat(c);
    rebuild(c);
  };

  const go = (dir: 1 | -1) => {
    setFlipped(false);
    setIdx((i) => (i + dir + deck.length) % deck.length);
  };

  const card = deck[idx];

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <div className="flex items-center gap-2">
          <Layers className="size-6" />
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Fiszki
          </h1>
        </div>
        <p className="max-w-2xl text-muted-foreground">
          Szybka powtórka. Kliknij kartę, aby odsłonić odpowiedź. Filtruj według
          kategorii lub przetasuj talię.
        </p>
        <SourceBadge origin="ai" size="sm" />
      </header>

      <div className="flex flex-wrap gap-2">
        {["Wszystkie", ...flashcardCategories].map((c) => (
          <button
            key={c}
            onClick={() => selectCat(c)}
            className={cn(
              "rounded-full border px-3 py-1.5 text-xs font-medium transition-colors",
              cat === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border text-muted-foreground hover:bg-accent hover:text-foreground"
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mx-auto max-w-2xl space-y-4">
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>
            Karta {idx + 1} / {deck.length}
          </span>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm" onClick={() => rebuild(cat, true)}>
              <Shuffle /> Tasuj
            </Button>
            <Button variant="ghost" size="sm" onClick={() => rebuild(cat)}>
              <RotateCcw /> Reset
            </Button>
          </div>
        </div>

        <button
          onClick={() => setFlipped((f) => !f)}
          className="group relative block h-72 w-full [perspective:1600px]"
          aria-label="Odwróć kartę"
        >
          <div
            className={cn(
              "relative h-full w-full rounded-2xl transition-transform duration-500 [transform-style:preserve-3d]",
              flipped && "[transform:rotateY(180deg)]"
            )}
          >
            {/* przód */}
            <div className="absolute inset-0 flex flex-col rounded-2xl border border-border bg-card p-6 [backface-visibility:hidden]">
              <Badge variant="secondary" className="w-fit">
                {card.cat}
              </Badge>
              <div className="flex flex-1 items-center justify-center">
                <p className="text-center text-lg font-medium leading-snug">
                  {card.q}
                </p>
              </div>
              <p className="text-center text-xs text-muted-foreground">
                Kliknij, aby zobaczyć odpowiedź
              </p>
            </div>
            {/* tył */}
            <div className="absolute inset-0 flex flex-col rounded-2xl border border-success/40 bg-success/5 p-6 [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <Badge variant="success" className="w-fit">
                Odpowiedź
              </Badge>
              <div className="flex flex-1 items-center justify-center overflow-y-auto py-2">
                <p className="text-center text-base leading-relaxed">
                  {card.a}
                </p>
              </div>
              <p className="text-center text-xs text-muted-foreground">
                Kliknij, aby wrócić do pytania
              </p>
            </div>
          </div>
        </button>

        <div className="flex items-center justify-between gap-3">
          <Button variant="outline" onClick={() => go(-1)} className="flex-1">
            <ChevronLeft /> Poprzednia
          </Button>
          <Button variant="outline" onClick={() => go(1)} className="flex-1">
            Następna <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
