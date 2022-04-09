import { Container } from '../components/Container';
import { getFeaturedPosts, IPost } from '../lib/api';
import { Avatar } from '../components/Avatar';
import Link from 'next/link';
import { DateFormatter } from '../components/DateFormatter';

interface IBlogProps {
  posts: IPost[];
}

export default function Blog({ posts }: IBlogProps) {
  return (
    <Container>
      <Link href="/">
        <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-tight md:leading-none mb-10 mt-10 cursor-pointer">
          Blog
        </h1>
      </Link>
      <div>
        {posts.map((post) => (
          <div key={post.title} className="mb-10">
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-4 hover:underline cursor-pointer">
                {post.title}
              </h2>
            </Link>
            <p className="mb-4">{post.excerpt}</p>

            <div className="flex flex-col sm:flex-row sm:items-center sm:gap-x-5">
              <Avatar
                name={post.author.name}
                picture={post.author.picture}
                customStyles={{
                  picture: { marginRight: '1rem', width: 30, height: 30 },
                  name: {
                    fontWeight: '500',
                    fontSize: '1rem',
                    fontFamily: "'Quicksand', sans-serif",
                  },
                }}
              />
              <DateFormatter
                dateString={post.date}
                customStyles={{
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: '#666',
                }}
              />
            </div>
          </div>
        ))}
      </div>
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
    'date',
  ]);
  return {
    props: {
      posts,
    },
  };
}
