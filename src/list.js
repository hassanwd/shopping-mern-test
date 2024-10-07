import React from 'react'
import { NavLink } from 'react-router-dom'
import './list.css'
// import { NavLink } from 'react-router-dom'
// import Navbar from './navbar'

const List = ({array, handleClick}) => {
  

  const singleItem = array.map((e) => {
    return(
      <>
        <NavLink to="/item1" style={{textDecoration: "none", color: "black", textAlign: "center"}}>
          <div onClick={handleClick} id={e.id} className='item col-md-3'>
            <div className='item_image bg-light m-3 p-1'>
                <img id={e.id} src={e.src} alt='' />
                <h5 id={e.id}>{e.title}</h5>
            </div>
          </div>
        </NavLink>
      </>
    )
  })

  return(
    <>
        <div className='container'> 
          <div className='row'>
            {singleItem}
          </div>
        </div>
    </>
  )
}

export default List