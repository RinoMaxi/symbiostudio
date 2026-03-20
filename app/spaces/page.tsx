export default function SpacesPage() {
  return (
    <main className="w-full min-h-screen px-6 py-16 md:px-12 lg:px-24">
      
      {/* Header */}
      <section className="max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl font-semibold tracking-wide mb-4">
          Spaces & The Commons
        </h1>
        <p className="text-lg leading-relaxed text-neutral-600">
          Spaces and the Commons are where Symbio becomes collaborative. 
          They offer calm, structured environments for shared thinking, 
          collective exploration, and meaningful connection — without noise, 
          pressure, or performance.
        </p>
      </section>

      {/* Spaces */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-medium tracking-wide mb-4">Spaces</h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          Spaces are focused environments for group exploration. Each Space 
          has its own purpose, rhythm, and identity. They allow people to 
          think together without the chaos of traditional social platforms.
        </p>

        <ul className="list-disc pl-6 text-neutral-600 leading-relaxed space-y-2">
          <li>Work on shared topics or themes</li>
          <li>Develop ideas collaboratively</li>
          <li>Use AI agents to support group thinking</li>
          <li>Keep discussions calm, structured, and meaningful</li>
        </ul>
      </section>

      {/* Threads */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-medium tracking-wide mb-4">Threads</h2>
        <p className="text-neutral-600 leading-relaxed">
          Threads are the conversations inside Spaces. They are slow, 
          intentional, and designed for depth. Each thread grows over time, 
          supported by AI agents that help summarize, clarify, and connect 
          ideas without overwhelming the discussion.
        </p>
      </section>

      {/* The Commons */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-medium tracking-wide mb-4">The Commons</h2>
        <p className="text-neutral-600 leading-relaxed mb-4">
          The Commons is Symbio’s quiet public space. It is not a feed, not 
          a performance arena, and not a place for metrics. It is a calm 
          environment where people share work, ideas, and reflections at 
          their own pace.
        </p>

        <ul className="list-disc pl-6 text-neutral-600 leading-relaxed space-y-2">
          <li>No likes, no followers, no algorithms</li>
          <li>Share when you’re ready — not for attention</li>
          <li>Discover thoughtful work from others</li>
          <li>Engage in meaningful, non‑performative dialogue</li>
        </ul>
      </section>

      {/* Closing */}
      <section className="max-w-4xl mx-auto mb-20">
        <p className="text-neutral-600 leading-relaxed">
          Spaces and the Commons form the social layer of Symbio — a calm, 
          human‑centered alternative to traditional platforms. They support 
          collaboration, reflection, and community without noise or pressure.
        </p>
      </section>

    </main>
  );
}
