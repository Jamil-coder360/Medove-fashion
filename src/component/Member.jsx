import React from 'react'
import img from "../assets/shiping.png"
import Button from './Button'
const Member = () => {
    const Image = {
        background:`url(${img})`,
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover"
    }
  return (
   <section>
    <div className="container lg:container-fluid">
        <div style={Image} className='flex flex-wrap lg:flex-nowrap items-start lg:items-center justify-start lg:justify-center py-14.25 pl-10 lg:pl-0 gap-9.5'>
            <h1 className='font-jost font-medium text-[16px] lg:text-[32px] leading-[1.5]'>Exlusive Member - plus 8% reward and free shipping</h1>
            <Button variant='white'>
                shop now
                </Button>
        </div>
    </div>
   </section>
  )
}

export default Member