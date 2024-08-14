import styles from './CurrentDate.module.css'
import moment from 'moment/min/moment-with-locales'

moment.locale('ru')

/**
 * A React functional component that renders the current date.
 *
 * @return {JSX.Element} The rendered current date element.
 */
const CurrentDate = () => {
  return (
    <div className={styles.currentDate}>
      <p className={styles.text}>{moment().format('DD MMMM, dddd HH:mm')}</p>
    </div>
  )
}

export default CurrentDate
