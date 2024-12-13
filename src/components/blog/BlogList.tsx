import React from 'react';
import BlogCard from './BlogCard';
import type { BlogPost } from '../../data/blog';

interface BlogListProps {
  posts: BlogPost[];
  onPostClick: (postId: number) => void;
}

export default function BlogList({ posts, onPostClick }: BlogListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post) => (
        <BlogCard
          key={post.id}
          post={post}
          onClick={() => onPostClick(post.id)}
        />
      ))}
    </div>
  );
}