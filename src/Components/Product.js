import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context'

const Product = ({ product }) => {
  const [isAdded, setIsAdded] = useState(false)
  const { cart, setCart } = useContext(CartContext)

  const addToCart = (event, product) => {
    event.preventDefault()
    console.log(product)
    let _cart = { ...cart }
    console.log(_cart)
    if (!_cart.items) {
      _cart.items = {}
    }
    if (_cart.items[product._id]) {
      _cart.items[product._id] += 1
    } else {
      _cart.items[product._id] = 1
    }
    
    if (!_cart.totalItems) {
      _cart.totalItems = 0
    }
    _cart.totalItems += 1
    setCart(_cart)
    setIsAdded(true)
    setTimeout(() => {
      setIsAdded(false)
    },1000)
  }

  return (
    <Link to={`/product/${product._id}`}>
      <div>
        <div className='text-center'>
          <img src={product.image} alt='pizza'/>
          <h2 className='text-lg py-2 font-bold'>{ product.name }</h2>
          <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>{ product.size }</span>
          <div className='flex justify-between items-center mt-4'>
              <span>₹ { product.price }</span>
            <button onClick={ (e) => addToCart(e, product) } disabled={isAdded} className={ `${isAdded ? "bg-green-500" : "bg-yellow-500"} py-1 px-4 rounded-full bg-yellow-500` }>ADD{ `${isAdded ? "ED":""}`}</button>
          </div>
        </div>
    </div>
    </Link>
  )
}

export default Product
