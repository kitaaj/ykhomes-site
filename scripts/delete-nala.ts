import { createClient } from '@sanity/client';
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

async function main() {
  console.log("Deleting Nala placeholder items...");

  const idsToDelete = [
    'product-nala-sofa',
    'product-nala-table',
    'product-nala-bed',
    'collection-nala'
  ];

  for (const id of idsToDelete) {
    try {
      await client.delete(id);
      console.log(`Deleted document with ID: ${id}`);
    } catch (err: any) {
      if (err.statusCode === 404) {
         console.log(`Document ${id} already deleted or does not exist.`);
      } else {
         console.error(`Error deleting ${id}:`, err.message);
      }
    }
  }

  console.log("Cleanup complete!");
}

main().catch(console.error);
