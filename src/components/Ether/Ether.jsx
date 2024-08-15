import styles from './Ether.module.css'

/**
 * Renders a component that displays a list of broadcasts.
 *
 * @return {JSX.Element} The rendered component.
 */
const Ether = () => {
  const broadcasts = [
    {
      icon: 'play',
      broadcast: 'Управление как искусство',
      channel: 'Успех',
    },
    {
      icon: 'play',
      broadcast: 'Ночь. Мир в это время',
      channel: 'earthTV',
    },
    {
      icon: 'play',
      broadcast: 'Андрей Возн...',
      channel: 'Совершенно секретно',
    },
  ]

  return (
    <div className={styles.ether}>
      {broadcasts.map((broadcast, index) => (
        <div
          key={index}
          className={styles.str}
        >
          <div className={styles.iconPlay}></div>
          <div className={styles.broadcast}>{broadcast.broadcast}</div>
          <div className={styles.channel}>{broadcast.channel}</div>
        </div>
      ))}
    </div>
  )
}

Ether.nameElem = 'Эфир'
export default Ether
