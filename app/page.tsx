export default function HomePage() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero-background.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        <h1 className="font-symbio text-5xl md:text-7xl lg:text-8xl tracking-tight">
          symbio AI
        THIS IS THE REAL HOMEPAGE</h1>


        <h2 className="font-connected text-2xl md:text-3xl lg:text-4xl mt-4 tracking-wide">
          STAY CONNECTED
        </h2>

        <p className="font-livingmind text-lg md:text-xl lg:text-2xl max-w-3xl leading-relaxed mt-6">
          Living Mind — a hybrid intelligence system where<br />
          you can speaks, responds, supports, and guides
        </p>

        {/* Brown line + logo */}
        <div className="mt-10 w-full max-w-3xl border-t-4 border-[#6B4C3B] pt-6">
          <img
            src="/symbio-logo-line.png"
            alt="Symbio logo bar"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}






