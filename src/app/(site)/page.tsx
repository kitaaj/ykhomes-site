import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { allRoomsQuery, siteSettingsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

type Room = {
  _id: string;
  name: string;
  slug: string;
  thumbnail: string;
};

type SiteSettings = {
  title?: string;
  heroImage?: string;
  introImage?: string;
};

export default async function Home() {
  const [rooms, settings] = await Promise.all([
    client.fetch<Room[]>(allRoomsQuery),
    client.fetch<SiteSettings | null>(siteSettingsQuery)
  ]);
  
  const featuredRooms = rooms.slice(0, 3); // Take up to 3 rooms for the homepage
  
  const heroImage = settings?.heroImage || '/images/hero.webp';
  const introImage = settings?.introImage || 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80';

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-[var(--primary-dark)] overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--primary-dark)] via-[var(--section-dark)] to-[var(--primary-dark)] opacity-90" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url('${heroImage}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <p className="text-xs tracking-[0.4em] uppercase text-white/60 mb-8">
            2026
          </p>
          <div className="flex items-center justify-center gap-3 mb-6">
            <span className="font-[var(--font-heading)] text-7xl md:text-9xl font-light text-white">
              Y
            </span>
            <span className="text-[var(--accent)] text-6xl md:text-8xl font-light">
              |
            </span>
            <span className="font-[var(--font-heading)] text-7xl md:text-9xl font-light text-white">
              K
            </span>
          </div>
          <p className="text-sm md:text-base tracking-[0.4em] uppercase text-white/80 mb-12">
            H O M E S
          </p>
          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed max-w-2xl mx-auto mb-12">
            We believe the best homes are layered, timeless, beautiful,
            comfortable, and a reflection of the people who live in them.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/services"
              className="px-8 py-3.5 bg-white text-[var(--text-dark)] text-xs tracking-[0.15em] uppercase hover:bg-[var(--accent)] hover:text-white transition-colors"
            >
              Our Services
            </Link>
            <Link
              href="/catalog"
              className="px-8 py-3.5 border border-white/40 text-white text-xs tracking-[0.15em] uppercase hover:bg-white/10 transition-colors"
            >
              Shop Furniture
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-24 md:py-32 px-6 bg-[var(--primary-light)]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--primary-dark)]/60 mb-6">
              Introduction
            </p>
            <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-light text-[var(--text-dark)] mb-8 leading-tight">
              Welcome to YK Homes
            </h2>
            <p className="text-base text-[var(--text-dark)]/80 leading-relaxed mb-6">
              At YK Homes, we design thoughtful, tailored interiors that feel
              personal, functional, and timeless. Our work is rooted in creating
              spaces that reflect how our clients live — calm, intentional, and
              beautifully layered.
            </p>
            <p className="text-base text-[var(--text-dark)]/80 leading-relaxed mb-6">
              With years of experience designing homes across Kenya, we
              specialise in high-end residential interiors, combining strong
              spatial planning, refined aesthetics, and a deep understanding of
              how a home should feel.
            </p>
            <p className="text-sm text-[var(--text-dark)]/60 italic">
              YK Homes is a founder led interior design studio established in
              2020, based in Nairobi Kenya.
            </p>
          </div>
          <div className="relative">
            <div
              className="aspect-[4/5] bg-cover bg-center"
              style={{
                backgroundImage: `url('${introImage}')`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 md:py-32 px-6 bg-[var(--primary-dark)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4">
              What We Offer
            </p>
            <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-light text-white">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Design Only */}
            <div className="bg-white/5 backdrop-blur-sm p-10 md:p-12 border border-white/10">
              <h3 className="font-[var(--font-heading)] text-3xl font-light text-white mb-4">
                Design Only
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Simple home refurnishing guide. Perfect for those who want
                professional design direction with the flexibility to execute on
                their own timeline.
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--accent)] mb-6">
                Fees from KES 50,000
              </p>
              <Link
                href="/services"
                className="text-sm text-white/60 hover:text-[var(--accent)] transition-colors underline underline-offset-4"
              >
                Learn more →
              </Link>
            </div>
            {/* Full Design */}
            <div className="bg-white/5 backdrop-blur-sm p-10 md:p-12 border border-white/10">
              <h3 className="font-[var(--font-heading)] text-3xl font-light text-white mb-4">
                Full Design
              </h3>
              <p className="text-white/70 mb-6 leading-relaxed">
                Complete renovations and full furnishings. An end-to-end offering
                for comprehensive projects that call for a refined approach from
                concept through to completion.
              </p>
              <p className="text-xs tracking-[0.2em] uppercase text-[var(--accent)] mb-6">
                Customized Fee
              </p>
              <Link
                href="/services"
                className="text-sm text-white/60 hover:text-[var(--accent)] transition-colors underline underline-offset-4"
              >
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Room Preview */}
      <section className="py-24 md:py-32 px-6 bg-[var(--primary-light)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[var(--primary-dark)]/60 mb-4">
              Furniture Catalog
            </p>
            <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-light text-[var(--text-dark)]">
              Shop by Room
            </h2>
            <p className="mt-4 text-[var(--text-dark)]/70 max-w-xl mx-auto">
              Timeless, handcrafted furniture made to order.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredRooms.map((room) => (
              <Link key={room._id} href={`/catalog/${room.slug}`} className="group relative overflow-hidden">
                <div
                  className="aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${room.thumbnail || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80'}')`,
                  }}
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-end p-8">
                  <h3 className="font-[var(--font-heading)] text-2xl text-white">
                    {room.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/catalog"
              className="px-8 py-3.5 bg-[var(--primary-dark)] text-white text-xs tracking-[0.15em] uppercase hover:bg-[var(--accent)] transition-colors inline-block"
            >
              Browse Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Process Preview */}
      <section className="py-24 md:py-32 px-6 bg-[var(--section-dark)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-light text-white">
              The Process
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center md:text-left">
              <div className="w-8 h-[1px] bg-[var(--accent)] mb-6 mx-auto md:mx-0" />
              <h3 className="font-[var(--font-heading)] text-xl text-[var(--accent)] mb-3">
                Initial site visit
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                We take time to understand the space, discuss your vision and
                lifestyle, and align on scope, timelines, and budget.
              </p>
              <p className="text-xs tracking-[0.15em] uppercase text-white/50">
                KES 15,000
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-8 h-[1px] bg-[var(--accent)] mb-6 mx-auto md:mx-0" />
              <h3 className="font-[var(--font-heading)] text-xl text-[var(--accent)] mb-3">
                Design fee proposal
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                We prepare a fully customized design fee proposal that clearly
                outlines our service charges, scope, and deliverables.
              </p>
              <p className="text-xs tracking-[0.15em] uppercase text-white/50">
                Customized Fee
              </p>
            </div>
            <div className="text-center md:text-left">
              <div className="w-8 h-[1px] bg-[var(--accent)] mb-6 mx-auto md:mx-0" />
              <h3 className="font-[var(--font-heading)] text-xl text-[var(--accent)] mb-3">
                Design &amp; Execution
              </h3>
              <p className="text-white/70 text-sm leading-relaxed mb-4">
                Once approved, the project seamlessly progresses into the full
                design and execution phases. Each project is tailored — no two
                homes are approached the same.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 px-6 bg-[var(--primary-light)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[var(--font-heading)] text-4xl md:text-5xl font-light text-[var(--text-dark)] mb-6">
            Next Steps
          </h2>
          <p className="text-[var(--text-dark)]/80 leading-relaxed mb-4">
            If our design approach and services align with what you&apos;re looking
            for:
          </p>
          <ol className="text-left max-w-md mx-auto text-[var(--text-dark)]/80 space-y-2 mb-8 list-decimal list-inside">
            <li>Review the package that best fits your project</li>
            <li>Proceed to complete our client enquiry form</li>
            <li>Our team reviews design enquiries weekly on Mondays</li>
            <li>Qualified projects are invited for a 30-minute discovery call</li>
          </ol>
          <p className="text-[var(--text-dark)]/70 italic mb-8">
            We believe the best projects start with clarity, alignment, and
            intention — and we look forward to learning more about your vision.
          </p>
          <Link
            href="/contact"
            className="px-10 py-4 bg-[var(--primary-dark)] text-white text-xs tracking-[0.15em] uppercase hover:bg-[var(--accent)] transition-colors inline-block"
          >
            Fill Out the Client Enquiry Form
          </Link>
          <p className="mt-6 text-sm text-[var(--text-dark)]/50">— YK Homes</p>
        </div>
      </section>
    </>
  );
}
