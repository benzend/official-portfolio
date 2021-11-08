import Head from 'next/head'
import { Nav } from '../components/nav'
import {useEffect, useState} from 'react'
import _projects from '../data/projects.json'
import styles from '../styles/Home.module.css'
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
  })

  console.log(projects)
  return (
    <div className={styles.root}>
      <Head>
        <title>Benjamin Scott</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
      <h1 className={styles.mainTitle}>Benjamin Scott</h1>
      <p className={styles.subHeader}>Professional Web Developer</p>
      <div className={styles.iconsContainer}>
        <i className={"fab fa-react " + styles.iconReact}></i>
        <i className={"fab fa-js-square " + styles.iconJS}></i>
        <i className={"fas fa-code " + styles.iconCode}></i>
        <i className={"fab fa-python " + styles.iconPy}></i>
      </div>
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
    </div>
  )
}
