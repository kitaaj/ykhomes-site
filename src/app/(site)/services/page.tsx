import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { siteSettingsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata = {
  title: "Our Services",
  description: "Explore our interior design services, ranging from Design Only to Full Design and custom furnishings.",
};

type SiteSettings = {
  servicesHeroImage?: string;
  servicesFullDesignImage?: string;
};

export default async function ServicesPage() {
  const settings = await client.fetch<SiteSettings | null>(siteSettingsQuery);
  const heroImage = settings?.servicesHeroImage || 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1920&q=80';
  const fullDesignImage = settings?.servicesFullDesignImage || 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80';

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 px-6 bg-[var(--primary-dark)]">
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4">
            YK Homes &middot; 2026
          </p>
          <h1 className="font-[var(--font-heading)] text-5xl md:text-7xl font-light text-white">
            Our Services
          </h1>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-6 bg-[var(--primary-dark)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="border border-white/10 p-10">
            <h2 className="font-[var(--font-heading)] text-3xl font-light text-white mb-2">
              Design Only
            </h2>
            <p className="text-white/60 text-sm mb-6">
              Simple home refurnishing guide.
            </p>
            <div className="w-12 h-[1px] bg-[var(--accent)] mb-6" />
            <p className="text-white/70 leading-relaxed">
              Perfect for clients who want professional design direction with the
              flexibility to execute on their own timeline. Ideal for refreshing
              existing spaces with curated guidance.
            </p>
          </div>
          <div className="border border-white/10 p-10">
            <h2 className="font-[var(--font-heading)] text-3xl font-light text-white mb-2">
              Full Design
            </h2>
            <p className="text-white/60 text-sm mb-6">
              Complete renovations and full furnishings.
            </p>
            <div className="w-12 h-[1px] bg-[var(--accent)] mb-6" />
            <p className="text-white/70 leading-relaxed">
              This package is thoughtfully designed for comprehensive projects
              that call for a refined, end to end approach. It is ideal for full
              home renovations and new builds, where every detail from spatial
              planning to final styling demands careful consideration.
            </p>
          </div>
        </div>
      </section>

      {/* Design Only Details */}
      <section className="py-24 md:py-32 px-6 bg-[var(--primary-light)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-light text-[var(--text-dark)] mb-16">
            Design Only
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-10">
            <div>
              <h3 className="font-semibold text-[var(--text-dark)] mb-2">
                Initial Site Visit
              </h3>
              <p className="text-sm text-[var(--text-dark)]/70 leading-relaxed">
                On-site meeting to understand client needs, assess the space, and
                capture measurements.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--text-dark)] mb-2">
                Furniture Layout
              </h3>
              <p className="text-sm text-[var(--text-dark)]/70 leading-relaxed">
                Clear 2D visuals mapping furniture sizing, layout arrangement,
                and orientation within the space.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--text-dark)] mb-2">
                Curated Moodboards
              </h3>
              <p className="text-sm text-[var(--text-dark)]/70 leading-relaxed">
                Visual design boards showcasing furniture selections, color
                palettes, décor choices, lighting, and layering inspiration.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--text-dark)] mb-2">
                Shopping List
              </h3>
              <p className="text-sm text-[var(--text-dark)]/70 leading-relaxed">
                Detailed shopping lists note sizes, materials, finishes, and
                trusted vendor options.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-[var(--text-dark)] mb-2">
                Tentative Budgets
              </h3>
              <p className="text-sm text-[var(--text-dark)]/70 leading-relaxed">
                Budget estimates from preferred vendors to guide overall project
                procurement costs.
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[var(--primary-dark)]/10">
            <p className="text-sm tracking-[0.15em] uppercase text-[var(--primary-dark)] font-medium">
              Fees from KES 50,000
            </p>
            <p className="text-xs text-[var(--text-dark)]/60 mt-2 uppercase tracking-wide">
              A detailed fee proposal will be shared after reviewing your scope
              of work
            </p>
          </div>
        </div>
      </section>

      {/* Full Design Details */}
      <section className="py-24 md:py-32 px-6 bg-[var(--section-dark)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-light text-white mb-8">
              Full Design
            </h2>
            <p className="text-white/70 leading-relaxed mb-6">
              This package is thoughtfully designed for comprehensive projects
              that call for a refined, end to end approach. It is ideal for full
              home renovations and new builds, where every detail from spatial
              planning to final styling demands careful consideration.
            </p>
            <p className="text-white/70 leading-relaxed">
              It is also perfectly suited for projects requiring complete
              furnishing and hands on execution support, ensuring a seamless,
              elevated experience from concept through to completion.
            </p>
          </div>
          <div
            className="aspect-square bg-cover bg-center"
            style={{
              backgroundImage: `url('${fullDesignImage}')`,
            }}
          />
        </div>
      </section>

      {/* The Process */}
      <section className="py-24 md:py-32 px-6 bg-[var(--primary-light)]">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-light text-[var(--text-dark)] text-center mb-16">
            The Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-full h-[1px] bg-[var(--primary-dark)]/20" />
                <div className="w-3 h-3 rounded-full bg-[var(--accent)] shrink-0" />
                <div className="w-full h-[1px] bg-[var(--primary-dark)]/20" />
              </div>
              <h3 className="font-[var(--font-heading)] text-xl text-[var(--accent)] mb-3">
                Initial site visit
              </h3>
              <p className="text-sm text-[var(--text-dark)]/70 leading-relaxed mb-4">
                We take time to understand the space, discuss your vision and
                lifestyle, and align on scope, timelines, and budget.
              </p>
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--text-dark)]/50 font-medium">
                KES 15,000
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-full h-[1px] bg-[var(--primary-dark)]/20" />
                <div className="w-3 h-3 rounded-full bg-[var(--accent)] shrink-0" />
                <div className="w-full h-[1px] bg-[var(--primary-dark)]/20" />
              </div>
              <h3 className="font-[var(--font-heading)] text-xl text-[var(--accent)] mb-3">
                Design fee proposal
              </h3>
              <p className="text-sm text-[var(--text-dark)]/70 leading-relaxed mb-4">
                We prepare a fully customized design fee proposal that clearly
                outlines our service charges, scope, and deliverables.
              </p>
              <p className="text-xs tracking-[0.15em] uppercase text-[var(--text-dark)]/50 font-medium">
                Customized Fee
              </p>
            </div>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-full h-[1px] bg-[var(--primary-dark)]/20" />
                <div className="w-3 h-3 rounded-full bg-[var(--accent)] shrink-0" />
                <div className="w-full h-[1px] bg-[var(--primary-dark)]/20" />
              </div>
              <h3 className="font-[var(--font-heading)] text-xl text-[var(--accent)] mb-3">
                Design &amp; Execution
              </h3>
              <p className="text-sm text-[var(--text-dark)]/70 leading-relaxed mb-4">
                Once approved, the project seamlessly progresses into the full
                design and execution phases. Each full design project is tailored
                — no two homes are approached the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[var(--primary-dark)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-light text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-white/70 mb-8">
            Review the package that best fits your project, then fill out our
            client enquiry form. We look forward to designing with you.
          </p>
          <Link
            href="/contact"
            className="px-10 py-4 bg-white text-[var(--text-dark)] text-xs tracking-[0.15em] uppercase hover:bg-[var(--accent)] hover:text-white transition-colors inline-block"
          >
            Client Enquiry Form
          </Link>
        </div>
      </section>
    </>
  );
}
