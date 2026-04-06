import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import CommandPalette from "@/components/command/CommandPalette";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SymbioStudio",
  description: "Creative Intelligence Platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <CommandPalette />

        <nav
          className="w-full flex justify-center gap-6 py-6"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          <a href="/home" className="hover:opacity-70 transition">home</a>
          <a href="/about" className="hover:opacity-70 transition">about</a>
          <a href="/studio" className="hover:opacity-70 transition">studio</a>
          <a href="/agents" className="hover:opacity-70 transition">agents</a>
        </nav>

        {children}
      </body>
    </html>
  );
}






