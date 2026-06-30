"use client";

import Link from "next/link";
import { useState } from "react";

type Product = {
  _id: string;
  name: string;
  slug: string;
  category: string;
  image: string;
  price: string;
};

type Room = {
  _id: string;
  name: string;
  slug: string;
};

export default function RoomClient({ room, products }: { room: Room, products: Product[] }) {
  const categories = ["All", ...Array.from(new Set(products.map(p => p.category)))];
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const displayProducts = selectedCategory === "All" 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section className="relative pt-32 pb-20 px-6 bg-[var(--primary-light)] min-h-screen">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-xs tracking-[0.3em] uppercase text-[var(--primary-dark)]/50 mb-4">
          Shop By Room
        </p>
        <h1 className="font-[var(--font-heading)] text-4xl md:text-6xl font-light text-[var(--text-dark)] mb-12">
          {room.name}
        </h1>
        
        {/* Categories Tab */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 text-sm tracking-wide transition-colors ${
                selectedCategory === category 
                  ? "bg-[var(--primary-dark)] text-white" 
                  : "border border-[var(--primary-dark)]/20 text-[var(--text-dark)] hover:bg-[var(--primary-dark)]/5"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto">
        {displayProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayProducts.map((product) => (
              <Link key={product._id} href={`/product/${product.slug}`} className="group block">
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
        ) : (
          <p className="text-center text-[var(--text-dark)]/50 py-12">No products found for this category.</p>
        )}
      </div>
    </section>
  );
}
