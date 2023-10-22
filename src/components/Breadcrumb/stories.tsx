import { Meta, StoryFn } from '@storybook/react'
import Breadcrumb, { BreadcrumbProps } from '.'

export default {
  title: 'Atoms/Breadcrumb',
  component: Breadcrumb
} as Meta

export const Basic: StoryFn<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args} />
)

Basic.args = {
  items: [
    {
      name: 'Celulares e Telefones',
      id: 'MLB1051'
    },
    {
      name: 'Celulares e Smartphones',
      id: 'MLB1055'
    }
  ]
}
