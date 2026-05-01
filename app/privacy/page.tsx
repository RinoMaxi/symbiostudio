import Link from "next/link";

function Section({ id, num, title, children }: {
  id: string;
  num: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-6 pt-10 border-t border-neutral-800 first:border-0 first:pt-0">
      <div className="flex items-baseline gap-3 mb-5">
        <span className="text-neutral-700 text-sm font-mono">{num}</span>
        <h2 className="text-white text-lg font-semibold" style={{ fontFamily: "MontserratSemiBold" }}>{title}</h2>
      </div>
      <div className="text-neutral-400 text-sm leading-7 space-y-3 pl-7">{children}</div>
    </section>
  );
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="text-neutral-700 shrink-0 mt-1.5 text-xs">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-neutral-200">{children}</span>
  );
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">

        {/* Header */}
        <div className="mb-14">
          <p className="text-neutral-600 text-xs uppercase tracking-widest mb-4">Legal</p>
          <h1 className="text-3xl text-white mb-4 tracking-wide" style={{ fontFamily: "MontserratSemiBold" }}>
            Privacy Policy
          </h1>
          <div className="flex flex-wrap gap-4 text-xs text-neutral-600">
            <span>Last updated: May 2025</span>
            <span>·</span>
            <span>Applies to: symbiostudio.ai and all associated services</span>
          </div>
          <p className="mt-5 text-neutral-400 text-sm leading-7">
            SymbioStudio Ltd is committed to protecting your privacy. This policy explains what personal data we collect, why we collect it, and how we handle it — in plain English. We operate under the <Highlight>UK General Data Protection Regulation (UK GDPR)</Highlight> and the <Highlight>Data Protection Act 2018</Highlight>.
          </p>
          <p className="mt-3 text-neutral-400 text-sm leading-7">
            Please read this policy carefully. By using SymbioStudio you confirm that you have read and understood it.
          </p>
        </div>

        {/* Table of contents */}
        <nav className="mb-14 bg-neutral-900/60 border border-neutral-800 rounded-2xl px-6 py-5">
          <p className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Contents</p>
          <ol className="space-y-2">
            {[
              ["#s1", "Who We Are"],
              ["#s2", "What Data We Collect"],
              ["#s3", "Why We Collect It"],
              ["#s4", "How Data Is Stored"],
              ["#s5", "How Data Is Shared"],
              ["#s6", "Your Rights Under UK GDPR"],
              ["#s7", "Cookies"],
              ["#s8", "Age Restrictions"],
              ["#s9", "Contact Us"],
            ].map(([href, label], i) => (
              <li key={href}>
                <a href={href} className="flex items-baseline gap-3 text-neutral-500 hover:text-neutral-200 transition text-sm">
                  <span className="text-neutral-700 font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        {/* Sections */}
        <div className="flex flex-col gap-0">

          <Section id="s1" num="01" title="Who We Are">
            <p>
              <Highlight>SymbioStudio Ltd</Highlight> is the data controller for all personal data collected through this platform. We are a UK-based company operating an AI-native professional community platform at symbiostudio.ai.
            </p>
            <p>
              SymbioStudio is a platform where professionals, creators and curious minds connect around artificial intelligence — sharing knowledge, accessing certifications and regulatory resources, trading AI tools and services, and collaborating through expert-led communities.
            </p>
            <p>
              For all privacy-related enquiries, contact us at <Highlight>privacy@symbiostudio.org</Highlight>.
            </p>
          </Section>

          <Section id="s2" num="02" title="What Data We Collect">
            <p>We collect only what is necessary to provide and improve the platform. This includes:</p>

            <div className="space-y-5 mt-1">
              <div>
                <p className="text-neutral-300 font-semibold mb-2">Account & Profile Information</p>
                <Ul items={[
                  "Email address — required to create and secure your account",
                  "Display name and username",
                  "Professional role, industry and bio (optional, set by you)",
                  "Profile photograph (optional, uploaded by you)",
                ]} />
              </div>

              <div>
                <p className="text-neutral-300 font-semibold mb-2">Usage Data</p>
                <Ul items={[
                  "Pages and features you access, and how often",
                  "Session duration and navigation patterns",
                  "Device type, browser and operating system",
                  "IP address and approximate location derived from it",
                ]} />
              </div>

              <div>
                <p className="text-neutral-300 font-semibold mb-2">Points & Community Activity</p>
                <Ul items={[
                  "Points earned and spent, including transaction history",
                  "Posts, comments, questions and replies you publish",
                  "Spaces you join and your level of participation",
                  "Courses, certifications and Store purchases you complete",
                ]} />
              </div>

              <div>
                <p className="text-neutral-300 font-semibold mb-2">Payment Information</p>
                <p className="text-neutral-400">
                  Payments are processed by <Highlight>PayPal</Highlight> and <Highlight>Stripe</Highlight>. We do not store your card number, bank details or full payment credentials. We receive only a payment confirmation, your billing plan and a tokenised reference from the payment processor. PayPal and Stripe are independent data controllers for payment data they process.
                </p>
              </div>
            </div>
          </Section>

          <Section id="s3" num="03" title="Why We Collect It">
            <p>We collect personal data for the following purposes, each with a lawful basis under UK GDPR:</p>
            <div className="mt-2 space-y-3">
              {[
                {
                  purpose: "To provide the platform and your account",
                  basis: "Performance of a contract",
                  detail: "Creating your account, displaying your profile, enabling you to post and participate in Spaces.",
                },
                {
                  purpose: "To process payments and manage subscriptions",
                  basis: "Performance of a contract",
                  detail: "Handling Premium and Elite membership billing via PayPal and Stripe.",
                },
                {
                  purpose: "To maintain security and prevent fraud",
                  basis: "Legitimate interests / Legal obligation",
                  detail: "Detecting abuse, protecting accounts, and complying with applicable laws.",
                },
                {
                  purpose: "To improve the platform",
                  basis: "Legitimate interests",
                  detail: "Understanding how features are used so we can fix problems and build better ones.",
                },
                {
                  purpose: "To personalise your experience",
                  basis: "Legitimate interests",
                  detail: "Surfacing relevant content, Spaces and recommendations based on your activity.",
                },
              ].map(({ purpose, basis, detail }) => (
                <div key={purpose} className="bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-1">
                    <p className="text-neutral-200 text-sm font-semibold">{purpose}</p>
                    <span className="text-neutral-600 text-xs">{basis}</span>
                  </div>
                  <p className="text-neutral-500 text-xs leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section id="s4" num="04" title="How Data Is Stored">
            <p>We take the security of your data seriously. Personal data is handled as follows:</p>
            <Ul items={[
              "All data is transmitted over encrypted connections (HTTPS/TLS)",
              "Data is stored on secure, access-controlled servers",
              "Access to personal data is restricted to authorised personnel only, on a need-to-know basis",
              "We conduct regular reviews of our security practices and those of our service providers",
              "Databases holding personal data are encrypted at rest",
            ]} />
            <p className="mt-4">
              We retain your personal data for as long as your account is active. If you delete your account, your profile and personal data will be removed within <Highlight>30 days</Highlight>. Billing records may be retained for up to <Highlight>7 years</Highlight> as required by UK tax law.
            </p>
            <p>
              Our hosting infrastructure is provided by Vercel. Data may be processed in the UK, the EEA or the United States. Where transfers outside the UK occur, appropriate safeguards — including Standard Contractual Clauses — are in place.
            </p>
          </Section>

          <Section id="s5" num="05" title="How Data Is Shared">
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-4 mb-4">
              <p className="text-neutral-200 font-semibold text-sm mb-1">We do not sell your data. Ever.</p>
              <p className="text-neutral-500 text-xs leading-relaxed">Your personal data is never sold, rented or traded to third parties. It is never shared with advertisers or used for behavioural advertising.</p>
            </div>
            <p>We share data only in the following limited circumstances:</p>
            <div className="mt-3 space-y-3">
              {[
                {
                  who: "Payment processors (PayPal & Stripe)",
                  why: "To process membership payments and subscription billing. They receive only what is necessary to complete the transaction.",
                },
                {
                  who: "Hosting infrastructure (Vercel)",
                  why: "To serve the platform. Vercel processes data as our data processor under a signed data processing agreement.",
                },
                {
                  who: "Authentication provider (Clerk)",
                  why: "To manage secure sign-in and account sessions.",
                },
                {
                  who: "Legal or regulatory authorities",
                  why: "Where required by law, court order, or a legitimate request from a UK regulatory or law enforcement authority. We will notify you where legally possible before complying.",
                },
              ].map(({ who, why }) => (
                <div key={who} className="flex gap-4">
                  <span className="text-neutral-700 shrink-0 mt-1 text-xs">—</span>
                  <div>
                    <p className="text-neutral-300 text-sm font-semibold">{who}</p>
                    <p className="text-neutral-500 text-xs leading-relaxed mt-0.5">{why}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section id="s6" num="06" title="Your Rights Under UK GDPR">
            <p>You have the following rights over your personal data. To exercise any of them, email <Highlight>privacy@symbiostudio.org</Highlight>. We will respond within <Highlight>30 days</Highlight>.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-3">
              {[
                { right: "Right of Access", detail: "Request a copy of all personal data we hold about you." },
                { right: "Right to Rectification", detail: "Ask us to correct inaccurate or incomplete data." },
                { right: "Right to Erasure", detail: "Request deletion of your personal data ('right to be forgotten')." },
                { right: "Right to Export", detail: "Receive your data in a portable, machine-readable format." },
                { right: "Right to Restrict Processing", detail: "Ask us to limit how we use your data in certain circumstances." },
                { right: "Right to Object", detail: "Object to processing based on legitimate interests or direct marketing." },
              ].map(({ right, detail }) => (
                <div key={right} className="bg-neutral-900/50 border border-neutral-800 rounded-xl px-4 py-4">
                  <p className="text-neutral-200 text-sm font-semibold mb-1">{right}</p>
                  <p className="text-neutral-500 text-xs leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">
              If you are not satisfied with our response, you have the right to lodge a complaint with the <Highlight>Information Commissioner's Office (ICO)</Highlight> — the UK's independent data protection authority — at <Highlight>ico.org.uk</Highlight> or by calling 0303 123 1113.
            </p>
          </Section>

          <Section id="s7" num="07" title="Cookies">
            <p>
              We use <Highlight>essential cookies only</Highlight>. These are the minimum required for the platform to function — they manage your login session and keep your account secure.
            </p>
            <Ul items={[
              "Session cookies — keep you logged in during your visit",
              "Authentication tokens — issued by our auth provider (Clerk) to verify your identity",
              "Security cookies — protect against cross-site request forgery (CSRF)",
            ]} />
            <p className="mt-4">
              We do not use <Highlight>third-party advertising cookies</Highlight>, tracking pixels, or any cookies that follow you across other websites. We do not use cookies for behavioural advertising or to build advertising profiles.
            </p>
            <p>
              You can manage or delete cookies through your browser settings. Disabling essential cookies will prevent you from signing in to the platform.
            </p>
          </Section>

          <Section id="s8" num="08" title="Age Restrictions">
            <p>
              SymbioStudio is intended for users aged <Highlight>16 and over</Highlight>. This is in line with the UK GDPR minimum age for digital consent.
            </p>
            <p>
              Users under the age of 16 may only use SymbioStudio with the verifiable consent of a parent or legal guardian. If you are a parent or guardian and believe your child has registered without consent, please contact us at <Highlight>privacy@symbiostudio.org</Highlight> and we will delete the account promptly.
            </p>
            <p>
              We do not knowingly collect personal data from children under 13. If we become aware that we have done so without appropriate consent, we will delete that data immediately.
            </p>
          </Section>

          <Section id="s9" num="09" title="Contact Us">
            <p>
              For any questions, concerns or requests relating to your privacy or this policy, please contact our data protection team:
            </p>
            <div className="bg-neutral-900/50 border border-neutral-800 rounded-xl px-5 py-5 mt-3 space-y-2">
              <p><Highlight>Email:</Highlight> <span className="text-neutral-400">privacy@symbiostudio.org</span></p>
              <p><Highlight>Subject line:</Highlight> <span className="text-neutral-400">Privacy Enquiry</span></p>
              <p><Highlight>Response time:</Highlight> <span className="text-neutral-400">Within 5 business days for general enquiries; within 30 days for formal rights requests</span></p>
            </div>
            <p className="mt-4">
              We take all privacy communications seriously and will acknowledge your message promptly.
            </p>
          </Section>

          {/* Footer note */}
          <div className="mt-14 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-neutral-700 text-xs">
              © 2025 SymbioStudio Ltd. Registered in England and Wales.
            </p>
            <div className="flex gap-4 text-xs text-neutral-700">
              <Link href="/" className="hover:text-neutral-400 transition">Home</Link>
              <Link href="/pricing" className="hover:text-neutral-400 transition">Pricing</Link>
              <Link href="/store" className="hover:text-neutral-400 transition">Store</Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
