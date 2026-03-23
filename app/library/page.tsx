export default function LibraryPage() {
  return (
    <main className="w-full min-h-screen px-6 py-16 md:px-12 lg:px-24 bg-neutral-50">

      {/* Header */}
      <section className="max-w-4xl mx-auto mb-20">
        <h1
          className="text-4xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          The Library
        </h1>
        <p className="text-lg leading-relaxed text-neutral-700">
          The Library is Symbio’s knowledge space — a calm, organized archive 
          where your ideas, cards, projects, and insights come together. It’s 
          a place to revisit your thinking, discover patterns, and explore 
          the evolution of your work over time.
        </p>
      </section>

      {/* What the Library Holds */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          What the Library Holds
        </h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Everything you create in Symbio eventually finds a home in the Library. 
          It’s not a feed, not a timeline, and not a place for performance — 
          it’s a quiet archive designed for reflection and discovery.
        </p>

        <ul className="list-disc pl-6 text-neutral-700 leading-relaxed space-y-2">
          <li>Your cards and notes</li>
          <li>Projects and their histories</li>
          <li>Summaries and insights from the Intelligence Layer</li>
          <li>Connections, themes, and emerging patterns</li>
          <li>Your evolving identity and creative direction</li>
        </ul>
      </section>

      {/* How It Works */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          How the Library Works
        </h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          The Library grows naturally as you work. You don’t need to curate it 
          or manage it — Symbio organizes your knowledge quietly in the background, 
          making it easy to explore your ideas from different angles.
        </p>

        <ul className="list-disc pl-6 text-neutral-700 leading-relaxed space-y-2">
          <li>Browse your work by topic, theme, or project</li>
          <li>See how ideas evolve over time</li>
          <li>Find connections you didn’t notice before</li>
          <li>Use AI to surface insights and summaries</li>
        </ul>
      </section>

      {/* Why It Matters */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          Why the Library Matters
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          The Library is where your thinking becomes visible. It helps you 
          understand your patterns, track your growth, and build a deeper 
          relationship with your ideas. Over time, it becomes a living record 
          of your creative and intellectual journey.
        </p>
      </section>

    </main>
  );
}
