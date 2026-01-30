import React from 'react'

const ExclusiveFeaturedCard = ({title,img,color,text}) => {
  return (
    <div className='flex items-center justify-between flex-col'>
        <div className='w-[300px] h-[420px] pb-5'>
               <img className='w-full h-full' src={img} alt="" />
        </div>
     
        <div className='flex justify-center items-center flex-col'>
            <p className='pb-2 font-medium text-[16px] leading-5.25 '>
                {title}
            </p>
            <img src={color} alt="" />
            <h1 className='pt-4 font-semibold text-[14px] '>
                {text}
            </h1>
        </div>
    </div>
  )
}

export default ExclusiveFeaturedCard