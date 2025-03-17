import type { Metadata } from "next";
import { ThemeProvider } from 'next-themes';
import "./globals.css";

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
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
