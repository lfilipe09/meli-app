import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event' // Import userEvent for better form interaction.
import FormSearch from '.'

jest.mock('react-router-dom')

describe('<FormSearch />', () => {
  it('should render the form with an input field and a button', () => {
    render(<FormSearch />)

    const inputElement = screen.getByPlaceholderText('Nunca deixe de buscar')
    const buttonElement = screen.getByRole('button', {
      name: 'Um ícone de lupa'
    })

    expect(inputElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
  })

  it('should allow changing the input value', async () => {
    render(<FormSearch />)

    const inputElement = screen.getByPlaceholderText('Nunca deixe de buscar')
    await userEvent.type(inputElement, 'Test Input')

    expect(inputElement).toHaveValue('Test Input')
  })

  it('should submit the form when the button is clicked', async () => {
    render(<FormSearch />)

    const inputElement = screen.getByPlaceholderText('Nunca deixe de buscar')
    const buttonElement = screen.getByRole('button', {
      name: 'Um ícone de lupa'
    })

    // Enter a value in the input field
    await userEvent.type(inputElement, 'Test Input')

    // Submit the form
    await userEvent.click(buttonElement)

    // You can add assertions here for form submission behavior.
    // For example, you can check if a redirection occurred.
  })
})
