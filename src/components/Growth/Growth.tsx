import styles from './Growth.module.css'
import InfoCard from '../InfoCard/InfoCard'

const STATS = [
  { value: '12K', label: 'Students' },
  { value: '70+', label: 'Courses' },
  { value: '16', label: 'Creators' },
]

const BENEFITS = [
  'Share Your Expertise',
  'Monetize Your Passion',
  'Flexibility and Autonomy',
  'Build a Community',
]

function CheckIcon() {
  return (
    <img
      className={styles.checkIcon}
      src="/assets/images/tick.png"
      alt=""
      aria-hidden="true"
    />
  )
}

function Growth() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {/* ---- Row 1: copy + learner visual ---- */}
        <div className={styles.row}>
          <div className={styles.copy}>
            <h2 className={styles.heading}>
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className={styles.subtitle}>
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>
            <dl className={styles.stats}>
              {STATS.map(({ value, label }) => (
                <div key={label} className={styles.stat}>
                  <dt className={styles.statValue}>{value}</dt>
                  <dd className={styles.statLabel}>{label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className={styles.stageLearner}>
            <img
              className={styles.learner}
              src="/assets/images/hero-image.png"
              alt="Student wearing headphones, smiling while holding a laptop"
            />
            <img
              className={styles.squiggleTop}
              src="/assets/images/lime_curve_1.png"
              alt=""
            />

            <InfoCard className={styles.cardCourse}>
              <img
                className={styles.courseThumb}
                src="/assets/images/course_card_back.png"
                alt=""
              />
              {/* <p className={styles.courseTitle}>Learn Figma from Scratch</p>
              <p className={styles.courseNote}>to jumpstart Skills</p>
              <div className={styles.courseTrack}>
                <div className={styles.courseFill} />
              </div>
              <div className={styles.courseMeta}>
                <span className={styles.courseLevel}>Beginner</span>
                <span className={styles.coursePrice}>$25</span>
              </div> */}
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
          </div>
        </div>

        {/* ---- Row 2: creator visual + copy ---- */}
        <div className={styles.row}>
          <div className={styles.stageCreator}>
            <img
              className={styles.creator}
              src="/assets/images/girl_img.png"
              alt="Creator wearing headphones, smiling while holding a tablet"
            />
            <img
              className={styles.squiggleMiddle}
              src="/assets/images/lime_curve_2.png"
              alt=""
            />

            <div className={styles.cardRevenue}>
              <p className={styles.cardBlueLabel}>Total Revenue</p>
              <p className={styles.cardBlueValue}>$120.29</p>
              <div className={styles.cardBlueTrack}>
                <div className={styles.cardBlueFill} />
              </div>
            </div>

            <div className={styles.cardEarning}>
             
              <div>
                <p className={styles.cardBlueLabel}>Year to Date</p>
                <p className={styles.cardBlueLabelSmall}>Earning</p>
                <p className={styles.cardBlueValue}>$1,200.38</p>
              </div>
               <span className={styles.earningChip}>+2%</span>
            </div>

            <InfoCard className={styles.cardStudents} title="Happy Students">
              <p className={styles.rating}>
                <strong>4.9</strong>
                <span>(2.4K)</span>
                <img
                  className={styles.starGreen}
                  src="/assets/images/star_green.png"
                  alt=""
                />
              </p>
              <img
                className={styles.peopleStack}
                src="/assets/images/people_2.png"
                alt="Photos of happy students"
              />
            </InfoCard>
          </div>

          <div className={styles.copy}>
            <h2 className={styles.heading}>Create &amp; Manage Courses Easily.</h2>
            <p className={styles.subtitle}>
              <strong className={styles.brand}>ByteSpace</strong> supports
              individuals or entities in the creation, publication, and
              distribution of online courses.
            </p>
            <ul className={styles.benefits}>
              {BENEFITS.map((benefit) => (
                <li key={benefit} className={styles.benefit}>
                  <CheckIcon />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Growth
