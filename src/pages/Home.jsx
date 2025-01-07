import React from "react";
import {
	Herovideo,
	Herovideo2,
	Features,
	PreTestimonials,
	Progressbar,
	Testimonials,
	ScrollingText,
	Partners,
	PersistentLines,
} from "../components";

const Home = () => {
	return (
		<div>
			<PersistentLines />
			<Herovideo />
			<Features />
			<PreTestimonials />
			<Progressbar />
			<Testimonials />
			<Partners />
			<Herovideo2 />
		</div>
	);
};

export default Home;
