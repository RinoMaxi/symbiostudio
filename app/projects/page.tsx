export default function ProjectsPage() {
  return (
    <main className="w-full min-h-screen flex flex-col items-center px-6 py-24 bg-[linear-gradient(to_bottom,rgba(125,123,108,0.06),rgba(98,89,74,0.10))]">

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

      {/* PROJECT 1 */}
      <div className="mt-12 w-full max-w-3xl border border-neutral-300/40 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
        <img
          src="/projects/project-1.png"
          alt="Project 1 visual"
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h2
            className="text-xl font-semibold"
            style={{ fontFamily: "MontserratSemiBold" }}
          >
            Project One
          </h2>
          <p className="mt-2 text-sm opacity-70">
            Description for project one goes here. You can update this text later.
          </p>
          <p className="mt-4 text-xs opacity-50">Status: In Development</p>
        </div>
      </div>

      {/* PROJECT 2 */}
      <div className="mt-8 w-full max-w-3xl border border-neutral-300/40 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
        <img
          src="/projects/project-2.png"
          alt="Project 2 visual"
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h2
            className="text-xl font-semibold"
            style={{ fontFamily: "MontserratSemiBold" }}
          >
            Project Two
          </h2>
          <p className="mt-2 text-sm opacity-70">
            Description for project two goes here. You can update this text later.
          </p>
          <p className="mt-4 text-xs opacity-50">Status: In Progress</p>
        </div>
      </div>

      {/* PROJECT 3 */}
      <div className="mt-8 w-full max-w-3xl border border-neutral-300/40 rounded-xl overflow-hidden hover:shadow-md transition-shadow">
        <img
          src="/projects/project-3.png"
          alt="Project 3 visual"
          className="w-full h-48 object-cover"
        />

        <div className="p-6">
          <h2
            className="text-xl font-semibold"
            style={{ fontFamily: "MontserratSemiBold" }}
          >
            Project Three
          </h2>
          <p className="mt-2 text-sm opacity-70">
            Description for project three goes here. You can update this text later.
          </p>
          <p className="mt-4 text-xs opacity-50">Status: Ongoing</p>
        </div>
      </div>

    </main>
  );
}

