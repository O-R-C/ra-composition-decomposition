import PropTypes from 'prop-types'
import News from '../News/News'
import ExchangeRates from '../ExchangeRates/ExchangeRates'
import Aside from '../Aside/Aside'

import styles from './WidgetTop.module.css'

/**
 * A React functional component that renders the top widget.
 *
 * @param {Object} news - The news data to be rendered.
 * @param {Object} exchangeRates - The exchange rates data to be rendered.
 * @return {JSX.Element} The rendered top widget element.
 */
const WidgetTop = ({ news, exchangeRates }) => {
  return (
    <div className={styles.widgetTop}>
      <div className={styles.mainContent}>
        <News news={news} />
        <ExchangeRates rates={exchangeRates} />
      </div>
      <Aside />
    </div>
  )
}

WidgetTop.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          icon: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
  exchangeRates: PropTypes.arrayOf(
    PropTypes.shape({
      currency: PropTypes.string.isRequired,
      moex: PropTypes.bool.isRequired,
      amount: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default WidgetTop
