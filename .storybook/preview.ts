import type { Preview } from '@storybook/react'
import '../src/styles/global.scss'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    backgrounds: {
      default: 'meli-light',
      values: [
        {
          name: 'meli-light',
          value: '#FFFFFF'
        },
        {
          name: 'meli-dark',
          value: '#333333'
        },
        {
          name: 'meli-main',
          value: '#FFE600'
        }
      ]
    }
  }
}

export default preview
