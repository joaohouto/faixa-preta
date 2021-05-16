import React, { useState, useEffect, useCallback } from 'react'
import { useLocation, useHistory } from 'react-router-dom'

import { useToast } from '../../hooks/toast'
import api from '../../services/api'

import { PageTitleDark, Row, Dot, Container, Main } from '../../components/Global'
import Header from '../../components/Header'
import LeftBar from '../../components/LeftMenu';
import Loader from '../../components/Loader'
import Button from '../../components/Button'
import ActivityItem from '../../components/ActivityItem'
import SearchInput from '../../components/SearchInput'

export default function Dashboard (){
    const [loading, setLoading] = useState(true);
    const [itens, setItens] = useState();
    const [search, setSearch] = useState('');

    const history = useHistory();
    const { addToast } = useToast();
    const location = useLocation();

    useEffect(() => {
        loadItems();
    }, []);
    
    const loadItems = useCallback(async () => {
        try {
            setLoading(true);
            
            const page = location.search.replace("?page=", "");
            const url = page ? `/activities?page=${page}` : "/activities";

            const response = await api.get(url);
            
            setItens(response.data);
        } catch (err) {
            addToast({
                type: "error",
                title: "Erro!",
                description: err.message || "Algo deu errado."
            });

        } finally {
            setLoading(false);
        }
    }, [addToast, location.search]);

    const deleteItem = useCallback(async (id) => {
        try {
            await api.delete(`/activities/${id}`);

            addToast({
                type: "success",
                title: "Sucesso!",
                description: "Item excluído."
            });

            history.go(0);

        } catch (err) {
            addToast({
                type: "error",
                title: "Erro!",
                description: "Não foi possível excluir o item."
            });
        }
    }, [addToast]);

    const handleSearch = async (e) => {
        e.preventDefault();

        try {
            setLoading(true);
            history.push("/dashboard/activities");

            const response = await api.get(`/activities?name=${search}`);

            setItens(response.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }
    
    return (
        <Container>
            <Header />
            <LeftBar />

            <Main>

                <Row style={{ justifyContent: 'space-between' }}>
                    <PageTitleDark>Atividades</PageTitleDark>
                    <Button onClick={() => history.push('/dashboard/activities/create')}>
                        criar +
                    </Button>
                </Row>

                <SearchInput 
                    placeholder="Pesquisar" 
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    onClick={handleSearch}
                    style={{ marginBottom: 20 }}
                />

                { !loading ? itens?.docs?.map(item => (
                    <ActivityItem 
                        key={item._id}
                        name={item.name} 
                        tags={item.tags}
                        onEdit={`/dashboard/activities/edit/${item._id}`}
                        onDelete={() => deleteItem(item._id)}
                        image={item.imageUrl}
                        style={{ backgroundImage: 'url('+ item.imageUrl +')', backgroundSize: 'cover', backgroundPosition: 'center' }}
                    />
                )) : <Loader /> }

                <Row style={{ flexDirection: 'row' }}>
                    { !loading && [...Array(itens.pages)].map((i, index) => (
                        <Dot 
                            href={`/dashboard/activities?page=${index + 1}`}
                            style={
                                index + 1 === Number(itens.page) ? 
                                    { background: "#222", color: "#fff", pointerEvents: 'none' } 
                                    : {}
                            }
                        >
                            {index + 1}
                        </Dot>
                    ))}
                </Row>
                
            </Main>
        </Container>
    );
}
