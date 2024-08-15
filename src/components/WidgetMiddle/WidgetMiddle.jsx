import Search from '../Search/Search'
import AppLinks from '../AppLinks/AppLinks'

import styles from './WidgetMiddle.module.css'

const WidgetMiddle = ({ appLinks }) => {
  return (
    <div className={styles.widgetMiddle}>
      <AppLinks appLinks={appLinks} />
      <Search />
    </div>
  )
}

export default WidgetMiddle
