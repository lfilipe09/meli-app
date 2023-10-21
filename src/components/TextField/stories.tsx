import { Meta, StoryFn } from '@storybook/react'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField
} as Meta

export const Basic: StoryFn<TextFieldProps> = (args) => <TextField {...args} />

Basic.args = {}
