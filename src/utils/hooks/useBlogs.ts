import { useMemo } from 'react';
import { filterBlogsByCategory, filterBlogsBySearch } from '../blogFilters';
import { allPosts } from '../../data/blog';
import type { BlogPost } from '../../data/types';

export function useBlogs(
  searchQuery: string,
  selectedCategory: string | null
): BlogPost[] {
  return useMemo(() => {
    let posts = allPosts;
    posts = filterBlogsBySearch(posts, searchQuery);
    posts = filterBlogsByCategory(posts, selectedCategory);
    return posts;
  }, [searchQuery, selectedCategory]);
}