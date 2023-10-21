import { Meta, StoryFn } from '@storybook/react'
import ResponsiveImage, { ResponsiveImageProps } from '.'

export default {
  title: 'ResponsiveImage',
  component: ResponsiveImage
} as Meta

export const Basic: StoryFn<ResponsiveImageProps> = (args) => (
  <ResponsiveImage {...args} />
)

Basic.args = {
  width: 680,
  srcSet: `https://http2.mlstatic.com/D_914172-MLB27712281279_072018-O.jpg 1x, https://http2.mlstatic.com/D_914172-MLB27712281279_072018-F.jpg 2x`,
  src: 'https://http2.mlstatic.com/D_914172-MLB27712281279_072018-O.jpg',
  alt: 'Um ícone de lupa'
}
