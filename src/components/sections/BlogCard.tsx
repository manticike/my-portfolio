// components/BlogCard.tsx
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import { BlogPost } from '@/types/blog';

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
      {post.mainImage && (
        <div className="relative h-48 w-full">
          <Image
            src={urlFor(post.mainImage).url()}
            alt={post.mainImage.alt || post.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
        {post.excerpt && (
          <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
        )}
        <a
          href={`/blog/${post.slug.current}`}
          className="text-blue-600 hover:text-blue-800 font-medium"
        >
          Read more
        </a>
      </div>
    </div>
  );
}