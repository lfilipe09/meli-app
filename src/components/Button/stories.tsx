import { Meta, StoryFn } from '@storybook/react'
import Button, { ButtonProps } from '.'
import magnifyingGlass from '../../assets/img/ic_Search.png'
import magnifyingGlass2x from '../../assets/img/ic_Search@2x.png'
import ResponsiveImage from '../ResponsiveImage'

export default {
  title: 'Atoms/Button',
  component: Button
} as Meta

export const Basic: StoryFn<ButtonProps> = (args) => <Button {...args} />

Basic.args = {
  children: (
    <ResponsiveImage
      srcSet={`${magnifyingGlass} 1x, ${magnifyingGlass2x} 2x`}
      src={magnifyingGlass}
      alt="Um ícone de lupa"
      width={18}
      height={18}
    />
  )
}

export const Text: StoryFn<ButtonProps> = (args) => <Button {...args} />

Text.args = {
  children: 'Comprar',
  color: 'blue',
  size: 'full'
}
