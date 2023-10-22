import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '.' // Adjust the import path to match your component's location

test('renders the Home component with Base', () => {
  render(<Home />)
  const baseElement = screen.getByTestId('base-component') // Assuming you have a data-testid on Base component
  expect(baseElement).toBeInTheDocument()
})
