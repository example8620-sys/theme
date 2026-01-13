import React, { useState, useEffect } from 'react';
import { BlogPost, ThemeConfig, ViewMode } from './types';
import { PostCard } from './components/PostCard';
import { Sidebar } from './components/Sidebar';
import { FeaturedSection } from './components/FeaturedSection';
import { generateBloggerXml } from './services/bloggerTemplateService';

const MOCK_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "The Future of Web Development in 2024",
    excerpt: "Exploring the latest trends in frontend frameworks, serverless architecture, and the rise of AI-assisted coding tools that are reshaping how we build the web.",
    image: "https://picsum.photos/800/600?random=1",
    date: "Oct 24, 2023",
    author: "Alex Morgan",
    labels: ["Tech", "Code"]
  },
  {
    id: 2,
    title: "Minimalist Design Principles for Modern Blogs",
    excerpt: "Why less is more when it comes to user interface design. We dive deep into whitespace, typography, and color theory.",
    image: "https://picsum.photos/800/600?random=2",
    date: "Oct 22, 2023",
    author: "Sarah Chen",
    labels: ["Design"]
  },
  {
    id: 3,
    title: "10 Tips for Better SEO Ranking",
    excerpt: "Learn how to optimize your content structure, meta tags, and site speed to climb the search engine results pages effectively.",
    image: "https://picsum.photos/800/600?random=3",
    date: "Oct 20, 2023",
    author: "Mike Ross",
    labels: ["Marketing"]
  },
  {
    id: 4,
    title: "Traveling Digital Nomad Lifestyle",
    excerpt: "A guide to maintaining productivity while exploring the world. Best tools, practices, and destinations for remote work.",
    image: "https://picsum.photos/800/600?random=4",
    date: "Oct 18, 2023",
    author: "Jessica Day",
    labels: ["Travel", "Lifestyle"]
  },
  {
    id: 5,
    title: "Understanding React Server Components",
    excerpt: "A technical deep dive into RSC and how it changes the data fetching paradigm in modern React applications.",
    image: "https://picsum.photos/800/600?random=5",
    date: "Oct 15, 2023",
    author: "Alex Morgan",
    labels: ["Tech"]
  }
];

export default function App() {
  const [config, setConfig] = useState<ThemeConfig>({
    blogTitle: "My Modern Blog",
    darkMode: false,
    accentColor: '#0ea5e9'
  });
  
  const [viewMode, setViewMode] = useState<ViewMode>(ViewMode.DESKTOP);

  useEffect(() => {
    if (config.darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [config.darkMode]);

  const handleDownload = () => {
    const xmlContent = generateBloggerXml(config);
    const blob = new Blob([xmlContent], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `blogger-theme-${Date.now()}.xml`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      {/* Top Control Bar (App UI) */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 p-4 sticky top-0 z-[100] shadow-md">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4 justify-between items-center">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white font-bold">B</div>
             <h1 className="text-xl font-bold text-gray-800 dark:text-white hidden sm:block">Theme Studio</h1>
          </div>

          <div className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
             <button 
               onClick={() => setViewMode(ViewMode.DESKTOP)}
               className={`p-2 rounded ${viewMode === ViewMode.DESKTOP ? 'bg-white dark:bg-gray-600 shadow' : 'text-gray-500 hover:text-gray-700'}`}
               aria-label="Desktop View"
             >
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
             </button>
             <button 
               onClick={() => setViewMode(ViewMode.MOBILE)}
               className={`p-2 rounded ${viewMode === ViewMode.MOBILE ? 'bg-white dark:bg-gray-600 shadow' : 'text-gray-500 hover:text-gray-700'}`}
               aria-label="Mobile View"
             >
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
             </button>
          </div>

          <div className="flex gap-3">
             <button 
               onClick={() => setConfig(p => ({ ...p, darkMode: !p.darkMode }))}
               className="p-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 transition-colors"
             >
               {config.darkMode ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
               ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
               )}
             </button>
             <button 
               onClick={handleDownload}
               className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-semibold transition-colors shadow-lg shadow-blue-500/30"
             >
               <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
               Download XML
             </button>
          </div>
        </div>
      </div>

      {/* Preview Canvas */}
      <div className={`flex-1 bg-gray-200 dark:bg-black p-4 md:p-8 overflow-auto flex justify-center transition-all duration-300`}>
        <div 
          className={`bg-white dark:bg-gray-900 shadow-2xl transition-all duration-300 flex flex-col ${
            viewMode === ViewMode.MOBILE ? 'w-[375px] rounded-[30px] border-8 border-gray-800 dark:border-gray-700' : 'w-full max-w-7xl rounded-none'
          }`}
          style={{ minHeight: 'calc(100vh - 150px)' }}
        >
          {/* Mock Browser Header for Mobile */}
          {viewMode === ViewMode.MOBILE && (
            <div className="h-6 bg-gray-800 rounded-t-[20px] flex justify-center items-center mb-[-1px]">
               <div className="w-16 h-1 bg-gray-600 rounded-full"></div>
            </div>
          )}

          {/* Theme Header */}
          <header className="border-b border-gray-100 dark:border-gray-800 sticky top-0 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-40 px-6 py-4">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
              <div className="text-2xl font-bold text-gray-900 dark:text-white font-serif tracking-tight">
                {config.blogTitle}
              </div>
              <nav className="hidden md:flex gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
                <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
                <a href="#" className="hover:text-blue-500 transition-colors">Lifestyle</a>
                <a href="#" className="hover:text-blue-500 transition-colors">Tech</a>
                <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>
                <span className="cursor-pointer" onClick={() => setConfig(p => ({...p, darkMode: !p.darkMode}))}>
                  {config.darkMode ? '☀️' : '🌙'}
                </span>
              </nav>
              {/* Mobile Burger */}
              <div className="md:hidden">
                <svg className="w-6 h-6 text-gray-700 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
              </div>
            </div>
          </header>

          {/* Theme Body */}
          <div className="flex-1 p-6 md:p-8 max-w-6xl mx-auto w-full">
            
            <FeaturedSection post={MOCK_POSTS[0]} />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <main className="lg:col-span-2 space-y-8">
                <div className="flex items-center justify-between mb-2">
                   <h3 className="text-lg font-bold text-gray-900 dark:text-white">Latest Stories</h3>
                   <div className="h-[2px] bg-gray-100 dark:bg-gray-800 flex-1 ml-4 relative">
                     <div className="absolute left-0 top-0 h-full w-12 bg-blue-500"></div>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-6">
                  {MOCK_POSTS.slice(1).map(post => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>

                {/* Pagination */}
                <div className="flex justify-center pt-8">
                  <button className="px-6 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    Load More Posts
                  </button>
                </div>
              </main>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24">
                  <Sidebar posts={MOCK_POSTS} />
                </div>
              </div>
            </div>
          </div>

          {/* Theme Footer */}
          <footer className="border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950 py-12 px-6 mt-12">
            <div className="max-w-6xl mx-auto text-center space-y-4">
              <div className="text-xl font-bold text-gray-900 dark:text-white font-serif">{config.blogTitle}</div>
              <div className="flex justify-center gap-6 text-sm text-gray-500">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact</a>
              </div>
              <p className="text-xs text-gray-400">
                &copy; {new Date().getFullYear()} {config.blogTitle}. All rights reserved.
                <br/>
                Template generated by Blogger Theme Studio.
              </p>
            </div>
          </footer>

          {viewMode === ViewMode.MOBILE && (
             <div className="h-2 bg-gray-800 rounded-b-[20px]"></div>
          )}
        </div>
      </div>
    </div>
  );
}