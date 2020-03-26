import React, { Component } from 'react';
import '../style.css'

import logo from '../assets/logo-x.svg';
import hm from '../assets/hm.png';

export default class Home extends Component {

  render() {
    return (
        <div className="home">
            <div className="header">
                <a href="/"><img id="logo" src={logo} alt="Faixa Preta" /></a>

                <ul>
                  <li><a href="/sobre"><i className="fa fa-info"></i> Sobre</a></li>
                  <li><a href="/contato"><i className="fa fa-envelope"></i> Contato</a></li>
                  <li><a href="https://github.com/joaocou/faixa-preta"><i className="fa fa-github"></i> GitHub</a></li>
                </ul>

            </div>

            <div className="content animate-opacity">
              <div className="section" id="width" >
                <h2>Sobre.</h2>
                <p>O <i>Faixa Preta</i> é um app criado para ajudar karatecas em seus treinos individuais, contando com recursos que facilitam o aprendizado e o seu aperfeiçoamento. Atualmente encontra-se em constante desenvolvimento, podendo conter erros e bugs.</p>
                <p>Possui uma API Rest desenvolvida com ajuda do NodeJS e outras tecnologias dentro do ecossistema Javascript. Além disso, é utilizado o React Native em conjunto com o Expo para a criação da aplicação para IOS e Android.  </p>

                <h3>Equipe</h3>
                <div className="team-box">

                  <div className="team-card"> 
                    <img src={hm} alt="João" />
                    <p><b>João Couto</b><br />
                      Desenvolvedor</p>
                  </div>

                  <div className="team-card"> 
                    <img alt="Ygão" />
                    <p><b>Ygo Brito</b><br />
                      Orientador</p>
                  </div>


                </div>


              </div>

            </div>

            <div className="footer">
              &copy; 2020 Faixa Preta
            </div>
        </div>
    );
  }
}
