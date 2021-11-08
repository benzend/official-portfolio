import Link from 'next/link'
import styles from '../styles/Nav.module.css'

export const Nav = () => {
    return (
        <nav className={styles.root}>
            <Link href="/"><p className={styles.navLink}>Home</p></Link>
            <Link href="/blog"><p className={styles.navLink}>Blog</p></Link>
            <Link href="/about"><p className={styles.navLink}>About</p></Link>
        </nav>
    )
}