import styles from './CreatorCta.module.css'

function CreatorCta() {
  return (
    <section className={styles.cta}>
      {/* decorative shapes */}
      <img
        className={styles.limeCurveLeft}
        src="/assets/images/lime_curve_2.png"
        alt=""
      />
      <img
        className={styles.whiteSquiggle}
        src="/assets/images/white-curve.png"
        alt=""
      />
      <img
        className={styles.whiteCone}
        src="/assets/images/white_cone_2.png"
        alt=""
      />
      <img
        className={styles.limeCircle}
        src="/assets/images/lime_circle.png"
        alt=""
      />
      <img
        className={styles.limeCone}
        src="/assets/images/lime_cone.png"
        alt=""
      />
      <img
        className={styles.whiteRect}
        src="/assets/images/white_rect.png"
        alt=""
      />
      <img
        className={styles.limeCurveRight}
        src="/assets/images/lime_curve_1.png"
        alt=""
      />

      <div className={styles.content}>
        <h2 className={styles.heading}>
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>
        <p className={styles.subtitle}>
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>
        <a href="#" className={styles.button}>
          Join as Creator
        </a>
      </div>
    </section>
  )
}

export default CreatorCta
