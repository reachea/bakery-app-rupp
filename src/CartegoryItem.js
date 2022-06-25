import React from 'react'

const CategoryItem=(props)=> {
    return (
        <div className='col-11 col-md-6 col-lg-3 mx-0 mb-4'>
          <div class="card p-4 list-menu " >
                <img src={props.img} class="card-img-top" />
                 <div class="card-body">
                   <h5 class="card-title">{props.title}</h5>
                   <p class="card-text">{props.price}$</p>
                   <p class="card-text">{props.desc}</p>
                    
                </div>
        </div>
      </div>
    )
}
export default CategoryItem;