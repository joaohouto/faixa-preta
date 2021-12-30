/* eslint-disable no-unused-expressions */
import React, { useState, useCallback, useRef, useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import * as Yup from "yup";
import { Form } from "@unform/web";

import getValidationErrors from "../../../utils/getValidationErrors";
import api from "../../../services/api";

import { useToast } from '../../../hooks/toast'

import { PageTitleDark, Row, Container, Main } from '../../../components/Global'
import Header from '../../../components/Header'
import LeftBar from '../../../components/LeftMenu';
import Button from '../../../components/Button'
import Loader from '../../../components/Loader';
import Input from '../../../components/Input';
import TextArea from '../../../components/TextArea';

export default function Dashboard (){
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
                imageUrl: response.data.imageUrl
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
        async (data) => {
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
                    videoUrl: data.videoUrl.split(','),
                    imageUrl: data.imageUrl
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
        [addToast, history]
    );

    return (
        <Container>
            <Header />
            <LeftBar />

            <Main>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <Row style={{ justifyContent: 'space-between' }}>
                        <PageTitleDark>Editar movimento</PageTitleDark>
                        <Button 
                            isLoading={loadingSubmit}
                            type="submit"
                        >
                            Salvar
                        </Button>
                    </Row>

                    { loading ? <Loader /> : (
                        <>
                            <Input label="Nome" name="name" defaultValue={move.name} />
                            <Input label="Categoria" name="category" defaultValue={move.category} />
                            <Input label="Array de vídeos (URL)" name="videoUrl" defaultValue={move.videoUrl} />
                            <Input label="Imagem (URL)" name="imageUrl" defaultValue={move.imageUrl} />
                            <TextArea label="Detalhes" name="details" defaultValue={move.details} />
                        </>
                    ) }
                </Form>
            </Main>
        </Container>
    );
}
