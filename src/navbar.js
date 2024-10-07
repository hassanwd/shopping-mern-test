import React from 'react'
import './navbar.css'
// import { NavLink } from 'react-router-dom'

const Navbar = ({handleCart, value}) => {

  // console.log(value, "navbar_VAlue");

  let values = value.map((e) => {
    return(
      <>
        <div className='d-flex align-items-center justify-content-evenly m-3 bg-light cart_cart'>
          <img src={e.src} alt=''/>
          <div className='quantity_main'>{e.quantity}</div>
          <div>
            <h5>{e.heading}</h5>
            <p>Rs. {e.price}</p>
          </div>
        </div>
      </>
    )
  })

  return(
    <div className='bg-info d-flex align-items-center justify-content-between cart_container'>
        <h4 className='p-5'>Shopping</h4>
        <i onClick={handleCart} class="fa-solid fa-cart-arrow-down p-5"></i>
    
        <div className='sidebar'>
          {values}
        <h3 className="text-success text-center">
            <span>Total Amount: </span>
            Rs. {value.reduce((acc,curr)=>{
              console.log(acc, "acc");
              console.log(curr, "curr");
              return acc += parseInt(curr.price)
            },0)}
        </h3>
        </div>
    </div>
  )
}

export default Navbar