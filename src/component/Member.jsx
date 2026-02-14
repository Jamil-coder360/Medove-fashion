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
    <div className="container">
        <div style={Image} className='flex items-center justify-center py-14.25  gap-9.5'>
            <h1 className='font-jost font-medium text-[32px] leading-[1.5]'>Exlusive Member - plus 8% reward and free shipping</h1>
            <Button variant='white'>
                shop now
                </Button>
        </div>
    </div>
   </section>
  )
}

export default Member