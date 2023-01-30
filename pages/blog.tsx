import { Container } from '../components/Container';
import { getAllPosts } from '../lib/api';
import { PostType } from '../interfaces/post'
import { Avatar } from '../components/Avatar';
import Link from 'next/link';
import { DateFormatter } from '../components/DateFormatter';

interface IBlogProps {
  posts: PostType[];
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
            <div className="mb-2">
              <DateFormatter
                dateString={post.date}
                customStyles={{
                  fontStyle: 'italic',
                  fontWeight: 300,
                  color: '#666',
                  fontSize: '.8rem',
                }}
              />
            </div>
            <Link href={`/posts/${post.slug}`}>
              <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-4 hover:underline cursor-pointer">
                {post.title}
              </h2>
            </Link>

            <p className="mb-4">{post.excerpt}</p>

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
          </div>
        ))}
      </div>
    </Container>
  );
}

export function getStaticProps() {
  const posts = getAllPosts([
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
