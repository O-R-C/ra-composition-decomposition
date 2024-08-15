import PropTypes from 'prop-types'
import styles from './Banner.module.css'

/**
 * Renders a banner component with an image and alt text.
 *
 * @param {Object} props - The properties for the banner component.
 * @param {string} props.name - The alt text for the image.
 * @param {string} props.url - The URL of the image to display.
 * @return {JSX.Element} The rendered banner component.
 */
const Banner = ({ name, url }) => {
  return (
    <div className={styles.banner}>
      <img
        src={url}
        alt={name}
      />
    </div>
  )
}

Banner.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Banner
