
import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Navfooter from '../components/Navfooter'
import { CartProvider } from 'react-use-cart';
import Cart from '../Cart';
import CategoryCart from '../CategoryCart';
function Category() {

  return (
    <>
     {/* Navigation */}
    <Navbar/>
   
     {/* appear screen */}
      <CartProvider>
         <CategoryCart/>
      </CartProvider>
    {/* Footer */}
    <Navfooter/>
    </>
      
  )
}

export default Category