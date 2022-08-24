import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Navigate from './Components/Navigate';
import Cart from './Pages/Cart';
import SingleProduct from './Pages/SingleProduct';
import About from './Pages/About';
import ProductsPage from './Pages/ProductsPage';
import { CartContext } from './Context';
import { useEffect, useState } from 'react';


function App() {

  const [cart, setCart] = useState({})

  useEffect(() => {
    const cart = window.localStorage.getItem('cart')
    setCart(JSON.parse(cart))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  return (
    <Router>
      <CartContext.Provider value={{cart, setCart}}>  
        <Navigate />
        <Routes>
          <Route path='/' exact element={<Home/>}></Route>
          <Route path='/products' exact element={<ProductsPage/>}></Route>
          <Route path='/product/:_id' element={<SingleProduct/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
       </CartContext.Provider>
    </Router>
  );
}

export default App;
