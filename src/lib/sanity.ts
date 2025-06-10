// src/lib/sanity.ts
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import type { SanityImageSource } from '@sanity/image-url/lib/types/types';

const projectId = process.env.SANITY_PROJECT_ID;
const dataset = process.env.SANITY_DATASET || 'production';


if (!projectId) {
  throw new Error('Missing NEXT_PUBLIC_SANITY_PROJECT_ID in environment variables');
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  useCdn: false,
  timeout: 100000,
  perspective: 'published',
});

export const urlFor = (source: SanityImageSource) =>
  imageUrlBuilder(client).image(source);
