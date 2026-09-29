import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import DecorShapes from './components/DecorShapes/DecorShapes'
import LogoStrip from './components/LogoStrip/LogoStrip'
import Categories from './components/Categories/Categories'
import Courses from './components/Courses/Courses'
import LearningPaths from './components/LearningPaths/LearningPaths'
import Growth from './components/Growth/Growth'
import styles from './App.module.css'

function App() {
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
    </>
  )
}

export default App
