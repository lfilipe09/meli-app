import React from 'react'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import Product from '.'

const mockAxios = new MockAdapter(axios)

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({ id: 'MLB4098103030' })
}))

describe('<Product />', () => {
  beforeEach(() => {
    mockAxios.reset()
  })

  it('should render the loading state', async () => {
    mockAxios.onGet('/api/items/MLB4098103030').reply(200, { response: true })

    render(
      <MemoryRouter>
        <Routes>
          <Route path="/" element={<Product />} />
        </Routes>
      </MemoryRouter>
    )

    expect(screen.getByTitle('Loading...')).toBeInTheDocument()
  })
})
