export type PriceProps = {
  currency: string
  amount: number
  decimals: number
}

export type ItemProps = {
  id: string
  title: string
  price: {
    currency: string
    amount: number
    decimals: number
  }
  picture_url: string
  condition: string
  free_shipping: boolean
  city: string
}

export type CategoryAPIProps = {
  name: string
  id: string
}

export type ItemsAPIProps = {
  query: string
  categories: CategoryAPIProps[]
  items: ItemProps[]
}
