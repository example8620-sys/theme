import { ThemeConfig } from '../types';

export const generateBloggerXml = (config: ThemeConfig): string => {
  return `<?xml version="1.0" encoding="UTF-8" ?>
<!DOCTYPE html>
<html b:css='false' b:defaultwidgetversion='2' b:layoutsVersion='3' b:responsive='true' expr:dir='data:blog.languageDirection' xmlns='http://www.w3.org/1999/xhtml' xmlns:b='http://www.google.com/2005/gml/b' xmlns:data='http://www.google.com/2005/gml/data' xmlns:expr='http://www.google.com/2005/gml/expr'>
<head>
<meta content='width=device-width, initial-scale=1' name='viewport'/>
<title><data:blog.pageTitle/></title>
<b:include data='blog' name='all-head-content'/>
<b:skin><![CDATA[
/* 
  Theme: Modern Studio
  Generated: ${new Date().toISOString()}
*/
:root {
  --bg-body: #f9fafb;
  --bg-card: #ffffff;
  --text-primary: #111827;
  --text-secondary: #6b7280;
  --accent: ${config.accentColor || '#0ea5e9'};
  --border: #e5e7eb;
  --shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
}

html[data-theme='dark'] {
  --bg-body: #0f172a;
  --bg-card: #1e293b;
  --text-primary: #f8fafc;
  --text-secondary: #94a3b8;
  --border: #334155;
  --shadow: 0 4px 6px -1px rgb(0 0 0 / 0.5);
}

/* Base */
* { box-sizing: border-box; }
body {
  font-family: system-ui, -apple-system, sans-serif;
  background: var(--bg-body);
  color: var(--text-primary);
  margin: 0;
  line-height: 1.6;
  transition: background 0.3s ease, color 0.3s ease;
}

a { color: inherit; text-decoration: none; transition: color 0.2s; }
a:hover { color: var(--accent); }
img { display: block; max-width: 100%; height: auto; }

/* Header */
.site-header {
  background: var(--bg-card);
  border-bottom: 1px solid var(--border);
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 50;
}
.header-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.site-title {
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--text-primary);
  letter-spacing: -0.025em;
}
.header-actions { display: flex; gap: 1rem; align-items: center; }

/* Theme Toggle */
.theme-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-primary);
  padding: 0.5rem;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.theme-btn:hover { background: var(--border); }

/* Layout */
.main-wrapper {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 0 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2.5rem;
}
@media (min-width: 1024px) {
  .main-wrapper { grid-template-columns: 1fr 320px; }
}

/* Featured Post */
.featured-post {
  background: var(--bg-card);
  border-radius: 1rem;
  overflow: hidden;
  margin-bottom: 3rem;
  box-shadow: var(--shadow);
  position: relative;
}
.featured-img-container {
  aspect-ratio: 16/9;
  overflow: hidden;
}
@media (min-width: 768px) {
  .featured-img-container { aspect-ratio: 21/9; }
}
.featured-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}
.featured-post:hover .featured-img { transform: scale(1.05); }
.featured-content {
  padding: 2rem;
  position: relative;
}
.featured-label {
  display: inline-block;
  background: var(--accent);
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 1rem;
}
.featured-title {
  font-size: 1.75rem;
  margin: 0 0 1rem;
  line-height: 1.2;
}
@media (min-width: 768px) {
  .featured-title { font-size: 2.5rem; }
}

/* Post Grid */
.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}
.post-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 0.75rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s, box-shadow 0.2s;
}
.post-card:hover {
  transform: translateY(-4px);
  box-shadow: var(--shadow);
}
.post-card-img {
  aspect-ratio: 16/9;
  object-fit: cover;
  background: var(--border);
}
.post-card-body { padding: 1.5rem; flex: 1; display: flex; flex-direction: column; }
.post-date {
  font-size: 0.875rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
}
.post-card-title {
  font-size: 1.25rem;
  font-weight: 700;
  margin: 0 0 0.75rem;
  line-height: 1.4;
}
.post-card-snippet {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 1.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.read-more {
  margin-top: auto;
  font-weight: 600;
  color: var(--accent);
  font-size: 0.9rem;
}

/* Sidebar */
.widget {
  background: var(--bg-card);
  border: 1px solid var(--border);
  padding: 1.5rem;
  border-radius: 0.75rem;
  margin-bottom: 2rem;
}
.widget-title {
  font-size: 1.1rem;
  font-weight: 700;
  margin: 0 0 1.25rem;
  padding-bottom: 0.75rem;
  border-bottom: 2px solid var(--border);
}
.widget-title h3 { margin: 0; }
.label-size {
  display: inline-block;
  background: var(--bg-body);
  border: 1px solid var(--border);
  padding: 0.25rem 0.75rem;
  border-radius: 99px;
  font-size: 0.85rem;
  margin: 0 0.5rem 0.5rem 0;
  color: var(--text-secondary);
}
.label-size:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* Footer */
.site-footer {
  background: var(--bg-card);
  border-top: 1px solid var(--border);
  padding: 3rem 0;
  margin-top: 4rem;
  text-align: center;
  color: var(--text-secondary);
}
]]></b:skin>

<script>
//<![CDATA[
(function() {
  var savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  } else if (${config.darkMode}) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }
})();

function toggleTheme() {
  var html = document.documentElement;
  var current = html.getAttribute('data-theme');
  var next = current === 'dark' ? 'light' : 'dark';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
}
//]]>
</script>
</head>
<body>
<div class='site-container'>

  <header class='site-header'>
    <div class='header-inner'>
      <div class='header-logo'>
        <b:section id='header' maxwidgets='1' showaddelement='false'>
          <b:widget id='Header1' locked='true' title='Header' type='Header' version='2'>
            <b:widget-settings>
              <b:widget-setting name='displayUrl'/>
              <b:widget-setting name='displayHeight'>0</b:widget-setting>
              <b:widget-setting name='displayWidth'>0</b:widget-setting>
              <b:widget-setting name='useImage'>false</b:widget-setting>
              <b:widget-setting name='imagePlacement'>BEHIND</b:widget-setting>
              <b:widget-setting name='showDescription'>true</b:widget-setting>
            </b:widget-settings>
            <b:includable id='main'>
              <a class='site-title' expr:href='data:blog.homepageUrl'><data:title/></a>
            </b:includable>
          </b:widget>
        </b:section>
      </div>
      <div class='header-actions'>
        <button class='theme-btn' onclick='toggleTheme()' aria-label='Toggle Dark Mode'>
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>
        </button>
      </div>
    </div>
  </header>

  <div class='main-wrapper'>
    <main class='content-area'>
      <b:section id='main' showaddelement='true'>
        <b:widget id='Blog1' locked='true' title='Blog Posts' type='Blog' version='2'>
          <b:widget-settings>
             <b:widget-setting name='showDateHeader'>false</b:widget-setting>
          </b:widget-settings>
          
          <b:includable id='main' var='top'>
            <!-- Logic for Featured Post on Homepage -->
            <b:if cond='data:view.isHomepage'>
              <b:loop values='data:posts' var='post' index='i'>
                <b:if cond='data:i == 0'>
                  <div class='featured-post'>
                    <div class='featured-img-container'>
                      <b:if cond='data:post.featuredImage'>
                        <a expr:href='data:post.url'>
                           <img class='featured-img' expr:src='data:post.featuredImage' expr:alt='data:post.title'/>
                        </a>
                      </b:if>
                    </div>
                    <div class='featured-content'>
                      <b:if cond='data:post.labels'>
                        <span class='featured-label'><data:post.labels.first.name/></span>
                      </b:if>
                      <h2 class='featured-title'><a expr:href='data:post.url'><data:post.title/></a></h2>
                      <p class='post-card-snippet'><data:post.snippet/></p>
                      <a class='read-more' expr:href='data:post.url'>Continue Reading →</a>
                    </div>
                  </div>
                </b:if>
              </b:loop>
            </b:if>

            <div class='posts-grid'>
              <b:loop values='data:posts' var='post' index='i'>
                <!-- Skip first post on homepage to avoid duplication -->
                <b:if cond='!data:view.isHomepage or data:i != 0'>
                  <article class='post-card'>
                    <b:if cond='data:post.featuredImage'>
                      <a expr:href='data:post.url'>
                        <img class='post-card-img' expr:src='data:post.featuredImage' expr:alt='data:post.title'/>
                      </a>
                    </b:if>
                    <div class='post-card-body'>
                      <div class='post-date'><data:post.date/></div>
                      <h3 class='post-card-title'><a expr:href='data:post.url'><data:post.title/></a></h3>
                      <p class='post-card-snippet'><data:post.snippet/></p>
                      <a class='read-more' expr:href='data:post.url'>Read More</a>
                    </div>
                  </article>
                </b:if>
              </b:loop>
            </div>
            
            <b:include name='nextprev'/>
          </b:includable>

          <b:includable id='nextprev'>
            <div class='blog-pager'>
              <b:if cond='data:newerPageUrl'>
                <a class='blog-pager-newer-link' expr:href='data:newerPageUrl'>&larr; Newer Posts</a>
              </b:if>
              <b:if cond='data:olderPageUrl'>
                <a class='blog-pager-older-link' expr:href='data:olderPageUrl'>Older Posts &rarr;</a>
              </b:if>
            </div>
          </b:includable>
        </b:widget>
      </b:section>
    </main>

    <aside class='sidebar-area'>
      <b:section id='sidebar' showaddelement='true'>
        <b:widget id='Label1' locked='false' title='Categories' type='Label' version='2'>
          <b:includable id='main'>
            <div class='widget-title'><h3><data:title/></h3></div>
            <div class='widget-content'>
              <b:loop values='data:labels' var='label'>
                <a class='label-size' expr:href='data:label.url'><data:label.name/></a>
              </b:loop>
            </div>
          </b:includable>
        </b:widget>
        
        <b:widget id='PopularPosts1' locked='false' title='Popular Posts' type='PopularPosts' version='2'>
          <b:widget-settings>
            <b:widget-setting name='numItems'>3</b:widget-setting>
            <b:widget-setting name='showSnippets'>false</b:widget-setting>
            <b:widget-setting name='showThumbnails'>true</b:widget-setting>
          </b:widget-settings>
        </b:widget>
      </b:section>
    </aside>
  </div>

  <footer class='site-footer'>
    <div class='footer-inner'>
      <b:section id='footer' maxwidgets='1' showaddelement='true'>
        <b:widget id='Attribution1' locked='false' title='' type='Attribution' version='2'/>
      </b:section>
      <div class='copyright'>
         &copy; <data:blog.copyrightYear/> <data:blog.title/> - Designed with Blogger Theme Studio
      </div>
    </div>
  </footer>

</div>
</body>
</html>`;
};