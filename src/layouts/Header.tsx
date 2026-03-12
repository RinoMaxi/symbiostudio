"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  const baseClasses =
    "fixed top-0 left-0 w-full z-50 transition-colors duration-300";

  const transparentClasses = scrolled
    ? "bg-white/80 backdrop-blur-md shadow-sm"
    : "bg-transparent";

  const solidClasses = "bg-white shadow-sm";

  return (
    <header className={`${baseClasses} ${isHome ? transparentClasses : solidClasses}`}>
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl">
          SymbioStudio
        </Link>

        <div className="flex gap-6 text-sm">
          <Link href="/projects">Projects</Link>
          <Link href="/studio">Studio</Link>
          <Link href="/library">Library</Link>
          <Link href="/academy">Academy</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
    </header>
  );
}
