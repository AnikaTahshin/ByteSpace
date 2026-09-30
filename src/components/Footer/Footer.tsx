import styles from './Footer.module.css'

const LINK_COLUMNS = [
  ['Featured Courses', 'Featured Categories', 'Business', 'IT', 'Design'],
  ['Development', 'Marketing', 'Photography', 'Finance', 'Sport'],
  ['Become a Creator', 'Affiliate Program', 'Contact', 'Help', 'About'],
]

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.newsletter}>
            <a className={styles.brand} href="#">
              <img
                className={styles.brandMark}
                src="/assets/images/logo.png"
                alt="ByteSpace logo"
              />
              ByteSpace
            </a>
            <p className={styles.newsletterText}>
              Stay Up to date with our latest features and releases by joining
              our newsletter.
            </p>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <input
                className={styles.input}
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button className={styles.button} type="submit">
                Search
              </button>
            </form>
            <p className={styles.legal}>
              By subscribing, you agree to our Privacy Policy and consent to
              receive updates from our company.
            </p>
          </div>

          <nav className={styles.links} aria-label="Footer navigation">
            {LINK_COLUMNS.map((column) => (
              <ul key={column[0]} className={styles.linkColumn}>
                {column.map((label) => (
                  <li key={label}>
                    <a href="#" className={styles.link}>
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © 2023 ByteSpace. All rights reserved.
          </p>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.link}>
              Privacy Policy
            </a>
            <a href="#" className={styles.link}>
              Terms of Service
            </a>
            <a href="#" className={styles.link}>
              Cookies Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
