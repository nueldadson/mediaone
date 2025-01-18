import React from "react";
import { Fade } from "react-awesome-reveal";
import { hero2 } from "../../assets/images";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Footer = () => {
	return (
		<footer className="bg-black text-gray-200 py-12 px-6 sm:px-12">
			{/* Contact Information */}
			<div className="text-center mb-8">
				<p className="text-lg font-sem1ibold">
					40 Shobowale Ogba-Acme Lagos &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp;
					+234-9030010234 &nbsp;&nbsp;&nbsp; |&nbsp;&nbsp;&nbsp;{" "}
					<a
						href="mailto:info@mediaone.ng"
						className="text-yellow-400 hover:underline"
					>
						info@mediaone.ng
					</a>
				</p>
			</div>

			{/* Get In Touch */}
			<div className="text-center mb-12">
				<h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
				<div className="space-y-3 flex flex-col items-center justify-center w-full">
					<input
						type="text"
						placeholder="Your Name"
						className="w-full max-w-3xl mx-auto px-4 py-2 bg-gray-200 font-semibold rounded-md outline-none"
					/>
					<input
						type="email"
						placeholder="Your Email"
						className="w-full max-w-3xl mx-auto px-4 py-2 bg-gray-200 text-white rounded-md outline-none"
					/>
					<textarea
						placeholder="Your Message"
						rows="4"
						className="w-full max-w-3xl mx-auto px-4 py-2 bg-gray-200 text-white rounded-md outline-none"
					></textarea>
					<button className="w-full max-w-xl bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-md">
						Send Message
					</button>
				</div>
			</div>

			{/* Map Section */}
			<div className="text-center mb-12 rounded-lg">
				{/* <iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.193294783788!2d3.3320493750411333!3d6.622895393371345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b91637096d02f%3A0x87c7eb56e6a4fc41!2s40%20Shobowale%20St%2C%20Ijaiye%2C%20Lagos%20102212%2C%20Lagos!5e0!3m2!1sen!2sng!4v1736256905554!5m2!1sen!2sng"
					width="100%"
					height="300"
					style={{ border: 0 }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="Google Map"
					className="rounded-lg"
				></iframe> */}
				<MapContainer
					center={[6.622895, 3.332049]}
					zoom={15}
					style={{ height: "300px", width: "100%", borderRadius: "8px" }}
				>
					{/* Dark Theme Tile Layer */}
					<TileLayer
						url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
						attribution='&copy; <a href="https://carto.com/">CARTO</a>'
					/>

					{/* Marker for the Address */}
					<Marker position={[6.622895, 3.332049]}>
						<Popup>40 Shobowale St, Ijaiye, Lagos</Popup>
					</Marker>
				</MapContainer>
			</div>

			{/* Social Media and Logo */}
			<div className="text-center mb-4">
				<h2 className="text-xl font-semibold mb-4">
					Get Connected & Follow Us
				</h2>
				<div className="flex justify-center space-x-6">
					<a
						href="https://www.instagram.com/mediaoneng"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-instagram text-2xl text-yellow-400 hover:text-yellow-500"></i>
					</a>
					<a
						href="https://www.twitter.com/Mediaoneng"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-twitter text-2xl text-yellow-400 hover:text-yellow-500"></i>
					</a>
					<a
						href="https://www.facebook.com/mediaoneng"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-facebook text-2xl text-yellow-400 hover:text-yellow-500"></i>
					</a>
					<a
						href="https://www.youtube.com/mediaoneng"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-youtube text-2xl text-yellow-400 hover:text-yellow-500"></i>
					</a>
					<a
						href="https://plus.google.com/mediaoneng"
						target="_blank"
						rel="noopener noreferrer"
					>
						<i className="fab fa-google-plus text-2xl text-yellow-400 hover:text-yellow-500"></i>
					</a>
				</div>
				<p
					className="font-bold text-6xl md:text-9xl  bg-clip-text text-transparent animate-zoom"
					style={{
						backgroundImage: `url(${hero2})`,
						backgroundSize: "100% 100%",
						backgroundPosition: "center",
					}}
				>
					MEDIAONE
				</p>
			</div>

			{/* Footer Copyright */}
			<div className="text-center">
				<p className="text-sm text-gray-500">
					&copy; {new Date().getFullYear()} Mediaone. All rights reserved.
				</p>
			</div>
		</footer>
	);
};

export default Footer;
