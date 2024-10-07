import React from 'react'
import './item1.css'
// import {
//   GlassMagnifier,
//   MOUSE_ACTIVATION,
//   TOUCH_ACTIVATION,
// } from "@africasokoni/react-image-magnifiers";

const Item1 = ({handleSet, handleValue, itemObj, value1}) => {  
  const  {title, price, desc, src} = itemObj

  const Data = [itemObj]



  const data = Data.map((e) => {
    if(e.inStock){
      return(
        <>
          <div className='row text-white'>
            <div className='item1 item_item col-md-6 d-flex align-items-center justify-content-center'>
            <img src={src} alt="" />
            {/* <GlassMagnifier
              imageSrc={src}
              imageAlt="Example"
              // mouseActivation={MOUSE_ACTIVATION}
              largeImageSrc={src} // Optional
            /> */}
            </div>
            <div className='item1_info col-md-6 p-4'>
                <h3>{title}</h3>
                <hr />
                <p>Rs. {price}</p>
                <span>{desc}</span> <br />
                <div>
                  <label>Quantity:</label>
                  <input onChange={handleValue} className='m-4' type='number'/>
                </div>
                <button onClick={handleSet} className='btn btn-info rounded-pill'>Add to Cart</button>
            </div>
          </div>  
        </>
      )
    }
    else{
      return(
        <>
          <div className='row'>
            <div className='item1 col-md-6 d-flex align-items-center justify-content-center'>
            <img src={src} alt="" />
            {/* <GlassMagnifier
              imageSrc={src}
              imageAlt="Example"
              // mouseActivation={MOUSE_ACTIVATION}
              largeImageSrc={src} // Optional
            /> */}
            <img className='soldout_image' style={{width: "100px", height: "100px"}} src="https://pngpress.com/wp-content/uploads/2020/05/kisspng-computer-icons-clip-art-sold-out-5ac581114bd6e5.8202886115228930733106-300x253.png" alt="sold Out" />
            </div>
            <div className='item1_info col-md-6 p-4'>
                <h3>{title}</h3>
                <hr />
                <p>Rs. {price}</p>
                <span>{desc}</span> <br />
                <div>
                  <label>Quantity:</label>
                  <input onChange={handleValue} value="Out Of Stock" className='m-4' type='number' disabled/>
                </div>
                <button onClick={handleSet} className='btn btn-dark rounded-pill' disabled>Add to Cart</button>
            </div>
          </div>  
        </>
      )
    }
  })
  
    

  return (

    <>
      <div className='container mt-5'>
          {data}
      </div>
    </>
  )
}

export default Item1