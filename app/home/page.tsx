export default function HomePage() {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/hero-background.png')" }}
    >
      {/* Dark overlay */}
      <div className="relative z-10 flex flex-col items-center text-center text-white space-y-4">
  <h1 className="text-7xl font-extrabold tracking-tight uppercase">
    symbio AI
  </h1>

  <h2 className="text-3xl font-semibold tracking-wide uppercase">
    STAY CONNECTED
  </h2>

  <p className="text-2xl font-medium max-w-3xl leading-relaxed">
    Living Mind — a hybrid intelligence system where<br />
    you can speaks, responds, supports, and guides
  </p>

  <img
    src="/symbio-logo-line.png"
    alt="Symbio logo bar"
    className="mt-6 w-full max-w-4xl"
  />
</div>
    </section>
  );
}


