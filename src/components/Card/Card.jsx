import PropTypes from 'prop-types'
import styles from './Card.module.css'

/**
 * A React functional component that renders a card element.
 *
 * @param {Object} children - The content to be rendered inside the card.
 * @return {JSX.Element} The rendered card element.
 */
const Card = ({ name, children }) => {
  return (
    <div className={styles.card}>
      <h5 className={styles.title}>{name}</h5>
      {children}
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
}

export default Card
