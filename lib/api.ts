import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';

export interface IPost {
  date: string;
  slug: string;
  content: string;
  title: string;
  coverImage: string;
  author: {
    name: string;
    picture: string;
  };
  ogImage: {
    url: string;
  };
  featured: boolean;
  excerpt: string;
}

const postsDirectory = join(process.cwd(), '_posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields = []): IPost {
  const realSlug = slug.replace(/\.md$/, '');
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug;
    }
    if (field === 'content') {
      items[field] = content;
    }

    if (typeof data[field] !== 'undefined') {
      items[field] = data[field];
    }
  });

  return items as IPost;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1: IPost, post2: IPost) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getFeaturedPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    .filter((post) => post.featured)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
