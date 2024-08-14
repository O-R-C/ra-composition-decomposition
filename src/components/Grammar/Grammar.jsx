import styles from './Grammar.module.css'

const Grammar = () => {
  return (
    <div className={styles.grammar}>
      <img
        src='src\assets\green.png'
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
