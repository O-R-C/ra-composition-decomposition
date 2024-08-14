import PropTypes from 'prop-types'
import News from '../News/News'
import Aside from '../Aside/Aside'

import styles from './WidgetTop.module.css'

const WidgetTop = ({ news }) => {
  return (
    <div className={styles.widgetTop}>
      <News news={news} />
      <Aside />
    </div>
  )
}

WidgetTop.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default WidgetTop
