export default function HomePage() {
  return (
    <section
      className="relative w-full min-h-screen bg-[9a9a8c] bg-contain bg-no-repeat bg-top"
      style={{ backgroundImage: "url('/hero-background.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center pt-[29vh]">

        {/* LOGO + TITLE IN ONE ROW */}
        <div className="flex items-center justify-center w-full mb-4">
          
          {/* Logo shifted slightly left */}
          <img
            src="/symbio_logo.png"
            alt="Symbio Logo"
            className="w-44 h-auto relative left-[-5rem]"
          />

          {/* symbio AI */}
          <h1
            style={{ fontFamily: "MontserratSemiBold" }}
            className="text-9xl md:text-[10rem] lg:text-[10rem] leading-none ml-[-1rem]"
          >
            symbio<span className="ml-[0.3em]">AI</span>
          </h1>
        </div>

        {/* STAY CONNECTED */}
        <h2
          style={{ fontFamily: "NotoSansBold" }}
          className="text-4xl md:text-5xl lg:text-5xl tracking-wide mt-2"
        >
          STAY CONNECTED
        </h2>

        {/* PARAGRAPH */}
        <p
          style={{ fontFamily: "NotoSansBold" }}
          className="text-3xl md:text-5xl lg:text-4xl mt-20 max-w-6xl leading-snug"
        >
          Living Mind – a hybrid intelligence system<br />
          where you can speaks, responds, supports, and guides
        </p>
      </div>
    </section>
  );
}














