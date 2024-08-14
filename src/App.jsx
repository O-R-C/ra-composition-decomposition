import WidgetTop from './components/WidgetTop/WidgetTop'
import newsData from './js/newsData'

function App() {
  return (
    <div className='app'>
      <WidgetTop news={newsData} />
    </div>
  )
}

export default App
