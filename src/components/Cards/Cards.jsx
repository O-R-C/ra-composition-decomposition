import Weather from '../Weather/Weather'
import Visited from '../Visited/Visited'
import MapGermany from '../MapGermany/MapGermany'
import TVProgram from '../TVProgram/TVProgram'
import Ether from '../Ether/Ether'

const Cards = [
  {
    name: Weather.nameElem,
    key: Weather.nameElem,
    element: <Weather />,
  },
  {
    name: Visited.nameElem,
    key: Visited.nameElem,
    element: <Visited />,
  },
  {
    name: MapGermany.nameElem,
    key: MapGermany.nameElem,
    element: <MapGermany />,
  },
  {
    name: TVProgram.nameElem,
    key: TVProgram.nameElem,
    element: <TVProgram />,
  },
  {
    name: Ether.nameElem,
    key: Ether.nameElem,
    element: <Ether />,
  },
]

export default Cards
