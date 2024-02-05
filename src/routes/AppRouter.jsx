import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home } from '../pages/'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<Home />}/>
      <Route path="/process" element={<Home />}/>
      <Route path="/galery" element={<Home />}/>
      <Route path="/menu" element={<Home />}/>
      <Route path="/contact" element={<Home />}/>
      <Route path="/*" element={<Home />}/>
    </Routes>
  )
}
