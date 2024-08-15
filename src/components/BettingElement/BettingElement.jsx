import PropTypes from 'prop-types'

import styles from './BettingElement.module.css'

/**
 * A React functional component that renders a betting element.
 *
 * @param {Object} props - The component props.
 * @param {string} props.currency - The currency of the betting element.
 * @param {string} props.moex - The MOEX status of the betting element.
 * @param {string} props.amount - The amount of the betting element.
 * @param {string} props.percentage - The percentage of the betting element.
 * @return {JSX.Element} The rendered betting element.
 */
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
  moex: PropTypes.bool,
  amount: PropTypes.string.isRequired,
  percentage: PropTypes.string.isRequired,
}

export default BettingElement
