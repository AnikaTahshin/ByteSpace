import type { ReactNode } from 'react'
import styles from './InfoCard.module.css'

interface InfoCardProps {
  title?: string
  className?: string
  children: ReactNode
}

function InfoCard({ title, className, children }: InfoCardProps) {
  return (
    <div className={[styles.card, className].filter(Boolean).join(' ')}>
      {title && <p className={styles.title}>{title}</p>}
      {children}
    </div>
  )
}

export default InfoCard
