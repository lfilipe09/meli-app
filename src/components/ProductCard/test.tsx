import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductCard from '.'

// Create a mock product for testing
const mockProduct = {
  img: {
    url: 'mockImageUrl',
    alt: 'Mock Alt Text'
  },
  price: '123.45',
  isFreeShipping: true,
  title: 'Mock Product Title',
  city: 'Mock City',
  condition: 'new',
  id: 'mockProductId'
}

const mockProductSecondary = {
  img: {
    url: 'mockImageUrl',
    alt: 'Mock Alt Text'
  },
  price: '123.45',
  isFreeShipping: true,
  title: 'Mock Product Title',
  city: 'Mock City',
  condition: 'old',
  id: 'mockProductId'
}

describe('<ProductCard />', () => {
  it('renders product details correctly', () => {
    render(<ProductCard {...mockProduct} />)

    // Check if product title is in the document
    const productTitle = screen.getByText(mockProduct.title)
    expect(productTitle).toBeInTheDocument()

    // Check if price is in the document
    const productPrice = screen.getByText(mockProduct.price)
    expect(productPrice).toBeInTheDocument()

    // Check if "Frete Grátis" icon is in the document when isFreeShipping is true
    const freeShippingIcon = screen.getByAltText('Frete Grátis')
    expect(freeShippingIcon).toBeInTheDocument()

    // Check if city is in the document
    const productCity = screen.getByText(mockProduct.city)
    expect(productCity).toBeInTheDocument()

    // Check if condition is in the document
    const productCondition = screen.getByText('Novo')
    expect(productCondition).toBeInTheDocument()
  })

  it('renders condition based on condition prop', () => {
    render(<ProductCard {...mockProductSecondary} />)

    // Check if the condition is rendered correctly based on the condition prop
    const productCondition = screen.getByText('Usado')
    expect(productCondition).toBeInTheDocument()
  })
})
