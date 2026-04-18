const tiers = [
  {
    name: "Free",
    price: "£0",
    period: null,
    badge: null,
    features: [
      "Limited AI sessions",
      "Public community access",
      "5 saved projects",
      "Basic content library",
      "Earn points (base rate)",
    ],
    button: { label: "Get started free", style: "outline" },
  },
  {
    name: "Premium",
    price: "£5",
    period: "month · £50/year",
    badge: "Most popular",
    features: [
      "Unlimited AI sessions",
      "Full content library",
      "Unlimited projects",
      "Private community channels",
      "+20% points bonus",
      "Monthly workshops",
      "Priority support",
    ],
    button: { label: "Start Premium", style: "dark" },
  },
  {
    name: "Elite",
    price: "£10",
    period: "month · £100/year",
    badge: null,
    features: [
      "Everything in Premium",
      "+50% points bonus",
      "Creator publishing privileges",
      "Recognition badges",
      "Elite masterclasses",
      "Device reward eligibility",
      "Elite community spaces",
    ],
    button: { label: "Join Elite", style: "purple" },
  },
];

function buttonClass(style: string) {
  if (style === "outline")
    return "w-full py-3 rounded-full border border-neutral-900 text-neutral-900 font-semibold text-sm hover:bg-neutral-900 hover:text-white transition";
  if (style === "dark")
    return "w-full py-3 rounded-full bg-neutral-900 text-white font-semibold text-sm hover:bg-neutral-700 transition";
  if (style === "purple")
    return "w-full py-3 rounded-full bg-purple-700 text-white font-semibold text-sm hover:bg-purple-600 transition";
  return "";
}

export default function ProfilePage() {
  return (
    <main className="w-full min-h-screen px-6 py-16 md:px-12 lg:px-24 bg-[linear-gradient(to_bottom,rgba(125,123,108,0.06),rgba(98,89,74,0.10))]">

      {/* HEADER */}
      <section className="max-w-2xl mx-auto text-center mb-16">
        <h1
          className="text-4xl tracking-wide mb-4"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          Join Symbio
        </h1>
        <p className="text-lg text-neutral-600 leading-relaxed">
          Choose how you want to grow
        </p>
      </section>

      {/* TIER CARDS */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {tiers.map((tier) => (
          <div key={tier.name} className="relative flex flex-col">
            {tier.badge && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span
                  className="px-4 py-1 bg-neutral-900 text-white text-xs rounded-full"
                  style={{ fontFamily: "MontserratSemiBold" }}
                >
                  {tier.badge}
                </span>
              </div>
            )}

            <div
              className={`flex flex-col h-full bg-white border rounded-2xl p-8 shadow-sm gap-6 ${
                tier.badge ? "border-neutral-900" : "border-neutral-200"
              }`}
            >
              {/* Name + Price */}
              <div>
                <h2
                  className="text-xl mb-3"
                  style={{ fontFamily: "MontserratSemiBold" }}
                >
                  {tier.name}
                </h2>
                <p className="text-3xl font-extrabold text-neutral-900">
                  {tier.price}
                  {tier.period && (
                    <span className="text-sm font-normal text-neutral-500 ml-1">
                      /{tier.period}
                    </span>
                  )}
                </p>
              </div>

              {/* Features */}
              <ul className="flex flex-col gap-2 flex-1">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm text-neutral-600">
                    <span className="mt-0.5 text-neutral-400">—</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button className={buttonClass(tier.button.style)}>
                {tier.button.label}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* GUARANTEE NOTE */}
      <p className="text-center text-sm text-neutral-500 mt-10">
        All paid plans include a cancel-anytime guarantee. No hidden fees.
      </p>

      {/* TWO WAYS TO REACH ELITE */}
      <section className="max-w-3xl mx-auto mt-20">
        <h2
          className="text-2xl tracking-wide mb-8 text-center"
          style={{ fontFamily: "MontserratSemiBold" }}
        >
          Two ways to reach Elite
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm">
            <h3
              className="text-lg mb-3"
              style={{ fontFamily: "MontserratSemiBold" }}
            >
              Pay £10/month
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Immediate full access to every Elite feature — masterclasses,
              creator tools, elite spaces, and device reward eligibility.
            </p>
          </div>

          <div className="bg-white border border-neutral-200 rounded-2xl p-8 shadow-sm">
            <h3
              className="text-lg mb-3"
              style={{ fontFamily: "MontserratSemiBold" }}
            >
              Earn it
            </h3>
            <p className="text-sm text-neutral-600 leading-relaxed">
              Become a top contributor in the community. Earn enough points and
              you unlock a free Elite month — no payment required.
            </p>
          </div>
        </div>
      </section>

    </main>
  );
}
