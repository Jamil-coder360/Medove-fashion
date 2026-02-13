import React from 'react'
import Button from "./Button"
import Image_1 from "../assets/exclusive-1.png"
const Newarrival = () => {
  return (
    <section>
      <div className="container py-25">
        <div className='grid grid-cols-2 items-center justify-center gap-17.5'>

        <div>
            <div className='w-[587px] mb-12'>
                <h3 className=' text-[40px] font-medium leading-10.5 text-black-222 mb-4 '>New Arrival Collection</h3>
                <p className=' text-[18px] font-normal leading-6.75 text-black-222 mb-7.5 '>Step into the season with fresh essentials. From statement heels to everyday accessories — curated to elevate your style in every detail.</p>
                <Button>SHOP NOW</Button>
                
            </div>
            <div>
                <img src={Image_1} alt="" className=' h-[590px] w-[587px] ' />
            </div>
        </div>
        <div className='grid grid-cols-2 gap-8'>
         <SmallCards 
         Image={Image_1}
         price={"$249.000"}
         title="Golden Strappy Heels"
         />
         <SmallCards 
         Image={Image_1}
         price={"$179.000"}
         title="Floral Embossed Cream Tote "
         />
         <SmallCards 
         Image={Image_1}
         price={"$79.000"}
         title="Slim Matte Black Belt"
         />
         <SmallCards 
         Image={Image_1}
         price={"$80.000"}
         title="Bold Frame Sunglasses"
         />
        </div>
        </div>
      </div>
    </section>
  )
}
 const SmallCards = ({Image,price,title}) =>{
    return(
      <div className='flex flex-col items-center justify-between'>
        <div className='w-[296px] h-[321px]'>
          <img src={Image} alt="" className='w-full h-full' />
        </div>
        <div className='font-jost font-medium text-[16px] leading-[1.4] pt-4'>

        <h4 >{title}</h4>
        </div>
        <div className='font-jost font-medium text-[16px] leading-[1.4] pt-2.5'>

        <p >{price}</p>
        </div>
      </div>
    )
 }
export default Newarrival