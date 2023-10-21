import { Meta, StoryFn } from '@storybook/react'
import ProductCard, { ProductCardProps } from '.'
import { formatPrice } from '../../utils/priceFormatter'

export default {
  title: 'Molecules/ProductCard',
  component: ProductCard
} as Meta

export const Basic: StoryFn<ProductCardProps> = (args) => (
  <ProductCard {...args} />
)

Basic.args = {
  id: 'MLB3468514361',
  title: 'Velotrol Para Crianças Motoca Velocipede Motoquinha Seguro',
  price: formatPrice({
    currency: 'BRL',
    amount: 197,
    decimals: 39
  }),
  img: {
    alt: 'Velotrol Para Crianças Motoca Velocipede Motoquinha Seguro',
    url: 'http://http2.mlstatic.com/D_698906-MLB70619232538_072023-I.jpg'
  },
  condition: 'new',
  isFreeShipping: true,
  city: 'Siqueira Campos'
}
