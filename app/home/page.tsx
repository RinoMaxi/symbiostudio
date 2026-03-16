export default function HomePage() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero-background.png')" }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white">
        <h1 className="text-5xl font-bold tracking-tight uppercase">
          symbio AI
        </h1>

        <h2 className="text-2xl font-semibold tracking-wide uppercase mt-2">
          STAY CONNECTED
        </h2>

        <p className="text-lg font-medium max-w-xl leading-relaxed mt-2">
          Living Mind — a hybrid intelligence system where<br />
          you can speaks, responds, supports, and guides
        </p>

        {/* Brown line + logo */}
        <img
          src="/symbio-logo-line.png"
          alt="Symbio logo bar"
          className="mt-6 w-full max-w-md"
        />
      </div>
    </section>
  );
}

