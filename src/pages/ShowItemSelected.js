import React from "react";
import { CartProvider } from 'react-use-cart';
import Itemselected from "./Itemselected";
const ShowItemSelectd=()=>{
    return (
          <>
   <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid navbar-login">
    <div class="collapse navbar-collapse" id="navbarNav">
    <ul>
             <li >
               <a href='/' id='list'>HOME</a>
             </li>
             <li >
             <a href='About' id='list'>ABOUT</a>
             </li>
             <li >
             <a href='Category' id='list'>CAKE</a>
             </li>
             <li >
             <a href='cake' id='list'>SHOP</a>
             </li>
             <li >
             <a href='Login' id='list'>LOGIN</a>
             </li>
             
           </ul>
    </div>
  </div>
   </nav>

   <div className="container item-selected">
      <CartProvider>
         <Itemselected/>

      </CartProvider>
   </div>
        </>
    )

}
export default ShowItemSelectd