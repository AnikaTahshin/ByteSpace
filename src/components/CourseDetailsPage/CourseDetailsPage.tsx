import { useState } from 'react'
import styles from './CourseDetailsPage.module.css'
import Navbar from '../Navbar/Navbar'
import {
  COURSE_INCLUDES,
  KEY_POINTS,
  LESSONS,
  descriptionFor,
  type Course,
} from '../../data/courses'

const TABS = ['About', 'Lessons', 'Reviews']

const HIGHLIGHT_IMAGES = [
  '/assets/images/courses/course_2.png',
  '/assets/images/courses/course_3.png',
  '/assets/images/courses/course_4.png',
  '/assets/images/courses/course_5.png',
]

const MODULES = [
  {
    name: 'Module 1: Introduction to Digital Assets',
    description:
      'Immerse yourself in the captivating world of Digital Element and Navigating the Digital Landscape Toolkit. Dive into the essentials of digital asset creation.',
  },
  {
    name: 'Module 2: Design Principles for Impact',
    description:
      'Master the principles that drive impactful designs with lessons such as Color Theory in Digital Design and Typography Essentials. Elevate your visual communication skills.',
  },
  {
    name: 'Module 3: User-Centric Design Strategies',
    description:
      'Understand Design Thinking in Digital Creation and delve into User Experience (UX) Essentials. Craft digital assets with a focus on user-centric design.',
  },
  {
    name: 'Module 4: Interactive Media and Engagement',
    description:
      'Explore Dynamic Modules in Interactive Content, Interactive Presentations, and Integrating Multimedia Elements for maximum engagement in your digital endeavors.',
  },
  {
    name: 'Module 5: Project Showcase and Critique',
    description:
      'Refine your presentation skills with "Online Presentation Techniques" and embrace collaboration with Peer Critique and Collaboration. Showcase your work with confidence.',
  },
  {
    name: 'Module 6: Optimizing Digital Assets for Various Platforms',
    description:
      'Adapt your digital creations for Mobile Platform and optimize for Social Media. Ensure widespread accessibility and engagement across diverse digital landscapes.',
  },
]

const RATING_BREAKDOWN = [
  { stars: 5, count: 700 },
  { stars: 4, count: 120 },
  { stars: 3, count: 21 },
  { stars: 2, count: 12 },
  { stars: 1, count: 16 },
]

const REVIEWS = [
  {
    name: 'PurePixel Studio',
    role: 'UI/UX Designer',
    avatar: '/assets/images/courses/creator.png',
    ago: 'a year ago',
    stars: 5,
    text: 'The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!',
  },
  {
    name: 'Albert Flores',
    role: 'UI/UX Designer',
    avatar: '/assets/images/person_3.png',
    ago: 'a year ago',
    stars: 5,
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: 'Cody Fisher',
    role: 'UI/UX Designer',
    avatar: '/assets/images/person_2.png',
    ago: 'a year ago',
    stars: 5,
    text: 'The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.',
  },
  {
    name: 'Brooklyn Simmons',
    role: 'UI/UX Designer',
    avatar: '/assets/images/person_1.png',
    ago: 'a year ago',
    stars: 4,
    text: 'The lessons on optimizing digital assets for various platforms were particularly insightful. I now feel confident adapting my designs for web, mobile, and social media.',
  },
]

function Stars({ filled, total = 5 }: { filled: number; total?: number }) {
  return (
    <span className={styles.stars} aria-hidden="true">
      {'★'.repeat(filled)}
      <span className={styles.starsDim}>{'★'.repeat(total - filled)}</span>
    </span>
  )
}

function CourseDetailsPage({ course }: { course: Course }) {
  const [activeTab, setActiveTab] = useState('About')
  const [ratingFilter, setRatingFilter] = useState<number | 'all'>('all')
  const description = descriptionFor(course)

  return (
    <>
      <div className={styles.hero}>
        <Navbar active="courses" />

        <div className={styles.heroContent}>
          <div className={styles.titleRow}>
            <h1 className={styles.title}>{course.title}: A Comprehensive Guide</h1>
            <button type="button" className={styles.shareButton}>
              <img
                className={styles.shareIcon}
                src="/assets/images/courses/share.png"
                alt=""
              />
              Share
            </button>
          </div>
          <p className={styles.subtitle}>
            Unlock the Power of Digital Creation with Expert Guidance
          </p>
          <p className={styles.author}>by {course.author}</p>

          <div className={styles.metaRow}>
            <span className={styles.metaChip}>
              <img
                className={styles.metaIcon}
                src="/assets/images/courses/level.png"
                alt=""
              />
              {course.level}
            </span>
            <span className={styles.metaChip}>
              <img
                className={styles.metaIcon}
                src="/assets/images/courses/blue_star.png"
                alt=""
              />
              {course.rating} ({course.reviews} reviews)
            </span>
            <span className={styles.metaChip}>
              <img
                className={styles.metaIcon}
                src="/assets/images/courses/students.png"
                alt=""
              />
              {course.students} Student
            </span>
          </div>

          <div className={styles.heroGrid}>
            <div className={styles.videoCard}>
              <img
                className={styles.videoThumb}
                src="/assets/images/courses/video_play.png"
                alt={`${course.title} preview`}
              />
            </div>

            <aside className={styles.detailsCard}>
              <p className={styles.lessonsLabel}>
                112 Lessons <span>(24 hours)</span>
              </p>

              <ul className={styles.lessonList}>
                {LESSONS.map((lesson, i) => (
                  <li key={lesson.name} className={styles.lessonItem}>
                    <span className={styles.lessonName}>
                      {String(i + 1).padStart(2, '0')} {lesson.name}
                    </span>
                    <span className={styles.lessonDuration}>

                      {lesson.duration}
                    </span>
                  </li>
                ))}
              </ul>
              <p className={styles.moreLessons}>99 more lessons</p>

              <p className={styles.enrollNote}>
                Ready to Dive In? Enroll Now and Start Building Your Digital
                Future!
              </p>

              <p className={styles.priceRow}>
                <span className={styles.price}>${course.price}</span>
                <span className={styles.priceNote}>/{course.note}</span>
              </p>

              <button type="button" className={styles.enrollButton}>
                Enroll Now
              </button>

              <hr className={styles.divider} />

              <p className={styles.includeTitle}>This course include</p>
              <ul className={styles.includeList}>
                {COURSE_INCLUDES.map(({ icon, label }) => (
                  <li key={label} className={styles.includeItem}>
                    <img className={styles.includeIcon} src={icon} alt="" />
                    {label}
                  </li>
                ))}
              </ul>

              <hr className={styles.divider} />

              <div className={styles.instructor}>
                <img
                  className={styles.instructorAvatar}
                  src="/assets/images/courses/creator.png"
                  alt={course.author}
                />
                <div>
                  <p className={styles.instructorName}>PurePixel Studio</p>
                  <p className={styles.instructorRole}>Professional Creator</p>
                </div>
              </div>

              <p className={styles.instructorNote}>
                Ready to Dive In? Enroll Now and Start Building Your Digital
                Future.
              </p>

              <button type="button" className={styles.profileButton}>
                See Full Profile
              </button>
            </aside>
          </div>
        </div>
      </div>

      <section className={styles.body}>
        <div className={styles.bodyContent}>
        <div className={styles.tabs} role="tablist" aria-label="Course sections">
          {TABS.map((tab) => (
            <button
              key={tab}
              type="button"
              role="tab"
              aria-selected={activeTab === tab}
              className={[
                styles.tab,
                activeTab === tab ? styles.tabActive : undefined,
              ]
                .filter(Boolean)
                .join(' ')}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {activeTab === 'About' && (
          <>
            <h2 className={styles.sectionTitle}>Description</h2>
            {description.map((paragraph) => (
              <p key={paragraph.slice(0, 32)} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}

            <h2 className={styles.sectionTitle}>Streak Peak</h2>
            <div className={styles.highlightRow}>
              {HIGHLIGHT_IMAGES.map((image) => (
                <img
                  key={image}
                  className={styles.highlightImage}
                  src={image}
                  alt=""
                />
              ))}
            </div>

            <h2 className={styles.sectionTitle}>Key Points</h2>
            <ul className={styles.keyPoints}>
              {KEY_POINTS.map((point) => (
                <li key={point} className={styles.keyPoint}>
                  <img
                    className={styles.keyPointIcon}
                    src="/assets/images/tick.png"
                    alt=""
                  />
                  {point}
                </li>
              ))}
            </ul>
          </>
        )}

        {activeTab === 'Lessons' && (
          <>
            <h2 className={styles.sectionTitle}>Explore the Modules</h2>
            <p className={styles.paragraph}>
              Immerse yourself in the course content as we break down each
              module into comprehensive lessons, providing practical insights
              and hands-on experiences.
            </p>

            <h3 className={styles.subTitle}>Lesson List</h3>
            <ul className={styles.moduleList}>
              {MODULES.map((module) => (
                <li key={module.name} className={styles.moduleItem}>
                  <span className={styles.moduleIcon}>
                    <img
                      className={styles.moduleIconImg}
                      src="/assets/images/courses/video.png"
                      alt=""
                    />
                  </span>
                  <div>
                    <p className={styles.moduleName}>{module.name}</p>
                    <p className={styles.moduleDesc}>{module.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <h2 className={styles.sectionTitle}>Lesson Content</h2>
            <p className={styles.paragraph}>
              Engage with each lesson through stimulating video content,
              detailed textual explanations, and interactive elements. Download
              resources, complete assignments, and test your understanding with
              quizzes.
            </p>

            <h2 className={styles.sectionTitle}>Lesson Progress Tracking</h2>
            <p className={styles.paragraph}>
              Witness your growth as you complete lessons, with an intuitive
              progress tracking feature guiding you through your learning
              journey.
            </p>

            <div className={styles.progressCard}>
              <p className={styles.progressCardLabel}>Learning Progress</p>
              <p className={styles.progressCardValue}>55%</p>
              <div className={styles.progressCardTrack}>
                <div className={styles.progressCardFill} />
              </div>
            </div>
          </>
        )}

        {activeTab === 'Reviews' && (
          <>
            <h2 className={styles.sectionTitle}>What Learners Are Saying</h2>
            <p className={styles.paragraph}>
              Discover what our learners have to say about their experience
              with {course.title}: A Comprehensive Guide. Read reviews and
              ratings from individuals who have embarked on the transformative
              journey of mastering digital asset creation.
            </p>

            <div className={styles.ratingCard}>
              <div className={styles.ratingScore}>
                <p className={styles.ratingScoreLabel}>Ratings</p>
                <p className={styles.ratingScoreValue}>{course.rating}</p>
              </div>
              <div className={styles.ratingRows}>
                {RATING_BREAKDOWN.map(({ stars, count }) => (
                  <div key={stars} className={styles.ratingRow}>
                    <div className={styles.ratingBar}>
                      <div
                        className={styles.ratingBarFill}
                        style={{ width: `${(count / 700) * 100}%` }}
                      />
                    </div>
                    <span className={styles.ratingStars}>
                      <Stars filled={stars} />
                    </span>
                    <span className={styles.ratingCount}>{count}</span>
                  </div>
                ))}
              </div>
            </div>

            <h3 className={styles.subTitle}>Individual Reviews:</h3>
            <div className={styles.reviewChips} role="tablist" aria-label="Filter reviews by rating">
              {[0, 5, 4, 3, 2, 1].map((value) => (
                <button
                  key={value}
                  type="button"
                  role="tab"
                  aria-selected={ratingFilter === value}
                  className={[
                    styles.chip,
                    ratingFilter === value ? styles.chipActive : undefined,
                  ]
                    .filter(Boolean)
                    .join(' ')}
                  onClick={() => setRatingFilter(value === 0 ? 'all' : value)}
                >
                  {value === 0 ? 'All rating' : `${value}★`}
                </button>
              ))}
            </div>

            <div className={styles.reviewList}>
              {REVIEWS.filter(
                (review) =>
                  ratingFilter === 'all' || review.stars === ratingFilter,
              ).map((review) => (
                <article key={review.name} className={styles.reviewCard}>
                  <div className={styles.reviewHead}>
                    <div className={styles.reviewPerson}>
                      <img
                        className={styles.reviewAvatar}
                        src={review.avatar}
                        alt={review.name}
                      />
                      <div>
                        <p className={styles.reviewName}>{review.name}</p>
                        <p className={styles.reviewRole}>{review.role}</p>
                      </div>
                    </div>
                    <span className={styles.reviewAgo}>{review.ago}</span>
                  </div>
                  <p className={styles.reviewStarsRow}>
                    <Stars filled={review.stars} />
                  </p>
                  <p className={styles.reviewText}>{review.text}</p>
                </article>
              ))}
            </div>
          </>
        )}
        </div>
      </section>
    </>
  )
}

export default CourseDetailsPage
