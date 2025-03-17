import type { Metadata } from "next";
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
    <html lang="es">
      <body
      >
        {children}
      </body>
    </html>
  );
}
