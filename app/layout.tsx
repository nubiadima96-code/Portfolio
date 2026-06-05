import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UnicornBackground } from "@/components/UnicornBackground";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { rootMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
});

export const metadata: Metadata = rootMetadata;

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang={siteConfig.language} className={`${inter.variable}`}>
      <body className="font-sans antialiased min-h-screen bg-slate-950 text-slate-100">
        <UnicornBackground />
        <Header />
        <main className="pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
