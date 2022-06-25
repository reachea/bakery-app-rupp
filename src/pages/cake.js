import React, {useState} from 'react';
import Navbar from '../components/Navbar'
import Navfooter from '../components/Navfooter'
import Cart from '../Cart';
import { CartProvider } from 'react-use-cart';
const Cake=() =>{
 
    const [show,setShow] = useState(false);
  return (
    <>
     {/* Navigation */}
    <Navbar/>
     {/* right button*/}
            <div className='cart-item' onClick={()=>setShow(!show)}>
                <p><i class='far fa-calendar-check'></i>: item</p>
                <h6><a href='viewitem'>View Items</a></h6>
            </div>
     {/* appear screen */}
                 <CartProvider>
                      <Cart />
                 </CartProvider>
    {/* Footer */}
    <Navfooter/>
    </>
      
   
      
  )
}

export default Cake