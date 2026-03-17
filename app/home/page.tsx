export default function HomePage() {
  return (
    <section
      className="relative w-full h-screen bg-contain bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/hero-background.png')" }}
    >
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-7xl md:text-8xl font-extrabold tracking-tight">
          symbio AI
        </h1>

        <h2 className="text-3xl md:text-4xl font-bold tracking-wide mt-4">
          STAY CONNECTED
        </h2>

        <p className="text-2xl md:text-3xl font-medium max-w-3xl leading-relaxed mt-6">
          Living Mind – a hybrid intelligence system where<br />
          you can speak, respond, support, and guide
        </p>
    </section>
  );
}
