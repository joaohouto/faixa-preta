import React from "react";

import { Row, MoveName, MoveRepetitions, Section, BlackDot } from "./styles";

const MoveItem = ({ name, repetitions }) => {
	return (
		<Row>
			<Section>
				<BlackDot />
				<MoveName>{name}</MoveName>
				<MoveRepetitions>x{repetitions}</MoveRepetitions>
			</Section>
		</Row>
	);
};

export default MoveItem;
