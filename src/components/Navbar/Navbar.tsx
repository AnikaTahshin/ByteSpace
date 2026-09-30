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
  return (
    <header className={styles.navbar}>
      <a className={styles.brand} href="#/">
        <img className={styles.brandMark} src="/assets/images/logo.png" alt="ByteSpace logo" />
        ByteSpace
      </a>

      <nav aria-label="Main navigation">
        <ul className={styles.links}>
          {NAV_LINKS.map(({ label, href, id }) => (
            <li key={id}>
              <a href={href} className={active === id ? styles.active : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.actions}>
        <a href="#/signup" className={styles.signIn}>Sign In</a>
        <a href="#/signup" className={styles.joinUs}>Join Us</a>
        <button type="button" className={styles.cartBtn} aria-label="Cart">
          <img className={styles.cartIcon} src="/assets/images/cart.png" alt="" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
