import React from 'react'
import Button from './Button'

const SpecialOfferCard = ({img,text,button}) => {
const bgImage = {
    background : `url(${img})`,
    backgroundPosition:"center",
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover"
}

  return (
    <div style={bgImage} className='pt-8.5 pl-10 pb-26.5'>
        <div className='max-w-[280px] flex flex-col justify-center items-start'>

        <p className='text-[16px] text-gray-75 font-medium leading-[42px] font-jost'>SALE UP TO 25%</p>
        <h4 className='font-jost font-semibold text-[32px] leading-[42px] pb-6.5 text-[#222222]'>{text}</h4>
        <Button>{button}</Button>
        </div>
    </div>
  )
}

export default SpecialOfferCard