import { Meta, StoryFn } from '@storybook/react'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField,
  parameters: {
    backgrounds: {
      default: 'meli-main'
    }
  }
} as Meta

export const Basic: StoryFn<TextFieldProps> = (args) => <TextField {...args} />

Basic.args = {
  placeholder: 'Nunca deixe de buscar'
}
