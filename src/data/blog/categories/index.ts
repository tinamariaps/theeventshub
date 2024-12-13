import { boothDesignPosts } from './booth-design';
import { technologyPosts } from './technology';
import type { BlogPost, BlogCategory } from '../../types';

export const blogCategories: BlogCategory[] = [
  {
    id: 'booth-design',
    name: 'Booth Design',
    description: 'Tips and strategies for creating effective exhibition booths',
    posts: boothDesignPosts
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Latest technology trends in the trade show industry',
    posts: technologyPosts
  }
];

// Combine all posts for global search
export const allPosts: BlogPost[] = blogCategories.flatMap(category => category.posts);