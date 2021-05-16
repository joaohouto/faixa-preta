import React from "react";

import { Header, Logo } from "./styles";

import logoImg from "../../assets/logo.png";

const HomeHeader = () => {
	return (
		<Header>
			<Logo source={logoImg} />
		</Header>
	);
};

export default HomeHeader;
