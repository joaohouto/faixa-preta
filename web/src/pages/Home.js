import React, { Component } from 'react';
import '../style.css'

import background from '../assets/background.jpg';
import downloadIcon from '../assets/icons/download.svg';

import Header from '../components/Header'

export default class Home extends Component {

  render() {

    return (
        <div className="home">

            <Header />

            <div className="content">
              <div className="section">
                <h2 className="animate-opacity">O treino que vai além da academia.</h2>
                <p className="animate-opacity">O <i>Faixa Preta</i> é a proposta de um app para ajudar karatecas em seus treinos individuais, contando com recursos que facilitam o seu aprendizado e aperfeiçoamento.</p>

                <a className="animate-opacity" href="https://expo.io/@joaohouto/faixa-preta" id="downButton">
                  <button className="button"><img alt="" src={downloadIcon} /> Download</button>
                </a>
      
              </div>

              <img src={background} id="belt" alt="Faixa" className="animate-opacity" />

              <div className="section"></div>
            </div>

            <div className="footer">
              &copy; 2021 Faixa Preta
            </div>
        </div>
    );
  }
}
