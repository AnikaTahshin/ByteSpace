import { useState } from 'react'
import type { FormEvent } from 'react'
import styles from './SignUpPage.module.css'

function SignUpPage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <a className={styles.brand} href="#/" aria-label="ByteSpace home">
          <img className={styles.brandMark} src="/assets/images/logo.png" alt="" />
        </a>
      </header>

      <main className={styles.layout}>
        {/* left: pitch + course collage */}
        <div className={styles.pitch}>
          <h1 className={styles.pitchTitle}>Sign up and come in</h1>
          <p className={styles.pitchText}>
            The registration process is straightforward, uncomplicated, and
            efficient, allowing users to sign up quickly, easily, and at no
            cost.
          </p>

          <div className={styles.collage} aria-hidden="true">
            <img className={styles.shapeTorus} src="/assets/images/lime_circle_full.png" alt="" />
            <img className={styles.shapeCone} src="/assets/images/lime_cone.png" alt="" />

            <div className={styles.cardBack}>
              <img className={styles.cardBackImage} src="/assets/images/courses/course_2.png" alt="" />
              <div className={styles.cardBackBody}>
                <div>
                  <p className={styles.cardTitle}>Build Digital Asset</p>
                  <p className={styles.cardAuthor}>by popupart studio</p>
                </div>
                <span className={styles.cardRating}>
                  4.8 <img className={styles.cardStar} src="/assets/images/star_gray.png" alt="" />
                </span>
              </div>
              <div className={styles.cardMeta}>
                <span className={styles.cardLevel}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 20v-6" /><path d="M12 20V9" /><path d="M19 20V4" />
                  </svg>
                  Beginner
                </span>
                <img
                  className={styles.cardAvatars}
                  src="/assets/images/people_2.png"
                  alt=""
                />
              </div>
              <p className={styles.cardPrice}>
                $25 <span className={styles.cardPriceNote}>/Lifetime</span>
              </p>
            </div>

            <div className={styles.cardFront}>
              <img className={styles.cardFrontImage} src="/assets/images/courses/course_3.png" alt="" />
              <div className={styles.cardFrontBody}>
                <div>
                  <p className={styles.cardTitle}>the Power of Big Data</p>
                  <p className={styles.cardAuthor}>by popupart studio</p>
                </div>
                <span className={styles.cardRating}>
                  4.5 <img className={styles.cardStar} src="/assets/images/lime_star.png" alt="" />
                </span>
              </div>
              <div className={styles.cardMeta}>
                <span className={styles.cardLevel}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 20v-6" /><path d="M12 20V9" /><path d="M19 20V4" />
                  </svg>
                  Intermediate
                </span>
                <img
                  className={styles.cardAvatars}
                  src="/assets/images/people_2.png"
                  alt=""
                />
              </div>
              <p className={styles.cardPrice}>
                $25 <span className={styles.cardPriceNote}>/Lifetime</span>
              </p>
            </div>

            <img className={styles.shapeSpring} src="/assets/images/white-curve.png" alt="" />

            <div className={styles.studentsCard}>
              <p className={styles.studentsTitle}>Happy Students</p>
              <p className={styles.studentsScore}>
                4.8 (290+) <img className={styles.studentsStar} src="/assets/images/star_green.png" alt="" />
              </p>
              <img
                className={styles.studentsAvatars}
                src="/assets/images/people_2.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* right: sign-up form card */}
        <div className={styles.formCard}>
          <p className={styles.formKicker}>Create an Account</p>
          <h2 className={styles.formTitle}>
            Welcome to
            <br />
            ByteSpace
          </h2>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="signup-name">
                Full Name
              </label>
              <input
                id="signup-name"
                className={styles.input}
                type="text"
                placeholder="Jamie Davis"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="signup-email">
                Email
              </label>
              <input
                id="signup-email"
                className={styles.input}
                type="email"
                placeholder="designer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="signup-password">
                Password
              </label>
              <input
                id="signup-password"
                className={styles.input}
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={8}
                required
              />
            </div>

            <div className={styles.submitRow}>
              <button type="submit" className={styles.submitButton}>
                Continue
              </button>
            </div>
          </form>

          <p className={styles.loginLine}>
            Already have an account?{' '}
            <a className={styles.loginLink} href="#/signin">
              Login
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default SignUpPage
