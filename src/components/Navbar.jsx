import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {FaSearch,FaShoppingCart, FaUser} from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Model } from './Model'
import { Login } from './Login'
import { Register } from './Register'
import { setSearchTerm } from '../redux/ProductSlice'


export const Navbar = () => {
    const [isModelOpen,setIsModelOpen] = useState(false)
    const [isLogin,setIsLogin] = useState(true)
    const [search,setSearch] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    
    const handleSearch = (e)=>{
        e.preventDefault()
        dispatch(setSearchTerm(search))
        navigate('/filter-data')
        setSearch('')
    }



    const openSignUp = ()=>{
        setIsLogin(false)
        setIsModelOpen(true)
    }

    const openLogin = ()=>{
        setIsLogin(true)
        setIsModelOpen(true)
    }
    const products =  useSelector(state => state.cart.products)
  return (
    <nav className='bg-white shadow-md'>
        <div className='container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center'>
            <div className='text-lg font-bold'> 
                <Link to='/'> Phil-Mart </Link>
            </div>
            <div className='relative flex-1 mx-4'>
                <form onSubmit={handleSearch}> 
                    <input className='w-full border py-2 px-4' type="text" placeholder='Search Product' onChange={e => setSearch(e.target.value)} value={search} />
                    <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
                </form>
            </div>
            <div className='flex items-center space-x-4'>
                <Link to= '/cart' className='relative '> <FaShoppingCart className='text-xl'/>{products.length > 0 && (<span className='absolute top-0 text-xs w-3 left-3 bg-red-600 rounded-full flex justify-center items-center text-white'>{products.length}</span>)} </Link> 
                <button className='hidden md:block' onClick={()=>setIsModelOpen(true)} >Login | Register</button>
                <button className='block md:hidden ' onClick={()=>setIsModelOpen(true)}><FaUser/></button>
            </div>
        </div>
        <div className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
            <Link to='/'  className='hover:underline'>Home </Link>
            <Link to='/shop' className='hover:underline'>Shop </Link>
            <Link to='/' className='hover:underline'>Contact </Link>
            <Link to='/' className='hover:underline'>About </Link>
        </div>
        <Model isModelOpen={isModelOpen} setIsModelOpen={setIsModelOpen}>
            {isLogin ? <Login openSignUp={openSignUp} /> : <Register openLogin={openLogin}/>}
        </Model>
    </nav>
  )
}
