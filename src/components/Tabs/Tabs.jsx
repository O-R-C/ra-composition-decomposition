import PropTypes from 'prop-types'
import Tab from '../Tab/Tab'
import CurrentDate from '../CurrentDate/CurrentDate'
import styles from './Tabs.module.css'

/**
 * A React component that renders a list of tabs.
 *
 * @param {object} tabs - An object containing the tabs to be rendered.
 * @param {string} tabs[].title - The title of the tab.
 * @param {string} tabs[].id - The ID of the tab.
 * @param {function} onClick - The function to be called when a tab is clicked.
 * @param {number} selectedTab - The index of the selected tab.
 * @return {JSX.Element} The JSX element representing the list of tabs.
 */
const Tabs = ({ tabs, onClick, selectedTab }) => {
  const handleTabClick = ({ target }) => {
    const btn = target.closest('button')
    if (!btn) return

    onClick(btn.dataset.id)
  }

  return (
    <div
      className={styles.tabs}
      onClick={handleTabClick}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={tab.title}
          selected={index === selectedTab}
          {...tab}
        />
      ))}

      <CurrentDate />
    </div>
  )
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClick: PropTypes.func.isRequired,
  selectedTab: PropTypes.number.isRequired,
}

export default Tabs
