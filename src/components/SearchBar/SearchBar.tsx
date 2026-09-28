import styles from './SearchBar.module.css'

function SearchBar() {
  return (
    <form className={styles.search} role="search" onSubmit={(e) => e.preventDefault()}>
      <svg className={styles.icon} width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-3.5-3.5" />
      </svg>
      <input
        className={styles.input}
        type="search"
        placeholder="Course, topic, creator"
        aria-label="Search courses, topics, creators"
      />
      <button className={styles.button} type="submit">Search</button>
    </form>
  )
}

export default SearchBar
