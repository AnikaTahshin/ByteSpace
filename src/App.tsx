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
import CreatorsPage from './components/CreatorsPage/CreatorsPage'
import SignUpPage from './components/SignUpPage/SignUpPage'
import SignInPage from './components/SignInPage/SignInPage'
import CourseDetailsPage from './components/CourseDetailsPage/CourseDetailsPage'
import NotFoundPage from './components/NotFoundPage/NotFoundPage'
import { getCourseBySlug } from './data/courses'
import styles from './App.module.css'

function useHashRoute() {
  const [route, setRoute] = useState(() => ({
    pathname: window.location.pathname,
    hash: window.location.hash,
  }))
  useEffect(() => {
    const onRouteChange = () =>
      setRoute({
        pathname: window.location.pathname,
        hash: window.location.hash,
      })
    window.addEventListener('hashchange', onRouteChange)
    window.addEventListener('popstate', onRouteChange)
    return () => {
      window.removeEventListener('hashchange', onRouteChange)
      window.removeEventListener('popstate', onRouteChange)
    }
  }, [])
  return route
}

function App() {
  const { pathname, hash } = useHashRoute()

  // a hash route opened from a path-served url (e.g. /hhhh#/) is valid —
  // normalize the address bar back to the root so navigation keeps working
  const hashIsRoute =
    hash === '#/' ||
    hash === '#/courses' ||
    hash === '#/creators' ||
    hash === '#/signup' ||
    hash === '#/signin' ||
    /^#\/courses\/[^/]+$/.test(hash)

  useEffect(() => {
    const pathIsRoot = pathname === '/' || pathname === '/index.html'
    if (!pathIsRoot && hashIsRoute) {
      window.location.replace('/' + hash)
    }
  }, [pathname, hash, hashIsRoute])

  // this app routes through the hash only — anything typed after the base
  // url as a real path (e.g. /signin/ or /foo) has no page
  if (pathname !== '/' && pathname !== '/index.html' && !hashIsRoute) {
    return (
      <>
        <NotFoundPage />
        <div className={styles.pageDivider} />
        <Footer />
      </>
    )
  }

  if (hash.startsWith('#/courses/')) {
    const slug = hash.slice('#/courses/'.length)
    const course = getCourseBySlug(slug)
    if (!course) {
      return (
        <>
          <NotFoundPage />
          <div className={styles.pageDivider} />
          <Footer />
        </>
      )
    }
    return (
      <>
        <CourseDetailsPage course={course} />
        <div className={styles.pageDivider} />
        <Footer />
      </>
    )
  }

  if (hash === '#/signup') {
    return <SignUpPage />
  }

  if (hash === '#/signin') {
    return <SignInPage />
  }

  if (hash === '#/creators') {
    return (
      <>
        <CreatorsPage />
        <div className={styles.pageDivider} />
        <Footer />
      </>
    )
  }

  if (hash === '#/courses') {
    return (
      <>
        <CoursesPage />
        <div className={styles.pageDivider} />
        <Footer />
      </>
    )
  }

  if (hash === '' || hash === '#' || hash === '#/') {
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

  return (
    <>
      <NotFoundPage />
      <div className={styles.pageDivider} />
      <Footer />
    </>
  )
}

export default App
