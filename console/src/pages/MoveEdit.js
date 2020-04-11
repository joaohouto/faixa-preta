import React, { Component } from 'react';

import UseAnimations from "react-useanimations";
import { FillSpinner } from 'react-spinners-kit';

import api from '../services/api';
import Header from "../components/Header";

export default class MoveEdit extends Component {

    state = {
        move: null
    }

    componentDidMount() {
        this.loadData();
    }

    saveEdit = (e) => {
        e.preventDefault();

        api.put(`/moves/${this.state.move._id}`, this.state.move)
        .then(response => {
            alert("Ok!");
            window.location.href = '/moves/1';
        })
        .catch(error => {
            alert(error);
        });

    }

    loadData = async () => {

        const id = this.props.match.params.move_id;
        const response = await api.get('/moves/' + id);

        this.setState({ move: response.data });
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

    handleImageChange = (value) => {
        const newState = {...this.state.move, image: value}
        this.setState({ move: newState })
    }

    handleDifficultyChange = (value) => {
        const newState = {...this.state.move, difficulty: value}
        this.setState({ move: newState })
    }

    render() {

        let { move } = this.state;

        return (
            <div>

                <Header />

                <header className="jumbotron">
                    <div className="container">
                        <h2><UseAnimations animationKey="settings" size={40} style={{ position: 'relative', top: -3 }} /> Editar movimento</h2>
                    </div>
                </header>

                <div className="container" style={{ minHeight: 400 }}>

                    { move != null ? (
                        <form onSubmit={(e) => this.saveEdit(e)} method="put">
                            
<div className="form-row">
    <div className="form-group col-md-6">
        <label>Nome</label>
        <input value={move.name} required onChange={(e) => this.handleNameChange(e.target.value)} type="text" className="form-control" />
    </div>

    <div className="form-group col-md-6">
        <label>Categoria</label>
        <input value={move.category} required onChange={(e) => this.handleCategoryChange(e.target.value)} type="text" className="form-control" placeholder="Ex: Kihon, Kata ou Kumite" />
    </div>
</div>

<div className="form-group">
    <label>Detalhes</label>
    <textarea value={move.details} required onChange={(e) => this.handleDetailsChange(e.target.value)} className="form-control" rows="3"></textarea>
</div>

<div className="form-group">
    <label>Dificuldade</label>
    <input value={move.difficulty} required onChange={(e) => this.handleDifficultyChange(e.target.value)} type="text" className="form-control" placeholder="Apenas números" />
</div>

<div className="form-group">
    <label>Imagem</label>
    <input value={move.image} required onChange={(e) => this.handleImageChange(e.target.value)} type="text" className="form-control" placeholder="Ex: URL" />
</div>

<div className="form-group">
    <label>Youtube Links</label>
    <input value={move.videoUrl} required onChange={(e) => this.handleVideoUrlChange(e.target.value)} type="text" className="form-control" placeholder="Ex: URL,URL,URL" />
</div>

<br/>
    <button type="submit" className="btn btn-primary btn-block">Salvar</button>
<br/>

                        </form>
                    ) : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}><FillSpinner  size={30} color="#999" loading={true} /></div> }
                    
                </div>

                <footer style={{ color: '#555', background: '#111', textAlign: 'center', padding: 20 }}>
                    <p>&copy; 2020 Faixa Preta</p>
                </footer>
            </div>
        );
    }
}
