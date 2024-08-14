import PropTypes from 'prop-types'

import styles from './NewsItem.module.css'

/**
 * A React functional component that renders a news item.
 *
 * @param {Object} props - The component props.
 * @param {string} props.icon - The icon for the news item.
 * @param {string} props.text - The text for the news item.
 * @return {JSX.Element} The rendered news item element.
 */
const NewsItem = ({ icon, text }) => {
  return (
    <div className={styles.newsItem}>
      <div className={styles.icon}>{icon}</div>
      <h3>
        <a href='#'>{text}</a>
      </h3>
    </div>
  )
}

export default NewsItem

NewsItem.propTypes = {
  icon: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
