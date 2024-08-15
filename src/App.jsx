import WidgetTop from './components/WidgetTop/WidgetTop'
import WidgetMiddle from './components/WidgetMiddle/WidgetMiddle'
import newsData from './js/newsData'
import exchangeRates from './js/exchangeRates'

function App() {
  return (
    <div className='app'>
      <WidgetTop
        news={newsData}
        exchangeRates={exchangeRates}
      />
      <WidgetMiddle />
    </div>
  )
}

export default App
