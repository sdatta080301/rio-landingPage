import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata = {
  title: "Security — Rio Financials",
  description: "How Rio Financials protects your data and financial information.",
};

export default function SecurityPage() {
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
              Security
            </h1>
            <p className="text-text-muted text-sm mb-8">
              How Rio protects your data and financial information.
            </p>

            <div className="prose prose-sm max-w-none text-text-secondary space-y-6">
              <p>
                At Rio Financials, security is foundational to everything we
                build. We understand that you&apos;re trusting us with sensitive
                financial information, and we take that responsibility seriously.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                Data Encryption
              </h2>
              <p>
                All data transmitted between your device and Rio&apos;s servers
                is encrypted using TLS (Transport Layer Security). Your
                financial data is also encrypted at rest using AES-256
                encryption, ensuring it remains protected even in storage.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                Secure Financial Connections
              </h2>
              <p>
                Rio connects to your financial institutions through{" "}
                <strong>Plaid</strong>, a trusted and widely used financial data
                platform. Your bank login credentials are never stored on
                Rio&apos;s servers — they are handled entirely by Plaid, which
                maintains its own rigorous security standards and compliance
                certifications.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                Authentication &amp; Access
              </h2>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Passwords are securely hashed using industry-standard
                  algorithms — we never store them in plain text
                </li>
                <li>
                  Session management follows security best practices to prevent
                  unauthorized access
                </li>
                <li>
                  Access to your account is restricted to authenticated sessions
                  only
                </li>
              </ul>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                Infrastructure
              </h2>
              <p>
                Rio is hosted on cloud infrastructure with industry-standard
                protections, including network isolation, regular security
                patches, and automated monitoring. We continuously evaluate and
                improve our infrastructure to keep your data safe.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                Data Privacy
              </h2>
              <p>
                We collect only the data necessary to provide our Service, and
                we never sell your personal information. For full details on how
                we handle your data, please review our{" "}
                <Link
                  href="/privacy"
                  className="text-text-primary underline hover:text-text-secondary transition-colors"
                >
                  Privacy Policy
                </Link>
                .
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                Responsible Disclosure
              </h2>
              <p>
                If you discover a potential security vulnerability, we encourage
                you to report it responsibly. Please contact us at{" "}
                <strong>security@riofinancials.com</strong> with details of the
                issue. We appreciate your help in keeping Rio secure and will
                respond promptly to all reports.
              </p>

              <h2 className="text-xl font-semibold text-text-primary !mt-8">
                Contact
              </h2>
              <p>
                Rio Financials, Inc.
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
