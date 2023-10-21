import { Meta, StoryFn } from '@storybook/react'
import Button, { ButtonProps } from '.'
import magnifyingGlass from '../../../public/img/ic_Search.png'
import magnifyingGlass2x from '../../../public/img/ic_Search@2x.png'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Basic: StoryFn<ButtonProps> = (args) => <Button {...args} />

Basic.args = {
  children: (
    <img
      srcSet={`${magnifyingGlass} 1x, ${magnifyingGlass2x} 2x`}
      src={magnifyingGlass}
      alt="Um ícone de lupa"
    />
  )
}
