import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import logoPng from "@/components/img/logo.png";
import { siteConfig } from "@/lib/site-config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const company = siteConfig.companyName;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `Więcej właścicieli gotowych do sprzedaży | ${company}`,
    template: `%s | ${company}`,
  },
  description:
    "Dostarczamy biurom nieruchomości zweryfikowane kontakty, które prowadzą do realnych rozmów i nowych ofert — bez tracenia czasu na przypadkowe zapytania.",
  icons: {
    icon: logoPng.src,
    shortcut: logoPng.src,
    apple: logoPng.src,
  },
  openGraph: {
    title: "Więcej właścicieli mieszkań gotowych do sprzedaży",
    description:
      "Zweryfikowane kontakty dla biur nieruchomości: realne rozmowy i nowe oferty, mniej pustych telefonów.",
    url: siteConfig.siteUrl,
    siteName: company,
    locale: "pl_PL",
    type: "website",
    images: [
      {
        url: logoPng.src,
        alt: `Logo ${company}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Więcej właścicieli gotowych do sprzedaży",
    description:
      "Kontakty z sensowną intencją sprzedaży — dla biur nieruchomości, które chcą rozmawiać z właścicielami, nie z przypadkiem.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-slate-950 text-slate-100">{children}</body>
    </html>
  );
}
