import React, { useEffect, useRef } from "react";

const ScrollingText = ({ text }) => {
	const scrollContainerRef = useRef(null);

	useEffect(() => {
		const scrollContainer = scrollContainerRef.current;
		const duplicateText = () => {
			// Duplicate the content to create an infinite scroll effect
			scrollContainer.innerHTML += scrollContainer.innerHTML;
		};

		const scrollText = () => {
			if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
				scrollContainer.scrollLeft = 0; // Reset to start
			} else {
				scrollContainer.scrollLeft += 2; // Scroll incrementally
			}
		};

		duplicateText();
		const interval = setInterval(scrollText, 30); // Adjust speed by changing the interval time

		return () => clearInterval(interval);
	}, []);

	return (
		<div
			ref={scrollContainerRef}
			className="overflow-x-hidden h-[120px] whitespace-nowrap text-gray-500 text-8xl font-bold flex"
		>
			<div
				className="flex-shrink-0"
				dangerouslySetInnerHTML={{ __html: text }}
			></div>
		</div>
	);
};

export default ScrollingText;
