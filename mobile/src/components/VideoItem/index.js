import React from "react";

import { Row, Title, Tags, ActivityImage, Section } from "./styles";

const Button = ({ name, tags, source, onPress, ...rest }) => {
	return (
		<Row onPress={onPress} {...rest}>
			<ActivityImage
				source={source}
				style={{
					borderBottomLeftRadius: 20,
					borderBottomRightRadius: 20,
					borderTopRightRadius: 20,
					borderTopLeftRadius: 20,
					overflow: "hidden",
				}}
			/>
			<Section>
				<Title numberOfLines={2}>{name}</Title>
				<Tags numberOfLines={1}>
					{tags &&
						tags.map((tag, index) => {
							return index < tags.length - 1 ? tag + " - " : tag;
						})}
				</Tags>
			</Section>
		</Row>
	);
};

export default Button;
