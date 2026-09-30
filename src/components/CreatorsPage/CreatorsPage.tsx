import { useState } from 'react'
import styles from './CreatorsPage.module.css'
import Navbar from '../Navbar/Navbar'
import CourseCard from '../CourseCard/CourseCard'
import { COURSES } from '../../data/courses'

function CreatorsPage() {
  const [following, setFollowing] = useState(false)

  return (
    <>
      <div className={styles.hero}>
        <Navbar active="creators" />

        <div className={styles.heroContent}>
          <div className={styles.profileRow}>
            <img
              className={styles.avatar}
              src="/assets/images/creator_pic.png"
              alt="PurePearl Studio"
            />
            <div>
              <div className={styles.nameRow}>
                <h1 className={styles.name}>PurePearl Studio</h1>
                <span className={styles.creatorBadge}>Creator</span>
              </div>
              <p className={styles.tagline}>Passionate UI/UX, Web designer</p>
            </div>
          </div>

          <p className={styles.paragraph}>
            Welcome to the creative world of [Creator&apos;s Name]. Here, you&apos;ll
            discover the passion, expertise, and inspiration that drive my
            creative journey. Let&apos;s explore and learn together!
          </p>
          <p className={styles.paragraph}>
            Dive into my creative portfolio, showcasing a glimpse of my artistic
            endeavors. From digital designs to multimedia projects, each piece
            tells a unique story. Explore the world of creativity with me.
          </p>

          <div className={styles.statsRow}>
            <div className={styles.stats}>
              <span className={styles.statChip}>
                <strong>{COURSES.length}</strong> Products
              </span>
              <span className={styles.statChip}>
                <strong>{12 + (following ? 1 : 0)}</strong> Followers
              </span>
            </div>

            <button
              type="button"
              className={[
                styles.followButton,
                following ? styles.followButtonActive : undefined,
              ]
                .filter(Boolean)
                .join(' ')}
              aria-pressed={following}
              onClick={() => setFollowing((value) => !value)}
            >
              {following ? 'Following' : 'Follow'}
            </button>
          </div>
        </div>
      </div>

      <section className={styles.body} aria-label="Courses by this creator">
        <div className={styles.toolbar}>
          <div className={styles.filters}>
            <button type="button" className={styles.filterButton}>
              <img
                className={styles.buttonIcon}
                src="/assets/images/courses/filter.png"
                alt=""
              />
              Filter
            </button>
            <button type="button" className={styles.filterButton}>
              <img
                className={styles.buttonIcon}
                src="/assets/images/courses/level.png"
                alt=""
              />
              Level
            </button>
            <button type="button" className={styles.filterButton}>
              <img
                className={styles.buttonIcon}
                src="/assets/images/courses/category.png"
                alt=""
              />
              Category
            </button>
          </div>

          <button type="button" className={styles.sortButton}>
            <img
              className={styles.buttonIcon}
              src="/assets/images/courses/relevent.png"
              alt=""
            />
            Most relevant
          </button>
        </div>

        <div className={styles.grid}>
          {COURSES.map((course) => (
            <a
              key={course.slug}
              className={styles.cardLink}
              href={`#/courses/${course.slug}`}
            >
              <CourseCard
                image={course.image}
                title={course.title}
                rating={course.rating}
                author={course.author}
                level={course.level}
                price={course.price}
                note={course.note}
              />
            </a>
          ))}
        </div>
      </section>
    </>
  )
}

export default CreatorsPage
