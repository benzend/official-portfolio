import { getFeaturedPosts, IPost } from '../lib/api';

interface IBlogProps {
  posts: IPost[];
}

export default function Blog({ posts }: IBlogProps) {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug}>{post.title}</div>
      ))}
    </div>
  );
}

export function getStaticProps() {
  const posts = getFeaturedPosts(['title', 'featured', 'slug']);
  return {
    props: {
      posts,
    },
  };
}
