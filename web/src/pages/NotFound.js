import React, { Component } from 'react';
import '../style.css'

import logo from '../assets/logo-x.svg';

export default class NotFound extends Component {

  render() {
    return (
        <div className="home">
            <div className="header">
              <a href="/"><img id="logo" src={logo} alt="Faixa Preta" /></a>

            </div>

            <div className="content animate-opacity">
              <div className="section">
                <h2>Erro 404.</h2>
                <p>Página não encontrada.</p>
              </div>

              <div className="section">

              </div>
            </div>

            <div className="footer">
              &copy; 2020 Faixa Preta
            </div>
        </div>
    );
  }
}
