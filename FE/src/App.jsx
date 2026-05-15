import { useState } from 'react'

import './App.css'
import HomePage from './pages/HomePage/HomePage'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout/MainLayout';
import Products from './pages/Products/Products';
function App() {

  return (
    <BrowserRouter>
            <Routes>

                {/* USER ROUTES */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<Products />} />
                </Route>
            </Routes>
        </BrowserRouter>
  )
}

export default App
