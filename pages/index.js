import Head from 'next/head'
import { BLogo } from '../components/svg/BLogo'
import _projects from '../data/projects.json'
import styles from '../styles/Home.module.scss'

export default function Home() {
  return (
    <div className={styles.root}>
      <Head>
        <title>Benjamin Scott</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={styles.heroSection}>
          <div className={styles.expandingSquareContainer}>
            <div className={styles.expandingSquare}></div>
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.mainTitle}>Benjamin Scott</h1>
            <p className={styles.subHeader}>Sofware Engineer</p>
            <div className={styles.iconsContainer}>
              <i className={"fab fa-react " + styles.iconReact}></i>
              <i className={"fab fa-js-square " + styles.iconJS}></i>
              <i className={"fas fa-code " + styles.iconCode}></i>
              <i className={"fab fa-python " + styles.iconPy}></i>
            </div>
          </div>
          <div className={styles.getInTouch}>
            <a href="mailto: benjamin.scottt.dev@gmail.com">Get In Touch</a>
          </div>
          <div className={styles.heroLogo}>
            <BLogo fill='#383838' height="500px" width="500px" />
          </div>
        </section>
      </main>
    </div>
  )
}
