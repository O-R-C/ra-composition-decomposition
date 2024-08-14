import getID from './getID'

const exchangeRates = [
  {
    currency: 'USD',
    moex: true,
    amount: '63,52',
    percentage: '+0.09',
  },
  {
    currency: 'EUR',
    moex: true,
    amount: '70,86',
    percentage: '+0.14',
  },
  {
    currency: 'НЕФТЬ',
    moex: false,
    amount: '64.90',
    percentage: '+1.63',
  },
]

export default exchangeRates.map((rate) => ({ ...rate, id: getID() }))
