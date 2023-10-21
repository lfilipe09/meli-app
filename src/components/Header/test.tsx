import React from 'react'
import { render, screen } from '@testing-library/react'
import Header from '.'

describe('<Header />', () => {
  it('should render the Header component with a logo', () => {
    render(<Header />)

    // Check if the logo image is rendered
    const logoElement = screen.getByAltText('Logotipo Mercado Livre')
    expect(logoElement).toBeInTheDocument()

    // Check if the search form is rendered
    const formElement = screen.getByTestId('form-search')
    expect(formElement).toBeInTheDocument()
  })

  it('should render a lazy-loaded image', () => {
    render(<Header />)

    // Check if the image has the "loading" attribute set to "lazy"
    const imageElement = screen.getByAltText('Logotipo Mercado Livre')
    expect(imageElement).toHaveAttribute('loading', 'lazy')
  })
})
