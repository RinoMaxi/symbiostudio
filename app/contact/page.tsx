export default function ContactPage() {
  return (
    <main className="w-full min-h-screen px-6 py-16 md:px-12 lg:px-24 bg-[linear-gradient(to_bottom,rgba(125,123,108,0.06),rgba(98,89,74,0.10))]">

      {/* Header */}
      <section className="max-w-3xl mx-auto mb-20">
        <h1
          className="text-4xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          Contact
        </h1>
        <p className="text-lg leading-relaxed text-neutral-700">
          Symbio is built on calm, human‑centered communication. If you’d like to 
          reach out — for collaboration, questions, ideas, or thoughtful dialogue — 
          you’re welcome to do so at your own pace. No pressure, no urgency.
        </p>
      </section>

      {/* How to Reach Out */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          How to Reach Out
        </h2>
        <p className="text-neutral-700 leading-relaxed mb-4">
          You can contact the Symbio team through email. We read every message 
          with care and respond thoughtfully — not automatically, not instantly, 
          but with genuine attention.
        </p>

        <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
          <p className="text-neutral-700 leading-relaxed">
            <strong>Email:</strong> contact@symbiostudio.com
          </p>
        </div>
      </section>

      {/* What to Expect */}
      <section className="max-w-3xl mx-auto mb-20">
        <h2
          className="text-2xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          What to Expect
        </h2>
        <ul className="list-disc pl-6 text-neutral-700 leading-relaxed space-y-2">
          <li>Calm, human responses — not automated replies</li>
          <li>Thoughtful engagement with your ideas or questions</li>
          <li>Respect for your time, privacy, and emotional space</li>
          <li>No marketing, no pressure, no noise</li>
        </ul>
      </section>

      {/* Closing */}
      <section className="max-w-3xl mx-auto mb-20">
        <p className="text-neutral-700 leading-relaxed">
          Whether you’re exploring Symbio, building something meaningful, or simply 
          curious about the philosophy behind it, we’re here — quietly, patiently, 
          and with genuine interest in your work.
        </p>
      </section>

    </main>
  );
}


