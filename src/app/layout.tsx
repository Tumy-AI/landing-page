import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";

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
    <html lang="es" suppressHydrationWarning>
      <body className="min-w-[400px]">
        <ThemeProvider attribute={'class'}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
