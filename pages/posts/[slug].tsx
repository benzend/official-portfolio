import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
// import Container from '../../components/container'
// import PostBody from '../../components/post-body'
// import Header from '../../components/header'
// import PostHeader from '../../components/post-header'
// import Layout from '../../components/layout'
import { getPostBySlug, getAllPosts, IPost } from '../../lib/api';
// import PostTitle from '../../components/post-title'
import Head from 'next/head';
// import { CMS_NAME } from '../../lib/constants'
import markdownToHtml from '../../lib/markdownToHtml';
import { PostBody } from '../../components/PostBody';

interface IPostProps {
  post: IPost;
  morePosts: IPost[];
  preview: unknown;
}

export default function Post({ post, morePosts, preview }: IPostProps) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      <PostBody content={post.content} />
    </div>
  );
  // return (
  //   <Layout preview={preview}>
  //     <Container>
  //       <Header />
  //       {router.isFallback ? (
  //         <PostTitle>Loading…</PostTitle>
  //       ) : (
  //         <>
  //           <article className="mb-32">
  //             <Head>
  //               <title>
  //                 {post.title} | Next.js Blog Example with {CMS_NAME}
  //               </title>
  //               <meta property="og:image" content={post.ogImage.url} />
  //             </Head>
  //             <PostHeader
  //               title={post.title}
  //               coverImage={post.coverImage}
  //               date={post.date}
  //               author={post.author}
  //             />
  //             <PostBody content={post.content} />
  //           </article>
  //         </>
  //       )}
  //     </Container>
  //   </Layout>
  // )
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post: IPost) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
