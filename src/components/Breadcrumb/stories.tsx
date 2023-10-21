import { Meta, StoryFn } from '@storybook/react'
import Breadcrumb, { BreadcrumbProps } from '.'

export default {
  title: 'Breadcrumb',
  component: Breadcrumb
} as Meta

export const Basic: StoryFn<BreadcrumbProps> = (args) => (
  <Breadcrumb {...args} />
)

Basic.args = {
  items: ['Ipod', 'Reprodutores', 'iPod touch', '32 GB']
}
