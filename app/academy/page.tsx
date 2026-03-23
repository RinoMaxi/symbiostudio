export default function AcademyPage() {
  return (
    <main className="w-full min-h-screen px-6 py-16 md:px-12 lg:px-24 bg-neutral-50">

      {/* Header */}
      <section className="max-w-4xl mx-auto mb-20">
        <h1
          className="text-4xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          Symbio Academy
        </h1>
        <p className="text-lg leading-relaxed text-neutral-700">
          The Academy is Symbio’s learning environment — a calm, structured space 
          where you explore ideas, develop skills, and deepen your understanding 
          of yourself, your work, and the world. No noise, no pressure, no 
          performance — just meaningful learning at your own pace.
        </p>
      </section>

      {/* Learning Philosophy */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          A Different Kind of Learning
        </h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Most learning platforms are fast, competitive, and optimized for 
          consumption. The Academy takes a different approach — slow, reflective, 
          and centered on understanding rather than achievement.
        </p>
        <ul className="list-disc pl-6 text-neutral-700 leading-relaxed space-y-2">
          <li>Learn without pressure or deadlines</li>
          <li>Explore topics through calm, structured modules</li>
          <li>Reflect deeply instead of rushing through content</li>
          <li>Build knowledge that integrates into your real work</li>
        </ul>
      </section>

      {/* Modules */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          Learning Modules
        </h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Modules in the Academy are designed to be spacious and thoughtful. 
          Each one blends human insight with quiet AI support to help you 
          understand concepts, explore ideas, and apply what you learn.
        </p>

        <ul className="list-disc pl-6 text-neutral-700 leading-relaxed space-y-2">
          <li>Foundations of Calm Thinking</li>
          <li>Working with AI as a Partner</li>
          <li>Identity, Values, and Creative Direction</li>
          <li>Systems Thinking for Everyday Life</li>
          <li>Building Meaningful Projects</li>
        </ul>
      </section>

      {/* AI Support */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          AI as a Learning Companion
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          In the Academy, AI is not a teacher — it’s a quiet companion. It helps 
          you clarify ideas, summarize concepts, ask better questions, and explore 
          new angles without overwhelming your learning process.
        </p>
      </section>

      {/* Closing */}
      <section className="max-w-4xl mx-auto mb-20">
        <p className="text-neutral-700 leading-relaxed">
          The Academy is a living environment. New modules, tools, and learning 
          pathways will continue to grow as Symbio evolves — always guided by 
          calm intelligence and human‑first design.
        </p>
      </section>

    </main>
  );
}
