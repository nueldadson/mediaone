import React from "react";
import {
	SidebarContainer,
	Icon,
	CloseIcon,
	SidebarContent,
	SidebarMenu,
	SidebarLink,
	SidebarIcon,
	LinkedinIcon,
	InstagramIcon,
	TwitterIcon,
} from "./Sidebarelements";
import "./sidebar.css";
import { Logowhite } from "../../../assets/images";

const Sidebar = ({ isOpen, toggle }) => {
	return (
		<>
			{/* Prevent isOpen from being passed to the DOM */}
			<SidebarContainer
				$isOpen={isOpen}
				onClick={toggle}
				className="sidebar containerr"
			>
				<img src={Logowhite} alt="logo" className=" w-44 mt-8 ml-8 absolute" />
				<Icon onClick={toggle} className="mr-3npx mt-2">
					<CloseIcon />
				</Icon>
				<SidebarContent>
					<SidebarMenu>
						<SidebarLink onClick={toggle} href="#">
							Home
						</SidebarLink>
						<SidebarLink onClick={toggle} href="#aboutus">
							About Us
						</SidebarLink>
						<SidebarLink onClick={toggle} href="#services">
							Services
						</SidebarLink>
						<SidebarLink onClick={toggle} href="#footer">
							Contact
						</SidebarLink>
					</SidebarMenu>
					<SidebarIcon>
						<a href="https://linkedin.com/company/the-dune-agency">
							<LinkedinIcon />
						</a>
						<a href="https://instagram.com/theduneagency/">
							<InstagramIcon />
						</a>
						<a href="https://twitter.com/theduneagency/">
							<TwitterIcon />
						</a>
					</SidebarIcon>
				</SidebarContent>
			</SidebarContainer>
		</>
	);
};

export default Sidebar;
