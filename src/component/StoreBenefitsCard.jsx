import React from 'react'

const StoreBenefitsCard = ({img,text,heading}) => {
  return (
    <div className='bg-white border border-gray-300 py-8 ]'>
        <div className='flex items-center justify-center flex-col '>
            <img src={img} alt="" />
            <h3 className='text-[20px] font-jost font-medium text-[#222222] pt-2'>{heading}</h3>
            <p className='text-[14px] font-jost font-normal leading-[1.5] text-[#222222] ' > {text}</p>
        </div>
    </div>
  )
}

export default StoreBenefitsCard;