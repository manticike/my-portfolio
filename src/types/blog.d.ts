import { PortableTextBlock } from '@sanity/types';
import { ImageAsset, Slug } from '@sanity/types';

export interface BlogPost {
  _id: string;
  _createdAt: string;
  title: string;
  slug: Slug;
  excerpt?: string;
  mainImage?: {
    asset: ImageAsset;
    alt?: string;
    caption?: string;
  };
  body: PortableTextBlock[];
  featured?: boolean;
}

export interface BlogListProps {
  posts: BlogPost[];
  limit?: number;
}

// Updated for Next.js 15 - params is now a Promise
export interface BlogPageParams {
  params: Promise<{
    slug: string;
  }>;
}

export interface BlogPageProps {
  post: BlogPost;
}

// Type for the slug data returned from Sanity
export interface BlogSlugData {
  slug: string;
}