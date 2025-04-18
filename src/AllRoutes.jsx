import './App.css'
import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import {Footer} from './components/index'
import {Home, Shop} from './pages/index'

function App() {


 
  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/shop' element={<Shop/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App
