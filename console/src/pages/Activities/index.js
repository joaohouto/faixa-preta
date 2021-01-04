import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { logout } from '../../services/auth'
import api from '../../api'

import logoImg from '../../assets/images/logo-x.svg'

import { Container, Logo, Header, LeftBar, Main, LinkItem, Dot } from './styles';
import { PageTitleDark, Row } from '../../components/Global'
import Loader from '../../components/Loader'
import Button from '../../components/Button'
import ActivityItem from '../../components/ActivityItem'
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
        const response = await api.get('/activities?page=' + page);

        this.setState({ 
            items: response.data.docs, 
            page: response.data.page, 
            pages: response.data.pages 
        });
        this.helpBottomNav();
    }

    deleteItem = async (id) => {
        try {
            const response = await api.delete(`/activities/${id}`);

            if(response.status === 200) {
                alert("Item deletado.");
                
                setTimeout(() => {
                    window.location.href = '/activities/' + this.props.match.params.page_id;
                }, 1000);
            }
        } catch (err) {
            alert(err);
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

        const response = await api.get('/activities?name=' + this.state.search + '&page=' + this.state.page);

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
                    <PageTitleDark>Atividades</PageTitleDark>
                    <Link to="/activities/add">
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
                            <Dot key={page} href={`/activities/${page}`} style={{ background: '#333', color: '#fff' }}>{page}</Dot>
                        ) : (
                            <Dot key={page} href={`/activities/${page}`}>{page}</Dot>
                        )
                    )) }
                </Row>

                { items.length > 0 ? items.map(item => (
                    <ActivityItem 
                        key={item._id}
                        name={item.name} 
                        tags={item.tags}
                        onEdit={`/activities/edit/${item._id}`}
                        onDelete={() => this.deleteItem(item._id)}
                        style={{ backgroundImage: `url('${item.imageUrl}')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                )) : <Loader /> }
                
            </Main>
        </Container>
    );
    }
}
