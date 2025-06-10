// src/app/blog/[slug]/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-center">
      <h1 className="text-3xl font-bold mb-4 text-gray-800">404 - Post Not Found</h1>
      <p className="mb-6 text-gray-600">
        The blog post you&apos;re looking for doesn&apos;t exist or may have been removed.
      </p>
      <Link
        href="/blog"
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        aria-label="Return to blog page"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Blog
      </Link>
    </div>
  );
}