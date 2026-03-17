export default function HomePage() {
  return (
    <section
      className="relative w-full h-screen bg-contain bg-center"
      style={{ backgroundImage: "url('/hero-background.png')" }}
    >
      <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
        <h1 className="font-symbio text-[84px] tracking-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.6)]">
          symbio AI
        </h1>

        <h2 className="font-connected text-3xl md:text-4xl font-bold tracking-tight mt-4 drop-shadow-[0_3px_4px_rgba(0,0,0,0.6)]">
          STAY CONNECTED
        </h2>

        <p className="font-livingmind text-2xl md:text-3xl font-medium max-w-4xl leading-relaxed mt-6 drop-shadow-[0_3px_4px_rgba(0,0,0,0.7)]">
          Living Mind — a hybrid intelligence system where<br />
          you can speak, respond, support, and guide
        </p>
      </div>
    </section>
  );
}
