import * as React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Scale,
  Moon,
  Sun,
  Menu,
  X,
  ListChecks,
  BookOpen,
  FileText,
  Layers,
  PencilRuler,
  Github,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "@/lib/theme";
import { Button } from "./ui/button";

const nav = [
  { to: "/", label: "Start", icon: Scale, end: true },
  { to: "/testy", label: "Testy", icon: ListChecks },
  { to: "/zagadnienia", label: "Zagadnienia", icon: BookOpen },
  { to: "/cwiczenia", label: "Ćwiczenia", icon: PencilRuler },
  { to: "/fiszki", label: "Fiszki", icon: Layers },
  { to: "/akty", label: "Akty prawne", icon: FileText },
];

function ThemeToggle() {
  const { theme, toggle } = useTheme();
  return (
    <Button variant="ghost" size="icon" onClick={toggle} aria-label="Zmień motyw">
      {theme === "dark" ? <Sun /> : <Moon />}
    </Button>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const [openMenu, setOpenMenu] = React.useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setOpenMenu(false);
    window.scrollTo({ top: 0 });
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-6xl items-center gap-2 px-4">
          <Link to="/" className="flex items-center gap-2 font-semibold">
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
              <Scale className="size-4" />
            </span>
            <span className="hidden sm:inline">UOOP</span>
            <span className="hidden text-xs font-normal text-muted-foreground md:inline">
              · nauka do zaliczenia
            </span>
          </Link>

          <nav className="ml-4 hidden items-center gap-1 lg:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-secondary text-secondary-foreground"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="ml-auto flex items-center gap-1">
            <a
              href="https://github.com/wisniabobo/Ustr-j-Organ-w-Ochrony-Prawnej"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:block"
            >
              <Button variant="ghost" size="icon" aria-label="Repozytorium">
                <Github />
              </Button>
            </a>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setOpenMenu((o) => !o)}
              aria-label="Menu"
            >
              {openMenu ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {openMenu && (
          <nav className="border-t border-border bg-background px-4 py-2 lg:hidden">
            <div className="mx-auto grid max-w-6xl gap-1">
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                      isActive
                        ? "bg-secondary text-secondary-foreground"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )
                  }
                >
                  <item.icon className="size-4" />
                  {item.label}
                </NavLink>
              ))}
            </div>
          </nav>
        )}
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8 sm:py-10">{children}</main>

      <footer className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-muted-foreground">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-medium text-foreground">
                Ustrój Organów Ochrony Prawnej
              </p>
              <p className="mt-1">
                Materiały edukacyjne na podstawie ustaw i prezentacji
                wykładowcy. Stan prawny zgodny ze źródłami z zajęć.
              </p>
            </div>
            <p className="text-xs">
              Pomoc w nauce — nie stanowi porady prawnej.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
