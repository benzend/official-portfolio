import Head from 'next/head';
import { BLogo } from '../components/svg/BLogo';
import { animated, useSpring } from '@react-spring/web';
import { Cli, CliCommand } from '../components/Cli';

import styles from '../styles/Home.module.scss';

const COMMANDS: CliCommand[] = [
  {
    text: 'find',
    value: null,
    subcommands: [
      {
        text: 'page',
        value: null,
      },
    ],
    flags: [],
  }
];

export default function Home() {
  const [props, _api] = useSpring(() => ({
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  }))

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

          <Cli commands={COMMANDS} />

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
    </div>
  );
}
