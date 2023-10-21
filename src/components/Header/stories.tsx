import { Meta, StoryFn } from '@storybook/react'
import Header from '.'

export default {
  title: 'Molecules/Header',
  component: Header,
  parameters: {
    backgrounds: {
      default: 'meli-main'
    }
  }
} as Meta

export const Basic: StoryFn = () => <Header />

Basic.args = {}
