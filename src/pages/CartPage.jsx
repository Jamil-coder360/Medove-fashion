import React from 'react'
import image1 from "../assets/exclusive-3.png"
const CartPage = () => {
  return (
    <div>
        <h1 className="text-[60px] text-center">Cart Page</h1>
        <div className="flex items-center justify-between">
            <div className="w-20 h-20 ">
                <img className="w-full h-full overflow-hidden" src={image1} alt="image" />
            </div>
            <p className="text-2xl capitalize">exclusive t-shirt</p>
            <p className="text-2xl capitalize">100taka</p>
        </div>
    </div>
  )
}

export default CartPage