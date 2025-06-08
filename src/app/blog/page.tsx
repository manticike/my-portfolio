// app/blog/page.tsx
import { client } from '@/lib/sanity';
import { groq } from 'next-sanity';
import BlogCard from '@/components/sections/BlogCard';
import { BlogPost } from '@/types/blog';

const allPostsQuery = groq`
  *[_type == "post"] | order(_createdAt desc) {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    featured
  }
`;

export default async function BlogPage() {
  const posts: BlogPost[] = await client.fetch(allPostsQuery);

  return (
    <main className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <BlogCard key={post._id} post={post} />
          ))}
        </div>
      </div>
    </main>
  );
}