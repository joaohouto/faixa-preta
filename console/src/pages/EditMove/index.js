import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import api from '../../api'

import logoImg from '../../assets/images/logo-x.svg'

import { Container, Logo, Header, LeftBar, Main, LinkItem, Form,  MoveImage } from './styles';
import { PageTitleDark, Row } from '../../components/Global'
import Loader from '../../components/Loader'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Textarea from '../../components/Textarea';

export default class EditMove extends Component {

    state = {
        move: null
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {

        const id = this.props.match.params.move_id;
        const response = await api.get('/moves/' + id);

        this.setState({ move: response.data });
    }

    saveEdit = async () => {

        try {
            const response = await api.put(`/moves/${this.state.move._id}`, this.state.move);

            if(response.status === 200) {
                alert('Atualizado!');
                
                setTimeout(() => { 
                    window.location.href = '/moves/1';
                }, 1000);
            }
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

    handleVideoChange = (value) => {
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
                    <PageTitleDark>Editar movimento</PageTitleDark>
                    <Button onClick={this.saveEdit}>Salvar</Button>
                </Row>
                <br />

                { move !== null ? (
                    <Row style={{ alignItems: 'flex-start' }}>
                        <Form>
                            <Input 
                                label="Nome"
                                value={move.name}
                                onChange={(e) => this.handleNameChange(e.target.value)}
                            />
                            <Input 
                                label="Category" 
                                value={move.category}
                                onChange={(e) => this.handleCategoryChange(e.target.value)}
                            />
                            <Textarea    
                                label="Detalhes" 
                                value={move.details}
                                onChange={(e) => this.handleDetailsChange(e.target.value)}
                            />
                            <Input 
                                label="Imagem URL" 
                                value={move.imageUrl}
                                onChange={(e) => this.handleImageUrlChange(e.target.value)}
                            />
                            
                            <MoveImage src={move.imageUrl} alt="Imagem" style={{ marginBottom: 20 }} />

                            <Input 
                                label="Vídeos [URL]" 
                                value={move.videoUrl}
                                onChange={(e) => this.handleVideoUrlChange(e.target.value)}
                            />
                        </Form>
                    </Row>
                ) : <Loader /> }
                
            </Main>
        </Container>
    );
    }
}
