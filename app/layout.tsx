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
        <nav className="w-full flex justify-center gap-12 py-6 text-2xl tracking-wide"
     style={{ fontFamily: "MontserratSemiBold" }}>
  <a href="/" className="hover:opacity-70 transition-opacity">Home</a>
  <a href="/about" className="hover:opacity-70 transition-opacity">About</a>
  <a href="/studio" className="hover:opacity-70 transition-opacity">Studio</a>
  <a href="/agents" className="hover:opacity-70 transition-opacity">Agents</a>
  <a href="/spaces" className="hover:opacity-70 transition-opacity">Spaces</a>
</nav>

        {children}
      </body>
    </html>
  );
}

