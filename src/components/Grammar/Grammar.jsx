import styles from './Grammar.module.css'
import pngGreen from '../../assets/green.png'

const Grammar = () => {
  return (
    <div className={styles.grammar}>
      <img
        src={pngGreen}
        alt='grammar'
      />
      <h5>
        <a href='#'>Работа над ошибками</a>
      </h5>
      <p>Смотрите на Яндексе и запоминайте</p>
    </div>
  )
}

export default Grammar
