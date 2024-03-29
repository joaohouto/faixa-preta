/* eslint-disable no-unused-expressions */
import React, { useState, useCallback, useRef } from "react";
import { useLocation, useHistory, useParams } from "react-router-dom";
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
import Input from "../../../components/Input";
import TextArea from "../../../components/TextArea";

import defaultImg from "../../../assets/images/fallback-image.png";

export default function Dashboard() {
	const [loading, setLoading] = useState(false);
	const [imageUrl, setImageUrl] = useState("");

	const formRef = useRef(null);
	const history = useHistory();
	const { addToast } = useToast();

	const handleSubmit = useCallback(
		async data => {
			try {
				setLoading(true);

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

				await api.post("/moves", {
					name: data.name,
					category: data.category,
					details: data.details,
					videoUrl: data.videoUrl.split(","),
					imageUrl: data.imageUrl,
				});

				addToast({
					type: "success",
					title: "Sucesso!",
					description: "Item criado.",
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
				setLoading(false);
			}
		},
		[addToast, history]
	);

	return (
		<Container>
			<Header />
			<Content>
				<LeftBar />

				<div>
					<Form ref={formRef} onSubmit={handleSubmit}>
						<ContentHeader>
							<PageTitleDark>Novo movimento</PageTitleDark>

							<div>
								<Button isLoading={loading} type="submit">
									Salvar
								</Button>
							</div>
						</ContentHeader>

						<Input label="Nome" name="name" />
						<Input label="Categoria" name="category" />

						<Input label="Array de vídeos (URL)" name="videoUrl" />
						<TextArea label="Detalhes" name="details" />

						<Input
							label="Imagem (URL)"
							name="imageUrl"
							onChange={e => setImageUrl(e.target.value)}
						/>
						<Image src={imageUrl || defaultImg} />
					</Form>
				</div>
			</Content>
		</Container>
	);
}
