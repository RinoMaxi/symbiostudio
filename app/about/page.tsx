export default function AboutSymbio() {
  return (
    <main className="w-full min-h-screen px-6 py-16 md:px-12 lg:px-24 bg-[linear-gradient(to_bottom,rgba(125,123,108,0.06),rgba(98,89,74,0.10))]">

      {/* Page Header */}
      <section className="max-w-4xl mx-auto mb-20">
        <h1
          className="text-4xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          About Symbio
        </h1>
        <p className="text-lg leading-relaxed text-neutral-700">
          Symbio is a hybrid‑intelligence system where humans and AI work together 
          to think, explore, and create. It blends human insight with quiet, 
          structured AI support — helping people develop ideas, understand 
          themselves, and build meaningful work without noise or pressure.
        </p>
      </section>

      {/* Why Symbio Exists */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          Why Symbio Exists
        </h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          Most digital spaces are loud, fast, and designed for performance. 
          Symbio takes a different path. It exists to support human agency with 
          quiet intelligence, create a safe and spacious environment for thinking, 
          and offer an alternative to algorithmic feeds.
        </p>
        <p className="text-neutral-700 leading-relaxed">
          Symbio is built for people who want depth, not distraction.
        </p>
      </section>

      {/* How Symbio Works */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-6"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          How Symbio Works
        </h2>

        <div className="space-y-8">
          <div>
            <h3
              className="text-xl mb-2"
              style={{ fontFamily: "MontserratSemiBold" }}
            >
              1. The Studio
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Your private thinking space. Create cards, organize ideas, build 
              projects, and explore connections.
            </p>
          </div>

          <div>
            <h3
              className="text-xl mb-2"
              style={{ fontFamily: "MontserratSemiBold" }}
            >
              2. The Intelligence Layer
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              Calm, structured AI support that helps you clarify ideas, explore 
              possibilities, connect concepts, and summarize your work — without 
              interruption or manipulation.
            </p>
          </div>

          <div>
            <h3
              className="text-xl mb-2"
              style={{ fontFamily: "MontserratSemiBold" }}
            >
              3. The Identity Engine
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              A reflective, private space where your values, interests, and themes 
              become visible over time.
            </p>
          </div>

          <div>
            <h3
              className="text-xl mb-2"
              style={{ fontFamily: "MontserratSemiBold" }}
            >
              4. The Commons
            </h3>
            <p className="text-neutral-700 leading-relaxed">
              A quiet, non‑performative place to share your work — without likes, 
              metrics, or pressure.
            </p>
          </div>
        </div>
      </section>

      {/* What You Can Do */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          What You Can Do in Symbio
        </h2>
        <ul className="list-disc pl-6 text-neutral-700 leading-relaxed space-y-2">
          <li>Create cards to capture thoughts</li>
          <li>Explore ideas with structured AI support</li>
          <li>Join Spaces to collaborate with others</li>
          <li>Work with AI agents in clear, defined roles</li>
          <li>Publish to the Commons when you want to share</li>
        </ul>
      </section>

      {/* AI Roles */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-6"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          AI in Symbio
        </h2>

        <p className="text-neutral-700 leading-relaxed mb-6">
          AI is a visible, structured collaborator — never a replacement for human thinking.
        </p>

        <ul className="list-disc pl-6 text-neutral-700 leading-relaxed space-y-2">
          <li><strong>Researcher</strong> — expands ideas and finds connections</li>
          <li><strong>Summarizer</strong> — keeps your work readable and organized</li>
          <li><strong>Challenger</strong> — questions assumptions and strengthens reasoning</li>
          <li><strong>Connector</strong> — links people, ideas, and spaces</li>
        </ul>
      </section>

      {/* Principles */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          The Principles Behind Symbio
        </h2>
        <ul className="list-disc pl-6 text-neutral-700 leading-relaxed space-y-2">
          <li>Calm technology</li>
          <li>Quiet intelligence</li>
          <li>Human agency first</li>
          <li>Emotional safety</li>
          <li>Meaning‑centered design</li>
          <li>Transparency and reversibility</li>
          <li>Non‑performative sharing</li>
        </ul>
      </section>

      {/* Living Ecosystem */}
      <section className="max-w-4xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          A Living Ecosystem
        </h2>
        <p className="text-neutral-700 leading-relaxed">
          Symbio is a living ecosystem that grows through community feedback, 
          ethical reflection, technological evolution, and human–AI collaboration. 
          It will continue to expand — new tools, new spaces, new forms of 
          intelligence — always guided by the same calm, human‑first philosophy.
        </p>
      </section>

    </main>
  );
}
