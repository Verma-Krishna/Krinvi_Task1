import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
export default function App() {
  return (
     <>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
       </Routes>
       </BrowserRouter>
     </>
  )
}
