export default function ReturnsPolicyPage() {
  return (
    <section className="pt-32 pb-24 px-6 min-h-screen bg-[var(--primary-light)]">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl font-light text-[var(--text-dark)] mb-12">
          Returns &amp; Refunds Policy
        </h1>
        <div className="space-y-8 text-[var(--text-dark)]/80 leading-relaxed text-sm md:text-base">
          <div>
            <h2 className="font-medium text-lg text-[var(--text-dark)] mb-4">1. Custom Furniture Orders</h2>
            <p>
              At YK Homes, every piece of furniture is handcrafted and made entirely to order based on your specifications. Because of the custom nature of our products, <strong>we do not accept returns, exchanges, or offer refunds once production has begun.</strong>
            </p>
          </div>
          <div>
            <h2 className="font-medium text-lg text-[var(--text-dark)] mb-4">2. Order Cancellations</h2>
            <p>
              If you need to cancel an order, you must do so within 48 hours of placing the deposit. Cancellations made after 48 hours will result in the forfeiture of your initial deposit, as materials will have already been procured.
            </p>
          </div>
          <div>
            <h2 className="font-medium text-lg text-[var(--text-dark)] mb-4">3. Damages &amp; Issues</h2>
            <p>
              Please inspect your furniture upon delivery. If an item is defective, damaged in transit, or if you received the wrong item, please contact us immediately (within 24 hours of delivery) at hello@ykhomes.co.ke. We will evaluate the issue and arrange for repairs or replacements as appropriate.
            </p>
          </div>
          <div>
            <h2 className="font-medium text-lg text-[var(--text-dark)] mb-4">4. Wood &amp; Material Variations</h2>
            <p>
              Please note that natural materials such as solid wood (Meru Oak, Mahogany, Cypress) feature unique grain patterns, textures, and color variations. These natural characteristics are not considered defects and are not eligible grounds for a return or refund.
            </p>
          </div>
          <div>
            <h2 className="font-medium text-lg text-[var(--text-dark)] mb-4">5. Design Services</h2>
            <p>
              Fees paid for interior design services, including initial site visits and finalized design proposals, are non-refundable once the service has been rendered or the design process has begun.
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
