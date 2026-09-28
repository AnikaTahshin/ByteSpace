import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import DecorShapes from './components/DecorShapes/DecorShapes'
import LogoStrip from './components/LogoStrip/LogoStrip'
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
    </>
  )
}

export default App
