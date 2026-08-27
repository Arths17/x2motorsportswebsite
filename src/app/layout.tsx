import type { Metadata } from "next";
import { Oswald, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const displayFont = Oswald({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const bodyFont = IBM_Plex_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const telemetryFont = IBM_Plex_Mono({
  variable: "--font-mono-tel",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "X2 Motorsports — Sim Racing & Solar Car Challenge",
  description:
    "X2 Motorsports is an independent motorsports team racing RaceRoom competitively today and building a student solar car program for tomorrow.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} ${telemetryFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-graphite text-paper">
        {children}
      </body>
    </html>
  );
}
