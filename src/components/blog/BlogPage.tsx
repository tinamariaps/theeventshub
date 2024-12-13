import React, { useState } from 'react';
import { blogPosts } from '../../data/blog';
import BlogList from './BlogList';
import BlogPost from './BlogPost';
import PageHeader from '../common/PageHeader';

export default function BlogPage() {
  const [selectedPost, setSelectedPost] = useState<number | null>(null);

  const selectedBlogPost = selectedPost !== null 
    ? blogPosts.find(post => post.id === selectedPost)
    : null;

  if (selectedBlogPost) {
    return (
      <BlogPost 
        post={selectedBlogPost} 
        onBack={() => setSelectedPost(null)} 
      />
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader 
        title="Trade Show Insights"
        description="Expert advice and strategies for successful exhibitions."
      />
      <BlogList posts={blogPosts} onPostClick={setSelectedPost} />
    </div>
  );
}