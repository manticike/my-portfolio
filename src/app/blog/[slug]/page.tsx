import { client, urlFor } from '@/lib/sanity';
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { BlogPost, BlogPageParams, BlogSlugData } from '@/types/blog';

export const dynamic = 'force-dynamic';

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    body,
    "mainImageUrl": mainImage.asset->url
  }
`;

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  const posts = await client.fetch<BlogSlugData[]>(
    groq`*[_type == "post" && defined(slug.current)] {
      "slug": slug.current
    }`
  );

  return posts.map((post) => ({
    slug: post.slug // Use the string slug directly, not slug.current
  }));
}

export default async function BlogPostPage({ params }: BlogPageParams) {
  // Await the params since they're now async in Next.js 15
  const { slug } = await params;
  
  const post = await client.fetch<BlogPost | null>(postQuery, { 
    slug: slug // Use the awaited slug
  }, {
    next: {
      tags: ['post'],
      revalidate: 60,
    },
  });

  if (!post) notFound();

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <Link href="/blog" className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
        {/* Back button SVG remains the same */}
        Back to Blog
      </Link>

      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {post.mainImage && (
        <div className="relative h-64 w-full mb-8 rounded-lg overflow-hidden">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
          />
        </div>
      )}

      <div className="prose max-w-none prose-lg">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}

export async function generateMetadata({ params }: BlogPageParams) {
  // Await the params since they're now async in Next.js 15
  const { slug } = await params;
  
  const post = await client.fetch<BlogPost>(postQuery, { slug: slug }, {
    next: { revalidate: 60 },
  });

  if (!post) return { title: 'Post not found' };

  return {
    title: `${post.title} | Blog`,
    description: post.excerpt || '',
    openGraph: {
      title: post.title,
      description: post.excerpt || '',
      images: post.mainImage ? [
        {
          url: urlFor(post.mainImage).url(),
          width: 1200,
          height: 630,
          alt: post.mainImage.alt || post.title,
        }
      ] : [],
    },
  };
}