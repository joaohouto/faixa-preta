import React from "react";
import { Link } from "react-router-dom";

import { Row, Title, Tags, ActivityImage, Section } from "./styles";

const ActivityItem = ({ name, tags, onEdit, onDelete, ...rest }) => {
	return (
		<Row>
			<ActivityImage {...rest} />
			<Section>
				<Title>
					<Link to={onEdit}>{name}</Link>
				</Title>
				<Tags>
					{tags &&
						tags.map((tag, index) => {
							return index < tags.length - 1 ? tag + " - " : tag;
						})}
				</Tags>
			</Section>
		</Row>
	);
};

export default ActivityItem;
