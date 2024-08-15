import PropTypes from 'prop-types'
import AppLink from '../AppLink/AppLink'
import styles from './AppLinks.module.css'

/**
 * A React component that renders a list of application links.
 *
 * @param {Object[]} appLinks - An array of objects containing link information.
 * @param {string} appLinks[].id - A unique identifier for the link.
 * @param {string} appLinks[].name - The name of the link.
 * @param {string} appLinks[].url - The URL of the link.
 * @return {JSX.Element} A JSX element representing the list of application links.
 */
const AppLinks = ({ appLinks }) => {
  return (
    <div className={styles.appLinks}>
      {appLinks.map((link) => (
        <AppLink
          key={link.id}
          name={link.name}
          url={link.url}
        />
      ))}
    </div>
  )
}

AppLinks.propTypes = {
  appLinks: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default AppLinks
