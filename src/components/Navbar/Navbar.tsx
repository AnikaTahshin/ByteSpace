import { useState } from 'react'
import styles from './Navbar.module.css'

const NAV_LINKS = [
  { label: 'Home', href: '#/', id: 'home' },
  { label: 'Courses', href: '#/courses', id: 'courses' },
  { label: 'Creators', href: '#/creators', id: 'creators' },
]

interface NavbarProps {
  /** id of the currently active link */
  active?: string
}

function Navbar({ active = 'home' }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.navbar}>
      <a className={styles.brand} href="#/">
        <img className={styles.brandMark} src="/assets/images/logo.png" alt="ByteSpace logo" />
        ByteSpace
      </a>

      <nav
        aria-label="Main navigation"
        className={menuOpen ? styles.navOpen : undefined}
      >
        <ul
          className={menuOpen ? `${styles.links} ${styles.linksOpen}` : styles.links}
          onClick={() => setMenuOpen(false)}
        >
          {NAV_LINKS.map(({ label, href, id }) => (
            <li key={id}>
              <a href={href} className={active === id ? styles.active : undefined}>
                {label}
              </a>
            </li>
          ))}
          <li className={styles.menuAuth}>
            <a href="#/signin">Sign In</a>
          </li>
          <li className={styles.menuAuth}>
            <a href="#/signup">Join Us</a>
          </li>
        </ul>
      </nav>

      <div className={styles.actions}>
        <a href="#/signin" className={styles.signIn}>Sign In</a>
        <a href="#/signup" className={styles.joinUs}>Join Us</a>
        <button type="button" className={styles.cartBtn} aria-label="Cart">
          <img className={styles.cartIcon} src="/assets/images/cart.png" alt="" />
        </button>
        <button
          type="button"
          className={styles.menuBtn}
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

export default Navbar
