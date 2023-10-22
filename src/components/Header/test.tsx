import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '.'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

describe('<Header />', () => {
  it('should render the Header component with a logo', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
    )

    const logoElement = screen.getByAltText('Logotipo Mercado Livre')
    expect(logoElement).toBeInTheDocument()

    const formElement = screen.getByTestId('form-search')
    expect(formElement).toBeInTheDocument()
  })

  it('should render a lazy-loaded image', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />} />
        </Routes>
      </BrowserRouter>
    )

    const imageElement = screen.getByAltText('Logotipo Mercado Livre')
    expect(imageElement).toHaveAttribute('loading', 'lazy')
  })
})
