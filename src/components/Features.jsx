import React, { useState, useEffect, useRef } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import ScrollingText from "./ScrollingText";

const Features = () => {
	const [count, setCount] = useState(3); // Start from 3
	const [isInView, setIsInView] = useState(false); // Tracks if the element is in the viewport
	const countdownRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIsInView(true); // Start countdown when in viewport
				} else {
					setIsInView(false); // Stop countdown when out of viewport
					setCount(3); // Reset to initial state
				}
			},
			{ threshold: 0.5 }, // Trigger when 50% of the element is visible
		);

		if (countdownRef.current) {
			observer.observe(countdownRef.current);
		}

		return () => {
			if (countdownRef.current) {
				observer.unobserve(countdownRef.current);
			}
		};
	}, []);

	useEffect(() => {
		if (!isInView) return;

		const interval = setInterval(() => {
			setCount((prevCount) => {
				if (prevCount === "0") return 3; // Restart from 3 after "GO"
				if (prevCount === 1) return "0"; // Show "GO" after 1
				return prevCount - 1; // Decrement the number
			});
		}, 1000); // 1 second interval for each step

		return () => clearInterval(interval); // Clear interval on component unmount
	}, [isInView]);

	return (
		<section
			id="aboutus"
			className="py-16 bg-gradient-to-t from-black to-[#181818]"
		>
			<div className=" w-full">
				<div className="">
					<Fade direction="in" duration={1000}>
						<p className=" font-extrabold text-center text-gray-300 lg:text-6xl text-3xl sm:text-4xl mb-6">
							ABOUT <span className="text-[#ffc303]">US</span>
						</p>
						<p className=" text-center px-8 md:px-24 text-sm tracking-widest text-gray-200 mb-12">
							Welcome to Mediaone, your leading full-service advertising agency.
							As a communications powerhouse, we boast a rich history of
							delivering exceptional advertising solutions. Our impressive track
							record and stellar reputation stem from our commitment to
							addressing each client’s unique needs with precision and
							creativity. Our expert team blends creativity with data-driven
							insights to design campaigns that resonate with your audience.
							From digital and print to social media and beyond, we deliver
							impactful brand stories that inspire action and drive business
							growth.
							<br />
							<br />
							As a seasoned advertising agency with a rich history of
							representing respected brands across various industries, we have
							cultivated a powerful network of media partnerships that yield
							tangible benefits for our clients. Our enduring relationships with
							top channels unlock exclusive advantages, including preferential
							terms, added value, and actionable insights that drive maximum
							return on investment. Moreover, our extensive connections ensure
							consistent media coverage, keeping you in the spotlight and ahead
							of the competition.
						</p>
					</Fade>
					<div className="flex justify-center items-center w-full py-[20px]">
						<div className="w-[0.1px] h-24 bg-gray-500 ml-[2px]"></div>
					</div>
					<div
						ref={countdownRef}
						className="flex items-center justify-center py-12 "
					>
						<div className="text-center">
							<div className=" uppercase pb-12 tracking-widest text-gray-500 font-bold">
								Ready
							</div>
							{/* Countdown Number */}
							<div className="text-gray-300 text-9xl font-bold transition-all duration-700 ease-in-out">
								{count}
							</div>
							<div className=" uppercase pt-12 tracking-widest text-gray-500 font-bold">
								Go
							</div>
						</div>
					</div>
					<div className="flex justify-center items-center w-full py-[20px]">
						<div className="w-[0.1px] h-24 bg-gray-500 ml-[2px]"></div>
					</div>
					<section className="text-white py-12">
						{/* Section Title */}
						<div className="text-center mb-16">
							<h2 className="text-3xl md:text-5xl font-extrabold">
								THE <span className="text-[#ffc303]">3-STEP</span> APPROACH
							</h2>
							<p className="text-gray-400 mt-4">Plan, Create, Amplify</p>
						</div>

						{/* Steps */}
						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 md:px-20">
							{/* Step 1 */}
							<div className="text-center">
								<p className="text-gray-400 uppercase font-semibold mb-2">
									PLAN
								</p>
								<h3 className="text-7xl font-bold text-white mb-4">1</h3>
								<p className="text-gray-400">
									Collaborate with Mediaone to strategize a comprehensive
									advertising plan tailored to your brand's needs and goals.
								</p>
							</div>

							{/* Step 2 */}
							<div className="text-center">
								<p className="text-gray-400 uppercase font-semibold mb-2">
									CREATE
								</p>
								<h3 className="text-7xl font-bold text-white mb-4">2</h3>
								<p className="text-gray-400">
									Leverage our creative team to craft captivating content,
									campaigns, and visuals that resonate with your audience.
								</p>
							</div>

							{/* Step 3 */}
							<div className="text-center">
								<p className="text-gray-400 uppercase font-semibold">AMPLIFY</p>
								<h3 className="text-7xl font-bold text-white mb-4">3</h3>
								<p className="text-gray-400">
									Deploy across digital, print, and social platforms to maximize
									reach and engagement, ensuring measurable results.
								</p>
							</div>
						</div>
					</section>
					{/* <ScrollingText /> */}
					<Slide direction="up" duration={500} className="">
						{/* Section Heading */}
						<div
							className=" text-center px-8 mb-4 mt-14 flex items-center justify-center"
							id="services"
						>
							<p className="font-extrabold text-center text-gray-300 lg:text-6xl text-3xl sm:text-4xl mb-8 uppercase">
								<span className="text-[#ffc303]">our</span> Services
							</p>
						</div>
					</Slide>
					<ScrollingText text=" &nbsp;Digital Media. &nbsp;&nbsp;Traditional Media. &nbsp;&nbsp;Branding. &nbsp;&nbsp;Public Relations. &nbsp;&nbsp;Event Management. &nbsp;&nbsp;Market Research.&nbsp;" />
					<div className="mt-4 px-8 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-4">
						{/* 1) Traditional Media */}
						{/* =========================
    1) Traditional Media (UNCHANGED)
========================= */}
						<Fade direction="in" duration={700}>
							<div className="card-wrapper py-2 md:py-6 px-2 md:px-6 ">
								<div className="card-container p-0 ">
									{/* Front Side */}
									<div
										className="card-side card-front bg-cover bg-center relative w-[100%] "
										style={{
											position: "relative",
											isolation: "isolate", // Ensures pseudo-element does not interfere with child elements
										}}
									>
										<div
											className="absolute inset-0  rounded-[inherit]"
											style={{
												backgroundImage: `url("https://live.staticflickr.com/65535/54294683116_7637be81ae_m.jpg")`,
												backgroundSize: "cover",
												backgroundPosition: "center",
												filter: "grayscale(100%)", // Grayscale only affects the background
												content: '""',
												position: "absolute",
												top: 0,
												left: 0,
												right: 0,
												bottom: 0,
												zIndex: -1, // Places the pseudo-element behind the content
											}}
										></div>
										<div
											className="absolute z-20 inset-0 bg-[#ffc303] rounded-[inherit]"
											style={{
												opacity: 0.5, // Adjust this value (0 to 1) to change the overlay opacity
												mixBlendMode: "multip", // Ensures a true overlay effect
											}}
										></div>
										{/* <i className="lnr lnr-film-play icon-style"></i> */}
										<p className="front-text text-5xl z-30 text-white">
											Traditional <br />
											<span className="text-[#ffc303]">Media</span>
										</p>
									</div>

									{/* Back Side */}
									<div className="card-side card-back">
										<i className="lnr lnr-film-play icon-style"></i>
										<h3 className="back-heading">Traditional Media</h3>
										<p className="back-text ">
											<ol
												type="i"
												className="text-white font-extrabold flex flex-col gap-2"
											>
												<li>Print</li>
												<li>Radio</li>
												<li>Television</li>
												<li>Outdoor</li>
											</ol>
										</p>
									</div>
								</div>
							</div>
						</Fade>

						{/* =========================
    2) Digital Media (UPDATED)
========================= */}
						<Fade direction="in" duration={700}>
							<div className="card-wrapper py-2 md:py-6 px-2 md:px-6 ">
								<div className="card-container p-0 ">
									{/* Front Side */}
									<div
										className="card-side card-front bg-cover bg-center relative w-[100%]"
										style={{
											position: "relative",
											isolation: "isolate",
										}}
									>
										{/* Grayscale background image */}
										<div
											className="absolute inset-0  rounded-[inherit]"
											style={{
												backgroundImage: `url("https://live.staticflickr.com/65535/54294683116_7637be81ae_m.jpg")`,
												backgroundSize: "cover",
												backgroundPosition: "center",
												filter: "grayscale(100%)",
												content: '""',
												position: "absolute",
												top: 0,
												left: 0,
												right: 0,
												bottom: 0,
												zIndex: -1,
											}}
										></div>
										{/* Overlay */}
										<div
											className="absolute z-20 inset-0 bg-[white] rounded-[inherit]"
											style={{
												opacity: 0.5,
												mixBlendMode: "multip",
											}}
										></div>
										{/* Front text */}
										<p className="front-text text-5xl z-30 text-white">
											Digital <br />
											<span className="text-[#ffc303]">Media</span>
										</p>
									</div>

									{/* Back Side */}
									<div className="card-side card-back">
										<i className="lnr lnr-screen icon-style"></i>
										<h3 className="back-heading">Digital Media</h3>
										<p className="back-text">
											<ul type="1">
												<li>Website Design &amp; Development</li>
												<li>Search Engine Optimisation</li>
												<li>Pay-Per-Click</li>
												<li>Social Media Marketing</li>
												<li>Email Marketing</li>
												<li>Content Marketing</li>
												<li>Influencer Marketing</li>
											</ul>
										</p>
									</div>
								</div>
							</div>
						</Fade>

						{/* =========================
    3) Branding (UPDATED)
========================= */}
						<Fade direction="in" duration={700}>
							<div className="card-wrapper py-2 md:py-6 px-2 md:px-6 ">
								<div className="card-container p-0 ">
									{/* Front Side */}
									<div
										className="card-side card-front bg-cover bg-center relative w-[100%]"
										style={{
											position: "relative",
											isolation: "isolate",
										}}
									>
										{/* Grayscale background image */}
										<div
											className="absolute inset-0  rounded-[inherit]"
											style={{
												backgroundImage: `url("https://live.staticflickr.com/65535/54294683116_7637be81ae_m.jpg")`,
												backgroundSize: "cover",
												backgroundPosition: "center",
												filter: "grayscale(100%)",
												content: '""',
												position: "absolute",
												top: 0,
												left: 0,
												right: 0,
												bottom: 0,
												zIndex: -1,
											}}
										></div>
										{/* Overlay */}
										<div
											className="absolute z-20 inset-0 bg-white rounded-[inherit]"
											style={{
												opacity: 0.5,
												mixBlendMode: "multip",
											}}
										></div>
										{/* Front text */}
										<p className="front-text text-5xl z-30 text-white">
											Branding <br />
											<span className="text-[#ffc303]">&nbsp;</span>
											{/* If you want the word 'Branding' on two lines:
               Branding <br />
               <span className="text-[#ffc303]">Services</span> 
               for example */}
										</p>
									</div>

									{/* Back Side */}
									<div className="card-side card-back">
										<i className="lnr lnr-tag icon-style"></i>
										<h3 className="back-heading">Branding</h3>
										<p className="back-text">
											<ol type="i">
												<li>Graphics Design</li>
												<li>Copywriting</li>
												<li>Photography &amp; Video Production</li>
												<li>Printing Services</li>
											</ol>
										</p>
									</div>
								</div>
							</div>
						</Fade>

						{/* =========================
    4) Public Relations (UPDATED)
========================= */}
						<Fade direction="in" duration={700}>
							<div className="card-wrapper py-2 md:py-6 px-2 md:px-6 ">
								<div className="card-container p-0 ">
									{/* Front Side */}
									<div
										className="card-side card-front bg-cover bg-center relative w-[100%]"
										style={{
											position: "relative",
											isolation: "isolate",
										}}
									>
										{/* Grayscale background image */}
										<div
											className="absolute inset-0  rounded-[inherit]"
											style={{
												backgroundImage: `url("https://live.staticflickr.com/65535/54294683116_7637be81ae_m.jpg")`,
												backgroundSize: "cover",
												backgroundPosition: "center",
												filter: "grayscale(100%)",
												content: '""',
												position: "absolute",
												top: 0,
												left: 0,
												right: 0,
												bottom: 0,
												zIndex: -1,
											}}
										></div>
										{/* Overlay */}
										<div
											className="absolute z-20 inset-0 bg-[#ffc303] rounded-[inherit]"
											style={{
												opacity: 0.5,
												mixBlendMode: "multip",
											}}
										></div>
										{/* Front text */}
										<p className="front-text text-5xl z-30 text-white">
											Public <br />
											<span className="text-[#ffc303]">Relations</span>
										</p>
									</div>

									{/* Back Side */}
									<div className="card-side card-back">
										<i className="lnr lnr-bullhorn icon-style"></i>
										<h3 className="back-heading">Public Relations</h3>
										<p className="back-text">
											<ol>
												<li>Media Relations</li>
												<li>Content Marketing Services</li>
												<li>Crisis Management</li>
												<li>Press Releases</li>
											</ol>
										</p>
									</div>
								</div>
							</div>
						</Fade>

						{/* =========================
    5) Event Management (UPDATED)
========================= */}
						<Fade direction="in" duration={700}>
							<div className="card-wrapper py-2 md:py-6 px-2 md:px-6 ">
								<div className="card-container p-0 ">
									{/* Front Side */}
									<div
										className="card-side card-front bg-cover bg-center relative w-[100%]"
										style={{
											position: "relative",
											isolation: "isolate",
										}}
									>
										{/* Grayscale background image */}
										<div
											className="absolute inset-0  rounded-[inherit]"
											style={{
												backgroundImage: `url("https://live.staticflickr.com/65535/54294683116_7637be81ae_m.jpg")`,
												backgroundSize: "cover",
												backgroundPosition: "center",
												filter: "grayscale(100%)",
												content: '""',
												position: "absolute",
												top: 0,
												left: 0,
												right: 0,
												bottom: 0,
												zIndex: -1,
											}}
										></div>
										{/* Overlay */}
										<div
											className="absolute z-20 inset-0 bg-[#ffc303] rounded-[inherit]"
											style={{
												opacity: 0.5,
												mixBlendMode: "multip",
											}}
										></div>
										{/* Front text */}
										<p className="front-text text-5xl z-30 text-white">
											Event <br />
											<span className="text-[#ffc303]">Management</span>
										</p>
									</div>

									{/* Back Side */}
									<div className="card-side card-back">
										<i className="lnr lnr-calendar-full icon-style"></i>
										<h3 className="back-heading">Event Management</h3>
										<p className="back-text">
											<ol type="i">
												<li>Corporate Events</li>
												<li>Brand Activations</li>
												<li>Product Launches</li>
												<li>Award Ceremonies</li>
											</ol>
										</p>
									</div>
								</div>
							</div>
						</Fade>

						{/* =========================
    6) Market Research (UPDATED)
========================= */}
						<Fade direction="in" duration={700}>
							<div className="card-wrapper py-2 md:py-6 px-2 md:px-6 ">
								<div className="card-container p-0 ">
									{/* Front Side */}
									<div
										className="card-side card-front bg-cover bg-center relative w-[100%]"
										style={{
											position: "relative",
											isolation: "isolate",
										}}
									>
										{/* Grayscale background image */}
										<div
											className="absolute inset-0  rounded-[inherit]"
											style={{
												backgroundImage: `url("https://live.staticflickr.com/65535/54294683116_7637be81ae_m.jpg")`,
												backgroundSize: "cover",
												backgroundPosition: "center",
												filter: "grayscale(100%)",
												content: '""',
												position: "absolute",
												top: 0,
												left: 0,
												right: 0,
												bottom: 0,
												zIndex: -1,
											}}
										></div>
										{/* Overlay */}
										<div
											className="absolute z-20 inset-0 bg-white rounded-[inherit]"
											style={{
												opacity: 0.5,
												mixBlendMode: "multip",
											}}
										></div>
										{/* Front text */}
										<p className="front-text text-5xl z-30 text-white">
											Market <br />
											<span className="text-[#ffc303]">Research</span>
										</p>
									</div>

									{/* Back Side */}
									<div className="card-side card-back">
										<i className="lnr lnr-chart-bars icon-style"></i>
										<h3 className="back-heading">Market Research</h3>
										<p className="back-text">
											<ol type="i">
												<li>Consumer Behavior Analysis</li>
												<li>Competitor Analysis</li>
												<li>Brand Perception Studies</li>
												<li>Market Trend Forecasting</li>
											</ol>
										</p>
									</div>
								</div>
							</div>
						</Fade>
					</div>
					<br />
					<ScrollingText text=" &nbsp;Digital Media. &nbsp;&nbsp;Traditional Media. &nbsp;&nbsp;Branding. &nbsp;&nbsp;Public Relations. &nbsp;&nbsp;Event Management. &nbsp;&nbsp;Market Research.&nbsp;" />
				</div>
			</div>
		</section>
	);
};

export default Features;
