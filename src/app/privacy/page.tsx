import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Privacy Policy — Rio Financials",
  description: "Privacy Policy for Rio Financials.",
};

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="text-text-muted hover:text-text-primary text-sm transition-colors inline-flex items-center gap-1 mb-8"
          >
            &larr; Back to home
          </Link>

          <div className="bento-card p-8 sm:p-12">
            <h1 className="text-3xl font-bold text-text-primary mb-2">
              Privacy Policy
            </h1>
            <p className="text-text-muted text-sm mb-8">
              Effective Date: February 13, 2026 &middot; Last Updated: February
              13, 2026
            </p>

            <div className="prose prose-sm max-w-none text-text-secondary space-y-6">
              <p>
                Rio Financials, Inc. (&quot;Rio,&quot; &quot;we,&quot;
                &quot;our,&quot; &quot;us&quot;) is committed to protecting your
                privacy. This Privacy Policy explains how we collect, use,
                disclose, and safeguard your information when you use our
                Service.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                1. Information We Collect
              </h2>
              <h3 className="text-base font-semibold text-text-primary !mt-4">
                Information You Provide
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Account information (name, email address, password)
                </li>
                <li>Profile information you choose to provide</li>
                <li>
                  Financial account credentials provided through third-party
                  services (e.g., Plaid)
                </li>
                <li>Transaction and budget data you enter manually</li>
              </ul>

              <h3 className="text-base font-semibold text-text-primary !mt-4">
                Information Collected Automatically
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Device and browser information</li>
                <li>Usage data and analytics</li>
                <li>IP address and approximate location</li>
              </ul>

              <h3 className="text-base font-semibold text-text-primary !mt-4">
                Information from Third Parties
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Financial account and transaction data via Plaid or similar
                  services
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                2. How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>To provide, maintain, and improve the Service</li>
                <li>To process transactions and track budgets</li>
                <li>To facilitate shared expense splitting between users</li>
                <li>
                  To communicate with you about updates, security alerts, and
                  support
                </li>
                <li>To detect and prevent fraud or abuse</li>
                <li>To comply with legal obligations</li>
              </ul>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                3. How We Share Your Information
              </h2>
              <p>
                We do not sell your personal information. We may share your
                information with:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <strong>Service providers</strong> who help us operate the
                  Service (e.g., hosting, analytics, financial data providers)
                </li>
                <li>
                  <strong>Other users</strong> in the context of shared expenses
                  and group features, limited to what is necessary
                </li>
                <li>
                  <strong>Legal authorities</strong> when required by law or to
                  protect our rights
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                4. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your
                information, including encryption in transit and at rest.
                However, no method of transmission over the Internet is 100%
                secure.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                5. Data Retention
              </h2>
              <p>
                We retain your information for as long as your account is active
                or as needed to provide the Service. You may request deletion of
                your account and associated data at any time.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                6. Your Rights
              </h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Access and receive a copy of your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict certain processing</li>
                <li>Data portability</li>
              </ul>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                7. Third-Party Services
              </h2>
              <p>
                The Service integrates with third-party services such as Plaid.
                Your use of these services is subject to their respective privacy
                policies. We encourage you to review them.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                8. Children&apos;s Privacy
              </h2>
              <p>
                The Service is not intended for users under the age of 18. We do
                not knowingly collect information from children.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                9. Changes to This Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will
                notify you of material changes by posting the updated policy on
                the Service. Continued use after changes constitutes acceptance.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                10. Contact
              </h2>
              <p>
                Rio Financials, Inc.
                <br />
                Email: privacy@riofinancials.com
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
