import Link from "next/link";
import { client } from "@/sanity/lib/client";
import { allCollectionsQuery } from "@/sanity/lib/queries";

export const revalidate = 60;

export const metadata = {
  title: "Collections",
  description: "Every collection tells a story of comfort, craftsmanship, and timeless design — bringing together pieces that are made to be lived with and loved for years to come.",
};

type Collection = {
  _id: string;
  name: string;
  slug: string;
  description: string;
  thumbnail: string;
  pieceCount: number;
};

export default async function CollectionsPage() {
  const collections = await client.fetch<Collection[]>(allCollectionsQuery);

  return (
    <>
      <section className="relative pt-32 pb-20 px-6 bg-[var(--primary-light)] min-h-screen">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--primary-dark)]/50 mb-4">
            Collections
          </p>
          <h1 className="font-[var(--font-heading)] text-3xl md:text-5xl font-light text-[var(--text-dark)] leading-relaxed">
            Every collection tells a story of comfort, craftsmanship, and timeless design — bringing together pieces that are made to be lived with and loved for years to come.
          </h1>
        </div>
        
        <div className="max-w-7xl mx-auto space-y-16">
          {collections.map((collection) => (
            <div key={collection._id} className="group">
              <Link href={`/collections/${collection.slug}`} className="block overflow-hidden mb-6">
                <div
                  className="aspect-[21/9] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url('${collection.thumbnail || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80'}')` }}
                />
              </Link>
              <div className="max-w-2xl">
                <p className="text-xs tracking-[0.2em] uppercase text-[var(--text-dark)]/40 mb-2">
                  {collection.pieceCount} PIECES
                </p>
                <Link href={`/collections/${collection.slug}`}>
                  <h2 className="font-[var(--font-heading)] text-3xl font-light text-[var(--text-dark)] mb-4 hover:text-[var(--accent)] transition-colors inline-block pb-1 border-b border-[var(--text-dark)]">
                    {collection.name}
                  </h2>
                </Link>
                <p className="text-sm text-[var(--text-dark)]/70 leading-relaxed">
                  {collection.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
