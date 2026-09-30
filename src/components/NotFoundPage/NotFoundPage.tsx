import styles from './NotFoundPage.module.css'
import Navbar from '../Navbar/Navbar'

function NotFoundPage() {
  return (
    <div className={styles.page}>
      <Navbar active="home" />

      <main className={styles.hero}>
        <p className={styles.code} aria-hidden="true">
          404
        </p>
        <h1 className={styles.heading}>
          The page you are looking{' '}
          <br />
          for doesn&rsquo;t exist
        </h1>
        <p className={styles.hint}>
          Try to use a correct url or go back to homepage to start again
        </p>
        <a className={styles.homeButton} href="#/">
          Back to Home
        </a>
      </main>
    </div>
  )
}

export default NotFoundPage
