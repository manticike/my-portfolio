export const dynamic = 'force-dynamic';

import { client, urlFor } from '@/lib/sanity';
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { BlogPost } from '@/types/blog';
import type { PageProps } from '@/types/page-props';

const postQuery = groq`
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    _createdAt,
    title,
    slug,
    excerpt,
    mainImage,
    body
  }
`;

export async function generateStaticParams() {
  try {
    const posts = await client.fetch<{ slug: string }[]>(
      groq`*[_type == "post" && defined(slug.current)] {
        "slug": slug.current
      }`
    );

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Failed to fetch static params:', error);
    return [];
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  let post: BlogPost | null = null;

  try {
    post = await client.fetch(postQuery, { slug: params.slug }, {
      next: {
        tags: ['post'],
        revalidate: 60,
      },
    });
  } catch (error) {
    console.error(`Error fetching post for slug "${params.slug}":`, error);
  }

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <Link 
        href="/blog" 
        className="mb-6 inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
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

export async function generateMetadata({ params }: PageProps) {
  try {
    const post = await client.fetch<BlogPost>(postQuery, { slug: params.slug }, {
      next: { revalidate: 60 },
    });

    if (!post) {
      return { title: 'Post not found' };
    }

    return {
      title: post.title,
      description: post.excerpt || '',
      openGraph: {
        title: post.title,
        description: post.excerpt || '',
        images: post.mainImage ? [urlFor(post.mainImage).url()] : [],
      },
    };
  } catch (error) {
    console.error(`Metadata fetch failed for slug "${params.slug}":`, error);
    return { title: 'Post error' };
  }
}
