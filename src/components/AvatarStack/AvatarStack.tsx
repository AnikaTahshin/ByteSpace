import styles from './AvatarStack.module.css'

const PALETTE = [
  'linear-gradient(135deg, #f7b733, #fc4a1a)',
  'linear-gradient(135deg, #56ab2f, #a8e063)',
  'linear-gradient(135deg, #6a11cb, #2575fc)',
  'linear-gradient(135deg, #fc466b, #3f5efb)',
  'linear-gradient(135deg, #f953c6, #b91d73)',
]

interface AvatarStackProps {

  labels: string[]

  badge?: string
}

function AvatarStack({ labels, badge }: AvatarStackProps) {
  return (
    <div className={styles.row}>
      {labels.map((label, i) => (
        <span
          key={label}
          className={styles.avatar}
          style={{ background: PALETTE[i % PALETTE.length] }}
        >
          {label}
        </span>
      ))}
      {badge && <span className={styles.badge}>{badge}</span>}
    </div>
  )
}

export default AvatarStack
