import type { BlogPost } from '../data/types';

export const filterBlogsByCategory = (posts: BlogPost[], categoryId: string | null): BlogPost[] => {
  if (!categoryId) return posts;
  return posts.filter(post => post.tags.some(tag => tag.toLowerCase() === categoryId.toLowerCase()));
};

export const filterBlogsBySearch = (posts: BlogPost[], search: string): BlogPost[] => {
  const searchLower = search.toLowerCase();
  return posts.filter(post => 
    post.title.toLowerCase().includes(searchLower) ||
    post.excerpt.toLowerCase().includes(searchLower) ||
    post.content.toLowerCase().includes(searchLower)
  );
};