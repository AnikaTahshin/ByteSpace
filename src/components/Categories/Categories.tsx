import { useState } from 'react'
import styles from './Categories.module.css'

const FEATURED = 'Featured'

const PILL_ROWS = [
  ['Music', 'Drawing & Painting', 'Marketing', 'Animation', 'Social Media', 'UI/UX Design', 'Creative Marketing'],
  ['Digital Illustration', 'Film & Video', 'Crafts', 'Freelance & Entrepreneurship', 'Graphic Design', 'Photography'],
  ['Productivity', 'Web Development', 'Data Science', 'Cooking'],
]

function Categories() {
  const [active, setActive] = useState(FEATURED)

  const renderPill = (label: string) => (
    <li key={label}>
      <button
        type="button"
        className={styles.pill}
        data-active={active === label}
        onClick={() => setActive(label)}
      >
        {label}
      </button>
    </li>
  )

  return (
    <section className={styles.categories}>
      <h2 className={styles.heading1}>
        Discover Your Passion,
        <br />
        Build Your Skills
      </h2>
      <p className={styles.subtitle}>
        At Bytespace Courses, we bring you closer to life-changing knowledge.
        Explore a variety of courses across different fields, from technology
        to the arts, and make a difference in your career and life.
      </p>

      <div className={styles.pillRows}>
        {PILL_ROWS.map((row, i) => (
          <ul className={styles.row} key={row[0]}>
            {i === 0 && renderPill(FEATURED)}
            {row.map(renderPill)}
            {i === PILL_ROWS.length - 1 && (
              <li>
                <button type="button" className={styles.more}>+ More</button>
              </li>
            )}
          </ul>
        ))}
      </div>
    </section>
  )
}

export default Categories
