// components/FeaturedPosts.tsx
import { client } from '../../lib/sanity';
import { groq } from 'next-sanity';
import BlogCard from './BlogCard';
import { BlogPost } from '@/types/blog';

const featuredPostsQuery = groq`
  *[_type == "post" && featured == true] | order(_createdAt desc) [0...6] {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    featured
  }
`;

export default async function FeaturedPosts() {
  const posts: BlogPost[] = await client.fetch(featuredPostsQuery);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
}