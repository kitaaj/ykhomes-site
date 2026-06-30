import { groq } from 'next-sanity';

export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    "heroImage": heroImage.asset->url,
    "introImage": introImage.asset->url,
    "servicesHeroImage": servicesHeroImage.asset->url,
    "servicesFullDesignImage": servicesFullDesignImage.asset->url,
    "catalogHeroImage": catalogHeroImage.asset->url
  }
`;

export const allRoomsQuery = groq`
  *[_type == "room"] {
    _id,
    name,
    "slug": slug.current,
    "thumbnail": image.asset->url
  }
`;

export const allCollectionsQuery = groq`
  *[_type == "collection"] {
    _id,
    name,
    description,
    "slug": slug.current,
    "thumbnail": image.asset->url,
    "pieceCount": count(*[_type == "product" && references(^._id)])
  }
`;

export const productsByRoomQuery = groq`
  *[_type == "product" && room->slug.current == $roomSlug] {
    _id,
    name,
    "slug": slug.current,
    category,
    "image": image.asset->url,
    price
  }
`;

export const productsByCollectionQuery = groq`
  *[_type == "product" && collection->slug.current == $collectionSlug] {
    _id,
    name,
    "slug": slug.current,
    category,
    "image": image.asset->url,
    price
  }
`;

export const productBySlugQuery = groq`
  *[_type == "product" && slug.current == $slug][0] {
    _id,
    name,
    "slug": slug.current,
    category,
    "image": image.asset->url,
    "images": gallery[].asset->url,
    dimensions,
    material,
    customization,
    price,
    room->{ _id, name, "slug": slug.current }
  }
`;
