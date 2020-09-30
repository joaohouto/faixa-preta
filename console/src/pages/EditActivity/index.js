import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import api from '../../api'

import logoImg from '../../assets/images/logo-x.svg'

import { Container, Logo, Header, LeftBar, Main, LinkItem, Form,  ActivityImage, MoveItemTitle, Dot, Tags, InputBox, InputLabel, RepetitionsInput } from './styles';
import { PageTitleDark, Row } from '../../components/Global'
import SearchInput from '../../components/SearchInput'
import MoveItem from '../../components/MoveItem'
import Loader from '../../components/Loader'
import Input from '../../components/Input'
import Button from '../../components/Button'
import Textarea from '../../components/Textarea';

export default class EditActivity extends Component {

    state = {
        activity: null,
        searchedMoves: [],
        page: 1,
        pages: null,
        search: '',
        pageList: [],
        laoding: true
    }

    componentDidMount() {
        this.loadData();
        this.loadMoves();
    }
    
    loadData = async () => {
        const id = this.props.match.params.activity_id;
        const response = await api.get('/activities/' + id);
        
        this.setState({ activity: response.data });
        
        const { moves } = this.state.activity;

        let newMoves = [];

        for (const move of moves) {
            const { data } = await api.get('/moves/' + move.move_id);

            newMoves.push({ ...move, fakeId: move._id, name: data.name, imageUrl: data.imageUrl  });
        }

        this.setState({ activity: { ...this.state.activity, moves: newMoves } });
    }

    loadMoves = async () => {
        const response = await api.get('/moves?page=' + this.state.page + '&name=' + this.state.search);

        this.setState({ 
            searchedMoves: response.data.docs, 
            pages: response.data.pages 
        });
        this.helpBottomNav();
    }

    helpBottomNav() {
        const { pages } = this.state;
        
        let pageList = [];
        for(let i=1; i<=pages; i++){
            pageList.push(i);
        }

        this.setState({ pageList, loading: false });
    }

    saveEdit = async () => {

        try {
            const response = await api.put(`/activities/${this.state.activity._id}`, this.state.activity);

            if(response.status === 200) {
                alert('Atualizado!');
                
                setTimeout(() => { 
                    window.location.href = '/activities/1';
                }, 1000);
            }
        } catch(err) {
            alert(err)
        }

    }

    navigateTo = async (page) => {
        await this.setState({ page: page })
        await this.loadMoves(); 
    }

    handleMoveSearch = async (e) => {
        e.preventDefault();

        const response = await api.get('/moves?name=' + this.state.search);

        this.setState({ 
            searchedMoves: response.data.docs, 
            page: response.data.page, 
            pages: response.data.pages 
        });
        this.helpBottomNav();
    }

    addMove = (move) => {
        let { moves } = this.state.activity;
        moves.push({ 
            fakeId: move._id,
            name: move.name,
            imageUrl: move.imageUrl,
            move_id: move._id,
            repetitions: 0
        });

        this.setState({ ...this.state.activity, moves });

    }

    removeMove = (fakeId) => {
        let { moves } = this.state.activity;

        let moveToRemove;
        moves.forEach((move, index) => {
            if(move.fakeId == fakeId){
                moveToRemove = index;
            }
        });

        moves.splice(moveToRemove, 1);

        this.setState({ ...this.state.activity, moves });
    }

    getMoveName = async (move_id) => {
        const moveResponse = await api.get('/moves/' + move_id);

        return moveResponse.data.name;
     
    }

    handlePlusRepetitons(fakeId) {
        let { moves } = this.state.activity;

        let moveIndex = moves.findIndex((move => move.fakeId == fakeId));
        moves[moveIndex].repetitions++

        this.setState({ ...this.state.activity, moves });

    }

    handleMinusRepetitons(fakeId) {
        let { moves } = this.state.activity;

        let moveIndex = moves.findIndex((move => move.fakeId == fakeId));
        if (moves[moveIndex].repetitions > 0) {
            moves[moveIndex].repetitions--
        }

        this.setState({ ...this.state.activity, moves });
    }
    
    handleNameChange = (value) => {
        const newState = {...this.state.activity, name: value}
        this.setState({ activity: newState })
    }

    handleTagsChange = (value) => {
        value = value.split(',');

        const newState = {...this.state.activity, tags: value}
        this.setState({ activity: newState })
    }

    handleVideoChange = (value) => {
        value = value.split(',');

        const newState = {...this.state.activity, videoUrl: value}
        this.setState({ activity: newState })
    }

    handleDetailsChange = (value) => {
        const newState = {...this.state.activity, details: value}
        this.setState({ activity: newState })
    }

    handleImageUrlChange = (value) => {
        const newState = {...this.state.activity, imageUrl: value}
        this.setState({ activity: newState })
    }

    render() {

    const { activity, pageList, searchedMoves, loading } = this.state;
    
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
                    <PageTitleDark>Editar atividade</PageTitleDark>
                    <Button type="submit" onClick={this.saveEdit}>Salvar</Button>
                </Row>
                <br />

                { !loading && activity !== null ? (
                    <Row style={{ alignItems: 'flex-start' }}>
                        <Form>
                            <Input 
                                label="Nome"
                                value={activity.name}
                                onChange={(e) => this.handleNameChange(e.target.value)}
                                required
                            />
                            <Input 
                                label="Tags" 
                                value={activity.tags}
                                onChange={(e) => this.handleTagsChange(e.target.value)}
                                required
                            />
                            <Textarea    
                                label="Detalhes" 
                                value={activity.details}
                                onChange={(e) => this.handleDetailsChange(e.target.value)}
                                required
                            />
                            <Input 
                                label="Imagem URL" 
                                value={activity.imageUrl}
                                onChange={(e) => this.handleImageUrlChange(e.target.value)}
                                required
                            />
                            
                            <ActivityImage src={activity.imageUrl} alt="Imagem" />

                        </Form>

                        <Form>

                            <InputLabel>Movimentos</InputLabel>
                            <InputBox>
                                { activity.moves.map(move => (
                                    <MoveItem 
                                        key={move._id}
                                        name={move.name}
                                        style={{ backgroundImage: 'url("'+ move.imageUrl +'")', backgroundSize: 'cover', backgroundPosition: 'center' }}
                                        onDelete={() => this.removeMove(move.fakeId)}
                                    >
                                        <Row>
                                            <Tags>{"x" + move.repetitions}</Tags>
                                            <Dot onClick={() => this.handleMinusRepetitons(move.fakeId) } style={{ margin: 3, height: 20, width: 20 }}>-</Dot>
                                            <Dot onClick={() => this.handlePlusRepetitons(move.fakeId) } style={{ margin: 3, height: 20, width: 20 }}>+</Dot>
                                        </Row>
                                    </MoveItem>
                                )) }
                            </InputBox>

                            <SearchInput 
                                placeholder="Procurar movimentos"
                                value={this.state.search}
                                onChange={e => this.setState({ search: e.target.value })}
                                onClick={e => this.handleMoveSearch(e)}
                            />

                            { searchedMoves.length > 0 ? searchedMoves.map(move => (
                                <MoveItemTitle onClick={() => this.addMove(move)} key={move._id}>+ {move.name}</MoveItemTitle>
                            )) : <Loader /> }

                            <Row>
                                { pageList.map(page => (
                                    page == this.state.page ? (
                                        <Dot key={page} onClick={() => this.navigateTo(page)} style={{ background: '#333', color: '#fff' }}>{page}</Dot>
                                    ) : (
                                        <Dot key={page} onClick={() => this.navigateTo(page)}>{page}</Dot>
                                    )
                                )) }
                            </Row>
                        </Form>
                    </Row>
                ) : <Loader /> }
                
            </Main>
        </Container>
    );
    }
}
