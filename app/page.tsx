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

        {/* Logo */}
        <img
          src="/symbio_logo.png"
          alt="Symbio Logo"
          className="w-32 h-auto mb-6"
        />

        {/* Main Title */}
       <h1 style={{ fontFamily: "MontserratSemiBold" }}>
  symbio AI
        </h1>

        {/* Subtitle */}
        <h2 style={{ fontFamily: "MontserratSemiBold" }}>
  STAY CONNECTED
        </h2>

        {/* Paragraph */}
        <p style={{ fontFamily: "NotoSansBold" }}>
  Living Mind — a hybrid intelligence system<br />
  where you can speaks, responds, supports, and guides
        </p>
      </div>
    </section>
  );
}










