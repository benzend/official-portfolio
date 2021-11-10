import Image from 'next/image'
import Link from 'next/link';
import styles from '../styles/ProjectCard.module.css';

export const ProjectCard = ({
    img = "",
    projectTitle,
    projectDesc,
    githubLink,
    liveLink
    }) => {
    return (
        <div className={styles.root}>
            {/** Upper half  */}
            <div className={styles.imgContainer}>
                <Image layout='fill' objectFit="cover" src={img} />
            </div>

            {/** Lower half */}
            {/* <div className={styles.cardLowerHalf}>
                <div>
                    <h4 className={styles.projectTitle}>{projectTitle}</h4>
                    <p className={styles.projectDesc}>{projectDesc}</p>
                </div>

                <div className={styles.iconsContainer}>
                    {githubLink ? (
                        <Link href={githubLink}><i className={"fab fa-github " + styles.ghIcon}></i></Link>
                    ): null}
                    {liveLink ? (
                        <Link href={liveLink}><i className={"fas fa-link " + styles.liveIcon}></i></Link>
                    ): null}
                </div>
            </div> */}
        </div>
    )
}