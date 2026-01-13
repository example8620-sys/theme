import React from 'react';
import { BlogPost } from '../types';

interface FeaturedSectionProps {
  post: BlogPost;
}

export const FeaturedSection: React.FC<FeaturedSectionProps> = ({ post }) => {
  return (
    <div className="mb-8 md:mb-12">
      <div className="relative rounded-2xl overflow-hidden aspect-[4/3] md:aspect-[21/9] group cursor-pointer">
        <img 
          src={post.image} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        
        <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-2/3">
          <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-bold uppercase tracking-wider rounded mb-3">
            Featured
          </span>
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 leading-tight group-hover:text-blue-200 transition-colors">
            {post.title}
          </h2>
          <p className="text-gray-200 text-sm md:text-base line-clamp-2 md:line-clamp-none mb-4 hidden md:block">
            {post.excerpt}
          </p>
          <div className="flex items-center text-gray-300 text-sm space-x-4">
            <span className="flex items-center">
               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
               {post.date}
            </span>
            <span className="flex items-center">
               <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
               {post.author}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};