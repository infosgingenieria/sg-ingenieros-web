import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTAWhatsApp from "@/components/CTAWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://tecnologiasg.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "S&G INGENIEROS | Tecnología y Automatización",
  description:
    "Diseño y fabricación de soluciones de automatización ganadera: pesaje, clasificación y alimentación individualizada (RFID, PLC, HMI).",
  verification: {
    google: "CAiDbEGRXYA7GGR_CVKY6Ilgt8pMCNX7K3-hhJKA9eA",
  },
  alternates: {
    canonical: "/",
    languages: {
      "es-ES": "/",
      en: "/en",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* SOLO aquí renderizamos header/footer */}
        <Header />
        <CTAWhatsApp />

        <main className="page-offset">{children}</main>

        <Footer />
      </body>
    </html>
  );
}