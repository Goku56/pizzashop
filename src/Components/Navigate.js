import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context'

const Navigate = () => {

  const {cart} = useContext(CartContext)

  const cartStyle = {
    background: "#F59E0D",
    display: 'flex',
    padding: '6px 12px',
    borderRadius: '50px'
  }

  return (
    <>
      <nav className="flex mx-auto container items-center justify-between py-4">
        <Link to="/">
          <img style={{ height:45 }} src='/images/logo.png' alt='logo'/>
        </Link>
        <ul className="flex items-center">
          <li className='ml-6'>
            <Link to="/">Home</Link>
          </li>
          <li className='ml-6'>
            <Link to="/products">Product</Link>
          </li>
          <li className='ml-6'>
            <Link to="/cart">
              <div style={cartStyle}>
                <span>
                  {cart.totalItems}
                </span>
                <img className='ml-2' src='/images/cart.png' alt='cart'/>
              </div>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigate
