const Button = ({children,variant = "black" }) => {
    const styles =
    variant === "white"
      ? "bg-white text-black text-[14px] lg:text-[20px] font-normal font-jost leading-[1.5] tracking-[0.46%]"
      : "bg-black text-white text-[14px] lg:text-[20px] font-normal font-jost leading-[1.5] tracking-[0.46%] ";

  return (
    <button className={`${styles} py-[14.5px] px-[34px] uppercase cursor-pointer inline-block`}
>  
    {children}
    </button>
  )
}

export default Button