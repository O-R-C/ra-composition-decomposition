import NewsItem from './NewsItem'

const data = [
  {
    title: 'Сейчас в СМИ',
    content: [
      {
        text: 'Путин упростил получение автомобильных номеров',
      },
      {
        text: 'В команде Зеленского раскрыли план реформ на Украине',
      },
      {
        text: '"Турпомощь" прокомментировала гибель десятков россиян в Анталье',
      },
      {
        text: 'Суд закрыл дело Демпартии против России',
      },
      {
        text: 'На Украине призвали создать ракеты для удара по Москве',
      },
    ],
  },
  {
    title: 'Tab 2',
    content: [
      {
        text: 'Content 2.1',
      },
      {
        text: 'Content 2.2',
      },
      {
        text: 'Content 2.3',
      },
    ],
  },
  {
    title: 'Tab 3',
    content: [
      {
        text: 'Content 3.1',
      },
      {
        text: 'Content 3.2',
      },
      {
        text: 'Content 3.3',
      },
    ],
  },
]

export default data.map((item) => new NewsItem(item))
