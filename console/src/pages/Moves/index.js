import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import swal from 'sweetalert'

import { logout } from '../../services/auth'
import api from '../../api'

import logoImg from '../../assets/images/logo-x.svg'

import { Container, Logo, Header, LeftBar, Main, LinkItem, Dot } from './styles';
import { PageTitleDark, Row } from '../../components/Global'
import Loader from '../../components/Loader'
import Button from '../../components/Button'
import MoveItem from '../../components/MoveItem'
import SearchInput from '../../components/SearchInput'

export default class Dashboard extends Component {

    state = {
        items: [],
        page: 1,
        pages: null,
        pageList: [],
        search: ''
    }

    componentDidMount() {
        this.loadItems();
    }
    
    loadItems = async () => {
        const page = this.props.match.params.page_id;
        const response = await api.get('/moves?page=' + page);

        this.setState({ 
            items: response.data.docs, 
            page: response.data.page, 
            pages: response.data.pages 
        });
        this.helpBottomNav();
    }

    deleteItem = async (id) => {
        try {
            const response = await api.delete(`/moves/${id}`);

            if(response.status === 200) {
                swal('Deletado!', 'O item foi deletado.', 'success');
                
                setTimeout(() => {
                    window.location.href = '/moves/' + this.props.match.params.page_id;
                }, 1000);
            }
        } catch (err) {
            swal('Erro!', err, 'error');
        }
    }

    helpBottomNav() {
        const { pages } = this.state;
        
        let pageList = [];
        for(let i=1; i<=pages; i++){
            pageList.push(i);
        }

        this.setState({ pageList });
    }

    search = async (e) => {
        e.preventDefault();

        const response = await api.get('/moves?name=' + this.state.search + '&page=' + this.state.page);

        this.setState({ 
            items: response.data.docs, 
            page: response.data.page,
            pages: response.data.pages 
        });

        this.helpBottomNav();
    }

    render() {

    const { items, pageList } = this.state;
    
    return (
        <Container>
            <Header>
                <Logo src={logoImg} alt="Faixa Preta" />
            </Header>

            <LeftBar style={{ justifyContent: 'space-between' }}>
                <div>
                    <Link to="/moves/1"><LinkItem>Movimentos</LinkItem></Link>
                    <Link to="/activities/1"><LinkItem>Atividades</LinkItem></Link>
                </div>

                <Link to="#" onClick={() => logout()}><LinkItem style={{ backgroundColor: '#111' }}>Sair</LinkItem></Link>
            </LeftBar>

            <Main>

                <Row style={{ justifyContent: 'space-between' }}>
                    <PageTitleDark>Movimentos</PageTitleDark>
                    <Link to="/moves/add">
                        <Button>criar +</Button>
                    </Link>
                </Row>

                <SearchInput 
                    placeholder="Pesquisar" 
                    value={this.state.search}
                    onChange={e => this.setState({ search: e.target.value })}
                    onClick={(e) => this.search(e)}
                />

                <Row>
                    { pageList.map(page => (
                        this.props.match.params.page_id === page ? (
                            <Dot key={page} href={`/moves/${page}`} style={{ background: '#333', color: '#fff' }}>{page}</Dot>
                        ) : (
                            <Dot key={page} href={`/moves/${page}`}>{page}</Dot>
                        )
                    )) }
                </Row>

                { items.length > 0 ? items.map(item => (
                    <MoveItem 
                        key={item._id}
                        name={item.name} 
                        tags={[item.category]}
                        onEdit={`/moves/edit/${item._id}`}
                        onDelete={() => this.deleteItem(item._id)}
                        style={{ backgroundImage: 'url('+ item.imageUrl +')', backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                )) : <Loader /> }
                
            </Main>
        </Container>
    );
    }
}
