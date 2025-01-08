import React from "react";
import { hero } from "../assets/images"; // Ensure the image path is correct
import { Slide } from "react-awesome-reveal";

const PreTestimonials = () => {
	return (
		<div
			className="relative py-[100px] w-full flex items-center justify-center text-center text-white"
			style={{
				backgroundImage: `url(${hero})`, // Correctly reference the image
				backgroundAttachment: "fixed", // Enables the parallax effect
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			{/* Overlay */}
			<div className="absolute inset-0 bg-black bg-opacity-55"></div>

			{/* Content */}
			<div className="relative sm:px-6 max-md:px-16 md:px-44 z-10">
				{/* Testimonial Title */}
				<Slide duration={500} direction="up">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">
						<span className="text-white font-bold text-6xl">
							PASSION <span className="text-[#ffc303]">LED</span> US HERE
						</span>
					</h2>
				</Slide>
			</div>
		</div>
	);
};

export default PreTestimonials;
