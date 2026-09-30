import { useState } from 'react'
import type { FormEvent } from 'react'
import page from '../SignUpPage/SignUpPage.module.css'
import styles from './SignInPage.module.css'

function SignInPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }

  return (
    <div className={page.page}>
      <header className={page.header}>
        <a className={page.brand} href="#/" aria-label="ByteSpace home">
          <img className={page.brandMark} src="/assets/images/logo.png" alt="" />
        </a>
      </header>

      <main className={page.layout}>
        {/* left: pitch + course collage */}
        <div className={page.pitch}>
          <h1 className={page.pitchTitle}>Sign in with ease</h1>
          <p className={page.pitchText}>
            Experience a seamless and efficient sign-in process that grants you
            instant access to a world of knowledge.
          </p>

          <div className={page.collage} aria-hidden="true">
            <img className={page.shapeTorus} src="/assets/images/lime_circle_full.png" alt="" />
            <img className={page.shapeCone} src="/assets/images/lime_cone.png" alt="" />

            <div className={page.cardBack}>
              <img className={page.cardBackImage} src="/assets/images/courses/course_2.png" alt="" />
              <div className={page.cardBackBody}>
                <div>
                  <p className={page.cardTitle}>Build Digital Asset</p>
                  <p className={page.cardAuthor}>by popupart studio</p>
                </div>
                <span className={page.cardRating}>
                  4.8 <img className={page.cardStar} src="/assets/images/star_gray.png" alt="" />
                </span>
              </div>
              <div className={page.cardMeta}>
                <span className={page.cardLevel}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 20v-6" /><path d="M12 20V9" /><path d="M19 20V4" />
                  </svg>
                  Beginner
                </span>
                <img
                  className={page.cardAvatars}
                  src="/assets/images/people_2.png"
                  alt=""
                />
              </div>
              <p className={page.cardPrice}>
                $25 <span className={page.cardPriceNote}>/Lifetime</span>
              </p>
            </div>

            <div className={page.cardFront}>
              <img className={page.cardFrontImage} src="/assets/images/courses/course_3.png" alt="" />
              <div className={page.cardFrontBody}>
                <div>
                  <p className={page.cardTitle}>the Power of Big Data</p>
                  <p className={page.cardAuthor}>by popupart studio</p>
                </div>
                <span className={page.cardRating}>
                  4.5 <img className={page.cardStar} src="/assets/images/lime_star.png" alt="" />
                </span>
              </div>
              <div className={page.cardMeta}>
                <span className={page.cardLevel}>
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden="true">
                    <path d="M5 20v-6" /><path d="M12 20V9" /><path d="M19 20V4" />
                  </svg>
                  Intermediate
                </span>
                <img
                  className={page.cardAvatars}
                  src="/assets/images/people_2.png"
                  alt=""
                />
              </div>
              <p className={page.cardPrice}>
                $25 <span className={page.cardPriceNote}>/Lifetime</span>
              </p>
            </div>

            <img className={page.shapeSpring} src="/assets/images/white-curve.png" alt="" />

            <div className={page.studentsCard}>
              <p className={page.studentsTitle}>Happy Students</p>
              <p className={page.studentsScore}>
                4.8 (290+) <img className={page.studentsStar} src="/assets/images/star_green.png" alt="" />
              </p>
              <img
                className={page.studentsAvatars}
                src="/assets/images/people_2.png"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* right: sign-in form card */}
        <div className={page.formCard}>
          <p className={page.formKicker}>Sign In</p>
          <h2 className={page.formTitle}>Welcome Back</h2>

          <form className={page.form} onSubmit={handleSubmit}>
            <div className={page.field}>
              <label className={page.label} htmlFor="signin-email">
                Email
              </label>
              <input
                id="signin-email"
                className={page.input}
                type="email"
                placeholder="designer@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className={page.field}>
              <label className={page.label} htmlFor="signin-password">
                Password
              </label>
              <input
                id="signin-password"
                className={page.input}
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className={page.submitRow}>
              <button type="submit" className={page.submitButton}>
                Sign In
              </button>
            </div>
          </form>

          <div className={styles.orRow}>
            <span className={styles.orLine} />
            <span className={styles.orText}>or</span>
            <span className={styles.orLine} />
          </div>

          <div className={styles.socialRow}>
            <button type="button" className={styles.socialButton} aria-label="Continue with Facebook">
              <img className={styles.socialIcon} src="/assets/images/fb.png" alt="" />
            </button>
            <button type="button" className={styles.socialButton} aria-label="Continue with Google">
              <img className={styles.socialIcon} src="/assets/images/google.png" alt="" />
            </button>
          </div>

          <p className={page.loginLine}>
            New user?{' '}
            <a className={page.loginLink} href="#/signup">
              Create an account
            </a>
          </p>
        </div>
      </main>
    </div>
  )
}

export default SignInPage
