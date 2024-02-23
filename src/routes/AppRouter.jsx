import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Contact, GaleryPage, Home, MenuPage, Process, Us } from '../pages/'

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}/>
      <Route path="/us" element={<Us />}/>
      <Route path="/process" element={<Process />}/>
      <Route path="/galery" element={<GaleryPage />}/>
      <Route path="/menu" element={<MenuPage />}/>
      <Route path="/contact" element={<Contact />}/>
      <Route path="/*" element={<Home />}/>
    </Routes>
  )
}
