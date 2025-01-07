import React, { useState } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import Sidebar from "./sidebar/Sidebar";

const Layout = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="min-h-screen flex flex-col">
			{/* Main Layout */}
			<div className="flex-grow">
				<Nav isOpen={isOpen} toggle={toggle} />
				<Sidebar isOpen={isOpen} toggle={toggle} />
				<main className="flex-grow bg-black">{children}</main>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
