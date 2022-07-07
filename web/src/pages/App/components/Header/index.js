import React from "react";

import { Container } from "./styles";

import logoImg from "../../../../assets/images/logo-x.svg";

export default function Header() {
	return (
		<Container>
			<img src={logoImg} alt="Faixa Preta" />
			<h1>Biblioteca</h1>
		</Container>
	);
}
