import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useCallback, useEffect, useRef } from 'react';
import { BLogo } from '../components/svg/BLogo';
import { animated, useSpring } from '@react-spring/web';
import { Cli, CliCommand } from '../components/Cli';
import { Modal } from '../components/Modal';

import styles from '../styles/Home.module.scss';

export default function Home() {
  const [props, _api] = useSpring(() => ({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  }));

  const [showCliModal, setShowCliModal] = useState(false);
  const [keysPressed, setKeysPressed] = useState([]);
  const [keyPressTimeout, setKeyPressTimeout] = useState(null);

  const handleKeyPress = useCallback((event) => {
    setKeyPressTimeout(
      setTimeout(() => {
        setKeysPressed([]);
      }, 500)
    );

    if (keysPressed[0] === ' ' && event.key === 't') {
      setShowCliModal(prev => !prev);
      return setKeysPressed([]);
    }

    setKeysPressed(keysPressed => [...keysPressed, event.key]);
  }, [keysPressed]);

  const router = useRouter();

  const cliCommands: CliCommand[] = [
    {
      text: 'ls',
      value: null,
      subcommands: [
        {
          text: 'pages',
          value: null,
        },
      ],
      flags: [],
      callback: (self, outputCallback) => {
        outputCallback("blog  projects");
      }
    },
    {
      text: 'cd',
      value: null,
      subcommands: [],
      flags: [],
      callback: (self, outputCallback) => {
        if (self.value === 'blog') {
          router.push('/blog');
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
    <div className={styles.root}>
      <Head>
        <title>Benjamin Scott</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <animated.main style={props} className='h-full'>
        <section className={styles.heroSection}>
          <div className={styles.expandingSquareContainer}>
            <div className={styles.expandingSquare}></div>
          </div>
        
          <div className={styles.heroContent}>
            <h1 className={styles.mainTitle}>Benjamin Scott</h1>
            <p className="text-center mb-6 animate-pulse">
              Press <code className="mx-1 py-1 px-2 rounded-md bg-background-dark">
                      {"<space>"} + t
                    </code>&nbsp;
              to open the command line
            </p>
            <p className={styles.subHeader}>Sofware Engineer</p>
            <div className={styles.iconsContainer}>
              <i aria-hidden className={'fab fa-react ' + styles.iconReact}></i>
              <i
                aria-hidden
                className={'fab fa-js-square ' + styles.iconJS}
              ></i>
              <i aria-hidden className={'fas fa-code ' + styles.iconCode}></i>
              <i aria-hidden className={'fab fa-python ' + styles.iconPy}></i>
            </div>
          </div>


          <div className={styles.heroLogo}>
            <BLogo fill="#383838" height="500px" width="500px" />
          </div>
        </section>

        <footer className="flex absolute justify-end mx-auto w-full bottom-0 inset-x-0 mr-2 mb-1">
          <section className="flex gap-2">
            <a href="https://github.com/benzend">
              <i aria-hidden className="fab fa-github"></i>
            </a>
            <a href="https://www.linkedin.com/in/benjamin-scottt">
              <i aria-hidden className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:benjamin.scottt.dev+portfolio@gmail.com?subject=Hello Benjamin">
              <i aria-hidden className="fas fa-envelope"></i>
            </a>
          </section>
        </footer>
      </animated.main>

      <Modal show={showCliModal}> 
        <Cli commands={cliCommands} />
      </Modal>
    </div>
  );
}
