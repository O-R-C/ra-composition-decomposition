import WidgetTop from './components/WidgetTop/WidgetTop'
import WidgetMiddle from './components/WidgetMiddle/WidgetMiddle'
import WidgetBottom from './components/WidgetBottom/WidgetBottom'
import newsData from './js/newsData'
import exchangeRates from './js/exchangeRates'
import dataAppLinks from './js/dataAppLinks'
import bannerData from './js/bannerData'

function App() {
  return (
    <div className='app'>
      <WidgetTop
        news={newsData}
        exchangeRates={exchangeRates}
      />
      <WidgetMiddle
        appLinks={dataAppLinks}
        bannerData={bannerData}
      />
      <WidgetBottom />
    </div>
  )
}

export default App
