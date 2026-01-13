export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
  labels: string[];
}

export interface ThemeConfig {
  blogTitle: string;
  darkMode: boolean;
  accentColor: string;
}

export enum ViewMode {
  DESKTOP = 'DESKTOP',
  MOBILE = 'MOBILE'
}