import Head from 'next/head';
import { Nav } from '../components/Nav';
import { BLogo } from '../components/svg/BLogo';
import { animated, useSpring } from '@react-spring/web';

import styles from '../styles/Home.module.scss';

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
      <Nav />
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
          <div className={styles.heroLogo}>
            <BLogo fill="#383838" height="500px" width="500px" />
          </div>
        </section>
        
      </animated.main>
    </div>
  );
}
