/** Publiczne dane firmy i strony. */
export const siteConfig = {
  companyName: "EstateFlow Leads",
  /** Kanoniczny adres strony (SEO, Open Graph). */
  siteUrl: "https://estateflowleads.com",
  email: "oliwier@estatenieruchomosci.pl",
  phone: "661 555 639",
  city: "Zielona Góra",
  /** Adres siedziby / korespondencyjny (stopka, polityka prywatności). */
  addressLine: "Zielona Góra, Stary Rynek 17/2, 65-001",
  bookingLink:
    process.env.NEXT_PUBLIC_BOOKING_LINK || "https://calendly.com/estateflowcontact/30min",
  logoPath: "components/img/logo.png",
  serviceName: "zweryfikowane leady sprzedających mieszkania",

  /**
   * TODO przed publikacją: wstaw pełne URL-e profili (puste = brak linku w stopce).
   * Przykład: "https://www.linkedin.com/company/twoja-firma"
   */
  linkedInUrl: "",
  /** TODO przed publikacją */
  facebookUrl: "",
};
