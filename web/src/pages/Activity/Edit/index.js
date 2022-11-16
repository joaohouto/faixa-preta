/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, { useState, useCallback, useRef, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { v4 } from "uuid";
import { Form } from "@unform/web";
import { Scope } from "@unform/core";
import * as Yup from "yup";

import api from "../../../services/api";
import getValidationErrors from "../../../utils/getValidationErrors";
import { useToast } from "../../../hooks/toast";

import { IconInfoCircle, IconMinus, IconPlus } from "@tabler/icons";

import {
	PageTitleDark,
	Row,
	InputLabel,
	SimpleTextDark,
	Dot as PaginationDot,
} from "../../../components/Global";
import { Container, Content, ContentHeader, Dot, Image } from "./styles";
import { MoveContainer, Column } from "./styles";
import Header from "../../../components/Header";
import LeftBar from "../../../components/LeftMenu";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";
import SearchInput from "../../../components/SearchInput";
import ListMoveItem from "../../../components/ListMoveItem";
import Loader from "../../../components/Loader";
import MoveItem from "../../../components/MoveItem";

import defaultImg from "../../../assets/images/fallback-image.png";

export default function Dashboard() {
	const [loading, setLoading] = useState(false);
	const [loadingAction, setLoadingAction] = useState(false);
	const [loadingSearchedMoves, setLoadingSearchedMoves] = useState(false);
	const [searchedMoves, setSearchedMoves] = useState([]);
	const [search, setSearch] = useState("");

	const [activity, setActivity] = useState({});
	const [imageUrl, setImageUrl] = useState("");
	const [moves, setMoves] = useState([]);

	const formRef = useRef(null);
	const history = useHistory();
	const { addToast } = useToast();
	const { activity_id } = useParams();

	useEffect(() => {
		getActivity();
		handleSearch();
	}, []);

	const getActivity = async () => {
		try {
			setLoading(true);

			const response = await api.get(`/activities/${activity_id}`);
			setActivity(response.data);
			setImageUrl(response.data.imageUrl);

			const responseObject = response.data;
			let parsedMoves = [];
			responseObject.moves?.map(move => {
				parsedMoves.push({
					id: v4(),
					move_id: move.move_id._id,
					data: move.move_id,
					repetitions: parseInt(move.repetitions),
				});
			});

			setMoves(parsedMoves);
		} catch (err) {
			addToast({
				type: "error",
				title: "Erro!",
				description: err.response.data?.message || "Algo deu errado.",
			});
		} finally {
			setLoading(false);
		}
	};

	const handleSubmit = useCallback(
		async data => {
			try {
				setLoadingAction(true);

				formRef.current?.setErrors({});

				const schema = Yup.object().shape({
					name: Yup.string().required("Informe o nome."),
					tags: Yup.string().required("Informe um array de tags."),
					details: Yup.string().required("Informe os detalhes."),
					imageUrl: Yup.string().required("Informe um link para imagem."),
				});

				await schema.validate(data, {
					abortEarly: false,
				});

				await api.put(`/activities/${activity_id}`, {
					name: data.name,
					tags: data.tags.split(","),
					details: data.details,
					imageUrl: data.imageUrl,
					moves: data.moves,
				});

				addToast({
					type: "success",
					title: "Sucesso!",
					description: "Item alterado.",
				});

				history.push("/dashboard/activities");
			} catch (err) {
				if (err instanceof Yup.ValidationError) {
					const errors = getValidationErrors(err);

					formRef.current?.setErrors(errors);
					return;
				}

				addToast({
					type: "error",
					title: "Erro!",
					description: err.response.data.message || "Algo deu errado.",
				});
			} finally {
				setLoadingAction(false);
			}
		},
		[addToast, history]
	);

	const handleSearch = async e => {
		e?.preventDefault();

		try {
			setLoadingSearchedMoves(true);

			const response = await api.get(`/moves?name=${search}`);
			setSearchedMoves(response.data);
		} catch (err) {
			console.log(err);
		} finally {
			setLoadingSearchedMoves(false);
		}
	};

	const handlePageChange = async page => {
		try {
			setLoadingSearchedMoves(true);

			const response = await api.get(`/moves?name=${search}&page=${page}`);
			setSearchedMoves(response.data);
		} catch (err) {
			console.log(err);
		} finally {
			setLoadingSearchedMoves(false);
		}
	};

	const handleAddMove = move => {
		const newMoves = moves.concat({
			id: v4(),
			move_id: move._id,
			data: move,
			repetitions: 1,
		});

		setMoves(newMoves);
	};

	const handleDeleteMove = id => {
		const newMoves = moves.filter(item => item.id !== id);

		setMoves(newMoves);
	};

	const handlePlus = id => {
		const newMoves = moves.map(move =>
			move.id === id ? { ...move, repetitions: move.repetitions + 1 } : move
		);

		setMoves(newMoves);
	};

	const handleMinus = id => {
		const newMoves = moves.map(move =>
			move.id === id
				? {
						...move,
						repetitions:
							move.repetitions > 1 ? move.repetitions - 1 : move.repetitions,
				  }
				: move
		);

		setMoves(newMoves);
	};

	const handleDelete = async () => {
		if (window.confirm("Tem certeza? A exclusão do item é irreversível.")) {
			try {
				await api.delete(`/activities/${activity_id}`);

				addToast({
					type: "success",
					title: "Sucesso!",
					description: "Item excluído.",
				});

				history.goBack();
			} catch (err) {
				addToast({
					type: "error",
					title: "Erro!",
					description: "Não foi possível excluir o item.",
				});
			}
		}
	};

	return (
		<Container>
			<Header />

			<Content>
				<LeftBar />
				<div>
					<Form ref={formRef} onSubmit={handleSubmit}>
						<ContentHeader>
							<PageTitleDark>Editar atividade</PageTitleDark>
							<div>
								<Button onClick={handleDelete} type="button">
									Excluir
								</Button>
								<Button isLoading={loadingAction} type="submit">
									Salvar
								</Button>
							</div>
						</ContentHeader>

						{!loading && (
							<Row
								style={{
									alignItems: "flex-start",
									justifyContent: "space-between",
								}}
							>
								<Column>
									<Input
										label="Nome"
										name="name"
										defaultValue={activity.name}
									/>
									<Input
										label="Tags"
										name="tags"
										defaultValue={activity.tags}
									/>
									<Input
										label="Imagem (URL)"
										name="imageUrl"
										defaultValue={activity.imageUrl}
										onChange={e => setImageUrl(e.target.value)}
									/>

									<Image src={imageUrl || defaultImg} />
								</Column>
								<Column>
									<TextArea
										label="Detalhes"
										name="details"
										defaultValue={activity.details}
									/>
								</Column>
							</Row>
						)}

						<div style={{ display: "none" }}>
							{moves?.map((move, index) => (
								<Scope path={`moves[${index}]`}>
									<Input label="Move ID" name="move_id" value={move.move_id} />
									<Input
										label="Repetitions"
										name="repetitions"
										value={move.repetitions}
									/>
								</Scope>
							))}
						</div>
					</Form>

					{loading && <Loader />}

					{!loading && (
						<Row
							style={{
								alignItems: "flex-start",
								justifyContent: "space-between",
							}}
						>
							<Column>
								<SearchInput
									placeholder="Pesquisar movimentos"
									value={search}
									onChange={e => setSearch(e.target.value)}
									onClick={handleSearch}
									style={{ marginBottom: 20 }}
								/>

								{loadingSearchedMoves ? (
									<Loader />
								) : (
									searchedMoves?.docs?.map(item => (
										<ListMoveItem
											name={item.name}
											onAdd={() => handleAddMove(item)}
										/>
									))
								)}

								<Row style={{ flexDirection: "row" }}>
									{!loadingSearchedMoves &&
										[...Array(searchedMoves.pages)].map((i, index) => (
											<PaginationDot
												onClick={() => handlePageChange(index + 1)}
												type="button"
												style={
													index + 1 === Number(searchedMoves.page)
														? {
																background: "#222",
																color: "#fff",
																pointerEvents: "none",
														  }
														: {}
												}
											>
												{index + 1}
											</PaginationDot>
										))}
								</Row>
							</Column>

							<Column>
								<InputLabel>Movimentos</InputLabel>

								<MoveContainer>
									{moves?.map(move => (
										<MoveItem
											style={{
												backgroundImage: "url(" + move.data.imageUrl + ")",
												backgroundSize: "cover",
												backgroundPosition: "center",
											}}
											name={move.data.name}
											onDelete={() => handleDeleteMove(move.id)}
										>
											<Row
												style={{ marginTop: 10, flexDirection: "row", gap: 10 }}
											>
												<Dot type="button" onClick={() => handleMinus(move.id)}>
													<IconMinus size={8} />
												</Dot>

												<b>{move.repetitions}</b>

												<Dot type="button" onClick={() => handlePlus(move.id)}>
													<IconPlus size={8} />
												</Dot>
											</Row>
										</MoveItem>
									))}

									{moves?.length === 0 && (
										<Row style={{ flexDirection: "row" }}>
											<IconInfoCircle
												color="#777"
												style={{ marginRight: 10 }}
											/>
											<SimpleTextDark
												style={{ fontWeight: 600, color: "#777" }}
											>
												Nenhum movimento adicionado.
											</SimpleTextDark>
										</Row>
									)}
								</MoveContainer>
							</Column>
						</Row>
					)}
				</div>
			</Content>
		</Container>
	);
}
