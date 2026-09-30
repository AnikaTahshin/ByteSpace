import { useState } from 'react'
import styles from './CoursesPage.module.css'
import Navbar from '../Navbar/Navbar'
import CourseCard from '../CourseCard/CourseCard'
import { COURSES as BASE_COURSES } from '../../data/courses'

const PAGE_SIZE = 12
const TOTAL_PAGES = 5
const COURSES = Array.from({ length: PAGE_SIZE * TOTAL_PAGES }, (_, i) => BASE_COURSES[i % BASE_COURSES.length])

const CATEGORIES = [
  'Featured',
  'Music',
  'Drawing & Painting',
  'Marketing',
  'Animation',
  'Social Media',
  'UI/UX Design',
  'Creative Marketing',
  'Cooking',
]

function CoursesPage() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('Featured')
  const [page, setPage] = useState(1)

  const filteredCourses = COURSES.filter((course) =>
    course.title.toLowerCase().includes(query.trim().toLowerCase()),
  )
  const pageCount = Math.max(1, Math.ceil(filteredCourses.length / PAGE_SIZE))
  const currentPage = Math.min(page, pageCount)
  const visibleCourses = filteredCourses.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE,
  )

  const goToPage = (n: number) => {
    setPage(n)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className={styles.hero}>
        <Navbar active="courses" />
        <h1 className={styles.heading}>Find Your Next Course</h1>
        <div className={styles.searchRow}>
          <div className={styles.searchBox}>
            <img
              className={styles.searchIcon}
              src="/assets/images/courses/search.png"
              alt=""
            />
            <input
              className={styles.searchInput}
              type="search"
              placeholder="Search"
              aria-label="Search courses"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setPage(1)
              }}
            />
          </div>
          <button type="button" className={styles.categoryButton}>
            Courses
            <img
              className={styles.dropArrow}
              src="/assets/images/courses/drop_arrow.png"
              alt=""
            />
          </button>
        </div>
      </div>

      <section className={styles.body} aria-label="Course catalog">
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

        <div className={styles.chips} role="tablist" aria-label="Categories">
          {CATEGORIES.map((category) => (
            <button
              key={category}
              type="button"
              role="tab"
              aria-selected={activeCategory === category}
              className={[
                styles.chip,
                activeCategory === category ? styles.chipActive : undefined,
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => {
                setActiveCategory(category)
                setPage(1)
              }}
            >
              {category}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {visibleCourses.map((course, i) => (
            <a
              key={`${course.slug}-${i}`}
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

        {visibleCourses.length === 0 && (
          <p className={styles.empty}>
            No courses found for &ldquo;{query}&rdquo;.
          </p>
        )}

        {pageCount > 1 && (
          <nav className={styles.pagination} aria-label="Pagination">
            <button
              type="button"
              className={styles.pageArrow}
              disabled={currentPage === 1}
              onClick={() => goToPage(currentPage - 1)}
              aria-label="Previous page"
            >
              <img
                className={`${styles.pageArrowIcon} ${styles.pageArrowIconLeft}`}
                src="/assets/images/courses/drop_arrow.png"
                alt=""
              />
            </button>

            {Array.from({ length: pageCount }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                type="button"
                className={[
                  styles.pageNumber,
                  n === currentPage ? styles.pageNumberActive : undefined,
                ]
                  .filter(Boolean)
                  .join(' ')}
                aria-current={n === currentPage ? 'page' : undefined}
                onClick={() => goToPage(n)}
              >
                {n}
              </button>
            ))}

            <button
              type="button"
              className={styles.pageArrow}
              disabled={currentPage === pageCount}
              onClick={() => goToPage(currentPage + 1)}
              aria-label="Next page"
            >
              <img
                className={`${styles.pageArrowIcon} ${styles.pageArrowIconRight}`}
                src="/assets/images/courses/drop_arrow.png"
                alt=""
              />
            </button>
          </nav>
        )}
      </section>
    </>
  )
}

export default CoursesPage
