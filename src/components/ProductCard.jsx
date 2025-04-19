import React from 'react'
import { FaStar } from 'react-icons/fa'
import { useDispatch } from 'react-redux'
import { addtoCart } from '../redux/CartSlice'


export const ProductCard = ({product}) => {

  const dispatch = useDispatch()
  const handleAddtoCart=(e,product)=>{
    e.stopPropagation()
    e.preventDefault()
    dispatch(addtoCart(product))
    alert("Product Added Succesfully")
  }
  
  return (
    <div className='bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105' >
        <img src={product.image} alt="" className='w-full h-48 object-contain mb-4' />
        <h3 className='text-lg font-semibold'>{product.name}</h3>
        <p className='text-gray-500'>${product.price}</p>
        <div className='flex items-center mt-2'>
            <FaStar className='text-yellow-500' ></FaStar>
            <FaStar className='text-yellow-500'></FaStar>
            <FaStar className='text-yellow-500'></FaStar>
            <FaStar className='text-yellow-500'></FaStar>
        </div>
        <div className='absolute bottom-4 right-2 flex items-center justify-center bg-red-600 group text-white text-sm rounded-full hover:bg-red-700 transition-all duration-300 cursor-pointer px-4 py-2' onClick={(e) => handleAddtoCart(e, product)}>
            <span className='text-lg transform transition-transform duration-300 group-hover:-translate-x-4 group-hover:opacity-0'>+</span>
            <span className='hidden group-hover:inline-block ml-2'>Add to cart</span>
        </div>


    </div>
  )
}
