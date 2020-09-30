import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import api from '../../api'

import logoImg from '../../assets/images/logo-x.svg'

import { Container, Logo, Header, LeftBar, Main, LinkItem, Form,  MoveImage } from './styles';
import { PageTitleDark, Row } from '../../components/Global'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Textarea from '../../components/Textarea';

export default class EditMove extends Component {

    state = {
        move: {
            name: '',
            category: '',
            details: '',
            imageUrl: '',
            videoUrl: []
        }
    }

    save = async () => {

        try {
            api.post(`/moves/`, this.state.move).then(response => {
                alert("Sucesso!")
                window.location.href = '/moves/1';
    
            }).catch(error => {
                alert(error);
                
            });
        } catch (err) {
            alert(err);
        }

    }

    handleNameChange = (value) => {
        const newState = {...this.state.move, name: value}
        this.setState({ move: newState })
    }

    handleCategoryChange = (value) => {
        const newState = {...this.state.move, category: value}
        this.setState({ move: newState })
    }

    handleVideoUrlChange = (value) => {
        value = value.split(',');

        const newState = {...this.state.move, videoUrl: value}
        this.setState({ move: newState })
    }

    handleDetailsChange = (value) => {
        const newState = {...this.state.move, details: value}
        this.setState({ move: newState })
    }

    handleImageUrlChange = (value) => {
        const newState = {...this.state.move, imageUrl: value}
        this.setState({ move: newState })
    }

    render() {

    const { move } = this.state;

    return (
        <Container>
            <Header>
                <Logo src={logoImg} alt="Faixa Preta" />
            </Header>

            <LeftBar>
                <Link to="/moves/1"><LinkItem>Movimentos</LinkItem></Link>
                <Link to="/activities/1"><LinkItem>Atividades</LinkItem></Link>
            </LeftBar>

            <Main>
                <Row style={{ justifyContent: 'space-between' }}>
                    <PageTitleDark>Adicionar movimento</PageTitleDark>
                    <Button onClick={this.save} type="submit">Salvar</Button>
                </Row>
                <br />

                <Row style={{ alignItems: 'flex-start' }}>
                    <Form>
                        <Input 
                            label="Nome"
                            value={move.name}
                            onChange={(e) => this.handleNameChange(e.target.value)}
                            required
                        />
                        <Input 
                            label="Category" 
                            value={move.category}
                            onChange={(e) => this.handleCategoryChange(e.target.value)}
                            required
                        />
                        <Textarea    
                            label="Detalhes" 
                            value={move.details}
                            onChange={(e) => this.handleDetailsChange(e.target.value)}
                            required
                        />
                        <Input 
                            label="Imagem URL" 
                            value={move.imageUrl}
                            onChange={(e) => this.handleImageUrlChange(e.target.value)}
                            required
                        />

                        <MoveImage src={move.imageUrl} alt="Imagem" style={{ marginBottom: 20 }} />

                        <Input 
                            label="Vídeos URL" 
                            value={move.videoUrl}
                            onChange={(e) => this.handleVideoUrlChange(e.target.value)}
                            required
                        />
                    </Form>
                </Row>
                
            </Main>
        </Container>
    );
    }
}
