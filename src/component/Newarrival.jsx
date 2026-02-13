import React from 'react'
import Button from './Button';
import Image from "../assets/exclusive-1.png";
const Newarrival = () => {
  return (
    <section>
      <div className="container">
        <div>
            <div className='w-[587px] mb-12'>
                <h3 className=' text-[40px] font-medium leading-10.5 text-black-222 mb-4 '>New Arrival Collection</h3>
                <p className=' text-[18px] font-normal leading-6.75 text-black-222 mb-7.5 '>Step into the season with fresh essentials. From statement heels to everyday accessories — curated to elevate your style in every detail.</p>
                <Button>SHOP NOW</Button>
                
            </div>
            <div>
                <img src={Image} alt="" className=' h-[590px] w-[587px] ' />
            </div>
        </div>
        <div></div>
      </div>
    </section>
  )
}

export default Newarrival