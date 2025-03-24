import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import { ibmPlexMono } from './fonts';
import { Toaster } from "@/components/Toaster/Toaster";
import { Spotlight } from "@/components/ui/Spotlight";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
  title: "Tumy.ai",
  description: "Tumy.ai - Soluciones basadas en IA para empresas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning className={`${ibmPlexMono.variable}`}>
      <body className="min-h-screen flex flex-col min-w-[400px] max-w-[1920px] mx-auto px-8 font-ibm">
        <ThemeProvider attribute={'class'}>
          <Spotlight
            className="-top-40 left-0 md:-top-20 md:left-60"
            fill="white"
            height="90vh"
          />
          <Toaster />
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
