import styles from './DecorShapes.module.css'

function DecorShapes() {
  return (
    <div className={styles.decor} aria-hidden="true">

      <img className={styles.greenSpring} src="/assets/images/green-curve.png" alt="" />

      <img className={styles.whiteSpringSmall} src="/assets/images/white-curve.png" alt="" />

      <img className={styles.donut} src="/assets/images/circle.png" alt="" />

      <img className={styles.whiteSpringLarge} src="/assets/images/white-curve.png" alt="" />

      <img className={styles.greenRectangle} src="/assets/images/green_rectangle.png" alt="" />
      <img className={styles.whiteCone} src="/assets/images/white_cone.png" alt="" />

    </div>
  )
}

export default DecorShapes
