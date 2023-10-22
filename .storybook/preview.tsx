import React from 'react';
import type { Preview } from '@storybook/react'
import '../src/styles/global.scss'
import { MemoryRouter,Routes, Route } from 'react-router-dom';

const preview: Preview = {
  decorators: [
    (Story) => (
      <MemoryRouter>
      <Routes>
        <Route path="/*" element={<Story />} />
      </Routes>
    </MemoryRouter>
    ),
  ],
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
