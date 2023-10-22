import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import FormSearch from '.'

describe('<FormSearch />', () => {
  it('should render the form with an input field and a button', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormSearch />} />
          <Route path="/items" element={<FormSearch />} />
        </Routes>
      </BrowserRouter>
    )

    const inputElement = screen.getByPlaceholderText('Nunca deixe de buscar')
    const buttonElement = screen.getByRole('button', {
      name: 'Um ícone de lupa'
    })

    expect(inputElement).toBeInTheDocument()
    expect(buttonElement).toBeInTheDocument()
  })

  it('should allow changing the input value', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormSearch />} />
          <Route path="/items" element={<FormSearch />} />
        </Routes>
      </BrowserRouter>
    )

    const inputElement = screen.getByPlaceholderText('Nunca deixe de buscar')
    await userEvent.type(inputElement, 'Test Input')

    expect(inputElement).toHaveValue('Test Input')
  })

  it('should submit the form when the button is clicked', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormSearch />} />
          <Route path="/items" element={<FormSearch />} />
        </Routes>
      </BrowserRouter>
    )

    const inputElement = screen.getByPlaceholderText('Nunca deixe de buscar')
    const buttonElement = screen.getByRole('button', {
      name: 'Um ícone de lupa'
    })

    await userEvent.type(inputElement, 'Test Input')

    await userEvent.click(buttonElement)
  })

  it('should not submit the form when the input value is empty', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FormSearch />} />
          <Route path="/items" element={<FormSearch />} />
        </Routes>
      </BrowserRouter>
    )
    const buttonElement = screen.getByRole('button', {
      name: 'Um ícone de lupa'
    })

    await userEvent.click(buttonElement)
  })

  it('should submit the form when the button is clicked', async () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route path="/items" element={<FormSearch />} />
        </Routes>
      </BrowserRouter>
    )

    const inputElement = screen.getByPlaceholderText('Nunca deixe de buscar')
    const buttonElement = screen.getByRole('button', {
      name: 'Um ícone de lupa'
    })

    await userEvent.type(inputElement, 'Test Input')

    await userEvent.click(buttonElement)
  })
})
