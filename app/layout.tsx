// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SymbioStudio",
  description: "Creative Intelligence Platform",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>

        {/* NAVIGATION BAR */}
        <nav className="flex gap-8 p-6 text-lg">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/studio">Studio</a>
          <a href="/agents">Agents</a>
          <a href="/spaces">Spaces</a>
        </nav>

        {children}
      </body>
    </html>
  );
}

