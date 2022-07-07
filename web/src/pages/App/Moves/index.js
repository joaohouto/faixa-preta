/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

import api from "../../../services/api";

import MoveItem from "../components/MoveItem";
import Header from "../components/Header";
import SearchInput from "../../../components/SearchInput";
import { ButtonPill, ButtonsRow, Container, Content } from "./styles";

const Moves = () => {
	const [moves, setMoves] = useState([]);
	const [loading, setLoading] = useState(true);
	const [loadingMore, setLoadingMore] = useState(false);
	const [query, setQuery] = useState("");
	const [category, setCategory] = useState("");
	const [page, setPage] = useState(1);
	const [hasMore, setHasMore] = useState(false);

	const [scrollRadio, setScrollRadio] = useState(null);
	const scrollObserve = useRef();

	useEffect(() => {
		if (hasMore && scrollRadio) {
			//loadMore();
		}
	}, [hasMore, scrollRadio]);

	const intersectionObserver = new IntersectionObserver(entries => {
		const radio = entries[0].intersectionRatio;
		setScrollRadio(radio);
	});

	useEffect(() => {
		handleSearch();
		intersectionObserver.observe(scrollObserve.current);

		return () => {
			intersectionObserver.disconnect();
		};
	}, [intersectionObserver]);

	const handleSearch = async () => {
		try {
			const response = await api.get(`/moves`, {
				params: {
					name: query,
					category,
				},
			});

			console.log(response.data);

			setMoves(response.data.docs);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<Container>
			<Header />

			<Content>
				<h2>Movimentos</h2>

				<SearchInput placeholder="Pesquisar" value={query} />

				<ButtonsRow>
					<ButtonPill active>Kata</ButtonPill>
					<ButtonPill>Kihon</ButtonPill>
					<ButtonPill>Kumite</ButtonPill>
				</ButtonsRow>

				{moves.length > 0 ? (
					moves.map(move => (
						<Link to={`/app/move/${move._id}`}>
							<MoveItem
								imageUrl={move.imageUrl}
								name={move.name}
								category={move.category}
							/>
						</Link>
					))
				) : (
					<p>Nada encontrado!</p>
				)}

				{!loading && <div ref={scrollObserve} />}
			</Content>
		</Container>
	);
};

export default Moves;
