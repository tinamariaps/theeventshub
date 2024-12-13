import React from 'react';
import { ArrowLeft } from 'lucide-react';
import type { BlogPost } from '../../data/blog';
import { marked } from 'marked';

interface BlogPostProps {
  post: BlogPost;
  onBack: () => void;
}

export default function BlogPost({ post, onBack }: BlogPostProps) {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <button
        onClick={onBack}
        className="flex items-center text-indigo-600 hover:text-indigo-500 mb-8"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        Back to Articles
      </button>

      <article>
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 object-cover rounded-lg mb-8"
        />

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs font-medium text-indigo-600 bg-indigo-50 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
        
        <div className="flex items-center text-gray-600 mb-8">
          <span className="mr-4">{post.author}</span>
          <span>{formatDate(post.date)}</span>
        </div>

        <div 
          className="prose prose-indigo max-w-none"
          dangerouslySetInnerHTML={{ __html: marked(post.content) }}
        />
      </article>
    </div>
  );
}