import React from 'react';
import { BlogPost } from '../types';

interface PostCardProps {
  post: BlogPost;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <article className="flex flex-col bg-white dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow duration-200 group">
      <div className="relative overflow-hidden aspect-video">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-2 left-2 flex gap-1">
          {post.labels.slice(0, 1).map(label => (
            <span key={label} className="px-2 py-1 text-xs font-semibold bg-blue-500 text-white rounded shadow">
              {label}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-2 space-x-2">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.author}</span>
        </div>
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white line-clamp-2 leading-tight group-hover:text-blue-500 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 flex-1">
          {post.excerpt}
        </p>
        <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
          <button className="text-sm font-medium text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
            Read Article →
          </button>
        </div>
      </div>
    </article>
  );
};