import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Search from './pages/Search'

const RoutesApp = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/items" element={<Search />} />
      </Routes>
    </BrowserRouter>
  )
}

export default RoutesApp
