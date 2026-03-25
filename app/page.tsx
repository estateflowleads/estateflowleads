import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  BriefcaseBusiness,
  CheckCircle2,
  Clock3,
  Handshake,
  Mail,
  Phone,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

import { AnimatedSection } from "@/components/animated-section";
import { BookingWidget } from "@/components/booking-widget";
import { ContactForm } from "@/components/forms/contact-form";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { siteConfig } from "@/lib/site-config";
import logoPng from "@/components/img/logo.png";

const howItWorks = [
  "Docieramy do osób realnie rozważających sprzedaż mieszkania.",
  "Sprawdzamy, czy właściciel naprawdę chce sprzedać — krótka rozmowa i weryfikacja intencji.",
  "Nadajemy status i priorytet według jasnych kryteriów.",
  "Przekazujemy gotowy kontakt do Twojego zespołu wraz z kontekstem rozmowy.",
  "Wspólnie zbieramy feedback i dopracowujemy model współpracy oraz kolejne kroki.",
];

const benefits = [
  "Twój zespół rozmawia tylko z osobami, które chcą sprzedać.",
  "Mniej pustych telefonów i straconych godzin.",
  "Więcej spotkań z właścicielami mieszkań.",
  "Przejrzysty program startowy i jasne zasady współpracy.",
  "Skalowanie wolumenu po etapie startowym — wg wyników i zapotrzebowania zespołu.",
];

const qualityCriteria = [
  "Deklaracja sprzedaży mieszkania i gotowość do rozmowy.",
  "Wstępna weryfikacja danych kontaktowych i dostępności.",
  "Określenie lokalizacji i podstawowych parametrów nieruchomości.",
  "Oznaczenie etapu decyzyjnego właściciela.",
];

const faqItems = [
  {
    question: "Czym różni się lead od kontaktu?",
    answer:
      "Kontakt to sam numer lub e-mail. U nas dostajesz kontakt z kontekstem: wiemy, czy właściciel realnie rozważa sprzedaż, co już wie o rynku i na jakim jest etapie — żeby Twój handlowiec od razu mógł prowadzić sensowną rozmowę.",
  },
  {
    question: "Ile kosztuje jeden lead?",
    answer:
      "Rozliczamy się w modelu programu startowego i subskrypcji, a nie „za każdy pojedynczy numer”. Dokładny koszt uzależniony jest od ustaleń (wolumen, rynek, zakres). Na rozmowie ustalimy scenariusz, który ma sens finansowo dla Twojego biura.",
  },
  {
    question: "Kiedy zobaczę pierwsze efekty?",
    answer:
      "W programie startowym zakładamy pierwsze zweryfikowane kontakty w ciągu około 7 dni od startu operacyjnego — po wcześniejszej rozmowie wdrożeniowej i dopięciu kryteriów.",
  },
  {
    question: "Czy mogę zacząć od małej skali?",
    answer:
      "Tak. Program startowy (3 tygodnie) jest do tego właśnie zaprojektowany: sprawdzamy współpracę na bezpiecznym wolumenie, potem przechodzimy na subskrypcję dopasowaną do wyników i zespołu.",
  },
  {
    question: "Co jeśli leady nie będą dobre?",
    answer:
      "Wtedy wspólnie analizujemy przyczyny: profil leadu, komunikacja, timing. Optymalizujemy kryteria i przekazywanie kontaktów, żeby zbliżyć się do oczekiwanego poziomu — bez zostawiania Cię samego z „słabymi numerami”.",
  },
  {
    question: "Sprawdzacie, czy właściciel naprawdę chce sprzedać?",
    answer:
      "Tak — to jest sedno. Zanim trafi do Ciebie gotowy kontakt, weryfikujemy intencję i gotowość do rozmowy, żeby nie trafiały do zespołu przypadkowe zapytania.",
  },
  {
    question: "Czy leady są zweryfikowane?",
    answer:
      "Tak. Każde przekazanie ma status i krótki kontekst rozmowy, żeby ograniczyć puste telefony i rozmowy bez decyzji.",
  },
  {
    question: "Jak szybko można zacząć współpracę?",
    answer:
      "Standardowo start programu startowego jest możliwy w ciągu kilku dni roboczych od rozmowy wdrożeniowej i ustalenia kryteriów.",
  },
  {
    question: "Czy da się dopasować model do konkretnego biura?",
    answer:
      "Tak. Zakres, tempo kontaktów oraz kryteria jakości dostosowujemy do rynku, specjalizacji i celów Twojego zespołu.",
  },
];

const hasBookingLink = siteConfig.bookingLink.startsWith("http");

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={logoPng}
              alt={`Logo ${siteConfig.companyName}`}
              width={36}
              height={36}
              className="h-9 w-9 rounded-md object-cover"
              priority
            />
            <div>
              <p className="text-sm font-semibold">{siteConfig.companyName}</p>
              <p className="text-xs text-slate-400">B2B dla biur nieruchomości</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-6 text-sm text-slate-400 lg:flex">
            <a href="#jak-to-dziala" className="hover:text-slate-100">
              Jak to działa
            </a>
            <a href="#oferta" className="hover:text-slate-100">
              Oferta
            </a>
            <a href="#faq" className="hover:text-slate-100">
              FAQ
            </a>
            <a href="#kontakt" className="hover:text-slate-100">
              Kontakt
            </a>
          </nav>

          <Button asChild>
            <a href="#rezerwacja">Umów rozmowę</a>
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden border-b border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900/90 to-slate-950">
          <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
            <div className="space-y-8">
              <Badge>Więcej właścicieli gotowych do rozmowy o sprzedaży</Badge>
              <div className="space-y-5">
                <h1 className="text-4xl leading-tight font-bold tracking-tight text-slate-50 md:text-5xl">
                  Więcej właścicieli mieszkań gotowych do sprzedaży — bez tracenia czasu
                  na przypadkowe zapytania.
                </h1>
                <p className="max-w-2xl text-lg text-slate-400">
                  Dostarczamy biurom nieruchomości zweryfikowane kontakty, które prowadzą
                  do realnych rozmów i nowych ofert.
                </p>
                <div className="max-w-2xl rounded-xl border border-slate-800/80 bg-slate-900/50 px-5 py-4">
                  <p className="font-semibold text-slate-100">
                    Nie sprzedajemy przypadkowych kontaktów.
                  </p>
                  <p className="mt-2 text-sm text-slate-400">
                    Dostarczamy rozmowy, które mają sens biznesowy.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button size="lg" asChild>
                  <a href="#rezerwacja">
                    Umów rozmowę z konsultantem
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#jak-to-dziala">Zobacz jak to działa</a>
                </Button>
              </div>
              <p className="text-sm text-slate-500">
                Model B2B dla biur, które chcą zwiększać liczbę ofert bez
                przepalania czasu zespołu.
              </p>
            </div>

            <Card className="h-fit">
              <CardHeader>
                <CardTitle>Co dostajesz od pierwszego miesiąca</CardTitle>
                <CardDescription>
                  Proces, jakość i jasną komunikację na każdym etapie współpracy.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  "Sprawdzamy intencję — nie przekazujemy „gołych” numerów.",
                  "Status i kontekst rozmowy przekazany z kontaktem.",
                  "Stały punkt kontaktu i szybki feedback.",
                  "Program startowy (3 tygodnie), potem subskrypcja — dopasowanie do skali biura.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-0.5 h-5 w-5 shrink-0 text-emerald-400"
                      aria-hidden
                    />
                    <p className="text-sm text-slate-300">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <AnimatedSection
          className="mx-auto w-full max-w-6xl px-4 pt-10 pb-16 sm:px-6 sm:pt-14 lg:px-8"
          id="efekty"
        >
          <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950 p-6 shadow-lg shadow-black/20 sm:p-8">
            <h2 className="text-xl font-bold tracking-tight text-slate-50 sm:text-2xl">
              Przykładowy efekt współpracy
            </h2>
            <p className="mt-2 text-slate-500">
              Orientacyjny przykład — wyniki zależą od rynku, profilu i ustaleń.
            </p>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-5 text-center">
                <p className="text-3xl font-bold tabular-nums text-emerald-400">12</p>
                <p className="mt-2 text-sm text-slate-400">przekazanych leadów w 30 dni</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-5 text-center">
                <p className="text-3xl font-bold tabular-nums text-emerald-400">5</p>
                <p className="mt-2 text-sm text-slate-400">spotkań z właścicielami</p>
              </div>
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-5 text-center">
                <p className="text-3xl font-bold tabular-nums text-emerald-400">2</p>
                <p className="mt-2 text-sm text-slate-400">podpisane umowy</p>
              </div>
            </div>
            <p className="mt-8 border-t border-slate-800 pt-6 text-center text-slate-300">
              Pierwsze biura już testują model i rozwijają pipeline ofert.
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8" id="usluga">
          <div className="grid gap-6 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Zweryfikowany lead</CardTitle>
                <CardDescription>
                  Docieramy do osób chcących sprzedać mieszkanie i potwierdzamy
                  gotowość kontaktu.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Najpierw intencja</CardTitle>
                <CardDescription>
                  Sprawdzamy, czy właściciel naprawdę chce sprzedać — dopiero potem
                  kontakt trafia do biura.
                </CardDescription>
              </CardHeader>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Realne rozmowy, mniej strat czasu</CardTitle>
                <CardDescription>
                  Zespół pracuje na kontaktach z potencjałem sprzedażowym, a nie na
                  przypadkowych zapytaniach.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection
          id="jak-to-dziala"
          className="border-y border-slate-800 bg-slate-900/40 py-16"
          delay={0.05}
        >
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-50">
              Jak to działa
            </h2>
            <p className="mt-3 max-w-3xl text-slate-400">
              Każdy etap jest uporządkowany i nastawiony na jakość: od pierwszego kontaktu
              po gotowy kontakt dla Twojego zespołu.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
              {howItWorks.map((step, index) => (
                <Card key={step}>
                  <CardHeader>
                    <Badge className="w-fit">{`Krok ${index + 1}`}</Badge>
                    <CardDescription className="pt-2 text-sm text-slate-300">
                      {step}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8" delay={0.1}>
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Dla kogo</CardTitle>
                <CardDescription>
                  Wspieramy zespoły, które chcą regularnie zwiększać liczbę nowych
                  ofert sprzedaży.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  "Biura nieruchomości budujące przewidywalny pipeline ofert.",
                  "Agenci koncentrujący się na sprzedaży mieszkań.",
                  "Firmy rozwijające skalę rozmów i domknięć.",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <BriefcaseBusiness className="mt-0.5 h-5 w-5 text-slate-400" />
                    <p className="text-sm text-slate-300">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Korzyści biznesowe</CardTitle>
                <CardDescription>
                  Lepsza efektywność handlowa bez zwiększania chaosu operacyjnego.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {benefits.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <TrendingUp className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" aria-hidden />
                    <p className="text-sm text-slate-300">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection className="border-y border-slate-800 bg-slate-900/40 py-16" delay={0.15}>
          <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle>Jak pracujemy</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300">
                <p>Pracujemy procesowo: cele, kryteria jakości, rytm przekazywania kontaktów i feedback.</p>
                <p>Każde biuro otrzymuje uporządkowany model współpracy i jedną ścieżkę kontaktu operacyjnego.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Co dostaje biuro</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm text-slate-300">
                <p>Kontakty z opisem rozmowy i etapem gotowości właściciela — przekazujemy je gotowe do Twojego zespołu.</p>
                <p>Czytelny podział odpowiedzialności, który pozwala szybciej domykać pierwsze spotkania.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Kryteria jakości leadów</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {qualityCriteria.map((item) => (
                  <div key={item} className="flex items-start gap-2 text-sm text-slate-300">
                    <ShieldCheck className="mt-0.5 h-4 w-4 text-emerald-400" />
                    <span>{item}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection id="oferta" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8" delay={0.2}>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <Card>
              <CardHeader>
                <CardTitle>Oferta i model współpracy</CardTitle>
                <CardDescription>
                  Program startowy trwa 3 tygodnie, potem przechodzimy na subskrypcję
                  dopasowaną do ustaleń i wyników.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-300">
                <p className="flex flex-wrap items-center gap-2 text-base font-semibold text-slate-100">
                  <Target className="h-5 w-5 shrink-0" />
                  Program startowy od 999 zł / miesiąc
                </p>
                <p>
                  Pierwsze zweryfikowane leady w ciągu 7 dni. Po etapie startowym
                  skalujemy współpracę w oparciu o wyniki i zapotrzebowanie zespołu.
                </p>
                <p>
                  Szczegóły ustalamy indywidualnie: miasto, profil leadów, tempo
                  przekazań i cele biznesowe zespołu.
                </p>
                <p>
                  {siteConfig.companyName} · {siteConfig.email} · {siteConfig.phone} ·{" "}
                  {siteConfig.city}
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Program startowy</CardTitle>
                <CardDescription>
                  3 tygodnie, potem subskrypcja — przejrzysty podział etapów.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {[
                  {
                    icon: Handshake,
                    text: "Rozmowa wdrożeniowa i doprecyzowanie profilu leadu.",
                  },
                  {
                    icon: Clock3,
                    text: "Etap startowy (3 tygodnie): pierwsze zweryfikowane leady w ciągu 7 dni od startu.",
                  },
                  {
                    icon: Target,
                    text: "Po programie startowym: subskrypcja i skalowanie współpracy wg wyników oraz zapotrzebowania zespołu.",
                  },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} className="flex items-start gap-3 text-sm text-slate-300">
                    <Icon className="mt-0.5 h-5 w-5 text-slate-400" />
                    <p>{text}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        <AnimatedSection id="zaufanie" className="border-y border-slate-800 bg-slate-900/40 py-16" delay={0.22}>
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-50">
              Zaufanie i wiarygodność
            </h2>
            <p className="mt-3 max-w-3xl text-slate-400">
              Stawiamy na transparentny proces, jakość przekazań i partnerską
              współpracę. Bez sztucznych obietnic i bez fikcyjnych danych.
            </p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Standard operacyjny</CardTitle>
                  <CardDescription>
                    Jasne kryteria, mierzalny proces i stały feedback między zespołami.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Od partnerów</CardTitle>
                  <CardDescription>
                    Świetna obsługa i kontakt na linii firma–pracownik — wiemy, że możemy na Was liczyć przy
                    przekazaniach i komunikacji.
                  </CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Marka pod realne wyniki</CardTitle>
                  <CardDescription>
                    Spójna identyfikacja wizualna — ten sam profesjonalny przekaz co przy kontaktach z
                    właścicielami: przejrzystość, konsekwencja i dbałość o jakość, którą widać też w liczbach
                    powyżej.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Image
                    src={logoPng}
                    alt={`Logo ${siteConfig.companyName}`}
                    width={200}
                    height={80}
                    className="h-auto max-h-16 w-auto object-contain object-left"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="faq" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8" delay={0.25}>
          <h2 className="text-3xl font-bold tracking-tight text-slate-50">FAQ</h2>
          <p className="mt-3 max-w-3xl text-slate-400">
            Najczęstsze pytania przed rozpoczęciem współpracy.
          </p>
          <div className="mt-8 rounded-xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm shadow-black/20">
            <Accordion type="single" collapsible>
              {faqItems.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedSection>

        <AnimatedSection id="rezerwacja" className="border-y border-slate-800 bg-slate-900/40 py-16" delay={0.3}>
          <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-center text-3xl font-bold tracking-tight text-slate-50">
              Rezerwacja terminu rozmowy
            </h2>
            <p className="mt-3 max-w-2xl text-center text-slate-400">
              Wybierz dogodny termin w kalendarzu — potwierdzenie otrzymasz z
              systemu rezerwacji.
            </p>
            <div className="mt-10 w-full max-w-3xl">
              {hasBookingLink ? (
                <BookingWidget bookingLink={siteConfig.bookingLink} />
              ) : (
                <Card className="w-full">
                  <CardHeader>
                    <CardTitle>Widżet kalendarza</CardTitle>
                    <CardDescription>
                      Ustaw `NEXT_PUBLIC_BOOKING_LINK` w pliku `.env.local` (link
                      do Cal.com lub Calendly), aby wyświetlić kalendarz.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-sm text-slate-400">
                      Aktualna wartość: {siteConfig.bookingLink}
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="kontakt" className="mx-auto w-full max-w-6xl px-4 py-16 sm:px-6 lg:px-8" delay={0.35}>
          <div className="grid gap-8 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Skontaktuj się z nami</CardTitle>
                <CardDescription>
                  Napisz, jaki rynek obsługujesz i jaki efekt chcesz osiągnąć.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ContactForm />
              </CardContent>
            </Card>
            <Card className="h-fit">
              <CardHeader>
                <CardTitle>Kontakt bezpośredni</CardTitle>
                <CardDescription>
                  Preferujesz szybki kontakt? Użyj danych poniżej.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 text-sm text-slate-300">
                <p className="flex flex-wrap items-center gap-3">
                  <Mail className="h-4 w-4 shrink-0" />
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="break-all underline decoration-slate-600 underline-offset-2 hover:text-slate-100"
                  >
                    {siteConfig.email}
                  </a>
                </p>
                <p className="flex flex-wrap items-center gap-3">
                  <Phone className="h-4 w-4 shrink-0" />
                  <a
                    href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                    className="underline decoration-slate-600 underline-offset-2 hover:text-slate-100"
                  >
                    {siteConfig.phone}
                  </a>
                </p>
                <p>Miasto działania: {siteConfig.city}</p>
                <p className="text-slate-400">{siteConfig.addressLine}</p>
                <Button asChild size="lg" className="mt-2 w-full">
                  <a href={`mailto:${siteConfig.email}`}>Wyślij e-mail</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </AnimatedSection>

        <section className="border-t border-slate-800 bg-gradient-to-br from-slate-900 via-slate-950 to-black py-16 text-white">
          <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-50">
              Zróbmy pierwszy krok do stabilnego pipeline&apos;u ofert.
            </h2>
            <p className="mt-3 max-w-2xl text-slate-400">
              Jedna rozmowa wystarczy, aby ocenić potencjał współpracy i zakres
              programu startowego dopasowany do Twojego biura.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button size="lg" asChild className="bg-white text-slate-900 hover:bg-slate-100">
                <a href="#rezerwacja">Umów termin rozmowy</a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-slate-500 bg-transparent text-slate-100 hover:bg-slate-800/80">
                <a href={`mailto:${siteConfig.email}`}>Kontakt mailowy</a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-800 bg-slate-950 py-10">
        <div className="mx-auto grid w-full max-w-6xl gap-6 px-4 text-sm text-slate-400 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <p className="font-semibold text-slate-100">{siteConfig.companyName}</p>
            <p className="mt-2">Nazwa usługi: {siteConfig.serviceName}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-100">Kontakt</p>
            <p className="mt-2">{siteConfig.email}</p>
            <p>{siteConfig.phone}</p>
            <p>{siteConfig.city}</p>
          </div>
          <div>
            <p className="font-semibold text-slate-100">Informacje formalne</p>
            {/*
              TODO przed publikacją (Ty / dev): dopisz widoczny NIP w stopce, np.:
              <p className="mt-2">NIP: 000-000-00-00</p>
            */}
            <p className="mt-2">Adres: {siteConfig.addressLine}</p>
            <Link
              href="/polityka-prywatnosci"
              className="mt-2 inline-block text-slate-300 underline decoration-slate-600 underline-offset-4 hover:text-slate-100"
            >
              Polityka prywatności
            </Link>
          </div>
          <div>
            <p className="font-semibold text-slate-100">Social media</p>
            {/*
              TODO przed publikacją: uzupełnij w lib/site-config.ts pola linkedInUrl i facebookUrl,
              wtedy poniższe linki się pokażą automatycznie.
            */}
            {siteConfig.linkedInUrl ? (
              <p className="mt-2">
                <a
                  href={siteConfig.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 underline decoration-slate-600 underline-offset-4 hover:text-slate-100"
                >
                  LinkedIn
                </a>
              </p>
            ) : (
              <p className="mt-2 text-slate-500">LinkedIn — wkrótce</p>
            )}
            {siteConfig.facebookUrl ? (
              <p className="mt-1">
                <a
                  href={siteConfig.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 underline decoration-slate-600 underline-offset-4 hover:text-slate-100"
                >
                  Facebook
                </a>
              </p>
            ) : (
              <p className="mt-1 text-slate-500">Facebook — wkrótce</p>
            )}
          </div>
        </div>
      </footer>
    </div>
  );
}
