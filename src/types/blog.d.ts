import { PortableTextBlock } from '@sanity/types';

export interface BlogPost {
  _id: string;
  _createdAt: string;
  title: string;
  slug: {
    current: string;
  };
  excerpt?: string;
  mainImage?: {
    asset: {
      _ref: string;
    };
    alt?: string;
  };
  body: PortableTextBlock[];
  featured?: boolean;
}

export interface BlogListProps {
  posts: BlogPost[];
  limit?: number;
}