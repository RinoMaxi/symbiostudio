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
      <footer
  className="w-full mt-32 pt-12 pb-16 flex flex-col items-center text-center text-xs border-t border-neutral-300/40"
  style={{ fontFamily: "MontserratSemiBold" }}
>
  <p>© {new Date().getFullYear()} SymbioStudio</p>
  <p className="mt-2 text-sm opacity-70">A calm space for human–AI collaboration</p>
</footer>

      </body>
    </html>
  );
}

