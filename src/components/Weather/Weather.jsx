import styles from './Weather.module.css'

/**
 * A React functional component that renders a weather element with current and forecasted temperatures.
 *
 * @return {JSX.Element} The rendered weather element.
 */
const Weather = () => {
  return (
    <div className={styles.weather}>
      <div className={styles.current}>+17°C</div>
      <div className={styles.wrapper}>
        <div className={styles.morning}>Утром +17°C</div>
        <div className={styles.day}>Днём +20°C</div>
      </div>
    </div>
  )
}

Weather.nameElem = 'Погода'

export default Weather
