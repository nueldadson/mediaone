import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import ScrollingText from "./Scrollingtext";

const Features = () => {
	return (
		<section
			id="aboutus"
			className="py-16 bg-gradient-to-t from-black to-[#181818]"
		>
			<div className=" w-full">
				<div className="">
					<Fade direction="in" duration={1000}>
						<p className=" font-extrabold text-center text-gray-300 lg:text-6xl text-3xl sm:text-4xl mb-8">
							ABOUT <span className="text-[#ffc303]">US</span>
						</p>
						<p className=" text-center px-8 md:px-24 font-medium text-lg text-gray-100">
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

					{/* <ScrollingText /> */}
					<Slide direction="up" duration={500} className="">
						{/* Section Heading */}
						<div
							className=" text-center px-8 mt-16 mb-8 flex items-center justify-center"
							id="services"
						>
							<p
								className="text-xl md:text-lg bg-gray-50 py-4 px-6 rounded-md
							 w-fit font-bold text-gray-600 hover:bg-[#ffc303]"
							>
								Why Choose Us?
							</p>
						</div>
					</Slide>
					<div className="mt-4 px-8 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-4">
						<Slide direction="up" duration={800}>
							<div className="feature bg-[#ffc303] h-[100%] p-8 rounded-lg shadow-lg hover:shadow-xl transition mb-4 scale-95 relative group">
								{/* Initial Icon Layer */}
								<div className="absolute inset-0 flex rounded-lg items-center justify-center bg-gray-300 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out flex-col">
									<i className="lnr lnr-screen text-[#181818] text-6xl font-extrabold"></i>
									<p className="text-gray-900 font-extrabold text-2xl">
										Digital Media
									</p>
								</div>
								{/* Main Content Layer */}
								<div className="relative z-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out scale-100 group-hover:scale-105">
									<i className="lnr lnr-screen text-black font-bold text-6xl mb-6 block mx-auto"></i>
									<h3 className="text-lg font-semibold text-black mb-4">
										Digital Media
									</h3>
									<p className="text-gray-900 font-semibold">
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
						</Slide>

						<Slide direction="up" duration={700}>
							<div className="feature bg-[#ffc303] h-[100%] p-8 rounded-lg shadow-lg hover:shadow-xl transition mb-4 scale-95 relative group">
								{/* Initial Icon Layer */}
								<div className="absolute inset-0 flex rounded-lg items-center justify-center bg-gray-300 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out flex-col">
									<i className="lnr lnr-film-play text-[#181818] text-6xl font-extrabold"></i>
									<p className="text-gray-900 font-extrabold text-2xl">
										Traditional Media
									</p>
								</div>
								{/* Main Content Layer */}
								<div className="relative z-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out scale-100 group-hover:scale-105">
									<i className="lnr lnr-film-play text-black font-bold text-6xl mb-6 block mx-auto"></i>
									<h3 className="text-lg font-semibold text-black mb-4">
										Traditional Media
									</h3>
									<p className="text-gray-900 font-semibold">
										<ol type="i">
											<li>Print</li>
											<li>Radio</li>
											<li>Television</li>
											<li>Outdoor</li>
										</ol>
									</p>
								</div>
							</div>
						</Slide>

						<Slide direction="up" duration={600}>
							<div className="feature bg-[#ffc303] h-[100%] p-8 rounded-lg shadow-lg hover:shadow-xl transition mb-4 scale-95 relative group">
								{/* Initial Icon Layer */}
								<div className="absolute inset-0 flex rounded-lg items-center justify-center bg-gray-300 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out flex-col">
									<i className="lnr lnr-tag text-[#181818] text-6xl font-extrabold"></i>
									<p className="text-gray-900 font-extrabold text-2xl">
										Branding
									</p>
								</div>
								{/* Main Content Layer */}
								<div className="relative z-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out scale-100 group-hover:scale-105">
									<i className="lnr lnr-tag text-black font-bold text-6xl mb-6 block mx-auto"></i>
									<h3 className="text-lg font-semibold text-black mb-4">
										Branding
									</h3>
									<p className="text-gray-900 font-semibold">
										<ol type="i">
											<li>Graphics Design</li>
											<li>Copywriting</li>
											<li>Photography & Video Production</li>
											<li>Printing Services</li>
										</ol>
									</p>
								</div>
							</div>
						</Slide>

						<Slide direction="up" duration={500}>
							<div className="feature bg-[#ffc303] h-[100%] p-8 rounded-lg shadow-lg hover:shadow-xl transition mb-4 scale-95 relative group">
								{/* Initial Icon Layer */}
								<div className="absolute inset-0 flex rounded-lg items-center justify-center bg-gray-300 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out flex-col">
									<i className="lnr lnr-bullhorn text-[#181818] text-6xl font-extrabold"></i>
									<p className="text-gray-900 font-extrabold text-2xl">
										Public Relations
									</p>
								</div>
								{/* Main Content Layer */}
								<div className="relative z-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out scale-100 group-hover:scale-105">
									<i className="lnr lnr-bullhorn text-black font-bold text-6xl mb-6 block mx-auto"></i>
									<h3 className="text-lg font-semibold text-black mb-4">
										Public Relations
									</h3>
									<p className="text-gray-900 font-semibold">
										<ol type="">
											<li>Media Relations</li>
											<li>Content Marketing Services</li>
											<li>Crisis Management</li>
											<li>Press Releases</li>
										</ol>
									</p>
								</div>
							</div>
						</Slide>
					</div>
					<br />
					<ScrollingText text=" &nbsp;Digital Media. &nbsp;&nbsp;Traditional Media. &nbsp;&nbsp;Branding. &nbsp;&nbsp;Public Relations. &nbsp;&nbsp;Event Management. &nbsp;&nbsp;Market Research.&nbsp;" />
					<div className="mt-4 px-8 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-4 justify-center">
						<Fade direction="in" duration={500}>
							<div className="feature bg-[#ffc303] h-[100%] p-8 lg:px-14 rounded-lg shadow-lg hover:shadow-xl transition mb-4 scale-95 relative group">
								{/* Initial Icon Layer */}
								<div className="absolute inset-0 flex rounded-lg items-center justify-center bg-gray-300 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out flex-col">
									<i className="lnr lnr-calendar-full text-[#181818] text-6xl font-extrabold"></i>
									<p className="text-gray-900 font-extrabold text-2xl">
										Event Management
									</p>
								</div>
								{/* Main Content Layer */}
								<div className="relative z-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out scale-100 group-hover:scale-105">
									<i className="lnr lnr-calendar-full text-black font-bold text-6xl mb-6 block mx-auto"></i>
									<h3 className="text-lg font-semibold text-black mb-4">
										Event Management
									</h3>
									<p className="text-gray-900 font-semibold">
										<ol type="i">
											<li>Corporate Events</li>
											<li>Brand Activations</li>
											<li>Product Launches</li>
											<li>Award Ceremonies</li>
										</ol>
									</p>
								</div>
							</div>
						</Fade>

						<Fade direction="in" duration={600}>
							<div className="feature bg-[#ffc303] h-[100%] p-8 lg:px-14 rounded-lg shadow-lg hover:shadow-xl transition mb-4 scale-95 relative group">
								{/* Initial Icon Layer */}
								<div className="absolute inset-0 flex rounded-lg items-center justify-center bg-gray-300 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500 ease-in-out flex-col">
									<i className="lnr lnr-chart-bars text-[#181818] text-6xl font-extrabold"></i>
									<p className="text-gray-900 font-extrabold text-2xl">
										Market Research
									</p>
								</div>
								{/* Main Content Layer */}
								<div className="relative z-0 group-hover:opacity-100 transition-transform duration-500 ease-in-out scale-100 group-hover:scale-105">
									<i className="lnr lnr-chart-bars text-black font-bold text-6xl mb-6 block mx-auto"></i>
									<h3 className="text-lg font-semibold text-black mb-4">
										Market Research
									</h3>
									<p className="text-gray-900 font-semibold">
										<ol type="i">
											<li>Consumer Behavior Analysis</li>
											<li>Competitor Analysis</li>
											<li>Brand Perception Studies</li>
											<li>Market Trend Forecasting</li>
										</ol>
									</p>
								</div>
							</div>
						</Fade>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
