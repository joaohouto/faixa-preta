import React from "react";

import { Container } from "./styles";

export default function MoveItem({ imageUrl, name, category }) {
	return (
		<Container>
			<img src={imageUrl} alt={name} />

			<div>
				<span>{category}</span>
				<strong>{name}</strong>
			</div>
		</Container>
	);
}
