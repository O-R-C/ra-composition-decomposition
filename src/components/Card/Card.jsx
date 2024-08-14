import PropTypes from 'prop-types'
import styles from './Card.module.css'

/**
 * A React functional component that renders a card element.
 *
 * @param {Object} children - The content to be rendered inside the card.
 * @return {JSX.Element} The rendered card element.
 */
const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Card
