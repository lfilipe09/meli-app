import { PriceProps } from '../types/product'

export const formatPrice = (price: PriceProps) => {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: price.currency,
    minimumFractionDigits: 2
  })

  return formatter.format(price.amount + price.decimals / 100)
}
