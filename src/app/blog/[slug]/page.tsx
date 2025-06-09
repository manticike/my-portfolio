import { client } from '@/lib/sanity';
import { groq } from 'next-sanity';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/lib/sanity';
import Image from 'next/image';

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

type RouteParams = { slug: string };

// ✅ Main Page Component
export default async function Page({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <article className="max-w-3xl mx-auto py-12 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>

      {post.mainImage && (
        <div className="relative h-64 w-full mb-8">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      )}

      <div className="prose max-w-none">
        <PortableText value={post.body} />
      </div>
    </article>
  );
}

// ✅ Metadata for SEO
export async function generateMetadata({ params }: { params: Promise<RouteParams> }) {
  const { slug } = await params;
  const post = await client.fetch(postQuery, { slug });

  return {
    title: post?.title || 'Post not found',
    description: post?.excerpt || '',
    openGraph: {
      title: post?.title || 'Post not found',
      description: post?.excerpt || '',
      images: post?.mainImage ? [urlFor(post.mainImage).url()] : [],
    },
  };
}
