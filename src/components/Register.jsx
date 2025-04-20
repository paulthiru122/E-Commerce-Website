import React from 'react'

export const Register = ({openLogin}) => {
  return (
      <div>
          <h2 className='text-2xl font-bold mb-4'>Sign up</h2>
          <form >
              <div className='mb-4'>
                  <label className='block text-gray-700'>Name</label>
                  <input type="text" className='w-full px-3 py-2 border'  placeholder='Enter Name'/>
              </div>
              <div className='mb-4'>
                  <label className='block text-gray-700'>Email</label>
                  <input type="text" className='w-full px-3 py-2 border'  placeholder='Enter Email'/>
              </div>
              <div className='mb-4'>
                  <label className='block text-gray-700'>Password</label>
                  <input type="password" placeholder= 'Enter Password' className='w-full px-3 py-2 border' />
              </div>
             
              <div className='mb-4'>
                  <button className='w-full bg-red-600 text-white py-2' type='submit'>Sign Up</button>
              </div>
          </form>
          <div className='text-center'>
              <span className='text-gray-700'>Already Have an Account? </span>
              <button className='text-red-800' onClick={openLogin}>Login In</button>
          </div>
      </div>
    
  )
}
