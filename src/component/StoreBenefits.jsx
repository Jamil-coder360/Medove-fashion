import React from 'react'
import Image_1 from "../assets/featur-1.png";
import Image_2 from "../assets/featur-2.png";
import Image_3 from "../assets/featur-3.png";
import Image_4 from "../assets/featur-4.png";
import StoreBenefitsCard from './StoreBenefitsCard'; 
const StoreBenefits = () => {
  return (
    <section className='py-12'>
        <div className="container">
            <div className='grid grid-cols-4 gap-8'>
                <StoreBenefitsCard 
                    img={Image_1}
                    heading={"Free Shipping"}
                    text={"For all Orders Over $100"}
                />
                <StoreBenefitsCard 
                    img={Image_2}
                    heading={"Secured Payment"}
                    text={"Payment Cards Accepted"}
                />
                <StoreBenefitsCard 
                    img={Image_3}
                    heading={"30 Days Returns"}
                    text={"For an Exchange Product"}
                />
                <StoreBenefitsCard 
                    img={Image_4}
                    heading={"24/7 Support"}
                    text={"Contact us Anytime"}
                />
            </div>
        </div>
    </section>
  )
}

export default StoreBenefits