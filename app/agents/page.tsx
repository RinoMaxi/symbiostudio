export default function AgentsPage() {
  return (
    <main className="w-full min-h-screen px-6 py-16 md:px-12 lg:px-24 bg-[linear-gradient(to_bottom,rgba(125,123,108,0.06),rgba(98,89,74,0.10))]">

      {/* Header */}
      <section className="max-w-4xl mx-auto mb-20">
        <h1
          className="text-4xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          AI Agents in Symbio
        </h1>
        <p className="text-lg leading-relaxed text-neutral-700">
          Symbio includes a set of calm, structured AI agents designed to support 
          your thinking without interruption or pressure. Each agent has a clear 
          role, transparent behavior, and a defined purpose inside the ecosystem.
        </p>
      </section>

      {/* Researcher */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          The Researcher
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          The Researcher expands your ideas by finding connections, offering 
          context, and bringing in relevant knowledge. It helps you explore 
          possibilities and deepen your understanding without overwhelming you.
        </p>
      </section>

      {/* Summarizer */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          The Summarizer
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          The Summarizer keeps your work readable and organized. It creates 
          clear summaries of threads, projects, and discussions, helping you 
          stay oriented as your ideas grow.
        </p>
      </section>

      {/* Challenger */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          The Challenger
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          The Challenger strengthens your reasoning by questioning assumptions, 
          highlighting blind spots, and offering alternative perspectives. It 
          helps prevent groupthink and encourages deeper clarity.
        </p>
      </section>

      {/* Connector */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          The Connector
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          The Connector links people, ideas, and spaces. It suggests collaborators, 
          identifies related threads, and maps the relationships across the 
          Symbio ecosystem, helping your work find its natural place.
        </p>
      </section>

      {/* Closing */}
      <section className="max-w-4xl mx-auto mb-20">
        <p className="text-neutral-700 leading-relaxed">
          These four agents form the foundation of Symbio’s intelligence layer. 
          They support your thinking with clarity, structure, and calm — always 
          aligned with human agency and emotional safety.
        </p>
      </section>

    </main>
  );
}

