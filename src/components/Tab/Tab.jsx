import PropTypes from 'prop-types'
import styles from './Tab.module.css'

/**
 * A React component that represents a tab with a title.
 *
 * @param {string} title - The title of the tab.
 * @param {string} id - The ID of the tab.
 * @param {boolean} selected - Whether the tab is selected.
 * @return {JSX.Element} The JSX element representing the tab.
 */
const Tab = ({ title, id, selected }) => {
  return (
    <div className={styles.tab}>
      <button
        className={`${styles.button} ${selected ? styles.selected : ''}`}
        data-id={id}
      >
        {title}
      </button>
    </div>
  )
}

Tab.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selected: PropTypes.bool,
}

export default Tab
