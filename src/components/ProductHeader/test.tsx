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

    const productTitle = screen.getByText(mockProduct.title)
    expect(productTitle).toBeInTheDocument()

    const productPrice = screen.getByText('123')
    expect(productPrice).toBeInTheDocument()

    const productCondition = screen.getByText('Novo -')
    expect(productCondition).toBeInTheDocument()

    const productSoldQty = screen.getByText('42 vendidos')
    expect(productSoldQty).toBeInTheDocument()

    const buyButton = screen.getByText('Comprar')
    expect(buyButton).toBeInTheDocument()
  })

  it('renders condition based on condition prop', () => {
    render(<ProductHeader {...mockProductSecondary} />)

    const productCondition = screen.getByText('Usado -')
    expect(productCondition).toBeInTheDocument()
  })
})
