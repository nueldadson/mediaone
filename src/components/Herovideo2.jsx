import React from "react";
import bgVideo2 from "../assets/videos/contactusbg.mp4";
import bgPoster from "../assets/images/hero.jpeg";
// import { Logowhite } from "../assets/images";
import { Fade, Slide } from "react-awesome-reveal";

const Herovideo2 = () => {
	return (
		<div id="footer" className="relative bg-[#f3f4f6]">
			<Fade direction="in" duration={700}>
				{/* Hero Unit */}
				<div className=" relative overflow-hidden w-full h-[100vh] max-h-[1000px] bg-[#f3f4f6]">
					{/* Video Background */}
					<video
						autoPlay
						loop
						muted
						poster={bgPoster}
						id="contact"
						className="absolute top-0 left-0 w-full h-full object-cover"
					>
						<source src={bgVideo2} type="video/mp4" />
					</video>

					{/* Overlay */}
					<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 hero-overlay"></div>

					{/* Hero Caption */}
					<div className="absolute -top-0 inset-0 flex items-center justify-center text-white z-10 text-center px-6 hero-caption">
						{/* Headline */}
						<div className="animation-element slide-down flex w-full items-center justify-center flex-row-reverse max-md:h-[100px] h-[200px]">
							<h1 className="flex items-center justify-center max-sm:px-2 px-6 uppercase text-left text-xl sm:text-3xl md:text-5xl font-bold h-[100%] ">
								contact us
							</h1>
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default Herovideo2;
