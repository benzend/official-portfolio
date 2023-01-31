import { Container } from '../components/Container';
import { getAllPosts } from '../lib/api';
import { PostType } from '../interfaces/post'
import { Avatar } from '../components/Avatar';
import Link from 'next/link';
import { DateFormatter } from '../components/DateFormatter';
import { Card, CardAnimate, CardContent, CardImage } from '../components/Card';

interface IBlogProps {
  posts: PostType[];
}

export default function Blog({ posts }: IBlogProps) {
  return (
    <Container>
      <Link href="/">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-10 mt-10 cursor-pointer">
          BenjaminScott.
        </h1>
      </Link>
      <div className='grid grid-cols-3 gap-5'>
        {posts.map((post) => (
          <Link href={`/posts/${post.slug}`} key={post.title}>
            <CardAnimate>
              <Card className='cursor-pointer h-full'>
                <CardImage src={post.ogImage.url} width="200" height="100" />
                <CardContent>
                  <div className="mb-2">
                    <DateFormatter
                      dateString={post.date}
                      customStyles={{
                        fontStyle: 'italic',
                        fontWeight: 300,
                        color: 'var(--white)',
                        fontSize: '.8rem',
                      }}
                    />
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold tracking-tighter leading-tight md:leading-none mb-4">
                    {post.title}
                  </h2>

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
                </CardContent>
              </Card>
            </CardAnimate>
          </Link>
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
