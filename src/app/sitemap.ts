import { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.ykhomes.co.ke'

  // Fetch dynamic content from Sanity
  const [products, collections, rooms] = await Promise.all([
    client.fetch(`*[_type == "product"]{ "slug": slug.current, _updatedAt }`),
    client.fetch(`*[_type == "collection"]{ "slug": slug.current, _updatedAt }`),
    client.fetch(`*[_type == "room"]{ "slug": slug.current, _updatedAt }`),
  ])

  // Map dynamic routes
  const productUrls = products.map((product: any) => ({
    url: `${baseUrl}/product/${product.slug}`,
    lastModified: new Date(product._updatedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  const collectionUrls = collections.map((collection: any) => ({
    url: `${baseUrl}/collections/${collection.slug}`,
    lastModified: new Date(collection._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const roomUrls = rooms.map((room: any) => ({
    url: `${baseUrl}/catalog/${room.slug}`,
    lastModified: new Date(room._updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Static routes
  const staticRoutes = [
    '',
    '/catalog',
    '/collections',
    '/services',
    '/contact',
    '/privacy-policy',
    '/terms-and-conditions',
    '/returns-policy',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' as const : 'monthly' as const,
    priority: route === '' ? 1.0 : 0.7,
  }))

  return [...staticRoutes, ...collectionUrls, ...roomUrls, ...productUrls]
}
