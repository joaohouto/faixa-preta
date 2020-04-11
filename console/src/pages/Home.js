import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import UseAnimations from "react-useanimations";

import Header from '../components/Header';
import faixa from '../assets/faixa.png'

export default class Home extends Component {

    state = {
      
    }

    componentDidMount() {

    }

    render() {


        return (
            <div>

                <Header />


                <div className="container">

                    <div className="row">
                        <div className="col-md-6" style={{ padding: 20 }}>

                            <div className="card">
                                <img src={faixa} className="card-img-top" />

                                <div className="card-body">
                                    <h2 className="card-title">Atividades</h2>
                                    <p className="card-text">Referente aos programas de treinamento.</p>
                                    <a href="/activities/1" className="card-link">Acessar</a>
                                    
                                </div>
                             </div>
                        </div>

                        <div className="col-md-6" style={{ padding: 20 }}>

                            <div className="card">
                                <img src={faixa} className="card-img-top" />

                                <div className="card-body">
                                    <h2 className="card-title">Movimentos</h2>
                                    <p className="card-text">Referente aos movimentos/exercícios que compoem as atividades.</p>
                                    <a href="/moves/1" className="card-link">Acessar</a>
                                  
                                </div>

                             </div>
                        </div>
                    </div>

                    <div className="col-md-12" style={{ height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center' }}><a href="https://github.com/joaocou/faixa-preta/"><UseAnimations animationKey="github" size={40} /></a></div>   

                </div>
                
                <footer style={{ color: '#555', background: '#111', textAlign: 'center', padding: 20 }}>
                    <p>&copy; 2020 Faixa Preta</p>
                </footer>
            </div>
        );
    }
}
