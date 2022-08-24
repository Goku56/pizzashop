import React from 'react'
import Products from '../Components/Products.js'

const Home = () => {
  return (
    <>
    <div className='hero py-16'>
      <div className='container mx-auto flex items-center justify-between'>
        <div className='w-1/2'>
          <h6 className='text-lg'><em>Are you hungry?</em></h6>
          <h1 className='text-3x1 md:text-6xl font-bond'>Don't wait!</h1>
          <button className='px-6 py-2 rounded-full text-white font-bond mt-4 bg-yellow-600 hover:bg-yellow-500'>Order Now</button>
        </div>
        <div className='w-1/2'>
          <img className='w-4/5' src='/images/hero-pizza.png' alt='pizza'/>
        </div>
      </div>
      </div>
      <div className='pb-24'>
        <Products/>
      </div>
    </>
  )
}

export default Home
