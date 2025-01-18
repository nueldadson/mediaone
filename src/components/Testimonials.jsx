import React, { useState, useEffect } from "react";
import { hero2 } from "../assets/images"; // Ensure the image path is correct
import { Slide } from "react-awesome-reveal";

const testimonials = [
	{
		text: "The Mediaone team is truly outstanding. Their attention to detail and dedication to understanding our unique needs have resulted in campaigns that genuinely connect with our audience. Their expertise in media buying and planning has ensured we get the best value for our advertising spend.",
		author: "Adron Homes",
	},
	{
		text: "Working with Mediaone has been a game-changer for our business. Their solution-driven approach to digital marketing has significantly increased our online visibility and traffic. Their professionalism and dedication are unmatched.",
		author: "Mirron Nigeria",
	},
	{
		text: "Mediaone creatives perfectly captured our brand's message and values. The response from our customers has been overwhelmingly positive.",
		author: "Buckler Ordnance Systems Limited",
	},
	{
		text: "Mediaone built us a website that is truly stunning! User-friendly and conversion-driven. Impressive UX design!",
		author: "GreenWorld Nigeria",
	},
	{
		text: "Mediaone's public relations team has been fantastic in managing our media relations and handling crisis situations with professionalism and expertise. Their efforts have significantly enhanced our brand's reputation and public image.",
		author: "Lasaco Assurance Plc",
	},
	{
		text: "The branding and identity services provided by Mediaone were exceptional. They created a distinctive logo and comprehensive brand guidelines that have helped us maintain a consistent and professional image across all our communications.",
		author: "Providus Bank",
	},
	{
		text: "Mediaone's event management services were instrumental in making our annual conference a resounding success. Their team's professionalism and meticulous attention to detail, from conceptualization to on-site management, created a truly memorable and impactful experience.",
		author: "Diya Fatimelehin & Co.",
	},
];

const Testimonials = () => {
	const [currentIndex, setCurrentIndex] = useState(0);
	const [isPaused, setIsPaused] = useState(false);

	useEffect(() => {
		if (isPaused) return;

		const interval = setInterval(() => {
			setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
		}, 4000);

		return () => clearInterval(interval);
	}, [isPaused]);

	const handleMouseEnter = () => setIsPaused(true);
	const handleMouseLeave = () => setIsPaused(false);

	return (
		<div
			className="relative py-[60px] w-full flex items-center justify-center text-center text-white"
			style={{
				backgroundImage: `url(${hero2})`,
				backgroundAttachment: "fixed",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black bg-opacity-85"></div>

			{/* Content */}
			<div
				className="relative sm:px-6 max-md:px-16 md:px-44 z-10"
				onMouseEnter={handleMouseEnter}
				onMouseLeave={handleMouseLeave}
			>
				{/* Testimonial Title */}
				<Slide duration={500} direction="up">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						<span className="uppercase">
							"Our client <span className="text-[#ffc303]">experience</span>"
						</span>
						<p className="text-gray-400 uppercase">
							- don't just take our word for it -
						</p>
					</h2>
				</Slide>
				{/* Testimonial Text */}
				<Slide duration={700} direction="up">
					<p className="text-md md:text-lg mb-6">
						{testimonials[currentIndex].text}
					</p>
				</Slide>
				{/* Testimonial Author */}
				<Slide duration={900} direction="up">
					<p className="font-semibold text-lg md:text-xl uppercase">
						— {testimonials[currentIndex].author}
					</p>
				</Slide>
			</div>
		</div>
	);
};

export default Testimonials;
