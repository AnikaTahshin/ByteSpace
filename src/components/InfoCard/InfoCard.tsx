import type { ReactNode } from 'react'
import styles from './InfoCard.module.css'

interface InfoCardProps {
  title?: string
  className?: string
  children: ReactNode
}

/**
 * Reusable white floating card used across the hero.
 * Positioning is owned by the parent via `className`.
 */
function InfoCard({ title, className, children }: InfoCardProps) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(' ')}>
      {title && <p className={styles.title}>{title}</p>}
      {children}
    </div>
  )
}

export default InfoCard
