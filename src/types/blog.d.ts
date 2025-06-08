// types/blog.d.ts
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
  body: any[]; // For portable text
  featured?: boolean;
}

export interface BlogListProps {
  posts: BlogPost[];
  limit?: number;
}