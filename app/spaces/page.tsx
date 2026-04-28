import Image from "next/image";

const spaces = [
  {
    name: "AI Tools & Productivity",
    description: "Discover and share the best AI tools for work and life.",
  },
  {
    name: "Prompt Engineering",
    description: "Master the art of writing effective prompts for any AI model.",
  },
  {
    name: "AI News & Trends",
    description: "Stay updated on the latest developments in artificial intelligence.",
  },
  {
    name: "Agents & Automation",
    description: "Build and share AI agents that automate real workflows.",
  },
  {
    name: "AI in Business",
    description: "Real-world applications of AI across industries.",
  },
  {
    name: "Learning & Resources",
    description: "Tutorials, guides, and learning paths for AI enthusiasts.",
  },
];

export default function SpacesPage() {
  return (
    <main className="relative overflow-hidden w-full min-h-screen px-6 py-16 md:px-12 lg:px-24">
      <Image
        src="/project-1.png"
        alt=""
        fill
        className="absolute inset-0 object-cover object-center"
        priority
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <h1
          className="text-4xl text-white tracking-wide mb-3"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          Spaces
        </h1>
        <p className="text-neutral-300 text-lg mb-12">
          Join a community space to explore, share, and collaborate with others.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {spaces.map((space) => (
            <div
              key={space.name}
              className="bg-black/60 border border-neutral-700 rounded-2xl px-6 py-6 flex flex-col gap-4"
            >
              <div>
                <h2 className="text-white text-lg font-semibold mb-2">{space.name}</h2>
                <p className="text-neutral-400 text-sm leading-relaxed">{space.description}</p>
              </div>
              <button className="mt-auto w-full py-2 rounded-full bg-white text-black text-sm font-semibold hover:bg-neutral-200 transition">
                Join Space
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
