import Link from 'next/link';
import styles from '../styles/Nav.module.scss';

export const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/blog">Blog</Link>
    </nav>
  );
};
