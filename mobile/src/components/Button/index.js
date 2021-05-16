import React from "react";

import { ButtonElement, ButtonText } from "./styles";

const Button = ({ children, textColor, ...rest }) => {
	return (
		<ButtonElement {...rest}>
			<ButtonText style={{ color: textColor || "#fff" }}>{children}</ButtonText>
		</ButtonElement>
	);
};

export default Button;
