import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { allCollectionsQuery, productsByCollectionQuery } from "@/sanity/lib/queries";
import Link from "next/link";

export const revalidate = 60;

type Collection = {
  _id: string;
  name: string;
  slug: string;
  description: string;
};

type Product = {
  _id: string;
  name: string;
  slug: string;
  image: string;
  price: string;
};

export default async function CollectionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const collectionId = resolvedParams.id;
  
  const collections = await client.fetch<Collection[]>(allCollectionsQuery);
  const collection = collections.find(c => c.slug === collectionId);
  
  if (!collection) {
    return notFound();
  }

  const collectionProducts = await client.fetch<Product[]>(productsByCollectionQuery, { collectionSlug: collectionId });

  return (
    <>
      <section className="pt-32 pb-12 px-6 bg-[#d9e2df] min-h-screen">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl font-light text-[#3c362e] mb-6 uppercase tracking-widest inline-block border-b-2 border-[#3c362e] pb-2">
              {collection.name}
            </h1>
            <p className="text-sm text-[#3c362e]/70 max-w-2xl mx-auto leading-relaxed">
              Fabric Selection Note<br/>
              The prices provided in this catalog are based on fabrics selected from our Standard Fabric Collection. 
              We also offer a wider range of specialty and imported fabrics through our sourcing partners for 
              clients seeking additional colourways, textures, or finishes. Should you choose an alternative fabric 
              collection, any applicable cost adjustments will be communicated before production.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {collectionProducts.map((product) => (
              <Link key={product._id} href={`/product/${product.slug}`} className="group block text-left">
                <div className="relative overflow-hidden mb-4 bg-white">
                  <div
                    className="aspect-square bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${product.image || 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80'}')` }}
                  />
                </div>
                <h3 className="font-medium text-[var(--text-dark)] text-lg mb-1">
                  {product.name}
                </h3>
                <p className="text-xs text-[var(--text-dark)]/50 uppercase tracking-wide">
                  {product.price}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
