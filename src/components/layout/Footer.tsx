import Link from "next/link";
import Image from "next/image";

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-black border-t border-neutral-900">

      {/* Main row */}
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

        {/* Logo + name */}
        <div className="flex items-center gap-3 shrink-0">
          <Image src="/symbio_logo.png" alt="SymbioStudio" width={32} height={32} className="rounded-lg object-contain" />
          <span className="text-white text-sm font-semibold" style={{ fontFamily: "MontserratSemiBold" }}>
            SymbioStudio
          </span>
        </div>

        {/* Nav links */}
        <nav className="flex flex-wrap gap-6 text-sm text-neutral-500">
          <Link href="/privacy" className="hover:text-neutral-200 transition">Privacy Policy</Link>
          <Link href="/contact" className="hover:text-neutral-200 transition">Contact Us</Link>
          <Link href="/pricing" className="hover:text-neutral-200 transition">Pricing</Link>
        </nav>

        {/* Social icons */}
        <div className="flex items-center gap-4 text-neutral-500">
          <a
            href="https://www.linkedin.com/company/symbiostudio-ai/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-200 transition"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://x.com/symbiocenter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-200 transition"
            aria-label="X / Twitter"
          >
            <XIcon />
          </a>
          <a
            href="https://tiktok.com/@symbiocenter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-neutral-200 transition"
            aria-label="TikTok"
          >
            <TikTokIcon />
          </a>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-neutral-900 px-6 md:px-12 lg:px-24 py-4">
        <p className="text-neutral-700 text-xs text-center">
          © 2025 SymbioStudio. All rights reserved.
        </p>
      </div>

    </footer>
  );
}
