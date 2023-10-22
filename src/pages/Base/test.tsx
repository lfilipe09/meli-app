import React from 'react'
import { render, screen } from '@testing-library/react'
import Base from '.'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

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
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Base>Test Content</Base>} />
        </Routes>
      </BrowserRouter>
    )

    expect(screen.getByTestId('MockHeader')).toBeInTheDocument()
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })
})
