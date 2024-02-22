import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, MenuPage, Process, Us } from '../pages/'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/us" element={<Us />}/>
      <Route path="/process" element={<Process />}/>
      <Route path="/galery" element={<Home />}/>
      <Route path="/menu" element={<MenuPage />}/>
      <Route path="/contact" element={<Home />}/>
      <Route path="/*" element={<Home />}/>
    </Routes>
  )
}
