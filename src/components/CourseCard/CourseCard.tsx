import styles from './CourseCard.module.css'

export interface CourseCardProps {
  image: string
  title: string
  rating: number
  author: string
  level: string
  price: number
  note: string
}

function CourseCard({ image, title, rating, author, level, price, note }: CourseCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.media}>
        <img
          className={styles.image}
          src={image}
          alt={title}
          loading="lazy"
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
      </div>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>
          <span className={styles.rating}>
            {rating} <img className={styles.star} src="/assets/images/star_gray.png" alt="" />
          </span>
        </div>
        <p className={styles.author}>by {author}</p>

        <div className={styles.metaLine}>
          <span className={styles.level}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
              <path d="M5 20v-6" /><path d="M12 20V9" /><path d="M19 20V4" />
            </svg>
            {level}
          </span>
          <img
            className={styles.peopleStack}
            src="/assets/images/people_2.png"
            alt="Students enrolled in this course"
          />
        </div>

        <p className={styles.price}>
          ${price} <span className={styles.note}>{note}</span>
        </p>
      </div>
    </article>
  )
}

export default CourseCard
