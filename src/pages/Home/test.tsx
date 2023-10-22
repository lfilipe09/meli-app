import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '.'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

test('renders the Home component with Base', () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
  const baseElement = screen.getByTestId('base-component')
  expect(baseElement).toBeInTheDocument()
})
