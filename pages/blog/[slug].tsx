import { useRouter } from 'next/router';
import { useState, useCallback, useEffect } from 'react';
import { Container } from '../../app/components/Container';
import NextLink from 'next/link';
import { PostHeader } from '../../app/components/PostHeader';
import { PostBody } from '../../app/components/PostBody';
import Layout from '../../app/components/Layout';
import { Modal } from '../../app/components/Modal';
import { Cli, CliCommand } from '../../app/components/Cli';
import { getPostBySlug, getAllPostSlugs, IPost } from '../../app/lib/markdown';

interface PostPageProps {
  post: IPost;
  morePosts: IPost[];
  preview: boolean;
}

export default function PostPage({ post, morePosts, preview }: PostPageProps) {
  const router = useRouter();
  const [showCliModal, setShowCliModal] = useState(false);

  const cliCommands: CliCommand[] = [
    {
      text: 'ls',
      description: 'Lists the pages you can navigate to using `cd`',
      value: null,
      subcommands: [],
      flags: [],
      callback: (self, outputCallback) => {
        outputCallback("home\nblog");
      }
    },
    {
      text: 'cd',
      description: 'Navigates you to the page you want to go to. Use `cd` to see where you can go',
      value: null,
      subcommands: [],
      flags: [],
      callback: (self, outputCallback) => {
        if (self.value === 'home') {
          router.push('/');
          setShowCliModal(false);
        } else if (self.value === 'blog') {
          router.push('/blog');
          setShowCliModal(false);
        }
      }
    },
  ];

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === ' ' && event.shiftKey) {
      setShowCliModal(prev => !prev);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  if (!router.isFallback && !post) {
    return <Container>404 - Post not found</Container>;
  }

  if (router.isFallback) {
    return <Container>Loading…</Container>;
  }

  return (
    <Layout preview={preview}>
      <Container>
        <NextLink href="/blog" className="hover:underline">
          ← Back to blog
        </NextLink>

        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.ogImage}
            date={post.date}
            author={post.author}
            readingTime={post.readingTime}
          />
          <PostBody content={post.content || ''} />
        </article>

        <Modal show={showCliModal}>
          <Cli commands={cliCommands} handleExit={() => setShowCliModal(false)} />
        </Modal>
      </Container>
    </Layout>
  );
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug, ['content']);

  return {
    props: {
      post,
      morePosts: [],
      preview: false,
    },
  };
}

export async function getStaticPaths() {
  const slugs = getAllPostSlugs();
  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
}