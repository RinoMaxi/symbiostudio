import "./globals.css";
import { Montserrat } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import CommandPalette from "@/components/command/CommandPalette";
import NavBar from "@/components/NavBar";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body className={montserrat.className}>
          <CommandPalette />
          <NavBar />
          <main className="min-h-screen pt-10">
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
