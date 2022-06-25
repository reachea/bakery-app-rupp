import React from 'react'
function Navbar() {
  return (
   <>
      <div className='container-fluid header'>
           <div className='container menu'>
               <div className='list-left'>
               <p><i class="fa fa-phone"></i>: CALL US: 088</p>
               </div>
                 <div className='list-right'>
                     <ul>
                         <li><a href='/about' id='about'>ABOUT US</a></li>
                         <li><i class="fa fa-globe"></i>:LOCATION</li>
                         <li><i class="fa fa-shopping-cart"></i>:CAREER</li>
                     </ul>
                </div>
                </div>
           </div>
        <div className='container brand-shop'>
             <div className='left'>
                <ul>
                  <li id='hello'><i class='far fa-edit'></i></li>
                  <li><i class="fa fa-globe"></i></li>
                </ul>
             </div>
             <div className='middle'>
                 <h1>Barkery Shop</h1>
                 <p>BAKE GOOD SINCE 1980</p>
             </div>
             <div className='right'>
             <ul>
                  <li><i class="fa fa-search"></i></li>
                  <li><i class="fa fa-shopping-cart"></i></li>
                </ul>
             </div>
        </div>
        <div className='container nav'>
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
             <a href='cake' id='list'>SHOP </a>
             </li>
             <li >
             <a href='Login' id='list'>LOGIN</a>
             </li>
             
           </ul>
        
        </div>
   </>
  )
}

export default Navbar