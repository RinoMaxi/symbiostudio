export default function ProjectsPage() {
  return (
    <main className="w-full flex flex-col items-center px-6 py-24">
      <h1
        className="text-4xl font-bold tracking-tight"
        style={{ fontFamily: "MontserratSemiBold" }}
      >
        Projects
      </h1>

      <p className="mt-4 text-lg opacity-70 max-w-2xl text-center">
        A curated collection of work, experiments, and ideas shaped within
        SymbioStudio.
      </p>

      <div className="border border-neutral-300/40 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
  <img
    src="/projects/project-1.png"
    alt="SymbioStudio project visual"
    className="w-full h-48 object-cover"
  />

  <div className="p-6">
    <h2 className="text-xl font-semibold" style={{ fontFamily: "MontserratSemiBold" }}>
      SymbioStudio — Human–AI Collaboration
    </h2>
    <p className="mt-2 text-sm opacity-70">
      A platform exploring how humans and AI can co‑create clarity,
      structure, and emotional grounding through digital interfaces.
    </p>
    <p className="mt-4 text-xs opacity-50">Status: In Development</p>
  </div>

        {/* PROJECT 2 */}
        <div className="border border-neutral-300/40 rounded-xl p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold" style={{ fontFamily: "MontserratSemiBold" }}>
            Mind for Life — Mental Clarity Framework
          </h2>
          <p className="mt-2 text-sm opacity-70">
            A philosophical and practical system for emotional grounding,
            structured thinking, and AI‑supported reflection.
          </p>
          <p className="mt-4 text-xs opacity-50">Status: Conceptual</p>
        </div>

        {/* PROJECT 3 */}
        <div className="border border-neutral-300/40 rounded-xl p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold" style={{ fontFamily: "MontserratSemiBold" }}>
            Symbio Identity System
          </h2>
          <p className="mt-2 text-sm opacity-70">
            A visual identity built around calmness, precision, and cinematic
            minimalism — including hero imagery, gradients, and typography.
          </p>
          <p className="mt-4 text-xs opacity-50">Status: Ongoing</p>
        </div>

      </div>
    </main>
  );
}
