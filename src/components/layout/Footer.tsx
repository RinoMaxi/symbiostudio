import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-neutral-900 bg-black px-6 py-8 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-neutral-700 text-xs">
          © {new Date().getFullYear()} SymbioStudio Ltd. Registered in England and Wales.
        </p>
        <nav className="flex flex-wrap gap-5 text-xs text-neutral-600">
          <Link href="/pricing" className="hover:text-neutral-300 transition">Pricing</Link>
          <Link href="/store" className="hover:text-neutral-300 transition">Store</Link>
          <Link href="/marketplace" className="hover:text-neutral-300 transition">Marketplace</Link>
          <Link href="/spaces" className="hover:text-neutral-300 transition">Spaces</Link>
          <Link href="/privacy" className="hover:text-neutral-300 transition">Privacy Policy</Link>
        </nav>
      </div>
    </footer>
  );
}
