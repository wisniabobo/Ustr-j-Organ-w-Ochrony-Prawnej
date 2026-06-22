# Ustrój Organów Ochrony Prawnej — platforma do nauki

Interaktywna aplikacja do nauki przedmiotu **Ustrój Organów Ochrony Prawnej (UOOP)**,
zbudowana w stylu [shadcn/ui](https://github.com/shadcn-ui/ui): minimalistyczna,
w pełni responsywna (telefon / tablet / desktop), z trybem jasnym i ciemnym.

Celem projektu jest **kompletne przygotowanie do zaliczenia** — w jednym miejscu
znajdują się testy z odpowiedziami, pełne treści przepisów, ćwiczenia, fiszki
oraz oryginalne teksty wszystkich wymaganych ustaw.

---

## ⚖️ Zakres przedmiotu (akty i pojęcia obowiązujące na teście)

Platforma pokrywa wszystkie akty wymagane na zaliczeniu:

| Akt prawny | Wersja w aplikacji |
|---|---|
| **Konstytucja Rzeczypospolitej Polskiej** z 2.04.1997 r. (Dz.U. 1997 nr 78 poz. 483) | tekst ogłoszony (ISAP) |
| **Prawo o ustroju sądów powszechnych** — ustawa z 27.07.2001 r. | tekst urzędowy |
| **Ustawa o Sądzie Najwyższym** z 8.12.2017 r. | tekst urzędowy |
| **Prawo o adwokaturze** — ustawa z 26.05.1982 r. | tekst urzędowy |
| **Ustawa o radcach prawnych** z 6.07.1982 r. | tekst ujednolicony (ISAP) |
| **Prawo o prokuraturze** — ustawa z 28.01.2016 r. (t.j. Dz.U. 2024 poz. 390) | tekst ujednolicony (ISAP) |

Wszystkie PDF-y ustaw pochodzą z **oficjalnego źródła ISAP (Internetowy System
Aktów Prawnych, Sejm RP)** i są dostępne w aplikacji pod przyciskiem
**„Zobacz pełną treść ustawy”** (otwierają się w okienku, bez wychodzenia ze strony).

---

## 📌 Oznaczenie pochodzenia materiałów

Każdy materiał jest **wyraźnie oznaczony etykietą**, żeby było jasne, co jest
oryginałem od wykładowcy, a co dodatkiem:

- 🎓 **„Materiały od pani”** — pochodzą bezpośrednio od wykładowcy
  (prezentacje z zajęć oraz oryginalny test z ustawy o Sądzie Najwyższym
  z zaznaczonymi prawidłowymi odpowiedziami).
- ✨ **„Przygotowane z AI”** — opracowane na podstawie tekstów ustaw
  (dodatkowe testy, część działów teorii, fiszki, rozwiązania ćwiczeń).
  Każda odpowiedź jest podparta konkretnym przepisem (pole „Podstawa prawna”).

> **Tylko fakty.** Treść przepisów weryfikowano wprost z urzędowymi tekstami
> ustaw — bez zmyśleń. Tam, gdzie wartość mogłaby budzić wątpliwość, wskazany
> jest dokładny artykuł.

---

## 🧭 Co zawiera aplikacja

### 1. Testy
- **Test z ustawy o Sądzie Najwyższym** — 🎓 *oryginał wykładowcy*, 50 pytań,
  z prawidłowymi odpowiedziami (w oryginale zaznaczonymi na zielono) i
  wyjaśnieniami. Obsługa pytań **wielokrotnego wyboru**.
- **Testy ✨ z AI** z pozostałych ustaw: Prawo o adwokaturze, ustawa o radcach
  prawnych, status sędziego (u.s.p.), referendarze i ławnicy (u.s.p.), Prawo
  o prokuraturze, zasady ustrojowe, Konstytucja RP, immunitety.
- Natychmiastowa weryfikacja, podświetlenie poprawnej odpowiedzi, licznik
  punktów, podsumowanie wyniku.

### 2. Zagadnienia
Pełne treści przepisów i instytucji — **z dokładnym numerem artykułu i treścią** —
pogrupowane w działy: zasady ustrojowe, organizacja i organy sądów, status
sędziego, Sąd Najwyższy, adwokatura, radcowie prawni, prokuratura, referendarze
i ławnicy, immunitety, Konstytucja RP. Najważniejsze punkty wyróżniono („Zapamiętaj”).

### 3. Ćwiczenia
Schematy organizacyjne sądów (arkusz z zajęć) z rozwiązaniami do samodzielnego
odsłonięcia — oparte na art. 21–32 u.s.p.

### 4. Fiszki
Szybka powtórka kluczowych faktów — odwracane karty z filtrowaniem po kategorii
i tasowaniem talii.

### 5. Akty prawne
Pełne, oficjalne teksty ustaw w PDF, otwierane bezpośrednio w aplikacji.

---

## 🛠️ Technologie

React 19 · TypeScript · Vite · Tailwind CSS v4 · React Router (HashRouter) ·
lucide-react. Komponenty UI w stylu shadcn/ui (własna implementacja, paleta
„neutral”, zmienne CSS, tryb jasny/ciemny).

## 🚀 Uruchomienie lokalne

```bash
npm install
npm run dev       # serwer deweloperski (http://localhost:5173)
npm run build     # build produkcyjny do ./dist
npm run preview   # podgląd builda
npm run typecheck # sprawdzenie typów TypeScript
```

## 📦 Struktura

```
src/
  data/        # treść: testy (quiz-*.ts), zagadnienia (topics.ts),
               # fiszki, ćwiczenia, akty prawne
  components/  # komponenty UI (Quiz, PdfViewer, SourceBadge, ui/*)
  pages/       # strony (Home, Quizzes, Topics, Acts, Flashcards, Exercises)
public/akty/   # oficjalne PDF-y ustaw (ISAP)
```

## 🌐 Deploy

Aplikacja jest publikowana na **GitHub Pages** z gałęzi `gh-pages`
(`base: './'` w konfiguracji Vite + routing hash → działa pod adresem projektowym
bez dodatkowej konfiguracji serwera).

> **Uwaga (prywatność):** repozytorium może być prywatne, aby chronić materiały
> wykładowcy. Na darmowym planie GitHub publiczny GitHub Pages działa tylko dla
> repozytoriów publicznych — przy prywatnym repo aplikację uruchamia się lokalnie
> (`npm run dev` / `npm run preview`).

---

## ℹ️ Zastrzeżenie

Materiał ma charakter **edukacyjny** (pomoc w nauce do zaliczenia) i **nie
stanowi porady prawnej**. W razie wątpliwości należy sięgnąć do aktualnego,
urzędowego tekstu ustawy (ISAP) — dostępnego w zakładce „Akty prawne”.
