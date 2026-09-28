import styles from './Hero.module.css'
import SearchBar from '../SearchBar/SearchBar'
import InfoCard from '../InfoCard/InfoCard'
import AvatarStack from '../AvatarStack/AvatarStack'

function Hero() {
  return (
    <section className={styles.hero}>
      <h1 className={styles.heading}>
        Get Access to Hundreds
        <br className={styles.headingBreak} />
        Courses Available
      </h1>
      <p className={styles.subtitle}>
        Unlock your creativity, gain valuable knowledge, and grow your business
        with our wide range of courses.
      </p>

      <SearchBar />

      <div className={styles.stage}>
        {/* Lime arch + person */}
        <img
          className={styles.arch}
          src="/assets/images/ellipse.png"
          alt=""
        />
        <img
          className={styles.person}
          src="/assets/images/hero-image.png"
          alt="Student wearing headphones, smiling while holding a laptop"
        />

        {/* Floating info cards */}
        <InfoCard className={styles.cardDesign} title="UI/UX Design">
          <p className={styles.cardNote}>200 Courses, 1000+ Students</p>
        </InfoCard>

        <InfoCard className={styles.cardProgress} title="Learning Progress">
          <p className={styles.progressValue}>55%</p>
          <div
            className={styles.progressTrack}
            role="progressbar"
            aria-valuenow={55}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Learning progress"
          >
            <div className={styles.progressFill} />
          </div>
        </InfoCard>

        <InfoCard className={styles.cardStudents} title="Happy Students">
          <p className={styles.rating}>
            <strong>4.5</strong>
            <span>(240)</span>
            <img
              className={styles.starGreen}
              src="/assets/images/star_green.png"
              alt=""
            />
          </p>
          <AvatarStack labels={['JR', 'MK', 'SA', 'TL', 'NP']} badge="3k+" />
        </InfoCard>

        
      </div>
    </section>
  )
}

export default Hero
