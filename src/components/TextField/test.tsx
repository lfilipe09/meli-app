import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import TextField from '.'

describe('<TextField />', () => {
  it('should render a text input', () => {
    render(<TextField />)
    const inputElement = screen.getByRole('textbox')
    expect(inputElement).toBeInTheDocument()
  })

  it('should accept an initial value', () => {
    render(<TextField initialValue="Hello" />)
    const inputElement = screen.getByRole('textbox') as HTMLInputElement
    expect(inputElement.value).toBe('Hello')
  })

  it('should allow changing the input value', () => {
    render(<TextField />)
    const inputElement = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: 'New Value' } })
    expect(inputElement.value).toBe('New Value')
  })

  it('should call the onInputChange callback when input changes', () => {
    const mockCallback = jest.fn()
    render(<TextField onInputChange={mockCallback} />)
    const inputElement = screen.getByRole('textbox') as HTMLInputElement
    fireEvent.change(inputElement, { target: { value: 'New Value' } })
    expect(mockCallback).toHaveBeenCalledWith('New Value')
  })

  it('should be disabled when disabled prop is true', () => {
    render(<TextField disabled />)
    const inputElement = screen.getByRole('textbox') as HTMLInputElement
    expect(inputElement).toBeDisabled()
  })
})
