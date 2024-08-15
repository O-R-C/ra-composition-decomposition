import styles from './Search.module.css'

/**
 * A React functional component that renders a search bar with an input field and a button.
 *
 * @return {JSX.Element} The rendered search bar element.
 */
const Search = () => {
  return (
    <div className={styles.searchContainer}>
      <div className={styles.search}>
        <div className={styles.icon}>🔎</div>
        <input
          className={styles.input}
          type='text'
          placeholder='Search...'
        />
        <button className={styles.button}>Найти</button>
      </div>
      <div className={styles.example}>
        Найдётся всё. Например, <a href='#'>фаза луны сегодня</a>
      </div>
    </div>
  )
}

export default Search
