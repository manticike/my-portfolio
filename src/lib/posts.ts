import { client } from './sanity';
import { groq } from 'next-sanity';

export async function getAllPosts() {
  return client.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc) {
      _id,
      title,
      slug,
      excerpt,
      _createdAt,
      mainImage
    }`
  );
}

export async function getFeaturedPosts(limit = 2) {
  return client.fetch(
    groq`*[_type == "post" && defined(slug.current)] | order(_createdAt desc)[0...$limit] {
      _id,
      title,
      slug,
      excerpt,
      _createdAt,
      mainImage
    }`,
    { limit }
  );
}