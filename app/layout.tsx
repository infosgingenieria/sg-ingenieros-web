import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "S&G INGENIEROS, TECNOLOGÍA Y AUTOMATIZACIÓN",
  description:
    "Diseño y fabricación de soluciones de automatización ganadera: pesaje, clasificación y alimentación individualizada (RFID, PLC, HMI).",

  // ✅ AÑADIR ESTO
  verification: {
    google: "CAiDbEGRXYA7GGR_CVKY6Ilgt8pMCNX7K3-hhJKA9eA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
