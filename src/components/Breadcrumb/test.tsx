import React from 'react'
import { render, screen } from '@testing-library/react'
import Breadcrumb from '.'

describe('<Breadcrumb />', () => {
  it('should render a breadcrumb with items', () => {
    const items = [
      {
        name: 'Celulares e Telefones',
        id: 'MLB1051'
      },
      {
        name: 'Celulares e Smartphones',
        id: 'MLB1055'
      }
    ]
    render(<Breadcrumb items={items} />)

    items.forEach((item) => {
      const linkElement = screen.getByText(item.name)
      expect(linkElement).toBeInTheDocument()
    })

    const activeItem = screen.getByText('Celulares e Smartphones')
    expect(activeItem).toHaveClass('breadcrumb__item--active')
  })

  it('should render a breadcrumb with a single item', () => {
    const items = [
      {
        name: 'Celulares e Telefones',
        id: 'MLB1051'
      }
    ]
    render(<Breadcrumb items={items} />)

    const linkElement = screen.getByText('Celulares e Telefones')
    expect(linkElement).toBeInTheDocument()
  })

  it('should not render a separator after the last item', () => {
    const items = [
      {
        name: 'Celulares e Telefones',
        id: 'MLB1051'
      },
      {
        name: 'Celulares e Smartphones',
        id: 'MLB1055'
      }
    ]
    render(<Breadcrumb items={items} />)

    const separators = screen.getAllByTestId('breadcrumb-separator')
    expect(separators).toHaveLength(items.length - 1)
  })
})
