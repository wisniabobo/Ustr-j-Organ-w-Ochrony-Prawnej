export type ClassValue =
  | string
  | number
  | null
  | undefined
  | false
  | ClassValue[];

/** Lekki odpowiednik clsx — łączy klasy warunkowo. */
export function cn(...inputs: ClassValue[]): string {
  const out: string[] = [];
  const walk = (v: ClassValue) => {
    if (!v && v !== 0) return;
    if (Array.isArray(v)) {
      v.forEach(walk);
    } else if (typeof v === "string" || typeof v === "number") {
      out.push(String(v));
    }
  };
  inputs.forEach(walk);
  return out.join(" ");
}

/** Usuwa polskie znaki i tworzy slug do kotwic/URL. */
export function slugify(s: string): string {
  const map: Record<string, string> = {
    ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ź: "z", ż: "z",
    Ą: "a", Ć: "c", Ę: "e", Ł: "l", Ń: "n", Ó: "o", Ś: "s", Ź: "z", Ż: "z",
  };
  return s
    .split("")
    .map((c) => map[c] ?? c)
    .join("")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
