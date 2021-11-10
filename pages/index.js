import Head from 'next/head'
import { Nav } from '../components/nav'
import {useEffect, useState} from 'react';
import { BLogo } from '../components/svg/BLogo'
import _projects from '../data/projects.json'
import styles from '../styles/Home.module.scss'
import { ProjectCard } from '../components/ProjectCard'

export default function Home() {
  const [projects, setProjects] = useState(null)
  useEffect(() => {
    const getProjects = () => {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(_projects)
        }, 1000)
      })
    }
    getProjects().then(projects => setProjects(projects))
  }, [])

  return (
    <div className={styles.root}>
      <Head>
        <title>Benjamin Scott</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <main>
        <section className={styles.heroSection}>
          <div className={styles.expandingSquareContainer}>
            <div className={styles.expandingSquare}></div>
          </div>
          <div className={styles.heroContent}>
            <h1 className={styles.mainTitle}>Benjamin Scott</h1>
            <p className={styles.subHeader}>Web Developer</p>
            <div className={styles.iconsContainer}>
              <i className={"fab fa-react " + styles.iconReact}></i>
              <i className={"fab fa-js-square " + styles.iconJS}></i>
              <i className={"fas fa-code " + styles.iconCode}></i>
              <i className={"fab fa-python " + styles.iconPy}></i>
            </div>
          </div>
          <div className={styles.heroLogo}>
            <BLogo fill='#383838' height="500px" width="500px" />
          </div>
        </section>
        <section>
          <div className={styles.projectsSectionContainer}>
            <h2 className={styles.projectsTitle}>Projects</h2>
              {projects ? (
                <div className={styles.projectsContainer}>
                  {projects.map(p => {
                    return (<ProjectCard 
                      projectTitle={p.projectName}
                      projectDesc={p.projectDesc}
                      githubLink={p.githubUrl}
                      liveLink={p.liveUrl}
                      img={p.img}
                    />)
                  })}
                </div>
              ): <p>Loading...</p>}
          </div>
        </section>
      </main>
    </div>
  )
}
