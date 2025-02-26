import React from "react";
import bgVideo from "../assets/videos/bgvid.mp4";
import bgVideoWebm from "../assets/videos/bgvid.webm"; // Added webm format
import bgVideoOgg from "../assets/videos/bgvid.ogg"; // Added ogg format
import bgPoster from "../assets/images/hero.jpeg";
import { Logowhite } from "../assets/images";
import { Fade, Slide } from "react-awesome-reveal";

const Herovideo = () => {
	return (
		<div id="hero-section" className="relative bg-[#f3f4f6]">
			<Fade direction="in" duration={700}>
				{/* Hero Unit */}
				<div className="relative overflow-hidden w-full min-h-[100vh] bg-[#f3f4f6]">
					{/* Video Background */}
					<video
						autoPlay
						loop
						muted
						poster={bgPoster}
						id="bgvid"
						className="absolute top-0 left-0 w-full h-full object-cover"
						playsInline
					>
						<source src={bgVideo} type="video/mp4" />
						<source src={bgVideoWebm} type="video/webm" />{" "}
						{/* Added webm source */}
						<source src={bgVideoOgg} type="video/ogg" />{" "}
						{/* Added ogg source */}
					</video>

					{/* Overlay */}
					<div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 hero-overlay"></div>

					{/* Hero Caption */}
					<div className="absolute -top-0 inset-0 flex items-center justify-center text-white z-10 text-center px-6 hero-caption">
						{/* Headline */}
						<div className="animation-element slide-down flex w-full items-center justify-center flex-row-reverse max-md:h-[100px] h-[200px]">
							<h1 className="flex items-center justify-center max-sm:px-2 px-6 uppercase text-left text-2xl sm:text-4xl md:text-6xl font-bold border-l-4 border-l-white border-solid h-[100%] ">
								Infinite
								<br /> Possibilities
							</h1>
							<p className="ml24 max-sm:px-2 px-6 text-xl sm:text-2xl md:text-5xl flex items-center justify-center text-right h-full ">
								One
								<br />
								Source
							</p>
						</div>
					</div>
				</div>
			</Fade>
		</div>
	);
};

export default Herovideo;
