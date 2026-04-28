"use client";

import { useEffect, useState } from "react";
import { SignInButton, UserButton, useAuth } from "@clerk/nextjs";
import AIModal from "@/components/command/AIModal";

function NavAuth() {
  const { isSignedIn } = useAuth();
  if (isSignedIn) return (
    <UserButton
      afterSignOutUrl="/"
      userProfileMode="navigation"
      userProfileUrl="/dashboard"
    />
  );
  return (
    <SignInButton mode="modal">
      <button className="hover:opacity-70 transition">sign in</button>
    </SignInButton>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [content, setContent] = useState("");

  useEffect(() => {
    function handler(e: CustomEvent) {
      setContent(e.detail);
      setOpen(true);
    }
    window.addEventListener("open-ai-modal", handler as EventListener);
    return () => window.removeEventListener("open-ai-modal", handler as EventListener);
  }, []);

  return (
    <>
      <AIModal open={open} onClose={() => setOpen(false)} content={content} />
      <nav
        className="w-full flex justify-center items-center gap-3 md:gap-6 py-3 px-4 text-sm md:text-base"
        style={{ fontFamily: "MontserratSemiBold" }}
      >
        <a href="/" className="hover:opacity-70 transition">feed</a>
        <a href="/spaces" className="hover:opacity-70 transition">spaces</a>
        <a href="/agents" className="hover:opacity-70 transition">agents</a>
        <a href="/dashboard" className="hover:opacity-70 transition">profile</a>
        <NavAuth />
      </nav>
    </>
  );
}
