import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '.'

describe('<Button />', () => {
  it('should render a button with text', () => {
    render(<Button>Click me</Button>)
    const buttonElement = screen.getByText('Click me')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should render a button without text', () => {
    render(<Button />)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
  })

  it('should execute the onClick callback when clicked', async () => {
    const onClick = jest.fn()
    render(<Button onClick={onClick}>Click me</Button>)
    const buttonElement = screen.getByText('Click me')
    await userEvent.click(buttonElement)
    expect(onClick).toHaveBeenCalled()
  })
})
