import styles from './LearningPaths.module.css'

const PATHS = [
  { label: 'Design', icon: '/assets/images/courses/icon_1.png' },
  { label: 'Development', icon: '/assets/images/courses/icon_2.png' },
  { label: 'IT & Software', icon: '/assets/images/courses/icon_3.png' },
  { label: 'Business', icon: '/assets/images/courses/icon_4.png' },
  { label: 'Marketing', icon: '/assets/images/courses/icon_5.png' },
  { label: 'Photography', icon: '/assets/images/courses/icon_6.png' },
]

function LearningPaths() {
  return (
    <section className={styles.paths}>
      <h2 className={styles.heading}>
        Explore Diverse Learning Paths at Bytespace
      </h2>
      <p className={styles.subtitle}>
        At Bytespace, we believe in empowering individuals through knowledge.
        Our diverse range of courses spans various fields, ensuring there&apos;s
        something for everyone. Unleash your potential and explore our
        carefully curated categories.
      </p>

      <ul className={styles.grid}>
        {PATHS.map(({ label, icon }) => (
          <li key={label}>
            <a href="#" className={styles.card}>
              <img className={styles.icon} src={icon} alt="" />
              <span className={styles.label}>{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default LearningPaths
