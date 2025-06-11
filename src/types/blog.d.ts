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

// Add this for your page props
export interface BlogPageParams {
  params: {
    slug: string;
  };
}

export interface BlogPageProps {
  post: BlogPost;
}