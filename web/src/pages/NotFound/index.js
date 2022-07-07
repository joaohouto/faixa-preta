import React from "react";
import { IconAlertCircle } from "tabler-icons";
import { Wrapper, Row } from "./styles";

const Login = () => {
	return (
		<Wrapper>
			<Row>
				<IconAlertCircle size={24} color="#777" />
				<p>Página não encontrada</p>
			</Row>
		</Wrapper>
	);
};

export default Login;
