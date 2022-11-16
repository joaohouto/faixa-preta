import { IconTrash } from "@tabler/icons";
import React from "react";
import { Link } from "react-router-dom";

import { Container, Title, Tags, ActivityImage, Section } from "./styles";

const ActivityItem = ({ name, tags, onEdit, onDelete, children, ...rest }) => {
	return (
		<Container>
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
				{children}
			</Section>

			{!!onDelete && (
				<button onClick={onDelete}>
					<IconTrash size={20} />
				</button>
			)}
		</Container>
	);
};

export default ActivityItem;
