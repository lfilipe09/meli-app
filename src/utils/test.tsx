import { formatPrice } from './priceFormatter'

describe('formatPrice', () => {
  it('formats a price with two decimals', () => {
    const price = {
      amount: 1234.56,
      currency: 'BRL',
      decimals: 2
    }

    const formattedPrice = formatPrice(price)

    expect(formattedPrice.replace(/\u00a0/g, ' ')).toEqual(
      'R$ 1.234,58'.replace(/\u00a0/g, ' ')
    )
  })

  it('formats a price with zero decimals', () => {
    const price = {
      amount: 789,
      currency: 'USD',
      decimals: 0
    }

    const formattedPrice = formatPrice(price)

    expect(formattedPrice.replace(/\u00a0/g, ' ')).toEqual(
      'US$ 789,00'.replace(/\u00a0/g, ' ')
    )
  })

  it('formats a price with different currency', () => {
    const price = {
      amount: 9876.54,
      currency: 'EUR',
      decimals: 2
    }

    const formattedPrice = formatPrice(price)

    expect(formattedPrice.replace(/\u00a0/g, ' ')).toEqual(
      '€ 9.876,56'.replace(/\u00a0/g, ' ')
    )
  })
})
