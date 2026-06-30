export default function TermsAndConditionsPage() {
  return (
    <section className="pt-32 pb-24 px-6 min-h-screen bg-[var(--primary-light)]">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl font-light text-[var(--text-dark)] mb-12">
          Terms &amp; Conditions
        </h1>
        <div className="space-y-8 text-[var(--text-dark)]/80 leading-relaxed text-sm md:text-base">
          <div>
            <h2 className="font-medium text-lg text-[var(--text-dark)] mb-4">1. Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you and YK Homes concerning your access to and use of our website and services.
            </p>
          </div>
          <div>
            <h2 className="font-medium text-lg text-[var(--text-dark)] mb-4">2. Design Services</h2>
            <p>
              Our design services, including &quot;Design Only&quot; and &quot;Full Design&quot; packages, are subject to separate formal agreements signed after the initial site visit. The fees listed on this website are indicative and may be customized based on your specific project scope.
            </p>
          </div>
          <div>
            <h2 className="font-medium text-lg text-[var(--text-dark)] mb-4">3. Custom Furniture Orders</h2>
            <p>
              All furniture featured on YK Homes is handcrafted and made to order. Lead times vary depending on the item and material availability. A non-refundable deposit is required before production begins.
            </p>
          </div>
          <div>
            <h2 className="font-medium text-lg text-[var(--text-dark)] mb-4">4. Intellectual Property</h2>
            <p>
              Unless otherwise indicated, the website, its design, text, photographs, and all content are our proprietary property and are protected by copyright and intellectual property laws.
            </p>
          </div>
          <div>
            <h2 className="font-medium text-lg text-[var(--text-dark)] mb-4">5. Modifications</h2>
            <p>
              We reserve the right to change, modify, or remove the contents of these Terms at any time or for any reason at our sole discretion without notice.
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
