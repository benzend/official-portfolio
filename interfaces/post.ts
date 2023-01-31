import type { Author } from './author'

export type PostType = {
  slug: string
  title: string
  date: string
  coverImage: {
    url: string,
    alt: string
  }
  author: Author
  excerpt: string
  ogImage: {
    url: string,
    alt: string
  }
  content: string
}