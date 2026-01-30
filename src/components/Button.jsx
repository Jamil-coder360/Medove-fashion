const Button = ({ TagName = "button", children, ...props }) => {
	return (
		<TagName
			{...props}
			className="text-white py-[14.5px] px-[34px] bg-black-222 uppercase cursor-pointer inline-block"
		>
			{children}
		</TagName>
	);
};

export default Button;
