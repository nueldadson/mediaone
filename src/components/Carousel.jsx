import React, { useState, useEffect, useRef } from "react";
import { cimg1, cimg2 } from "../assets/images";

const Carousel = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const carouselRef = useRef(null);
	const hasEnteredViewport = useRef(false);
	const intervalRef = useRef(null);

	const slides = [
		{
			id: 1,
			title: "CLEAN MODERN STYLE",
			text: "Lorem ipsum dolor sit amet, cu assentior voluptaria consequuntur usu, ut nam assum verterem, his unum scripserit suscipiantur no. Graeci fabellas vix at.",
			image: cimg1,
		},
		{
			id: 2,
			title: "SPACIOUS AND COMFORTABLE",
			text: "Lorem ipsum dolor sit amet, cu assentior voluptaria consequuntur usu, ut nam assum verterem, his unum scripserit suscipiantur no. Graeci fabellas vix at.",
			image: cimg2,
		},
		{
			id: 3,
			title: "LUXURIOUS RELAXATION",
			text: "Lorem ipsum dolor sit amet, cu assentior voluptaria consequuntur usu, ut nam assum verterem, his unum scripserit suscipiantur no. Graeci fabellas vix at.",
			image: cimg2,
		},
	];

	// Function to start the slider
	const startSlider = () => {
		intervalRef.current = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 3000); // 3 seconds interval
	};

	// Observer to detect when the carousel enters the viewport
	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting && !hasEnteredViewport.current) {
					hasEnteredViewport.current = true;

					// Immediately go to the next slide when it enters the viewport
					setCurrentSlide((prev) => (prev + 1) % slides.length);

					// Start the interval for continuous sliding
					startSlider();
				}
			},
			{ threshold: 0.5 }, // Trigger when 50% of the carousel is in the viewport
		);

		if (carouselRef.current) {
			observer.observe(carouselRef.current);
		}

		return () => {
			if (carouselRef.current) {
				observer.unobserve(carouselRef.current);
			}
			clearInterval(intervalRef.current); // Cleanup the interval
		};
	}, [slides.length]);

	// Stop auto-slide when an indicator is clicked
	const handleIndicatorClick = (index) => {
		clearInterval(intervalRef.current);
		setCurrentSlide(index);
		startSlider();
	};

	// Swipe functionality
	let startX = 0;
	let endX = 0;

	const handleTouchStart = (e) => {
		startX = e.touches[0].clientX;
	};

	const handleTouchMove = (e) => {
		endX = e.touches[0].clientX;
	};

	const handleTouchEnd = () => {
		if (startX - endX > 50) {
			// Swipe left
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		} else if (endX - startX > 50) {
			// Swipe right
			setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
		}
	};

	return (
		<div
			ref={carouselRef}
			className="carousell relative overflow-hidden py-24 max-sm:pt-8 max-sm:pb-10 bg-white"
			onTouchStart={handleTouchStart}
			onTouchMove={handleTouchMove}
			onTouchEnd={handleTouchEnd}
		>
			{/* Slides */}
			<div
				className="flex transition-transform duration-700"
				style={{ transform: `translateX(-${currentSlide * 100}%)` }}
			>
				{slides.map((slide) => (
					<div
						key={slide.id}
						className="flex-none w-full md:flex md:flex-row-reverse items-center px-28 max-sm:px-6"
					>
						{/* Image */}
						<div className="w-full md:w-1/2 p-4">
							<img
								src={slide.image}
								alt={slide.title}
								className="w-full h-auto object-cover rounded-lg shadow-md"
							/>
						</div>

						{/* Text */}
						<div className="w-full md:w-1/2 p-4 flex flex-col justify-center text-center items-center ">
							<h3 className="w-fit text-2xl md:text-4xl font-bold text-black mb-4">
								{slide.title}
							</h3>
							<p className="text-gray-600">{slide.text}</p>
						</div>
					</div>
				))}
			</div>

			{/* Indicators */}
			<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
				{slides.map((_, index) => (
					<div
						key={index}
						className={`w-3 h-3 rounded-full cursor-pointer ${
							index === currentSlide ? "bg-yellow-500" : "bg-gray-300"
						}`}
						onClick={() => handleIndicatorClick(index)}
					></div>
				))}
			</div>
		</div>
	);
};

export default Carousel;
