import { Meta, StoryFn } from '@storybook/react'
import ProductHeader, { ProductHeaderProps } from '.'
import { formatPrice } from '../../utils/priceFormatter'

export default {
  title: 'Molecules/ProductHeader',
  component: ProductHeader
} as Meta

export const Basic: StoryFn<ProductHeaderProps> = (args) => (
  <ProductHeader {...args} />
)

Basic.args = {
  condition: 'new',
  img: {
    alt: 'Velotrol Para Crianças Motoca Velocipede Motoquinha Seguro',
    url: 'http://http2.mlstatic.com/D_698906-MLB70619232538_072023-F.jpg'
  },
  title: 'Velotrol Para Crianças Motoca Velocipede Motoquinha Seguro',
  price: formatPrice({
    currency: 'BRL',
    amount: 197,
    decimals: 39
  }),
  soldQty: 234
}
