import PropTypes from 'prop-types'
import NewsItem from '../NewsItem/NewsItem'
import styles from './NewsList.module.css'

/**
 * Renders a list of news items.
 *
 * @param {Object} props - The properties object.
 * @param {Array<Object>} props.news - The array of news items.
 * @param {string} props.news[].id - The unique identifier of the news item.
 * @param {string} props.news[].icon - The icon of the news item.
 * @param {string} props.news[].text - The text of the news item.
 * @return {JSX.Element} The rendered list of news items.
 */
const NewsList = ({ news }) => {
  return (
    <div className={styles.newsList}>
      {news.map((item) => (
        <NewsItem
          key={item.id}
          icon={item.icon}
          text={item.text}
        />
      ))}
    </div>
  )
}

export default NewsList

NewsList.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
}
