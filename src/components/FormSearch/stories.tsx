import { Meta, StoryFn } from '@storybook/react'
import FormSearch from '.'

export default {
  title: 'Molecules/FormSearch',
  component: FormSearch,
  parameters: {
    backgrounds: {
      default: 'meli-main'
    }
  }
} as Meta

export const Basic: StoryFn = () => <FormSearch />
