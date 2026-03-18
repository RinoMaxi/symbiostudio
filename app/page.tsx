export default function HomePage() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-background.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-4">

        {/* LOGO + TITLE IN ONE LINE */}
        <div className="flex items-center gap-6 mb-4">
          <img
            src="/symbio_logo.png"
            alt="Symbio Logo"
            className="w-28 h-auto"
          />
          <h1
            style={{ fontFamily: "MontserratSemiBold" }}
            className="text-6xl md:text-8xl lg:text-9xl"
          >
            symbio AI
          </h1>
        </div>

        {/* SUBTITLE */}
        <h2
          style={{ fontFamily: "MontserratSemiBold" }}
          className="text-3xl md:text-4xl lg:text-5xl tracking-wide"
        >
          STAY CONNECTED
        </h2>

        {/* PARAGRAPH — TWO LINES */}
        <p
          style={{ fontFamily: "NotoSansBold" }}
          className="text-xl md:text-2xl lg:text-3xl mt-8 max-w-4xl leading-relaxed"
        >
          Living Mind — a hybrid intelligence system<br />
          where you can speaks, responds, supports, and guides
        </p>

      </div>
    </section>
  );
}












