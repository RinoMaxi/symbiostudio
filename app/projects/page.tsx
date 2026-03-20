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

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full max-w-6xl">
        {/* PROJECT CARD 1 */}
        <div className="border border-neutral-300/40 rounded-xl p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold" style={{ fontFamily: "MontserratSemiBold" }}>
            Project Title
          </h2>
          <p className="mt-2 text-sm opacity-70">
            A short description of the project. This is where you introduce the
            idea in a calm, clear way.
          </p>
        </div>

        {/* PROJECT CARD 2 */}
        <div className="border border-neutral-300/40 rounded-xl p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold" style={{ fontFamily: "MontserratSemiBold" }}>
            Another Project
          </h2>
          <p className="mt-2 text-sm opacity-70">
            Another description. You can add as many cards as you want.
          </p>
        </div>

        {/* PROJECT CARD 3 */}
        <div className="border border-neutral-300/40 rounded-xl p-6 hover:shadow-md transition-shadow">
          <h2 className="text-xl font-semibold" style={{ fontFamily: "MontserratSemiBold" }}>
            Future Work
          </h2>
          <p className="mt-2 text-sm opacity-70">
            Placeholder for future ideas, experiments, or prototypes.
          </p>
        </div>
      </div>
    </main>
  );
}
