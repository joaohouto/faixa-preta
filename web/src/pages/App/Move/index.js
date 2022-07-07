/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from "../../../services/api";

import Header from "../components/Header";
import SearchInput from "../../../components/Header";
import { Container, Content, MoveContainer } from "./styles";

const Moves = () => {
	const [loading, setLoading] = useState(true);
	const [move, setMove] = useState({});

	const { move_id } = useParams();

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		try {
			const response = await api.get(`/moves/${move_id}`);

			setMove(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			<Header />

			<Content>
				<MoveContainer>
					<img src={move.imageUrl} alt="Imagem" />

					<div>
						<span>{move.category}</span>
						<h1>{move.name}</h1>
						<p>{move.details}</p>
					</div>
				</MoveContainer>

				<h2>Vídeos</h2>
			</Content>
		</Container>
	);
};

export default Moves;
