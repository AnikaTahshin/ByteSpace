import styles from './Courses.module.css'
import CourseCard from '../CourseCard/CourseCard'

const COURSES = [
  { title: 'Learn Figma from Basic', image: '/assets/images/courses/course_1.png' },
  { title: 'Build Digital Asset', image: '/assets/images/courses/course_2.png' },
  { title: 'The Power of Big Data', image: '/assets/images/courses/course_3.png' },
  { title: 'Balancing Productivity and Life', image: '/assets/images/courses/course_4.png' },
  { title: 'Mastering Money Management', image: '/assets/images/courses/course_5.png' },
  { title: 'From Idea to Startup Success', image: '/assets/images/courses/course_6.png' },
]

function Courses() {
  return (
    <section className={styles.courses} aria-label="Popular courses">
      <div className={styles.grid}>
        {COURSES.map((course) => (
          <CourseCard
            key={course.title}
            image={course.image}
            title={course.title}
            rating={4.5}
            author="popupart studio"
            level="Beginner"
            price={25}
            note="Lifetime"
          />
        ))}
      </div>
    </section>
  )
}

export default Courses
