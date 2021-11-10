import Link from 'next/link'
import styles from '../styles/Nav.module.css'
import { BLogo } from './svg/BLogo'

export const Nav = () => {
    return (
        <nav className={styles.root}>
            <div className={styles.logoWrapper} >
                <Link href="/">
                    <BLogo  />
                </Link>
            </div>
            <Link href="/"><p className={styles.navLink}>Home</p></Link>
            <Link href="/blog"><p className={styles.navLink}>Blog</p></Link>
            <Link href="/about"><p className={styles.navLink}>About</p></Link>
        </nav>
    )
}