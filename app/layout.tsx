"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import CommandPalette from "@/components/command/CommandPalette";
import { useEffect, useState } from "react";
import AIModal from "@/components/command/AIModal";
import {
  ClerkProvider,
  SignInButton,
  UserButton,
  useAuth,
} from "@clerk/nextjs";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

function NavAuth() {
  const { isSignedIn } = useAuth();
  if (isSignedIn) return <UserButton />;
  return (
    <SignInButton mode="modal">
      <button className="hover:opacity-70 transition">sign in</button>
    </SignInButton>
  );
}

export default function RootLayout({ children }) {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    function handler(e) {
      setContent(e.detail);
      setOpen(true);
    }
    window.addEventListener("open-ai-modal", handler);
    return () => window.removeEventListener("open-ai-modal", handler);
  }, []);

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={montserrat.className}>
          <CommandPalette />

          {/* GLOBAL AI MODAL */}
          <AIModal
            open={open}
            onClose={() => setOpen(false)}
            content={content}
          />

          <nav
            className="w-full flex justify-center items-center gap-6 py-6"
            style={{ fontFamily: "MontserratSemiBold" }}
          >
            <a href="/" className="hover:opacity-70 transition">feed</a>
            <a href="/spaces" className="hover:opacity-70 transition">spaces</a>
            <a href="/agents" className="hover:opacity-70 transition">agents</a>
            <a href="/profile" className="hover:opacity-70 transition">profile</a>

            <NavAuth />
          </nav>

          <main className="min-h-screen pt-10">
            {children}
          </main>

        </body>
      </html>
    </ClerkProvider>
  );
}
