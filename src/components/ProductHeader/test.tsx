import React from 'react'
import { render, screen } from '@testing-library/react'
import ProductHeader from '.'

const mockProduct = {
  img: {
    url: 'mockImageUrl',
    alt: 'Mock Alt Text'
  },
  price: '123.45',
  title: 'Mock Product Title',
  condition: 'new',
  soldQty: 42
}

const mockProductSecondary = {
  img: {
    url: 'mockImageUrl',
    alt: 'Mock Alt Text'
  },
  price: '123.45',
  title: 'Mock Product Title',
  condition: 'old',
  soldQty: 42
}

describe('<ProductHeader />', () => {
  it('renders product details correctly', () => {
    render(<ProductHeader {...mockProduct} />)

    // Check if product title is in the document
    const productTitle = screen.getByText(mockProduct.title)
    expect(productTitle).toBeInTheDocument()

    // Check if price is in the document
    const productPrice = screen.getByText('123')
    expect(productPrice).toBeInTheDocument()

    // Check if condition is in the document
    const productCondition = screen.getByText('Novo -')
    expect(productCondition).toBeInTheDocument()

    // Check if sold quantity is in the document
    const productSoldQty = screen.getByText('42 vendidos')
    expect(productSoldQty).toBeInTheDocument()

    // Check if "Comprar" button is in the document
    const buyButton = screen.getByText('Comprar')
    expect(buyButton).toBeInTheDocument()
  })

  it('renders condition based on condition prop', () => {
    render(<ProductHeader {...mockProductSecondary} />)

    // Check if the condition is rendered correctly based on the condition prop
    const productCondition = screen.getByText('Usado -')
    expect(productCondition).toBeInTheDocument()
  })
})
