const Button = ({children}) => {
  return (
    <button className="text-white py-[14.5px] px-[34px] bg-black-222 uppercase cursor-pointer inline-block">  
    {children}
    </button>
  )
}

export default Button