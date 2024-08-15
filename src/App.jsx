import WidgetTop from './components/WidgetTop/WidgetTop'
import WidgetMiddle from './components/WidgetMiddle/WidgetMiddle'
import newsData from './js/newsData'
import exchangeRates from './js/exchangeRates'
import dataAppLinks from './js/dataAppLinks'

function App() {
  return (
    <div className='app'>
      <WidgetTop
        news={newsData}
        exchangeRates={exchangeRates}
      />
      <WidgetMiddle appLinks={dataAppLinks} />
    </div>
  )
}

export default App
