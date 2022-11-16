/* eslint-disable no-unused-expressions */
import React, { useRef, useCallback, useState } from "react";
import { useHistory } from "react-router-dom";
import * as Yup from "yup";
import { Form } from "@unform/web";

import getValidationErrors from "../../utils/getValidationErrors";

import { useAuth } from "../../hooks/auth";
import { useToast } from "../../hooks/toast";

import { PageTitleDark } from "../../components/Global";
import { Container } from "./styles";

import Input from "../../components/Input";
import Button from "../../components/Button";

import textureImg from "../../assets/images/texture.png";

const Login = () => {
	const [loading, setLoading] = useState(false);

	const history = useHistory();
	const formRef = useRef(null);

	const { signIn } = useAuth();
	const { addToast } = useToast();

	const handleSubmit = useCallback(
		async data => {
			try {
				setLoading(true);

				formRef.current?.setErrors({});

				const schema = Yup.object().shape({
					email: Yup.string()
						.required("Informe um email.")
						.email("Informe um email válido."),
					password: Yup.string().required("Informe a senha."),
				});

				await schema.validate(data, {
					abortEarly: false,
				});

				await signIn({
					email: data.email,
					password: data.password,
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
					title: "Erro na autenticação",
					description: err.response.data.message || "Algo deu errado!",
				});
			} finally {
				setLoading(false);
			}
		},
		[signIn, addToast, history]
	);

	return (
		<Container>
			<Form ref={formRef} onSubmit={handleSubmit}>
				<p>Faixa Preta - Karatê Shotokan</p>

				<PageTitleDark style={{ marginBottom: 20 }}>Autenticação</PageTitleDark>

				<Input label="Email" type="email" name="email" />
				<Input
					label="Senha"
					type="password"
					name="password"
					style={{ marginBottom: 10 }}
				/>
				<Button type="submit" isLoading={loading}>
					Entrar
				</Button>
			</Form>

			<img src={textureImg} alt="Textura" />
		</Container>
	);
};

export default Login;
