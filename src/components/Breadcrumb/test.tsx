import React from 'react'
import { render, screen } from '@testing-library/react'
import Breadcrumb from '.'

describe('<Breadcrumb />', () => {
  it('should render a breadcrumb with items', () => {
    const items = ['Home', 'Category', 'Subcategory', 'Product']
    render(<Breadcrumb items={items} />)

    // Check if each item is rendered
    items.forEach((item) => {
      const linkElement = screen.getByText(item)
      expect(linkElement).toBeInTheDocument()
    })

    // Check for the last item to have the active class
    const activeItem = screen.getByText('Product')
    expect(activeItem).toHaveClass('breadcrumb__item--active')
  })

  it('should render a breadcrumb with a single item', () => {
    const items = ['Home']
    render(<Breadcrumb items={items} />)

    // Check if the item is rendered
    const linkElement = screen.getByText('Home')
    expect(linkElement).toBeInTheDocument()
  })

  it('should not render a separator after the last item', () => {
    const items = ['Home', 'Category', 'Subcategory', 'Product']
    render(<Breadcrumb items={items} />)

    // Check if no separator is rendered after the last item
    const separators = screen.getAllByTestId('breadcrumb-separator')
    expect(separators).toHaveLength(items.length - 1)
  })
})
