// src/app/blog/[slug]/error.tsx
"use client";
import Link from 'next/link';

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
      <p className="mb-4">{error.message}</p>
      
      {/* Fixed navigation using Link */}
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Try again
        </button>
        <Link
          href="/blog"
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 inline-flex items-center"
        >
          Back to Blog
        </Link>
      </div>
    </div>
  );
}