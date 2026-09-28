import styles from './Navbar.module.css'

function Navbar() {
  return (
    <header className={styles.navbar}>
      <a className={styles.brand} href="#">
        <img className={styles.brandMark} src="/assets/images/logo.png" alt="ByteSpace logo" />
        ByteSpace
      </a>

      <nav aria-label="Main navigation">
        <ul className={styles.links}>
          <li><a href="#" className={styles.active}>Home</a></li>
          <li><a href="#">Courses</a></li>
          <li><a href="#">Creators</a></li>
        </ul>
      </nav>

      <div className={styles.actions}>
        <a href="#" className={styles.signIn}>Sign In</a>
        <a href="#" className={styles.joinUs}>Join Us</a>
        <button type="button" className={styles.cartBtn} aria-label="Cart">
          <img className={styles.cartIcon} src="/assets/images/cart.png" alt="" />
        </button>
      </div>
    </header>
  )
}

export default Navbar
