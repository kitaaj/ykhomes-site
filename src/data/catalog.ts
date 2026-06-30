export interface Product {
  id: string;
  name: string;
  collectionId: string;
  roomId: string;
  category: string;
  image: string;
  images?: string[];
  dimensions?: string;
  material?: string;
  customization?: string;
  price?: string;
}

export const products: Product[] = [
  // Living Room - Asili
  { id: "mara-sofa", name: "Mara Sofa", collectionId: "asili", roomId: "living-room", category: "Sofas", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", images: ["https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80", "https://images.unsplash.com/photo-1567016432779-094069958ea5?w=800&q=80", "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80"], dimensions: "240cm (L)", material: "Standard Fabric collection", customization: "Alternative Fabric options available", price: "KES 119,250" },
  { id: "nuru-sofa", name: "Nuru Sofa", collectionId: "asili", roomId: "living-room", category: "Sofas", image: "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=800&q=80", dimensions: "180cm (L)", material: "Standard Fabric Collection", customization: "Alternative Fabric options available", price: "KES 102,000" },
  { id: "fuma-tv-cabinet", name: "Fuma TV Cabinet", collectionId: "asili", roomId: "living-room", category: "T.V Consoles", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=800&q=80", dimensions: "180cm(L) X 45cm (D) X 80cm (H)", material: "Meru Oak", customization: "Alternative wood finish upon request", price: "KES 102,600" },
  { id: "kira-arm-chair", name: "Kira Arm chair", collectionId: "asili", roomId: "living-room", category: "Arm Chairs", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80", dimensions: "64cm (W) X 75cm (D) X 85cm (H)", material: "Standard Fabric Collection", customization: "Alternative Fabric options available", price: "KES 60,150" },
  { id: "jani-coffee-table", name: "Jani Coffee Table", collectionId: "asili", roomId: "living-room", category: "Coffee Tables", image: "https://images.unsplash.com/photo-1532372576444-dda954194ad0?w=800&q=80", dimensions: "90cm (W) X 47cm (H)", material: "Meru Oak / Jacaranda", customization: "Alternative wood finish upon request", price: "KES 65,000" },
  { id: "tawi-side-table", name: "Tawi Side Table", collectionId: "asili", roomId: "living-room", category: "Side Tables", image: "https://images.unsplash.com/photo-1499933374294-4584851497cc?w=800&q=80", dimensions: "45cm (W) X 50cm (D) X 55cm (H)", material: "Metal Spray Paint", customization: "Alternative color upon request", price: "KES 21,900" },

  // Dining Room - Asili
  { id: "zuri", name: "Zuri", collectionId: "asili", roomId: "dining-room", category: "Dining Chairs", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80", dimensions: "64cm (W) X 75cm (D) X 85cm (H)", material: "Meru Oak / Jacaranda", customization: "Alternative wood finish upon request", price: "KES 28,800" },

  // Bedroom - Asili
  { id: "tulia-bed", name: "Tulia Bed", collectionId: "asili", roomId: "bedroom", category: "Beds", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80", dimensions: "Available only in 5by6 and 6by6", material: "Mahogany / Meru Oak", customization: "None", price: "5by6 - KES 130,850 / 6by6 - KES 143,000" },
  { id: "lela-bed-side", name: "Lela Bedside Table", collectionId: "asili", roomId: "bedroom", category: "Bedside Tables", image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80", dimensions: "60cm(W) X 45cm (D) X 60cm (H)", material: "Meru Oak / Mahogany", customization: "Alternative wood finish upon request", price: "KES 30,600" },

];

export const collections = [
  {
    id: "asili",
    name: "Asili Collection",
    description: "Inspired by natural materials, soft forms, and everyday living, this collection brings together timeless craftsmanship and contemporary comfort. Every piece is made to be lived with and loved for years to come.",
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&q=80"
  }
];

export const rooms = [
  { id: "living-room", name: "Living Room", thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80" },
  { id: "dining-room", name: "Dining Room", thumbnail: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80" },
  { id: "bedroom", name: "Bedroom", thumbnail: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80" }
];
