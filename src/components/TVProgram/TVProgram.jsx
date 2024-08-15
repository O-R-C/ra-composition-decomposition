import styles from './TVProgram.module.css'

/**
 * A React functional component that renders a TV program schedule.
 *
 * @return {JSX.Element} The rendered TV program schedule.
 */
const TVProgram = () => {
  const broadcasts = [
    {
      time: '02:00',
      broadcast: 'ТНТ.Best',
      channel: 'ТНТ International',
    },
    {
      time: '02:15',
      broadcast: 'Джинглики',
      channel: 'Карусель Int',
    },
    {
      time: '02:25',
      broadcast: 'Наедине со всеми',
      channel: 'Первый',
    },
  ]
  return (
    <div className={styles.tvProgram}>
      {broadcasts.map(({ time, broadcast, channel }) => (
        <div
          className={styles.str}
          key={time}
        >
          <div className={styles.time}>{time}</div>
          <div className={styles.broadcast}>{broadcast}</div>
          <div className={styles.channel}>{channel}</div>
        </div>
      ))}
    </div>
  )
}

TVProgram.nameElem = 'Телепрограмма'
export default TVProgram
