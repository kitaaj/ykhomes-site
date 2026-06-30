export default function PrivacyPolicyPage() {
  return (
    <section className="pt-32 pb-24 px-6 min-h-screen bg-[var(--primary-light)]">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl font-light text-[var(--text-dark)] mb-12">
          Privacy Policy
        </h1>
        <div className="space-y-8 text-[var(--text-dark)]/80 leading-relaxed text-sm md:text-base">
          <div>
            <h2 className="font-medium text-lg text-[var(--text-dark)] mb-4">1. Introduction</h2>
            <p>
              At YK Homes, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, and safeguard the data you provide to us through our website, enquiry forms, and during the course of our design services.
            </p>
          </div>
          <div>
            <h2 className="font-medium text-lg text-[var(--text-dark)] mb-4">2. Information We Collect</h2>
            <p className="mb-2">We may collect the following types of information:</p>
            <ul className="list-disc list-inside space-y-1 ml-2">
              <li>Contact information (Name, Email, Phone Number)</li>
              <li>Project details and site addresses</li>
              <li>Preferences and design requirements</li>
            </ul>
          </div>
          <div>
            <h2 className="font-medium text-lg text-[var(--text-dark)] mb-4">3. How We Use Your Information</h2>
            <p>
              The information we collect is used exclusively to provide our interior design services, communicate with you regarding your project, and process custom furniture orders. We do not sell or rent your personal information to third parties.
            </p>
          </div>
          <div>
            <h2 className="font-medium text-lg text-[var(--text-dark)] mb-4">4. Data Security</h2>
            <p>
              We implement reasonable security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </div>
          <div>
            <h2 className="font-medium text-lg text-[var(--text-dark)] mb-4">5. Contact Us</h2>
            <p>
              If you have any questions or concerns about our Privacy Policy, please contact us at hello@ykhomes.co.ke.
            </p>
          </div>
          <div className="pt-8 border-t border-[var(--primary-dark)]/10 text-xs text-[var(--text-dark)]/50">
            Last updated: June 2026
          </div>
        </div>
      </div>
    </section>
  );
}
