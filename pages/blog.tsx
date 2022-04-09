import { Container } from '../components/Container';
import { getFeaturedPosts, IPost } from '../lib/api';
import { Avatar } from '../components/Avatar';
import Link from 'next/link';

interface IBlogProps {
  posts: IPost[];
}

export default function Blog({ posts }: IBlogProps) {
  return (
    <Container>
      <Link href="/">
        <h1 className="text-8xl md:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-10 mt-10 text-center md:text-left cursor-pointer">
          Blog
        </h1>
      </Link>
      {posts.map((post) => (
        <div key={post.title}>
          <Link href={`/posts/${post.slug}`}>
            <h2 className="text-xl md:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-4 text-center md:text-left hover:underline cursor-pointer">
              {post.title}
            </h2>
          </Link>
          <p className="mb-4">{post.excerpt}</p>

          <Avatar
            name={post.author.name}
            picture={post.author.picture}
            customStyles={{
              picture: { marginRight: '1rem', width: 40, height: 40 },
              name: {
                fontWeight: '500',
                fontSize: '1rem',
                fontFamily: "'Quicksand', sans-serif",
              },
            }}
          />
        </div>
      ))}
    </Container>
  );
}

export function getStaticProps() {
  const posts = getFeaturedPosts([
    'title',
    'featured',
    'excerpt',
    'ogImage',
    'author',
    'slug',
  ]);
  return {
    props: {
      posts,
    },
  };
}
