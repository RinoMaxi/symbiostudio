export default function HomePage() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-background.png')" }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Content */}
       <div className="relative z-10 flex flex-col items-center text-center text-white px-4 pt-65">

  {/* LOGO + TITLE */}
  <div className="flex items-center gap-6 mb-4">
    <img
  src="/symbio_logo.png"
  alt="Symbio Logo"
  className="w-52 h-auto relative top-0"
/>

    <div className="flex flex-col items-end">
      <h1
        style={{ fontFamily: "MontserratSemiBold" }}
        className="text-8xl md:text-9xl lg:text-[12rem] leading-none"
      >
        symbio AI
      </h1>

      <h2
        style={{ fontFamily: "NotoSans-Bold.ttf" }}
        className="text-4xl md:text-5xl lg:text-5xl tracking-wide mt-2"
      >
        STAY CONNECTED
      </h2>
    </div>
  </div>

  {/* PARAGRAPH */}
  <p
    style={{ fontFamily: "NotoSansBold" }}
    className="text-2xl md:text-3xl lg:text-4xl mt-24 max-w-4xl leading-relaxed"
  >
    Living Mind — a hybrid intelligence system<br />
    where you can speaks, responds, supports, and guides
  </p>

</div>

    </section>
  );
}












