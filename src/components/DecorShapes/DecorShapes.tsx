import styles from './DecorShapes.module.css'

/**
 * Decorative 3D shapes scattered around the hero.
 * Purely presentational — hidden from assistive tech.
 */
function DecorShapes() {
  return (
    <div className={styles.decor} aria-hidden="true">
      {/* Lime spring — top left */}
      <img className={styles.greenSpring} src="/assets/images/green-curve.png" alt="" />
      {/* Small white spring — mid left */}
      <img className={styles.whiteSpringSmall} src="/assets/images/white-curve.png" alt="" />
      {/* White donut — bottom left */}
      <img className={styles.donut} src="/assets/images/circle.png" alt="" />
      {/* White spring — bottom right */}
      <img className={styles.whiteSpringLarge} src="/assets/images/white-curve.png" alt="" />

      <img className={styles.greenRectangle} src="/assets/images/green_rectangle.png" alt="" />
      <img className={styles.whiteCone} src="/assets/images/white_cone.png" alt="" />
      
    </div>
  )
}

export default DecorShapes
