import Image from "next/image";

const sections = [
  "Who We Are",
  "Data We Collect",
  "Why We Collect It",
  "How We Store & Protect It",
  "How We Share It",
  "Your Rights",
  "Cookies",
  "Age Restrictions",
  "Changes to This Policy",
  "Contact Us",
];

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-8">
      <h2 className="text-white text-xl font-semibold mb-4 pt-10 border-t border-neutral-800" style={{ fontFamily: "MontserratSemiBold" }}>
        {title}
      </h2>
      <div className="text-neutral-400 text-sm leading-7 space-y-4">{children}</div>
    </section>
  );
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="text-neutral-300 font-semibold mb-1">{title}</p>
      <div className="text-neutral-400 text-sm leading-7">{children}</div>
    </div>
  );
}

function Ul({ items }: { items: string[] }) {
  return (
    <ul className="list-none space-y-1.5 pl-0">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <span className="text-neutral-600 mt-1.5 shrink-0">—</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPage() {
  return (
    <main className="relative overflow-hidden w-full min-h-screen px-6 py-16 md:px-12 lg:px-24">
      <Image src="/project-1.png" alt="" fill className="absolute inset-0 object-cover object-top" priority />
      <div className="absolute inset-0 bg-black/80" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div className="mb-12">
          <p className="text-neutral-500 text-xs uppercase tracking-widest mb-3">Legal</p>
          <h1 className="text-4xl text-white tracking-wide mb-4" style={{ fontFamily: "MontserratSemiBold" }}>
            Privacy Policy
          </h1>
          <p className="text-neutral-500 text-sm">
            Last updated: 1 May 2026 &nbsp;·&nbsp; Effective: 1 May 2026
          </p>
          <p className="text-neutral-400 text-sm mt-3 max-w-2xl leading-relaxed">
            This Privacy Policy explains how SymbioStudio Ltd collects, uses, stores and shares your personal data when you use the SymbioStudio platform. We are committed to protecting your privacy and complying with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[220px_1fr] gap-12">

          {/* Sticky TOC */}
          <aside className="hidden lg:block">
            <div className="sticky top-8 bg-black/50 border border-neutral-800 rounded-2xl p-5">
              <p className="text-neutral-500 text-xs uppercase tracking-widest mb-4">Contents</p>
              <nav className="flex flex-col gap-2">
                {sections.map((s, i) => (
                  <a
                    key={s}
                    href={`#section-${i + 1}`}
                    className="text-neutral-500 text-xs hover:text-neutral-200 transition leading-snug"
                  >
                    {i + 1}. {s}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Content */}
          <div className="flex flex-col gap-0">

            <Section id="section-1" title="1. Who We Are">
              <p>
                SymbioStudio Ltd is the data controller responsible for your personal data. We are a company registered in England and Wales.
              </p>
              <div className="bg-black/40 border border-neutral-800 rounded-xl px-5 py-4 text-sm">
                <p><span className="text-neutral-300">Company name:</span> SymbioStudio Ltd</p>
                <p className="mt-1"><span className="text-neutral-300">Registered in:</span> England and Wales</p>
                <p className="mt-1"><span className="text-neutral-300">ICO Registration:</span> Pending registration</p>
                <p className="mt-1"><span className="text-neutral-300">Data protection enquiries:</span> privacy@symbiostudio.ai</p>
              </div>
              <p>
                We operate the SymbioStudio platform (the "Platform"), including the website at symbiostudio.ai, the Spaces community, the Store, the Marketplace, and all associated products and features.
              </p>
            </Section>

            <Section id="section-2" title="2. Data We Collect">
              <p>We collect the following categories of personal data:</p>

              <Sub title="Account & Identity Data">
                <p>When you register, we collect your name, email address, and username. Account creation and authentication is handled by Clerk, our third-party identity provider. We do not store your password directly.</p>
              </Sub>

              <Sub title="Profile Data">
                <p>Information you choose to add to your profile, including professional role, industry, bio, profile photograph and any links you provide.</p>
              </Sub>

              <Sub title="Content & Activity Data">
                <p>Posts, comments, questions, replies and other content you publish on the Feed, in Spaces or elsewhere on the Platform. This includes content you submit in discussions, AI interactions you initiate, and points activity on your account.</p>
              </Sub>

              <Sub title="Payment & Billing Data">
                <p>If you subscribe to a paid membership tier, payment is processed securely by Stripe. We receive confirmation of your subscription status and billing cycle but do not store your card number, expiry date or CVV. Stripe acts as a separate data controller for payment data.</p>
              </Sub>

              <Sub title="Usage & Technical Data">
                <Ul items={[
                  "IP address and approximate location derived from it",
                  "Browser type and version, operating system and device type",
                  "Pages visited, features used and time spent on the Platform",
                  "Referring URLs and search terms used to find the Platform",
                  "Session identifiers and authentication tokens",
                ]} />
              </Sub>

              <Sub title="Communications Data">
                <p>If you contact us by email, via support or through any contact form, we retain a record of that correspondence including your name, email address and the content of your message.</p>
              </Sub>

              <Sub title="Data You Do Not Need to Provide">
                <p>Certain data fields — such as professional role, profile photograph and bio — are optional. You can use core Platform features without providing them. Where data is required (e.g. an email address to create an account), we will make this clear at the point of collection.</p>
              </Sub>
            </Section>

            <Section id="section-3" title="3. Why We Collect It">
              <p>Under UK GDPR, we must have a lawful basis for processing personal data. The table below explains our purposes and the legal basis for each:</p>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-neutral-800">
                      <th className="text-left text-neutral-300 font-semibold py-3 pr-6 w-1/2">Purpose</th>
                      <th className="text-left text-neutral-300 font-semibold py-3">Legal Basis</th>
                    </tr>
                  </thead>
                  <tbody className="text-neutral-400">
                    {[
                      ["Creating and managing your account", "Performance of a contract"],
                      ["Processing membership subscription payments", "Performance of a contract"],
                      ["Displaying your profile and content to other members", "Performance of a contract"],
                      ["Sending transactional emails (account, billing, security)", "Performance of a contract"],
                      ["Improving Platform features and user experience", "Legitimate interests"],
                      ["Detecting and preventing fraud, abuse and security threats", "Legitimate interests / Legal obligation"],
                      ["Analysing how the Platform is used via aggregated analytics", "Legitimate interests"],
                      ["Responding to your support requests and enquiries", "Legitimate interests"],
                      ["Sending optional marketing or product update emails", "Consent (you may opt out at any time)"],
                      ["Complying with UK tax, financial and legal obligations", "Legal obligation"],
                    ].map(([purpose, basis]) => (
                      <tr key={purpose} className="border-b border-neutral-900">
                        <td className="py-3 pr-6 align-top">{purpose}</td>
                        <td className="py-3 align-top text-neutral-500">{basis}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p>
                Where we rely on <span className="text-neutral-300">legitimate interests</span>, we have assessed that our interests do not override your rights and freedoms, and we have implemented appropriate safeguards. You have the right to object to processing based on legitimate interests — see Section 6.
              </p>
            </Section>

            <Section id="section-4" title="4. How We Store & Protect It">
              <Sub title="Storage Location">
                <p>The Platform is hosted on Vercel infrastructure. Your data may be stored and processed in the United Kingdom, the European Economic Area, or the United States. Where data is transferred outside the UK, we rely on appropriate transfer mechanisms (including Standard Contractual Clauses) to ensure equivalent protection.</p>
              </Sub>

              <Sub title="Security Measures">
                <Ul items={[
                  "Encryption in transit (TLS/HTTPS) for all data sent between your browser and our servers",
                  "Encryption at rest for databases holding personal data",
                  "Access controls restricting internal access to personal data on a need-to-know basis",
                  "Authentication and session management via Clerk, including support for multi-factor authentication",
                  "Regular security reviews of third-party services we use",
                ]} />
              </Sub>

              <Sub title="Retention Periods">
                <p>We retain your data for as long as your account is active. If you delete your account:</p>
                <Ul items={[
                  "Account and profile data is deleted within 30 days of your request",
                  "Publicly posted content (Feed posts, Space discussions) may remain visible in anonymised or attributed form unless you separately request removal",
                  "Billing records are retained for 7 years as required by UK tax law",
                  "Support correspondence is retained for 3 years",
                  "Anonymised analytics data (not linked to you) may be retained indefinitely",
                ]} />
              </Sub>
            </Section>

            <Section id="section-5" title="5. How We Share It">
              <p>We do not sell your personal data. We share it only in the following circumstances:</p>

              <Sub title="Service Providers (Data Processors)">
                <p>We use a limited number of trusted third-party providers who process data on our behalf and under our instructions:</p>
                <Ul items={[
                  "Clerk — authentication and identity management",
                  "Stripe — subscription billing and payment processing",
                  "Vercel — Platform hosting and infrastructure",
                  "Analytics providers — aggregated usage analytics (where applicable, data is anonymised or pseudonymised)",
                ]} />
                <p className="mt-2">All processors are bound by data processing agreements and are required to process data only as instructed by us.</p>
              </Sub>

              <Sub title="Other Members">
                <p>Content you publish on the Platform (posts, profile information, contributions to Spaces) is visible to other members as intended by the Platform's community features. Do not post content you do not wish others to see.</p>
              </Sub>

              <Sub title="Legal & Regulatory Disclosure">
                <p>We may disclose personal data if required to do so by law, court order, or a legitimate request from a UK regulatory or law enforcement authority. We will notify you where legally permitted to do so before complying.</p>
              </Sub>

              <Sub title="Business Transfers">
                <p>In the event of a merger, acquisition or sale of all or substantially all of our assets, your data may be transferred to the acquiring entity. We will notify you in advance and provide options where possible.</p>
              </Sub>
            </Section>

            <Section id="section-6" title="6. Your Rights">
              <p>Under UK GDPR, you have the following rights regarding your personal data. To exercise any of these rights, contact us at <span className="text-neutral-300">privacy@symbiostudio.ai</span>. We will respond within one calendar month.</p>

              <div className="space-y-4">
                {[
                  {
                    right: "Right of Access",
                    detail: "You may request a copy of the personal data we hold about you (a Subject Access Request). We will provide this free of charge in a commonly used electronic format.",
                  },
                  {
                    right: "Right to Rectification",
                    detail: "If any personal data we hold is inaccurate or incomplete, you have the right to have it corrected. You can update most profile information directly in your account settings.",
                  },
                  {
                    right: "Right to Erasure",
                    detail: "You may request that we delete your personal data. We will comply unless we are required to retain it for legal reasons (e.g. tax records). Deleting your account initiates the erasure process.",
                  },
                  {
                    right: "Right to Restriction of Processing",
                    detail: "You may request that we limit how we process your data in certain circumstances — for example, while a dispute about its accuracy is resolved.",
                  },
                  {
                    right: "Right to Data Portability",
                    detail: "Where processing is based on consent or contract, you may request your data in a structured, machine-readable format so you can transfer it to another service.",
                  },
                  {
                    right: "Right to Object",
                    detail: "You may object to processing based on legitimate interests or direct marketing. We will stop processing unless we can demonstrate compelling legitimate grounds that override your interests.",
                  },
                  {
                    right: "Right to Withdraw Consent",
                    detail: "Where processing is based on consent (e.g. marketing emails), you may withdraw consent at any time. This does not affect the lawfulness of processing before withdrawal.",
                  },
                  {
                    right: "Right to Lodge a Complaint",
                    detail: "If you believe we have not handled your data in accordance with UK GDPR, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk or by calling 0303 123 1113.",
                  },
                ].map(({ right, detail }) => (
                  <div key={right} className="bg-black/40 border border-neutral-800 rounded-xl px-5 py-4">
                    <p className="text-neutral-200 font-semibold text-sm mb-1">{right}</p>
                    <p className="text-neutral-500 text-sm leading-relaxed">{detail}</p>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="section-7" title="7. Cookies">
              <p>We use cookies and similar tracking technologies on the Platform. A cookie is a small text file stored on your device when you visit a website.</p>

              <Sub title="Essential Cookies">
                <p>These cookies are necessary for the Platform to function and cannot be disabled. They include session cookies used for authentication (set by Clerk) and security tokens. No consent is required for these cookies.</p>
              </Sub>

              <Sub title="Analytics Cookies">
                <p>With your consent, we may use analytics cookies to understand how members use the Platform — which pages are visited most, how long sessions last, and where errors occur. This data is aggregated and used only to improve the Platform.</p>
              </Sub>

              <Sub title="Preference Cookies">
                <p>These cookies remember settings you have chosen, such as display preferences or dismissed notifications. They are set only after you interact with those features.</p>
              </Sub>

              <Sub title="Managing Cookies">
                <p>You can control cookies through your browser settings. Disabling essential cookies will prevent you from logging in or using authenticated features. You may also manage analytics consent through our cookie banner at any time.</p>
              </Sub>
            </Section>

            <Section id="section-8" title="8. Age Restrictions">
              <p>
                SymbioStudio is intended for users aged <span className="text-neutral-300">16 and over</span>. We do not knowingly collect personal data from children under the age of 13. If you are between 13 and 15 years old, you may only use the Platform with verified parental or guardian consent.
              </p>
              <p>
                If we become aware that we have collected personal data from a child under 13 without appropriate consent, we will delete that data promptly. If you believe a child has registered on the Platform, please contact us at <span className="text-neutral-300">privacy@symbiostudio.ai</span>.
              </p>
            </Section>

            <Section id="section-9" title="9. Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology or legal obligations. When we make material changes, we will notify you by email (if you have an account) and by displaying a notice on the Platform at least 14 days before the changes take effect.
              </p>
              <p>
                The "Last updated" date at the top of this page indicates when the policy was most recently revised. Continued use of the Platform after the effective date constitutes acceptance of the updated policy.
              </p>
              <p>
                We encourage you to review this policy periodically. Previous versions of this policy are available on request.
              </p>
            </Section>

            <Section id="section-10" title="10. Contact Us">
              <p>
                If you have any questions, concerns or requests relating to this Privacy Policy or our handling of your personal data, please contact our data protection team:
              </p>
              <div className="bg-black/40 border border-neutral-800 rounded-xl px-5 py-5 text-sm space-y-2">
                <p><span className="text-neutral-300">Email:</span> privacy@symbiostudio.ai</p>
                <p><span className="text-neutral-300">Subject line:</span> Data Privacy Enquiry</p>
                <p><span className="text-neutral-300">Response time:</span> Within 5 business days for general enquiries; within 30 days for formal Subject Access Requests or rights requests</p>
              </div>
              <p>
                If you are not satisfied with our response, you have the right to escalate your complaint to the <span className="text-neutral-300">Information Commissioner's Office (ICO)</span>, the UK's independent data protection authority:
              </p>
              <div className="bg-black/40 border border-neutral-800 rounded-xl px-5 py-5 text-sm space-y-2">
                <p><span className="text-neutral-300">Website:</span> ico.org.uk</p>
                <p><span className="text-neutral-300">Helpline:</span> 0303 123 1113</p>
                <p><span className="text-neutral-300">Address:</span> Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire, SK9 5AF</p>
              </div>
            </Section>

            {/* Footer note */}
            <div className="mt-12 pt-8 border-t border-neutral-800">
              <p className="text-neutral-600 text-xs leading-relaxed">
                This policy applies to all services operated by SymbioStudio Ltd. It should be read alongside our Terms of Service. Where there is any conflict between this policy and local data protection law, local law prevails.
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
