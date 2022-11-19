import Link from 'next/link'
import { usePathname } from 'next/navigation'

import styles from './styles.module.css'

export function Nav() {
  const pathName = usePathname()

  const isDiscover = pathName === '/' || pathName.includes('games')

  return (
    <nav className={styles.nav}>
      <Link className={[styles.navLink, isDiscover ? styles.navLinkActive : ''].join(' ')} href="/">
        Discover
      </Link>

      {[
        { innerText: 'Popular New Games', href: '/popular' },
        { innerText: 'Account', href: '/auth' },
      ].map(link => (
        <Link
          className={[styles.navLink, pathName.includes(link.href) ? styles.navLinkActive : ''].join(' ')}
          href={link.href}>
          {link.innerText}
        </Link>
      ))}
    </nav>
  )
}
