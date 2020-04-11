import React, { Component } from 'react';

import UseAnimations from "react-useanimations";
import { FillSpinner } from 'react-spinners-kit';

import api from '../services/api';
import Header from '../components/Header'

export default class ActivityNew extends Component {

    state = {
        activity: {
            name: '',
            details: '',
            tags: [],
            image: '',
            moves: []
        },
        moves: [],
        search: '',
        activityMoves: []
    }

    componentDidMount() {

    }

    saveActivity = (e) => {
        e.preventDefault();

        //Adiciona os Moves editados para a Activity
        const newState = {...this.state.activity, moves: this.state.activityMoves}
        this.setState({ activity: newState });

        api.post(`/activities/`, this.state.activity)
        .then(response => {
            alert("Ok!");
            window.location.href = '/activities/1';
            
        })
        .catch(error => {
            alert(error);
        });
    }

    search = async () => {
        const response = await api.get('/moves?name=' + this.state.search);

        this.setState({ moves: response.data.docs });
    }

    getMoveName = async (id) => {
        const response =  await api.get('/moves/' + id);

        return '?';
    }

    addMoveToActivity(move_id, category) {
        let { activityMoves } = this.state;
        let newMove = {
            category, 
            move_id,
            repetitions: 0
        };

        activityMoves.push(newMove);
        this.setState({ activityMoves });
    }

    deleteMove(move_id) {
        let { activityMoves } = this.state;

        let moveToRemove;
        activityMoves.forEach((move, index) => {
            if(move.move_id == move_id){
                moveToRemove = index;
            }
        });

        activityMoves.splice(moveToRemove, 1);

        this.setState({ activityMoves });
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

    handleDetailsChange = (value) => {
        const newState = {...this.state.activity, details: value}
        this.setState({ activity: newState })
    }

    handleImageChange = (value) => {
        const newState = {...this.state.activity, image: value}
        this.setState({ activity: newState })
    }

    handleMoveRepChange = (value, move_id) => {
        let { activityMoves } = this.state;

        let moveToUpdate;
        activityMoves.forEach((move, index) => {
            if(move.move_id == move_id){
                moveToUpdate = index;
            }
        });

        activityMoves[moveToUpdate].repetitions = value; 

        this.setState({ activityMoves })

    }

    render() {

        let { activity } = this.state;
        let { moves } = this.state;
        let { activityMoves } = this.state;

        return (
            <div>

                <Header />

                <header className="jumbotron">
                    <div className="container">
                        <h2><UseAnimations animationKey="settings" size={40} style={{ position: 'relative', top: -3 }} /> Nova atividade</h2>
                    </div>
                </header>

                <div className="container" style={{ minHeight: 400 }}>

                    { activity != null ? (
                        <form onSubmit={(e) => this.saveActivity(e)} method="post">
                            
<div className="form-row">
    <div className="form-group col-md-6">
        <label>Nome</label>
        <input value={activity.name} required onChange={(e) => this.handleNameChange(e.target.value)} type="text" className="form-control" />
    </div>

    <div className="form-group col-md-6">
        <label>Tags</label>
        <input value={activity.tags} required onChange={(e) => this.handleTagsChange(e.target.value)} type="text" className="form-control" placeholder="Ex: Tag 1,Tag 2" />
    </div>
</div>

<div className="form-group">
    <label>Detalhes</label>
    <textarea value={activity.details} required onChange={(e) => this.handleDetailsChange(e.target.value)} className="form-control" rows="3"></textarea>
</div>

<div className="form-group">
    <label>Imagem</label>
    <input value={activity.image} required onChange={(e) => this.handleImageChange(e.target.value)} type="text" className="form-control" placeholder="Ex: URL" />
</div>

<div className="form-row">
    <div className="form-group col-md-8">
        <label>Movimentos</label>

        <div style={{ maxHeight: 500, overflowY: 'auto', paddingRight: 20 }}>
                        
        { activityMoves.length > 0 ? activityMoves.map(move => (
            <div className="card" style={{ padding: 20, marginBottom: 20 }} key={move.move_id}>
                <div className="form-row">

                    <div className="form-group col-md-6">
                        <label className="col-form-label-sm">Nome</label>
                        <input value={move.move_id} type="text" className="form-control form-control-sm" readOnly />
                    </div>

                    <div className="form-group col-md-3">
                        <label className="col-form-label-sm">Categoria</label>
                        <input value={move.category} type="text" className="form-control form-control-sm" readOnly />
                    </div>

                    <div className="form-group col-md-3">
                        <label className="col-form-label-sm">Repetições</label>
                        <input value={move.repetitions} required onChange={(e) => this.handleMoveRepChange(e.target.value, move.move_id)} type="text" className="form-control form-control-sm" />
                    </div>

                    <button onClick={() => this.deleteMove(move.move_id)} className="btn btn-secondary btn-sm"><UseAnimations animationKey="trash2" size={25} style={{ paddingBottom: 5 }} /></button>

                </div>
            </div>
        )) : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}><p>...</p></div> }

        </div>

    </div>

    <div className="form-group col-md-4">
        
        <label>Busca</label>

        <div className="input-group mb-3">
            <input onChange={(e) => this.setState({ search: e.target.value })} value={this.state.search} type="text" className="form-control" placeholder="O que procura?" aria-describedby="button-addon2" />
            <div className="input-group-append">
                <button onClick={this.search} className="btn btn-primary" type="button" id="button-addon2">Pesquisar</button>
            </div>
        </div>


        { moves.length > 0 ? moves.map(i => (
            <div className="input-group mb-3" key={i._id}>
                <input value={i.name} type="text" className="form-control" readOnly />
                <div className="input-group-append">
                    <button onClick={() => this.addMoveToActivity(i._id, i.category)} className="btn btn-secondary" type="button">+</button>
                </div>
            </div>
        )) : <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 100 }}><p>...</p></div> }

    </div>
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
