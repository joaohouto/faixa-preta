import React from "react";

import { Row, Title, Repetitions, MoveImage, Section } from "./styles";

const MoveItem = ({ dark, name, repetitions, ...rest }) => {
	return (
		<Row>
			<MoveImage
				{...rest}
				style={{
					borderBottomLeftRadius: 20,
					borderBottomRightRadius: 20,
					borderTopRightRadius: 20,
					borderTopLeftRadius: 20,
					overflow: "hidden",
				}}
			/>
			<Section>
				<Repetitions>x{repetitions}</Repetitions>
				<Title style={{ color: dark ? "#fff" : "#111" }}>{name}</Title>
			</Section>
		</Row>
	);
};

export default MoveItem;
