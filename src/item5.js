import React from 'react'

const Item5 = ({handleSet, handleValue}) => {
  return(
      <>
      <div className='container mt-5'>
        <div className='row'>
          <div className='item1 col-md-6'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIRIQ-zDImG68rjjBq5BlT8uTJ6U4eB_RT3A&usqp=CAU" alt="" />
          </div>
          <div className='item1_info col-md-6 p-4'>
              <h3>Branded Upper</h3>
              <hr />
              <p>Rs. 749.00</p>
              <span>🚚 Get free shipping when you order above Rs.999</span> <br /><br /><br />
              <span>DK Slim Fit Jogger Trouser For Kids-Allover Print With White & Dark Navy Stripes-SP3968 DK Slim Fit Jogger Trouser For Kids-Allover Print With White & Dark Navy Stripes-SP3968</span> <br />
              <div>
                <label>Quantity:</label>
                <input onChange={handleValue} className='m-4' type='number'/>
              </div>
              <button onClick={handleSet} className='btn btn-dark rounded-pill mt-5'>Add to Cart</button>
          </div>
        </div>
      </div>
      </>
  )
}

export default Item5