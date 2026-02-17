import React from 'react'
import Button from './Button'
import left from "../assets/left.png"
import right from "../assets/right.png"

const Testimonial = () => {
  return (
    <section>
        <div className="container">
            <div>
                <div className='flex  justify-between'>
<div className='flex flex-col items-start justify-between gap-5'>
    <p className='font-regular text-[18px] leading-[1.5] text-[#757575]'>Testimonial</p>
    <h1 className='font-medium text-[40px] leading-[1.5]'>What our customers say</h1>
</div>
<div className='flex gap-3.5'>
    <Button><img src={left} alt="" /></Button>
    <Button><img src={right} alt="" /></Button>
</div>
                </div>
                <div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Testimonial