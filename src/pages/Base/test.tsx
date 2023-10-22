import React from 'react'
import { render, screen } from '@testing-library/react'
import Base from '.'

jest.mock('../../components/Header', () => {
  return {
    __esModule: true,
    default: function MockHeader() {
      return <div data-testid="MockHeader"></div>
    }
  }
})

describe('<Base />', () => {
  it('should render Base component', () => {
    render(<Base>Test Content</Base>)

    expect(screen.getByTestId('MockHeader')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
