import PropTypes from 'prop-types'
import BettingElement from '../BettingElement/BettingElement'

import styles from './ExchangeRates.module.css'

const ExchangeRates = ({ rates }) => {
  return (
    <div className={styles.exchangeRates}>
      {rates.map((rate) => (
        <BettingElement
          key={rate.currency}
          {...rate}
        />
      ))}
      ...
    </div>
  )
}

ExchangeRates.propTypes = {
  rates: PropTypes.arrayOf(
    PropTypes.shape({
      currency: PropTypes.string.isRequired,
      moex: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default ExchangeRates
