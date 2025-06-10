// app/blog/[slug]/not-found.tsx
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4 text-center">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Post Not Found</h2>
      <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist or may have been removed.</p>
      <Link
        href="/blog"
        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
      >
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Blog
      </Link>
    </div>
  );
}