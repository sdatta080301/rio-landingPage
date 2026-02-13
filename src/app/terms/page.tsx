import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Terms of Service — Rio Financials",
  description: "Terms of Service for Rio Financials.",
};

export default function TermsPage() {
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
              Terms of Service
            </h1>
            <p className="text-text-muted text-sm mb-8">
              Effective Date: February 13, 2026 &middot; Last Updated: February
              13, 2026
            </p>

            <div className="prose prose-sm max-w-none text-text-secondary space-y-6">
              <p>
                These Terms of Service (&quot;Terms&quot;) are a legal agreement
                between you and Rio Financials, Inc. (&quot;Rio,&quot;
                &quot;we,&quot; &quot;our,&quot; &quot;us&quot;) governing your
                use of the Service.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                1. Eligibility
              </h2>
              <p>
                You must be at least 18 years old (or the age of majority in
                your jurisdiction) and capable of entering a binding contract.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                2. Your Account
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  You are responsible for maintaining the confidentiality of your
                  login credentials.
                </li>
                <li>
                  You are responsible for all activity under your account.
                </li>
                <li>You agree to provide accurate information.</li>
              </ul>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                3. Service Description
              </h2>
              <p>
                Rio provides tools for budgeting, transaction tracking, and
                shared expense coordination. Rio is not a bank, lender, broker,
                or financial advisor.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                4. Financial Connectivity
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  The Service may use third-party providers (including Plaid) to
                  connect financial accounts.
                </li>
                <li>
                  Your use of those integrations may be subject to third-party
                  terms and policies.
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                5. No Financial, Tax, or Legal Advice
              </h2>
              <p>
                Information provided by the Service is for informational purposes
                only and is not professional advice.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                6. Settlements and Payments
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Rio may track or record settlement confirmations between users.
                </li>
                <li>
                  Rio does not guarantee that real-world payment has occurred
                  unless explicitly processed through a supported payment
                  processor (if any).
                </li>
                <li>
                  Users are responsible for verifying payments and resolving
                  disputes.
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                7. Acceptable Use
              </h2>
              <p>You agree not to:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Use the Service for unlawful, fraudulent, or abusive purposes
                </li>
                <li>
                  Attempt unauthorized access or disrupt system security
                </li>
                <li>
                  Scrape, reverse engineer, or misuse platform data
                </li>
                <li>
                  Impersonate others or provide misleading information
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                8. User Content
              </h2>
              <p>
                You retain ownership of content you submit, but grant Rio a
                license to host/process it solely to operate and improve the
                Service.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                9. Suspension and Termination
              </h2>
              <p>
                We may suspend or terminate accounts that violate these Terms or
                create legal/security risk.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                10. Disclaimers
              </h2>
              <p className="uppercase font-medium">
                The Service is provided &quot;as is&quot; and &quot;as
                available,&quot; without warranties of any kind, express or
                implied.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                11. Limitation of Liability
              </h2>
              <p className="uppercase font-medium">
                To the maximum extent permitted by law, Rio is not liable for
                indirect, incidental, special, consequential, or punitive
                damages, or loss of data/profits.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                12. Indemnification
              </h2>
              <p>
                You agree to indemnify and hold Rio harmless from claims arising
                from your use of the Service or violation of these Terms.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                13. Governing Law and Disputes
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>Governing law: State of Delaware, United States.</li>
                <li>
                  Disputes shall be resolved through binding arbitration in
                  accordance with applicable rules.
                </li>
                <li>
                  You agree to waive any right to participate in class-action
                  lawsuits or class-wide arbitration.
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                14. Changes to Terms
              </h2>
              <p>
                We may update these Terms. Continued use after changes means you
                accept the revised Terms.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                15. Contact
              </h2>
              <p>
                Rio Financials, LLC.
                <br />
                Email: useriofinancials@gmail.com
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
