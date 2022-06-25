import React, { Component } from 'react'
import Item from './Item'
import data from './data'
const Cart =()=> {
        return (
            <div>
         <div class=" container">
            <div className="row justify-content-center">
            
                {data.cake.map((item , index)=>{
                    return(
                        <Item img={item.img} 
                        title={item.title}
                        desc={item.desc}
                        price={item.price}
                        item={item}
                        key={index} />
                    )
                })}            
             </div> 
            </div> 
         
            </div>
        )
    }

export default Cart
