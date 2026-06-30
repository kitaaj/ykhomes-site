import { notFound } from "next/navigation";
import { client } from "@/sanity/lib/client";
import { productBySlugQuery } from "@/sanity/lib/queries";
import ProductClient from "./ProductClient";

export const revalidate = 60;

type ProductData = {
  _id: string;
  name: string;
  slug: string;
  category: string;
  image: string;
  images: string[] | null;
  dimensions: string | null;
  material: string | null;
  customization: string | null;
  price: string | null;
  room: {
    _id: string;
    name: string;
    slug: string;
  } | null;
};

export default async function ProductPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = await params;
  const productId = resolvedParams.id;
  
  const product = await client.fetch<ProductData>(productBySlugQuery, { slug: productId });
  
  if (!product) {
    return notFound();
  }

  // The room is fetched cleanly via the GROQ projection
  const room = product.room || null;

  return (
    <ProductClient product={product} room={room} />
  );
}
