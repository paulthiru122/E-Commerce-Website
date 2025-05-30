import React, { useState } from 'react'
import { BrowserRouter ,Routes,Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import {Footer} from './components/index'
import {Cart, Checkout, FilterData, Home, Order, ProductDetail, Shop} from './pages/index'


function App() {
  const [order,setOrder]= useState(null)


  return (
    <BrowserRouter>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/checkout' element={<Checkout setOrder={setOrder} />}/>
      <Route path='/order-conformation' element={<Order order={order} />}/>
      <Route path='/filter-data' element={<FilterData/>}/>
      <Route path='/product/:id' element={<ProductDetail/>}/>

    </Routes>
    <Footer/>
    </BrowserRouter>
  )
}

export default App;
