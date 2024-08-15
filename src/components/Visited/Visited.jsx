import styles from './Visited.module.css'

/**
 * A React functional component that renders a list of visited items.
 *
 * @return {JSX.Element} The rendered list of visited items.
 */
const Visited = () => {
  return (
    <div className={styles.visited}>
      <div className={styles.str}>
        <span className={styles.bold}>Недвижимость</span>о сталинках
      </div>
      <div className={styles.str}>
        <span className={styles.bold}>Маркет</span>люстры и светильники
      </div>
      <div className={styles.str}>
        <span className={styles.bold}>Авто.ру</span>привод 4х4 до 500 000
      </div>
    </div>
  )
}

Visited.nameElem = 'Посещаемое'
export default Visited
