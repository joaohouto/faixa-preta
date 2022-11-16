/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-expressions */
import React, { useState, useCallback, useRef, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import * as Yup from "yup";
import { Form } from "@unform/web";

import getValidationErrors from "../../../utils/getValidationErrors";
import api from "../../../services/api";

import { useToast } from "../../../hooks/toast";

import { PageTitleDark, Row } from "../../../components/Global";
import { Container, Content, ContentHeader, Image } from "./styles";
import Header from "../../../components/Header";
import LeftBar from "../../../components/LeftMenu";
import Button from "../../../components/Button";
import Loader from "../../../components/Loader";
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";

import defaultImg from "../../../assets/images/fallback-image.png";

export default function Dashboard() {
	const [loading, setLoading] = useState(true);
	const [loadingSubmit, setLoadingSubmit] = useState(false);
	const [move, setMove] = useState();

	const formRef = useRef(null);
	const history = useHistory();
	const { addToast } = useToast();
	const { move_id } = useParams();

	useEffect(() => {
		getMove();
	}, []);

	const getMove = useCallback(async () => {
		try {
			const response = await api.get(`/moves/${move_id}`);
			setMove(response.data);

			formRef.current.setData({
				name: response.data.name,
				category: response.data.category,
				details: response.data.details,
				videoUrl: response.data.videoUrl,
				imageUrl: response.data.imageUrl,
			});

			setLoading(false);
		} catch (err) {
			addToast({
				type: "error",
				title: "Erro!",
				description: err.response.data.message || "Algo deu errado!",
			});
		}
	}, [addToast, move_id]);

	const handleSubmit = useCallback(
		async data => {
			try {
				setLoadingSubmit(true);

				formRef.current?.setErrors({});

				const schema = Yup.object().shape({
					name: Yup.string().required("Informe o nome."),
					category: Yup.string().required("Informe a categoria."),
					details: Yup.string().required("Informe os detalhes."),
					videoUrl: Yup.string().required("Informe um array de vídeos."),
					imageUrl: Yup.string().required("Informe um link para imagem."),
				});

				await schema.validate(data, {
					abortEarly: false,
				});

				await api.put(`/moves/${move_id}`, {
					name: data.name,
					category: data.category,
					details: data.details,
					videoUrl: data.videoUrl.split(","),
					imageUrl: data.imageUrl,
				});

				addToast({
					type: "success",
					title: "Sucesso!",
					description: "Item alterado.",
				});

				history.push("/dashboard/moves");
			} catch (err) {
				if (err instanceof Yup.ValidationError) {
					const errors = getValidationErrors(err);

					formRef.current?.setErrors(errors);
					return;
				}

				addToast({
					type: "error",
					title: "Erro!",
					description: err.response.data.message || "Algo deu errado!",
				});
			} finally {
				setLoadingSubmit(false);
			}
		},
		[addToast, history, move_id]
	);

	const handleDelete = async () => {
		if (window.confirm("Tem certeza? A exclusão do item é irreversível.")) {
			try {
				await api.delete(`/moves/${move_id}`);

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
							<PageTitleDark>Editar movimento</PageTitleDark>

							<div>
								<Button onClick={handleDelete} type="button">
									Excluir
								</Button>
								<Button isLoading={loadingSubmit} type="submit">
									Salvar
								</Button>
							</div>
						</ContentHeader>

						{loading ? (
							<Loader />
						) : (
							<>
								<Input label="Nome" name="name" defaultValue={move.name} />
								<Input
									label="Categoria"
									name="category"
									defaultValue={move.category}
								/>
								<Input
									label="Array de vídeos (URL)"
									name="videoUrl"
									defaultValue={move.videoUrl}
								/>

								<TextArea
									label="Detalhes"
									name="details"
									defaultValue={move.details}
								/>

								<Input
									label="Imagem (URL)"
									name="imageUrl"
									defaultValue={move.imageUrl}
								/>
								<Image src={move.imageUrl || defaultImg} />
							</>
						)}
					</Form>
				</div>
			</Content>
		</Container>
	);
}
