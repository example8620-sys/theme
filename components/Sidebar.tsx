import React from 'react';
import { BlogPost } from '../types';

interface SidebarProps {
  posts: BlogPost[];
}

export const Sidebar: React.FC<SidebarProps> = ({ posts }) => {
  const labels = ['Technology', 'Design', 'Lifestyle', 'Tutorials', 'Travel'];

  return (
    <aside className="space-y-8">
      {/* About Widget */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white border-b-2 border-blue-500 inline-block pb-1">
          About Us
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
          A modern, SEO-friendly Blogger template designed for speed and readability. 
          Perfect for writers and content creators.
        </p>
        <button className="w-full py-2 px-4 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-sm font-medium rounded transition-colors dark:text-white">
          Learn More
        </button>
      </div>

      {/* Popular Posts */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white border-b-2 border-blue-500 inline-block pb-1">
          Popular Posts
        </h3>
        <div className="space-y-4">
          {posts.slice(0, 3).map(post => (
            <div key={post.id} className="flex gap-3 group cursor-pointer">
              <img src={post.image} alt="" className="w-16 h-16 object-cover rounded flex-shrink-0" />
              <div>
                <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 group-hover:text-blue-500 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Labels */}
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
        <h3 className="font-bold text-lg mb-4 text-gray-900 dark:text-white border-b-2 border-blue-500 inline-block pb-1">
          Labels
        </h3>
        <div className="flex flex-wrap gap-2">
          {labels.map(label => (
            <span key={label} className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-600 dark:hover:text-blue-300 cursor-pointer transition-colors">
              {label}
            </span>
          ))}
        </div>
      </div>
    </aside>
  );
};