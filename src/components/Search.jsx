import React from "react";
import { hero } from "../assets/images";
import { Fade, Slide } from "react-awesome-reveal";

const Search = () => {
	return (
		<div
			id="pricing"
			className="w-full py-24 flex items-center justify-center px-8  sm:px-18 md:px-56"
		>
			<Fade direction="in" duration={700} className="w-full">
				<Slide direction="up" duration={500} className="w-full">
					<div
						className="rounded-3xl shadow-lg py-14 px-6 md:px-14 w-full bg-secondary "
						style={{
							backgroundImage: `url(${hero})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
							backgroundBlendMode: "overlay",
						}}
					>
						<h2 className="text-3xl font-extrabold text-center text-black mb-6">
							Search Your Property
						</h2>
						<div className="flex flex-col md:flex-row rounded-xl  py-12 px-4 md:px-12 gap-3 bg-white bg-opacity-70">
							<div className="grid grid-cols-1 md:grid-cols-3 gap-3  w-full">
								{/* Location Dropdown */}
								<div className="relative">
									<label
										htmlFor="location"
										className="block text-black text-xs font-bold mb-1"
									>
										Location
									</label>
									<select
										id="location"
										className="w-full border border-gray-300 rounded-lg shadow-sm py-2 text-sm px-3 text-gray-700 focus:outline-none"
									>
										<option>Los Angeles</option>
										<option>New York</option>
										<option>San Francisco</option>
										<option>San Diego</option>
										<option>San Jose</option>
										<option>San Bernardino</option>
									</select>
								</div>

								{/* Property Type Dropdown */}
								<div className="relative">
									<label
										htmlFor="property-type"
										className="block text-black text-xs font-bold mb-1"
									>
										Property Type
									</label>
									<select
										id="property-type"
										className="w-full border border-gray-300 rounded-lg shadow-sm py-2 text-sm px-3 text-gray-700 focus:outline-none"
									>
										<option>Apartment</option>
										<option>House</option>
										<option>Villa</option>
										<option>Condo</option>
									</select>
								</div>

								{/* Price Range Dropdown */}
								<div className="relative">
									<label
										htmlFor="price-range"
										className="block text-black text-xs font-bold mb-1"
									>
										Price
									</label>
									<select
										id="price-range"
										className="w-full border border-gray-300 rounded-lg shadow-sm py-2 text-sm px-3 text-gray-700 focus:outline-none"
									>
										<option>$200 - $500</option>
										<option>$500 - $1000</option>
										<option>$1000 - $2000</option>
										<option>$2000 - $5000</option>
									</select>
								</div>
							</div>

							{/* Search Button */}
							<div className="flex justify-center md:w-32 w-full items-end">
								<button className="bg-black hover:text-secondary text-white font-semibold rounded-lg focus:outline-none w-full py-2 px-3 h-9 text-center items-center justify-center">
									Search
								</button>
							</div>
						</div>
					</div>
				</Slide>
			</Fade>
		</div>
	);
};

export default Search;
