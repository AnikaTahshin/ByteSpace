import { useEffect, useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import DecorShapes from './components/DecorShapes/DecorShapes'
import LogoStrip from './components/LogoStrip/LogoStrip'
import Categories from './components/Categories/Categories'
import Courses from './components/Courses/Courses'
import LearningPaths from './components/LearningPaths/LearningPaths'
import Growth from './components/Growth/Growth'
import CreatorCta from './components/CreatorCta/CreatorCta'
import Testimonials from './components/Testimonials/Testimonials'
import Footer from './components/Footer/Footer'
import CoursesPage from './components/CoursesPage/CoursesPage'
import CourseDetailsPage from './components/CourseDetailsPage/CourseDetailsPage'
import { getCourseBySlug } from './data/courses'
import styles from './App.module.css'

function useHashRoute() {
  const [hash, setHash] = useState(() => window.location.hash)
  useEffect(() => {
    const onHashChange = () => setHash(window.location.hash)
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])
  return hash
}

function App() {
  const hash = useHashRoute()

  if (hash.startsWith('#/courses/')) {
    const slug = hash.slice('#/courses/'.length)
    const course = getCourseBySlug(slug)
    if (course) {
      return (
        <>
          <CourseDetailsPage course={course} />
          <div className={styles.pageDivider} />
          <Footer />
        </>
      )
    }
  }

  if (hash.startsWith('#/courses')) {
    return (
      <>
        <CoursesPage />
        <div className={styles.pageDivider} />
        <Footer />
      </>
    )
  }

  return (
    <>
      <div className={styles.landing}>
        <DecorShapes />
        <Navbar />
        <main className={styles.main}>
          <Hero />
        </main>
      </div>
      <LogoStrip />
      <Categories />
      <Courses />
      <LearningPaths />
      <Growth />
      <CreatorCta />
      <Testimonials />
      <Footer />
    </>
  )
}

export default App
