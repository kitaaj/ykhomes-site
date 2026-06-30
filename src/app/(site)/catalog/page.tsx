import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { allRoomsQuery, siteSettingsQuery } from "@/sanity/lib/queries";

export const revalidate = 60; // revalidate every minute

export const metadata = {
  title: "Furniture Catalog",
  description: "Shop our timeless, handcrafted furniture by room. Explore living room, dining room, and bedroom collections.",
};

type Room = {
  _id: string;
  name: string;
  slug: string;
  thumbnail: string;
};

type SiteSettings = {
  catalogHeroImage?: string;
};

export default async function CatalogPage() {
  const [rooms, settings] = await Promise.all([
    client.fetch<Room[]>(allRoomsQuery),
    client.fetch<SiteSettings | null>(siteSettingsQuery)
  ]);

  const heroImage = settings?.catalogHeroImage || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1920&q=80';

  return (
    <>
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
            YK Homes &middot; Nairobi
          </p>
          <h1 className="font-[var(--font-heading)] text-5xl md:text-7xl font-light text-white mb-4">
            Shop by Room
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Timeless, handcrafted furniture made to order. Explore our catalog by room.
          </p>
        </div>
      </section>

      <section className="py-24 px-6 bg-[var(--primary-light)]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {rooms.map((room) => (
              <Link key={room._id} href={`/catalog/${room.slug}`} className="group relative overflow-hidden">
                <div
                  className="aspect-[3/4] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url('${room.thumbnail || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80'}')`,
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
        </div>
      </section>
      
      {/* CTA */}
      <section className="py-20 px-6 bg-[var(--primary-dark)]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-[var(--font-heading)] text-3xl md:text-4xl font-light text-white mb-4">
            Ready To Bring a Piece Home?
          </h2>
          <p className="text-white/70 mb-8">
            All our furniture is handcrafted and made to order. Reach out to
            place your order or enquire about custom pieces.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://api.whatsapp.com/send/?phone=254792516691&text=Hello+YK+Homes%2C+I+would+like+to+inquire+about+your+furniture+pieces+for+my+home"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white text-[var(--text-dark)] text-xs tracking-[0.15em] uppercase hover:bg-[var(--accent)] hover:text-white transition-colors"
            >
              Order Here
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
