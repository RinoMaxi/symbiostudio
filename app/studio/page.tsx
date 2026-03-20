export default function StudioPage() {
  return (
    <main className="w-full min-h-screen px-6 py-16 md:px-12 lg:px-24">
      
      {/* Header */}
      <section className="max-w-4xl mx-auto mb-20">
        <h1 className="text-4xl font-semibold tracking-wide mb-4">
          Symbio Studio
        </h1>
        <p className="text-lg leading-relaxed text-neutral-600">
          The Studio is your private thinking environment inside Symbio. 
          It’s where ideas begin, grow, and connect. Cards, projects, 
          identity, and intelligence all come together in one calm space.
        </p>
      </section>

      {/* Cards */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-medium tracking-wide mb-4">Cards</h2>
        <p className="text-neutral-600 leading-relaxed">
          Cards are the building blocks of your thinking. Capture ideas, 
          notes, insights, questions, and reflections. Move them freely 
          across the canvas and watch your thinking take shape.
        </p>
      </section>

      {/* Canvas */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-medium tracking-wide mb-4">Canvas</h2>
        <p className="text-neutral-600 leading-relaxed">
          The canvas is an infinite space where your ideas live. Drag, 
          arrange, group, and connect cards. The Studio feels physical, 
          spacious, and alive — designed for deep thinking.
        </p>
      </section>

      {/* Projects */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-medium tracking-wide mb-4">Projects</h2>
        <p className="text-neutral-600 leading-relaxed">
          Group related cards into projects. Build structure, create 
          sections, and explore your work from different angles. Projects 
          help you turn ideas into meaningful outcomes.
        </p>
      </section>

      {/* Identity Panel */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-medium tracking-wide mb-4">Identity Panel</h2>
        <p className="text-neutral-600 leading-relaxed">
          A private space that reflects your values, interests, and themes. 
          The identity panel grows with you, helping you understand your 
          patterns and creative direction.
        </p>
      </section>

      {/* Intelligence Panel */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2 className="text-2xl font-medium tracking-wide mb-4">Intelligence Panel</h2>
        <p className="text-neutral-600 leading-relaxed">
          Structured, calm AI support. Clarify ideas, explore possibilities, 
          refine your thinking, and connect concepts — all without noise or 
          interruption. Intelligence in Symbio is precise, transparent, and 
          always under your control.
        </p>
      </section>

    </main>
  );
}
