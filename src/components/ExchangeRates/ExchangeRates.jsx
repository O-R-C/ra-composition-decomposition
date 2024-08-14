import PropTypes from 'prop-types'
import BettingElement from '../BettingElement/BettingElement'

import styles from './ExchangeRates.module.css'

/**
 * A React functional component that renders a list of exchange rates.
 *
 * @param {Object} rates - An array of objects containing exchange rate data.
 * @return {JSX.Element} The rendered exchange rates element.
 */
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
