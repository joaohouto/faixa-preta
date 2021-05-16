import React from "react";

import { BadgeElement, Row } from "./styles";

const Badge = ({ children, dark, ...rest }) => {
	return (
		<Row>
			<BadgeElement style={{ color: dark ? "#333" : "#f1f1f1" }} {...rest}>
				{children}
			</BadgeElement>
		</Row>
	);
};

export default Badge;
