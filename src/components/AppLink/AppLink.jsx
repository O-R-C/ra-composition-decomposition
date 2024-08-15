import PropTypes from 'prop-types'
import styles from './AppLink.module.css'

/**
 * Returns a JSX link element with the provided name and URL.
 *
 * @param {string} name - The text content of the link.
 * @param {string} url - The URL of the link.
 * @return {JSX.Element} A JSX link element.
 */
const AppLink = ({ name, url }) => {
  return (
    <a
      className={styles.appLink}
      href={url}
      target='_blank'
      rel='noreferrer'
    >
      {name}
    </a>
  )
}

AppLink.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default AppLink
