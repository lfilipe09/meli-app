import React from 'react'
import { render, screen } from '@testing-library/react'
import Breadcrumb from '.'

describe('<Breadcrumb />', () => {
  it('should render a breadcrumb with items', () => {
    const items = ['Home', 'Category', 'Subcategory', 'Product']
    render(<Breadcrumb items={items} />)

    items.forEach((item) => {
      const linkElement = screen.getByText(item)
      expect(linkElement).toBeInTheDocument()
    })

    const activeItem = screen.getByText('Product')
    expect(activeItem).toHaveClass('breadcrumb__item--active')
  })

  it('should render a breadcrumb with a single item', () => {
    const items = ['Home']
    render(<Breadcrumb items={items} />)

    const linkElement = screen.getByText('Home')
    expect(linkElement).toBeInTheDocument()
  })

  it('should not render a separator after the last item', () => {
    const items = ['Home', 'Category', 'Subcategory', 'Product']
    render(<Breadcrumb items={items} />)

    const separators = screen.getAllByTestId('breadcrumb-separator')
    expect(separators).toHaveLength(items.length - 1)
  })
})
