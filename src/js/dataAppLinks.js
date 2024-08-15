import getID from './getID'

const dataAppLinks = [
  {
    name: 'Видео',
    url: '#',
  },
  {
    name: 'Картинки',
    url: '#',
  },
  {
    name: 'Новости',
    url: '#',
  },
  {
    name: 'Карты',
    url: '#',
  },
  {
    name: 'Маркет',
    url: '#',
  },
  {
    name: 'Переводчик',
    url: '#',
  },
  {
    name: 'Эфир',
    url: '#',
  },
  {
    name: 'ещё',
    url: '#',
  },
]

export default dataAppLinks.map((link) => ({ ...link, id: getID() }))
