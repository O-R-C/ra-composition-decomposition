import WidgetTop from './components/WidgetTop/WidgetTop'
import newsData from './js/newsData'
import exchangeRates from './js/exchangeRates'

function App() {
  return (
    <div className='app'>
      <WidgetTop
        news={newsData}
        exchangeRates={exchangeRates}
      />
    </div>
  )
}

export default App
