const agents = [
  {
    name: "The Researcher",
    description:
      "Expands your ideas by finding connections, offering context, and bringing in relevant knowledge. Helps you explore possibilities and deepen understanding without overwhelming you.",
  },
  {
    name: "The Summarizer",
    description:
      "Keeps your work readable and organized. Creates clear summaries of threads, projects, and discussions, helping you stay oriented as your ideas grow.",
  },
  {
    name: "The Challenger",
    description:
      "Strengthens your reasoning by questioning assumptions, highlighting blind spots, and offering alternative perspectives. Encourages deeper clarity.",
  },
  {
    name: "The Connector",
    description:
      "Links people, ideas, and spaces. Suggests collaborators, identifies related threads, and maps relationships across the ecosystem.",
  },
];

import Image from "next/image";

export default function AgentsPage() {
  return (
    <main className="relative overflow-hidden w-full min-h-screen px-6 py-16 md:px-12 lg:px-24 bg-[linear-gradient(to_bottom,rgba(125,123,108,0.06),rgba(98,89,74,0.10))]">
      <Image
        src="/project-2.png"
        alt=""
        fill
        className="absolute inset-0 object-cover object-top"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />

      <section className="max-w-4xl mx-auto mb-16">
        <h1 className="text-4xl tracking-wide mb-4" style={{ fontFamily: "MontserratSemiBold" }}>
          AI Agents in Symbio
        </h1>
        <p className="text-lg leading-relaxed text-neutral-700">
          A set of calm, structured AI agents designed to support your thinking
          without interruption or pressure. Each has a clear role and defined purpose.
        </p>
      </section>

      <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {agents.map((agent) => (
          <div
            key={agent.name}
            className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm flex flex-col gap-4"
          >
            <h2 className="text-xl" style={{ fontFamily: "MontserratSemiBold" }}>
              {agent.name}
            </h2>
            <p className="text-neutral-600 leading-relaxed text-sm flex-1">
              {agent.description}
            </p>
            <button className="mt-2 px-5 py-2.5 bg-neutral-900 text-white text-sm rounded-full hover:bg-neutral-700 transition self-start">
              Talk to this agent
            </button>
          </div>
        ))}
      </div>

    </main>
  );
}
