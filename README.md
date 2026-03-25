# Strona B2B: Zweryfikowane leady sprzedających mieszkania

Kompletna strona w Next.js (App Router) ze **statycznym eksportem** (`output: 'export'`) — działa na **GitHub Pages**, Vercel i dowolnym hostingu plików statycznych.

## Stack technologiczny

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS
- shadcn/ui (komponenty UI)
- lucide-react (ikony)
- framer-motion (delikatne animacje sekcji)
- react-hook-form + zod (formularze i walidacja)
- Formularz kontaktowy: walidacja w przeglądarce + wysyłka do webhooka (`NEXT_PUBLIC_FORM_WEBHOOK_URL`)

## Co zawiera projekt

- Strona główna z pełną strukturą premium B2B:
  - Hero z mocnym komunikatem i 2 CTA
  - Sekcja usługi
  - Jak to działa (5 kroków)
  - Dla kogo
  - Korzyści
  - Jak pracujemy / Co dostaje biuro / Kryteria jakości leadów
  - Oferta i program startowy (3 tygodnie, potem subskrypcja)
  - FAQ
  - Sekcja zaufania i placeholderami
  - Rezerwacja rozmowy (osadzony widżet Cal.com / Calendly) + formularz kontaktowy
  - CTA końcowe
  - Stopka z danymi formalnymi do uzupełnienia
- Strona `polityka-prywatnosci`
- SEO metadata (title, description, Open Graph, Twitter)
- Sticky header i pełna responsywność

## Konfiguracja danych firmy

Uzupełnij wartości w pliku:

- `lib/site-config.ts`

Znajdziesz tam oznaczone placeholdery:

- `[WPISZ NAZWĘ FIRMY]`
- `[WPISZ E-MAIL]`
- `[WPISZ TELEFON]`
- `[WPISZ MIASTO]`
- `[WPISZ LINK DO CAL.COM LUB CALENDLY]`
- `[WPISZ ŚCIEŻKĘ DO LOGO]`
- oraz pola formalne w stopce i polityce prywatności (NIP, adres, social linki)

## Zmienne środowiskowe

Skopiuj plik `.env.example` do `.env.local` i uzupełnij:

```bash
cp .env.example .env.local
```

### Lista zmiennych

- `NEXT_PUBLIC_BOOKING_LINK` — link do Cal.com lub Calendly (widżet na stronie)
- `NEXT_PUBLIC_FORM_WEBHOOK_URL` — webhook do formularza (Make / Zapier / n8n). Przy GitHub Pages **musi** być `NEXT_PUBLIC_*`, żeby działał w przeglądarce.

### Jak działa formularz kontaktowy

- Walidacja po stronie klienta (Zod).
- Jeśli webhook jest ustawiony — `POST` z przeglądarki (hosting statyczny).
- Jeśli nie — w dev w konsoli widać log; użytkownik i tak dostaje komunikat sukcesu (jak wcześniej).

### GitHub Pages

1. Repozytorium: **Settings → Pages → Source: GitHub Actions**.
2. Workflow: `.github/workflows/nextjs.yml` (deploy z folderu `out/`).
3. Dla repozytoriów `username.github.io/nazwa-projektu` workflow ustawia `NEXT_PUBLIC_BASE_PATH=/nazwa-projektu`. Dla repozytorium strony użytkownika (`username.github.io`) `basePath` jest pusty.
4. Opcjonalnie w **Settings → Secrets and variables**: `NEXT_PUBLIC_FORM_WEBHOOK_URL`, w **Variables**: `NEXT_PUBLIC_BOOKING_LINK`.

## Uruchomienie lokalne

```bash
npm install
npm run dev
```

Aplikacja będzie dostępna pod adresem [http://localhost:3000](http://localhost:3000).

## Build produkcyjny (statyczny)

```bash
npm run lint
npm run build
```

Podgląd zbudowanego eksportu lokalnie:

```bash
npm run preview
```

(`next start` nie służy do hostowania folderu `out/` — to jest czysty HTML/JS/CSS.)

## Wdrożenie

### Vercel

1. Dodaj repozytorium do Vercel.
2. Ustaw zmienne (`NEXT_PUBLIC_BOOKING_LINK`, `NEXT_PUBLIC_FORM_WEBHOOK_URL`).
3. Deploy.

### Inny hosting Node.js

1. Zainstaluj zależności: `npm install`
2. Zbuduj projekt: `npm run build`
3. Uruchom produkcyjnie: `npm run start`
4. Ustaw zmienne środowiskowe jak wyżej.

## Ważne

- Projekt nie zawiera fikcyjnych opinii ani nieprawdziwych liczb.
- Miejsca wymagające danych od Ciebie są oznaczone placeholderami.
- Po uzupełnieniu danych i env aplikacja jest gotowa do wdrożenia.
