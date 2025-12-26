import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), '_posts');

export interface IPost {
  slug: string;
  title: string;
  date: string;
  author?: {
    name: string;
    picture: string;
  };
  coverImage?: string;
  excerpt?: string;
  ogImage?: {
    url: string;
    alt?: string;
  };
  content?: string;
  readingTime?: string;
  featured?: boolean;
}

export function getAllPosts(fields: string[] = []): IPost[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const slugs = fs.readdirSync(postsDirectory)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));

  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post): post is IPost => post !== null)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));

  return posts;
}

export function getPostBySlug(slug: string, fields: string[] = []): IPost | null {
  try {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, `${realSlug}.md`);
    
    if (!fs.existsSync(fullPath)) {
      return null;
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const post: IPost = {
      slug: realSlug,
      title: data.title || '',
      excerpt: data.excerpt || '',
      date: data.date || '',
      author: data.author || { name: '', picture: '' },
      ogImage: data.ogImage || { url: '', alt: '' },
      featured: data.featured || false,
    };

    if (fields.includes('content')) {
      post.content = content;
      post.readingTime = calculateReadingTime(content);
    }

    return post;
  } catch (error) {
    console.error(`Error reading post ${slug}:`, error);
    return null;
  }
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs.readdirSync(postsDirectory)
    .filter(file => file.endsWith('.md'))
    .map(file => file.replace(/\.md$/, ''));
}

function calculateReadingTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}