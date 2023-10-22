import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductCard from '.'

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

    const productTitle = screen.getByText(mockProduct.title)
    expect(productTitle).toBeInTheDocument()

    const productPrice = screen.getByText(mockProduct.price)
    expect(productPrice).toBeInTheDocument()

    const freeShippingIcon = screen.getByAltText('Frete Grátis')
    expect(freeShippingIcon).toBeInTheDocument()

    const productCity = screen.getByText(mockProduct.city)
    expect(productCity).toBeInTheDocument()

    const productCondition = screen.getByText('Novo')
    expect(productCondition).toBeInTheDocument()
  })

  it('renders condition based on condition prop', () => {
    render(<ProductCard {...mockProductSecondary} />)

    const productCondition = screen.getByText('Usado')
    expect(productCondition).toBeInTheDocument()
  })
})
