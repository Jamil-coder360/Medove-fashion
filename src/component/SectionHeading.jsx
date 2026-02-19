const SectionHeading = ({ title, description, width = "w-full" }) => {
	return (
		<div class={`text-center mb-12 `}>
			<h2 class="text-3xl font-semibold text-gray-900">{title}</h2>
			<p class={`mt-3 text-gray-500 max-w-2xl mx-auto ${width}`}>
				{description}
			</p>
		</div>
	);
};

export default SectionHeading;