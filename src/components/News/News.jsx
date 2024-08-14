import PropTypes from 'prop-types'
import { useState } from 'react'
import Tabs from '../Tabs/Tabs'
import NewsList from '../NewsList/NewsList'

import styles from './News.module.css'

/**
 * Renders a component that displays a list of news articles.
 *
 * @param {Object} props - The properties passed to the component.
 * @param {Array} props.news - An array of news articles.
 * @param {string} props.news[].title - The title of the news article.
 * @param {string} props.news[].id - The unique identifier of the news article.
 * @param {Array} props.news[].content - The content of the news article.
 * @return {JSX.Element} The rendered component.
 */
const News = ({ news }) => {
  const [selectedTab, setSelectedTab] = useState(0)

  const handleTabClick = (id) => {
    setSelectedTab(news.findIndex((tab) => tab.id === id))
  }

  const tabs = news.map((tab) => ({ title: tab.title, id: tab.id }))

  return (
    <div className={styles.news}>
      <Tabs
        tabs={tabs}
        onClick={handleTabClick}
        selectedTab={selectedTab}
      />
      <NewsList news={news[selectedTab].content} />
    </div>
  )
}

News.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          icon: PropTypes.string.isRequired,
        })
      ).isRequired,
    })
  ).isRequired,
}

export default News
