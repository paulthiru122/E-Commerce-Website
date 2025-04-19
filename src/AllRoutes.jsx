import React from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import {Footer} from './components/index'
import {Cart, Checkout, Home, Shop} from './pages/index'

function App() {

  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
