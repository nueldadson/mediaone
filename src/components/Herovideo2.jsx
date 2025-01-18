import React from "react";
import bgVideoMp4 from "../assets/videos/contactusbg.mp4";
import bgVideoWebm from "../assets/videos/contactusbg.webm";
import bgVideoOgg from "../assets/videos/contactusbg.ogg";
import bgPoster from "../assets/images/hero.jpeg";
import { Fade } from "react-awesome-reveal";

const Herovideo2 = () => {
	return (
		<div id="footer" className="relative bg-black">
			<Fade direction="in" duration={700}>
				{/* Hero Unit */}
				<div className="relative overflow-hidden w-full h-[200px] md:h-[500px] lg:h-[80vh] max-h-[1000px]">
					{/* Video Background */}
					<video
						autoPlay
						loop
						muted
						playsInline
						poster={bgPoster}
						id="contact"
						className="absolute top-0 left-0 w-full h-full object-fit"
					>
						<source src={bgVideoWebm} type="video/webm" />
						<source src={bgVideoMp4} type="video/mp4" />
						<source src={bgVideoOgg} type="video/ogg" />
						{/* Fallback Message */}
						Your browser does not support the video tag.
					</video>

					{/* Overlay */}
					<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80 hero-overlay"></div>

					{/* Hero Caption */}
					<div className="absolute inset-0 flex items-center justify-center text-white z-10 text-center px-6 hero-caption">
						<div className="animation-element slide-down flex w-full items-center justify-center flex-row-reverse max-md:h-[100px] h-[200px]">
							<h1 className="flex items-center justify-center max-sm:px-2 px-6 uppercase text-left text-xl sm:text-3xl md:text-5xl font-bold h-[100%]">
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
