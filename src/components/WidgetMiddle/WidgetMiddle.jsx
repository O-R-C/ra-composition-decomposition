import PropTypes from 'prop-types'
import Search from '../Search/Search'
import AppLinks from '../AppLinks/AppLinks'
import Banner from '../Banner/Banner'

import styles from './WidgetMiddle.module.css'

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
