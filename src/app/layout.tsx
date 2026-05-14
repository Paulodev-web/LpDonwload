import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Andamento de Obra — Download do app Android",
  description:
    "Cronograma, marcos e acompanhamento em campo. Baixe o APK oficial para Android.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${inter.className} min-h-dvh bg-white antialiased text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
