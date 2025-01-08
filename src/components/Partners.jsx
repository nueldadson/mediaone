import React, { useEffect, useRef } from "react";
import {
	partner1,
	partner2,
	partner3,
	partner4,
	partner5,
} from "../assets/images";
import { Slide } from "react-awesome-reveal";

const Partners = () => {
	const carouselRef = useRef(null);
	let isDragging = false;
	let startX = 0;
	let scrollLeft = 0;

	// Auto-scroll functionality
	useEffect(() => {
		const interval = setInterval(() => {
			if (carouselRef.current) {
				if (
					carouselRef.current.scrollLeft + carouselRef.current.offsetWidth >=
					carouselRef.current.scrollWidth
				) {
					carouselRef.current.scrollTo({ left: 0, behavior: "smooth" });
				} else {
					const childWidth = carouselRef.current.children[0].offsetWidth + 24; // Add margin spacing
					carouselRef.current.scrollBy({
						left: childWidth,
						behavior: "smooth",
					});
				}
			}
		}, 2000); // Scroll every 1 second

		return () => clearInterval(interval); // Cleanup on unmount
	}, []);

	// Drag functionality
	const handleMouseDown = (e) => {
		isDragging = true;
		startX = e.pageX - carouselRef.current.offsetLeft;
		scrollLeft = carouselRef.current.scrollLeft;
	};

	const handleMouseMove = (e) => {
		if (!isDragging) return;
		e.preventDefault();
		const x = e.pageX - carouselRef.current.offsetLeft;
		const walk = (x - startX) * 1.5; // Adjust the scroll sensitivity
		carouselRef.current.scrollLeft = scrollLeft - walk;
	};

	const handleMouseUpOrLeave = () => {
		isDragging = false;
	};

	return (
		<div className="w-full py-8 bg-gradient-to-t from-black to-[#181818] flex items-center justify-center flex-col">
			{/* Slide animation for the heading */}
			<Slide direction="right" duration={500}>
				<h2 className="text-center text-gray-400 text-2xl font-semibold mb-12 mt-4">
					Trusted by The World's Best
				</h2>
			</Slide>

			{/* Carousel */}
			<div
				ref={carouselRef}
				className="flex overflow-hidden w-[90%] justify-start px-4 cursor-grab select-none"
				style={{
					scrollBehavior: "smooth", // Smooth scrolling when dragging
					overflow: "hidden", // Hide scrollbars
					userSelect: "none", // Prevent text or image selection
				}}
				onMouseDown={handleMouseDown}
				onMouseMove={handleMouseMove}
				onMouseUp={handleMouseUpOrLeave}
				onMouseLeave={handleMouseUpOrLeave}
			>
				{[
					partner1,
					partner2,
					partner3,
					partner4,
					partner2,
					partner1,
					partner3,
					partner5,
					partner1,
					partner5,
					partner2,
					partner4,
					partner3,
					partner5,
				].map((partner, index) => (
					<div
						key={index}
						className="flex-shrink-0 flex items-center justify-center w-[20%] md:w-[15%] lg:w-[12%] mx-2 mb-12"
						style={{ userSelect: "none" }} // Prevent text or image selection
					>
						<img
							src={partner}
							alt={`Logo ${index + 1}`}
							className="w-24 h-auto object-contain md:w-20 lg:w-16 pointer-events-none"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default Partners;
