import React, { useEffect } from 'react'
import { Categories, mockData } from '../assets/MockData'
import HeroImage from '../assets/Images/hero-page.png'
import { InfoSection } from '../components/InfoSection'
import {CategorySection, ProductCard} from '../components/index'
import { setProducts } from '../redux/ProductSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Shop } from './Shop'


export const Home = () => {
  
  const dispatch = useDispatch()
  const products = useSelector(state => state.product)
  useEffect(()=>{
    dispatch(setProducts(mockData))
  },[])


  return (
    <div>
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24 '>
      <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>
          <div className='w-full md:w-3/12'>
            <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>SHOP BY CATEGORIES</div>
            <ul className='space-y-4 bg-gray-100 p-3 border '>
            {Categories.map((category,index)=>(
              <li key={index} className='flex items-center text-sm font-medium'><div className='w-2 h-2  border border-red-500  rounded-full mr-2'></div> {category} </li>))}
          </ul>
          </div>
          <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
            <img src={HeroImage} alt="hero image" className='h-full w-full' />
            <div className='absolute top-16 left-8'>
              <p className='text-gray-600 mb-4'>Code with Thiru</p>
              <h2 className='text-3xl font-bold'>WELCOME TO Phil-Mart</h2>
              <p className='bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105'>MILLIONS+PRODUCTS</p>
              <button className='mt-4'>SHOP NOW</button>
            </div>
          </div>
          <div>
          </div>
        </div>
        <InfoSection/>
        <CategorySection/>

        <div className='container mx-auto py-12'>
          <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 cursor-pointer'>
            {products.products.slice(0,5).map((product)=>(
              <ProductCard product={product} key={product.id}/>
            ))}
          </div>
        </div>
      </div>
        <Shop/>
        </div>
  )
}

