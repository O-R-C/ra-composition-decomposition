import Card from '../Card/Card'
import Cards from '../Cards/Cards'
import styles from './WidgetBottom.module.css'

const WidgetBottom = () => {
  return (
    <div className={styles.widgetBottom}>
      {Cards.map(({ name, key, element }) => (
        <Card
          key={key}
          name={name}
        >
          {element}
        </Card>
      ))}
    </div>
  )
}

export default WidgetBottom
