import React from "react";
import { Alert } from "react-native";
import { parseTime } from "../../services/calendar";

import {
	Container,
	Row,
	Title,
	Tags,
	MoveImage,
	Section,
	Day,
	Month,
	Wrapper,
	DeleteButton,
	Dot
} from "./styles";

const MoveItemSearched = ({ name, date, time, onDelete }) => {
	let fullDate = date.split("/");
	const months = [
		"JAN",
		"FEV",
		"MAR",
		"ABR",
		"MAI",
		"JUN",
		"JUL",
		"AGO",
		"SET",
		"OUT",
		"NOV",
		"DEZ",
	];
	fullDate[1] = months[fullDate[1] - 1];

	const handleDelete = () => {
		Alert.alert(
			"Excluir",
			"Deseja excluir esse treino? A ação não pode ser desfeita.",
			[
				{
					text: "Cancelar",
					style: "cancel",
				},
				{ text: "Excluir", onPress: () => onDelete() },
			],
			{ cancelable: true }
		);
	};

	return (
		<Container>
			<Row>
				<Wrapper>
					<MoveImage>
						<Month>{fullDate[1]}</Month>
						<Day>{fullDate[0]}</Day>
					</MoveImage>
					<Section>
						<Title>{name}</Title>
						<Tags>{parseTime(time)}</Tags>
					</Section>
				</Wrapper>

				<DeleteButton onPress={() => handleDelete()}>
					<Dot />
				</DeleteButton>
			</Row>
		</Container>
	);
};

export default MoveItemSearched;
