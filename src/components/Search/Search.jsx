import styles from './Search.module.css'

const Search = () => {
  return (
    <div className={styles.search}>
      <div className={styles.icon}>🔎</div>
      <input
        className={styles.input}
        type='text'
        placeholder='Search...'
      />
      <button className={styles.button}>Найти</button>
    </div>
  )
}

export default Search
