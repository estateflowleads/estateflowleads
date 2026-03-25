import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/lib/site-config";

const company = siteConfig.companyName;

export const metadata: Metadata = {
  title: "Polityka prywatności",
  description:
    "Polityka prywatności serwisu EstateFlow Leads — kontakty dla biur nieruchomości.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold tracking-tight text-slate-50">
        Polityka prywatności
      </h1>
      <p className="mt-4 text-slate-400">
        Poniżej znajdują się podstawowe informacje o przetwarzaniu danych. Pełne
        dane rejestrowe (NIP) oraz dedykowany adres e-mail do spraw ochrony danych
        zostaną uzupełnione przed finalną publikacją serwisu.
      </p>

      {/*
        TODO przed publikacją (Ty + dev):
        - W treści widocznej dla użytkownika dopisz NIP oraz e-mail administratora,
          gdy będą gotowe do upublicznienia (obecnie celowo ukryte).
        - Możesz też podlinkować e-mail: <a href={`mailto:${siteConfig.email}`}>…</a>
      */}

      <section className="mt-10 space-y-6 rounded-xl border border-slate-800 bg-slate-900/60 p-6 text-sm leading-7 text-slate-300 shadow-sm shadow-black/20">
        <div>
          <h2 className="text-base font-semibold text-slate-100">Administrator danych</h2>
          <p>
            Administratorem danych jest: <strong className="text-slate-100">{company}</strong>
            , adres: <strong className="text-slate-100">{siteConfig.addressLine}</strong>.
            {/* NIP: uzupełnij przed publikacją — obecnie nie wyświetlamy */}
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-100">
            Zakres przetwarzanych danych
          </h2>
          <p>
            Przetwarzamy dane podane dobrowolnie w formularzach kontaktu i rezerwacji,
            w szczególności: imię i nazwisko, nazwę firmy, e-mail służbowy, telefon,
            termin rozmowy oraz opis potrzeb.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-100">Cel przetwarzania</h2>
          <p>
            Dane są przetwarzane w celu obsługi zapytań, umawiania rozmów handlowych,
            przygotowania oferty B2B oraz realizacji działań przed zawarciem umowy.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-100">
            Podstawy prawne i prawa użytkownika
          </h2>
          <p>
            Dane przetwarzamy zgodnie z RODO. Osobie, której dane dotyczą, przysługuje
            prawo dostępu do danych, ich sprostowania, usunięcia, ograniczenia
            przetwarzania oraz wniesienia sprzeciwu.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold text-slate-100">Kontakt w sprawach danych</h2>
          <p>
            W sprawach związanych z danymi osobowymi możesz skorzystać z formularza
            kontaktowego na stronie głównej.
            {/* TODO przed publikacją: opcjonalnie dopisz widoczny adres e-mail do spraw RODO */}
          </p>
        </div>
      </section>

      <Link
        href="/"
        className="mt-6 inline-block text-sm font-medium text-slate-400 underline decoration-slate-600 underline-offset-4 hover:text-slate-200"
      >
        Wróć na stronę główną
      </Link>
    </main>
  );
}
