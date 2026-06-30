import { createClient } from '@sanity/client';
import { products, rooms, collections } from '../src/data/catalog';
import fs from 'fs';
import path from 'path';

// Load environment variables manually since we are running outside Next.js
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const token = process.env.SANITY_API_WRITE_TOKEN;

if (!token) {
  console.error("Missing SANITY_API_WRITE_TOKEN in .env.local or environment.");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  useCdn: false,
  token,
  apiVersion: '2024-01-01',
});

const RAW_IMAGES_DIR = path.join(process.cwd(), 'public', 'raw-images');

async function uploadImageIfExists(filenamePattern: string) {
  if (!fs.existsSync(RAW_IMAGES_DIR)) return null;

  const files = fs.readdirSync(RAW_IMAGES_DIR);
  // Find a file that starts with the pattern (ignoring extension)
  const matchedFile = files.find(f => f.startsWith(filenamePattern));
  
  if (!matchedFile) return null;

  console.log(`Uploading image: ${matchedFile}`);
  const filePath = path.join(RAW_IMAGES_DIR, matchedFile);
  const buffer = fs.readFileSync(filePath);
  
  try {
    const asset = await client.assets.upload('image', buffer, {
      filename: matchedFile,
    });
    return {
      _type: 'image',
      asset: {
        _type: 'reference',
        _ref: asset._id,
      },
    };
  } catch (error) {
    console.error(`Failed to upload ${matchedFile}:`, error);
    return null;
  }
}

async function uploadGalleryImages(productId: string) {
  if (!fs.existsSync(RAW_IMAGES_DIR)) return [];

  const files = fs.readdirSync(RAW_IMAGES_DIR);
  // Find files that are gallery images for this product
  const galleryFiles = files.filter(f => f.startsWith(`${productId}-gallery-`));
  
  const galleryAssets = [];
  for (const file of galleryFiles) {
    console.log(`Uploading gallery image: ${file}`);
    const filePath = path.join(RAW_IMAGES_DIR, file);
    const buffer = fs.readFileSync(filePath);
    
    try {
      const asset = await client.assets.upload('image', buffer, {
        filename: file,
      });
      galleryAssets.push({
        _key: asset._id, // Sanity arrays need unique keys
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: asset._id,
        },
      });
    } catch (error) {
      console.error(`Failed to upload ${file}:`, error);
    }
  }
  return galleryAssets;
}

async function main() {
  console.log("Starting Sanity Seed Script...");

  // 1. Seed Rooms
  const roomMap: Record<string, string> = {};
  for (const room of rooms) {
    console.log(`Creating Room: ${room.name}`);
    const doc = {
      _type: 'room',
      _id: `room-${room.id}`,
      name: room.name,
      slug: { _type: 'slug', current: room.id },
      description: `Description for ${room.name}`,
    };
    const created = await client.createOrReplace(doc);
    roomMap[room.id] = created._id;
  }

  // 2. Seed Collections
  const collectionMap: Record<string, string> = {};
  for (const collection of collections) {
    console.log(`Creating Collection: ${collection.name}`);
    const doc = {
      _type: 'collection',
      _id: `collection-${collection.id}`,
      name: collection.name,
      slug: { _type: 'slug', current: collection.id },
      description: collection.description,
    };
    const created = await client.createOrReplace(doc);
    collectionMap[collection.id] = created._id;
  }

  // 3. Seed Products
  for (const product of products) {
    console.log(`Creating Product: ${product.name}`);
    
    // Upload main image
    const mainImage = await uploadImageIfExists(`${product.id}-main`);
    // Upload gallery images
    const galleryImages = await uploadGalleryImages(product.id);

    const doc = {
      _type: 'product',
      _id: `product-${product.id}`,
      name: product.name,
      slug: { _type: 'slug', current: product.id },
      category: product.category,
      room: roomMap[product.roomId] ? { _type: 'reference', _ref: roomMap[product.roomId] } : undefined,
      collection: collectionMap[product.collectionId] ? { _type: 'reference', _ref: collectionMap[product.collectionId] } : undefined,
      dimensions: product.dimensions,
      material: product.material,
      customization: product.customization,
      price: product.price,
      ...(mainImage && { image: mainImage }),
      ...(galleryImages.length > 0 && { gallery: galleryImages }),
    };

    await client.createOrReplace(doc);
  }

  console.log("✅ Seeding completed successfully!");
}

main().catch(console.error);
