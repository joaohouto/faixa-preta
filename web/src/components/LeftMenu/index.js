import React from "react";
import { useLocation, Link } from "react-router-dom";

import { IconPackage, IconJumpRope } from "@tabler/icons";

import { Container, NavItem } from "./styles";

const Navbar = () => {
	const location = useLocation();

	return (
		<Container>
			<ul>
				<NavItem active={location.pathname.includes("/dashboard/moves")}>
					<Link to="/dashboard/moves">
						<IconPackage size={24} /> Movimentos
					</Link>
				</NavItem>

				<NavItem active={location.pathname.includes("/dashboard/activities")}>
					<Link to="/dashboard/activities">
						<IconJumpRope size={24} /> Atividades
					</Link>
				</NavItem>
			</ul>
		</Container>
	);
};

export default Navbar;
