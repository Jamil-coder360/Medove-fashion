import React from 'react'
import image1 from "../assets/discount-1.jpg";
import image2 from "../assets/special.png";
import SpecialOfferCard from './SpecialOfferCard';
const SpecialOffer = () => {
  return (
    <section className='pt-12'>
        <div className="container">
         <div className='grid grid-cols-2 gap-8'>
            <SpecialOfferCard 
              img={image1}
              text={"It’s in the Bag: Limited Deals"}
              button={"Shop Now"}
            />
            <SpecialOfferCard 
              img={image2}
              text={"Make a Statement This Season"}
              button={"Shop Now"}
            />
         </div>
        </div>
    </section>
  )
}

export default SpecialOffer