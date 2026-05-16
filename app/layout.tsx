import type { Metadata } from "next";
import { Host_Grotesk } from "next/font/google";
import "./globals.css";
import { BookDemoProvider } from "@/components/modals/BookDemoProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PromoBanner } from "@/components/layout/PromoBanner";

const hostGrotesk = Host_Grotesk({
  variable: "--font-host-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "VyloMedia — The AI co-pilot for paid media teams",
  description:
    "VyloMedia plugs into your ad stack, finds what's working, and ships the next move for you. Analyze, optimize, and launch ads with one AI agent.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${hostGrotesk.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg-base text-text">
        <BookDemoProvider>
          <PromoBanner />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </BookDemoProvider>
      </body>
    </html>
  );
}
