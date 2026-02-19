const Section = ({ className, children, bg = "#ffffff" }) => {
	return (
		<section className={`${className} bg-white`} style={{ background: bg }}>
			{children}
		</section>
	);
};

export default Section;