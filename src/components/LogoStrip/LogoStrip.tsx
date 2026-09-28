import styles from './LogoStrip.module.css'

const LOGOS = [
  '/assets/images/icon_1.png',
  '/assets/images/icon_2.png',
  '/assets/images/icon_3.png',
  '/assets/images/icon_4.png',
  '/assets/images/logo_5.png',
]

function LogoStrip() {
  return (
    <section className={styles.strip} aria-label="Trusted by partner companies">
      <ul className={styles.list}>
        {LOGOS.map((src) => (
          <li key={src} className={styles.item}>
            <img className={styles.mark} src={src} alt="" />
            <span className={styles.name}>Logoipsum</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LogoStrip
