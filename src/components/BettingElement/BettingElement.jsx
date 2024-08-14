import PropTypes from 'prop-types'

import styles from './BettingElement.module.css'

const BettingElement = ({ currency, moex, amount, percentage }) => {
  return (
    <div className={styles.bettingElement}>
      <div className={styles.currency}>{currency}</div>
      <div className={styles.moex}>{moex ? 'MOEX' : ''}</div>
      <div className={styles.amount}>{amount}</div>
      <div className={styles.percentage}>{percentage}</div>
    </div>
  )
}

BettingElement.propTypes = {
  currency: PropTypes.string.isRequired,
  moex: PropTypes.string,
  amount: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
}

export default BettingElement
