import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Osama Tahir freelance web development and digital marketing services.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-zinc-950 pt-24">
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-white">Privacy Policy</h1>
        <p className="mt-4 text-zinc-500">Last updated: March 2024</p>

        <div className="prose prose-invert mt-12 max-w-none space-y-8 text-zinc-400">
          <section>
            <h2 className="text-xl font-semibold text-white">1. Introduction</h2>
            <p>
              Osama Tahir (&quot;I&quot;, &quot;me&quot;, &quot;my&quot;) operates osama-me.digital. This page
              informs you of my policies regarding the collection, use, and disclosure of
              personal data when you use my website and services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">2. Information I Collect</h2>
            <p>
              I may collect information you provide directly, such as when you fill out a
              contact form, book a consultation, or communicate with me via email or
              WhatsApp. This may include your name, email address, phone number, company
              name, and project details.
            </p>
            <p>
              I also collect automatically certain information when you visit my website,
              such as IP address, browser type, and pages visited. This helps me improve
              the site and understand how visitors use it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">3. How I Use Your Information</h2>
            <p>I use the information I collect to:</p>
            <ul className="list-disc pl-6">
              <li>Respond to your inquiries and provide services</li>
              <li>Send relevant updates about your project</li>
              <li>Improve my website and services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">4. Data Sharing</h2>
            <p>
              I do not sell, trade, or rent your personal information to third parties. I
              may share information with service providers who assist in operating my
              website or conducting my business (e.g., hosting, analytics), subject to
              confidentiality agreements.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">5. Data Security</h2>
            <p>
              I implement appropriate technical and organizational measures to protect
              your personal data against unauthorized access, alteration, disclosure, or
              destruction.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">6. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to access, correct, or
              delete your personal data. To exercise these rights, contact me at
              info@osama-me.digital.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">7. Cookies</h2>
            <p>
              My website may use cookies and similar technologies for analytics and
              functionality. You can control cookie preferences through your browser
              settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white">8. Contact</h2>
            <p>
              For questions about this Privacy Policy, contact me at info@osama-me.digital or
              through the contact form on this website.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
