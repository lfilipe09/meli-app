import React from 'react'
import { render, screen } from '@testing-library/react'
import Search from '.'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'

const mockAxios = new MockAdapter(axios)

describe('<Search />', () => {
  beforeEach(() => {
    mockAxios.reset()
  })

  it('should render the loading state', async () => {
    mockAxios
      .onGet('/api/items?category=example')
      .reply(200, { response: true })

    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Search />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByTitle('Loading...')).toBeInTheDocument()
  })
})
