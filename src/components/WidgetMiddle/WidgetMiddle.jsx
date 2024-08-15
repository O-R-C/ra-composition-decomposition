import PropTypes from 'prop-types'
import Search from '../Search/Search'
import AppLinks from '../AppLinks/AppLinks'
import Banner from '../Banner/Banner'

import styles from './WidgetMiddle.module.css'

/**
 * A React component that renders the middle widget.
 *
 * @param {Object} props - The component's props.
 * @param {Array} props.appLinks - An array of application links.
 * @param {Object} props.bannerData - An object containing banner data.
 * @return {JSX.Element} A JSX element representing the middle widget.
 */
const WidgetMiddle = ({ appLinks, bannerData }) => {
  return (
    <div className={styles.widgetMiddle}>
      <AppLinks appLinks={appLinks} />
      <Search />
      <Banner {...bannerData} />
    </div>
  )
}

WidgetMiddle.propTypes = {
  appLinks: PropTypes.array.isRequired,
  bannerData: PropTypes.object.isRequired,
}

export default WidgetMiddle
