const Button = ({children,variant = "black" }) => {
    const styles =
    variant === "white"
      ? "bg-white text-black"
      : "bg-black text-white";

  return (
    <button className={`${styles} py-[14.5px] px-[34px] uppercase cursor-pointer inline-block`}
>  
    {children}
    </button>
  )
}

export default Button