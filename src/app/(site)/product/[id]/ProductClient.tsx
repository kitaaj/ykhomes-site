"use client";

import { useState } from "react";
import Link from "next/link";

type Room = {
  _id: string;
  name: string;
  slug: string;
};

type Product = {
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
};

export default function ProductClient({ product, room }: { product: Product, room: Room | null }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  // Create an array of all images
  const gallery = [];
  if (product.image) gallery.push(product.image);
  if (product.images && product.images.length > 0) {
    gallery.push(...product.images);
  }
  // Remove duplicates just in case
  const uniqueGallery = Array.from(new Set(gallery));
  // Default to a placeholder if absolutely no image exists
  if (uniqueGallery.length === 0) {
    uniqueGallery.push('https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80');
  }
  
  const displayImage = selectedImage && uniqueGallery.includes(selectedImage) ? selectedImage : uniqueGallery[0];

  return (
    <div className="min-h-screen bg-white pt-24 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <nav className="flex justify-start mb-8 text-sm text-[var(--text-dark)]/60 tracking-wide">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="hover:text-[var(--text-dark)] transition-colors">Home</Link>
            </li>
            <li>/</li>
            <li>
              <Link href="/catalog" className="hover:text-[var(--text-dark)] transition-colors">Catalog</Link>
            </li>
            {room && (
              <>
                <li>/</li>
                <li>
                  <Link href={`/catalog/${room.slug}`} className="hover:text-[var(--text-dark)] transition-colors">{room.name}</Link>
                </li>
              </>
            )}
            <li>/</li>
            <li className="text-[var(--text-dark)]" aria-current="page">
              {product.name}
            </li>
          </ol>
        </nav>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4">
            <div className="aspect-square relative overflow-hidden bg-gray-100">
              <img 
                key={displayImage}
                src={displayImage} 
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover animate-in fade-in duration-300 select-none pointer-events-none"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
              />
            </div>
            
            {uniqueGallery.length > 1 && (
              <div className="grid grid-cols-4 gap-4 mt-4 relative z-10">
                {uniqueGallery.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    className={`relative w-full aspect-square overflow-hidden cursor-pointer transition-all focus:outline-none ${
                      displayImage === img ? "ring-2 ring-offset-2 ring-[var(--primary-dark)] opacity-100" : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} variation ${idx + 1}`}
                      className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
                      draggable={false}
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
          
          {/* Details */}
          <div className="flex flex-col justify-center">
            <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl font-light text-[var(--text-dark)] mb-8 uppercase tracking-wide">
              {product.name}
            </h1>
            
            <div className="space-y-6 text-base text-[var(--text-dark)]/80">
              <p>
                <strong className="font-medium text-[var(--text-dark)]">Dimensions :</strong> {product.dimensions || "N/A"}
              </p>
              <p>
                <strong className="font-medium text-[var(--text-dark)]">Material :</strong> {product.material || "N/A"}
              </p>
              <p>
                <strong className="font-medium text-[var(--text-dark)]">Customization :</strong> {product.customization || "None"}
              </p>
              <p className="text-lg">
                <strong className="font-medium text-[var(--text-dark)]">Price :</strong> {product.price || "Contact for price"}
              </p>
            </div>
            
            <div className="mt-12">
              <a 
                href={`https://api.whatsapp.com/send/?phone=254792516691&text=${encodeURIComponent(`Hello YK Homes, I would like to inquire about the ${product.name}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3.5 border border-[var(--text-dark)] text-[var(--text-dark)] text-sm tracking-wide hover:bg-[var(--text-dark)] hover:text-white transition-colors"
              >
                WhatsApp to Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
