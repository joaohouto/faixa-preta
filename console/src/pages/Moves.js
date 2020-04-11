import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UseAnimations from "react-useanimations";
import { FillSpinner } from 'react-spinners-kit';

import api from '../services/api';
import Header from '../components/Header';

export default class Moves extends Component {

    state = {
        moves: [],
        page: 1,
        pages: null,
        pageList: [],
        search: ''
    }

    componentDidMount() {
        this.loadData();
    }

    loadData = async () => {

        const page = this.props.match.params.page_id;
        const response = await api.get('/moves?page=' + page);

        this.setState({ moves: response.data.docs, page: response.data.page, pages: response.data.pages });
        this.helpBottomNav();
    }

    helpBottomNav() {
        const { pages } = this.state;
        
        let pageList = [];
        for(let i=1; i<=pages; i++){
            pageList.push(i);
        }

        this.setState({ pageList });
    }

    search = async () => {
        const response = await api.get('/moves?name=' + this.state.search);

        this.setState({ moves: response.data.docs, page: response.data.page, pages: response.data.pages });
        this.helpBottomNav();
    }

    deleteActivity = async (id) => {

        api.delete(`/moves/${id}`)
        .then(response => {
            alert(response.data.message);
            console.log(response.data)
        })
        .catch(error => {
            alert(error);
        });

        window.location.href = '/moves/1';
    }


    render() {

        let { moves } = this.state;
        let { pageList } = this.state;

        return (
            <div>

                <Header />

                <header className="jumbotron">
                    <div className="container">
                        <h2><UseAnimations animationKey="archive" size={40} style={{ position: 'relative', top: -3 }} /> Movimentos</h2>
                    </div>
                </header>


                <div className="container" style={{ minHeight: 400 }}>

                    <div className="input-group mb-3">
                        <input onChange={(e) => this.setState({ search: e.target.value })} value={this.state.search} type="text" className="form-control" placeholder="O que procura?" aria-describedby="button-addon2" />
                        <div className="input-group-append">
                            <button onClick={this.search} className="btn btn-primary" type="button" id="button-addon2">Pesquisar</button>
                        </div>
                    </div>

                    <a className="btn btn-block" href="/moves/new/0"><button type="button" className="btn btn-secondary btn-lg btn-block">+ NOVO</button></a>

                    

                    <div>

                    { moves.length > 0 ? moves.map(i => (
                        <div className="card m-3" key={i._id}>
                            <div className="card-body">
                                <h6>{i.name}</h6>
                                <small>{i.details}</small>
                                <br/>
                                <br/>
                                <div>    
                                    <a href={`/moves/edit/${i._id}`}><button type="button" className="btn btn-primary btn-sm">Editar</button></a>
                                    <button onClick={() => this.deleteActivity(i._id)} type="button" className="btn btn-secondary btn-sm"><UseAnimations animationKey="trash2" size={20} style={{ position: 'relative', top: -3 }} /></button>
                                </div>
                            </div>
                        </div>
                    )) : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}><FillSpinner  size={30} color="#999" loading={true} /></div> }

                    </div>

                    <center>
                        <nav style={{ display: 'flex', justifyContent: 'center' }}>
                            <ul className="pagination">
                                { pageList.length > 0 ? pageList.map(page => (
                                    page == this.state.page ? (
                                        <li className="page-item active">
                                            <a href={`/moves/${page}`} className="page-link">{page}</a>
                                        </li>
                                    ) : (
                                        <li className="page-item">
                                            <a href={`/moves/${page}`} className="page-link">{page}</a>
                                        </li>
                                    )
                                )) : <li className="page-item"><Link className="page-link">...</Link></li> }
                            </ul>
                        </nav>
                    </center>


                </div>

                <footer style={{ color: '#555', background: '#111', textAlign: 'center', padding: 20 }}>
                    <p>&copy; 2020 Faixa Preta</p>
                </footer>
            </div>
        );
    }
}
