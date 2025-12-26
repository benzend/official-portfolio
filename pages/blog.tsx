import { useRouter } from 'next/router';
import { useState, useCallback, useEffect } from 'react';
import { Container } from '../components/Container';
import { getAllPosts } from '../lib/api';
import { PostType } from '../interfaces/post'
import { Avatar } from '../components/Avatar';
import NextLink from 'next/link';
import { DateFormatter } from '../components/DateFormatter';
import { Card, CardAnimate, CardContent, CardImage } from '../components/Card';
import { Tabs, TabList, Tab, TabPanel } from 'react-tabs'
import { Cli, CliCommand } from '../components/Cli';
import { Modal } from '../components/Modal';
import 'react-tabs/style/react-tabs.css';

interface IBlogProps {
  posts: PostType[];
}

export default function Blog({ posts }: IBlogProps) {
  const projects = [];

  const [showCliModal, setShowCliModal] = useState(false);
  const [keysPressed, setKeysPressed] = useState([]);
  const [_, setKeyPressTimeout] = useState(null);


  const handleKeyPress = useCallback((event) => {
    setKeyPressTimeout(
      setTimeout(() => {
        setKeysPressed([]);
      }, 500)
    );

    if (keysPressed[0] === ' ' && event.key === 't') {
      setTimeout(() => {
        setShowCliModal(prev => !prev);
      }, 10);
      return setKeysPressed([]);
    }

    setKeysPressed(keysPressed => [...keysPressed, event.key]);
  }, [keysPressed]);

  const router = useRouter();

  const cliCommands: CliCommand[] = [
    {
      text: 'ls',
      description: 'Lists the pages you can navigate to using `cd`',
      value: null,
      subcommands: [],
      flags: [],
      callback: (self, outputCallback) => {
        outputCallback("home");
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
        }
      }
    },
  ];

  useEffect(() => {
    // attach the event listener
    document.addEventListener('keydown', handleKeyPress);

    // remove the event listener
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return (
    <Container>
      <NextLink href="/">
        <h1 className="text-4xl md:text-7xl font-bold tracking-tighter leading-tight md:leading-none mb-10 mt-10 cursor-pointer">
          Blog Posts
        </h1>
      </NextLink>

      <Tabs>
        <TabList>
          <Tab>Home</Tab>
          <Tab>Projects</Tab>
        </TabList>

        <TabPanel className="py-10">
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {posts.map((post) => (
              <a href={`/posts/${post.slug}`} key={post.title}>
                <CardAnimate>
                  <Card className='cursor-pointer h-full'>
                    <CardImage src={post.ogImage.url} alt={post.ogImage.alt} />
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
              </a>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {projects.map((project) => (
              <div key={project.id}>{project.name}</div>
            ))}
            {!projects.length ? (
              <div>
                <h3 className='text-3xl mb-5'>Projects coming soon...</h3>
                <p>While you&apos;re waiting you can explore my <a href="https://github.com/benzend?tab=repositories" target="_blank" rel="noreferrer"><span className='text-blue cursor-pointer hover:underline'>Github</span></a></p>
              </div>
            ) : null}
          </div>
        </TabPanel>
      </Tabs>


      <Modal show={showCliModal}> 
        <Cli commands={cliCommands} handleExit={() => setShowCliModal(false)} />
      </Modal>
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
