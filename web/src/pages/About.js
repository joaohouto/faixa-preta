import React, { Component } from 'react';
import '../style.css'

import logo from '../assets/logo-x.svg';

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
                <p>O Faixa Preta é a proposta de um app para ajudar karatecas em seus treinos individuais, contando com recursos que facilitam o o seu aprendizado e aperfeiçoamento. Além disso, ele não tem fins lucrativos e é totalmente open-source!</p>
                <p>A plataforma possui uma API Rest desenvolvida com ajuda do NodeJS e outras tecnologias dentro do ecossistema Javascript. Além disso, é utilizado o React Native em conjunto com o Expo para a criação da aplicação para IOS e Android.</p>
                <p>Atualmente encontra-se sob desenvolvimento, podendo conter falhas e outros problemas. Ele pode ser testado através do link para o Expo.io na página inicial.</p>
      
                <h3>Equipe</h3>
                <div className="team-box">

                  <div className="team-card"> 
                  <div id="img" style={{ background: 'url("http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K2162267T6")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

                    <p><b>João Couto</b><br />
                      Desenvolvedor</p>
                  </div>

                  <div className="team-card"> 
                    <div id="img" style={{ background: 'url("http://servicosweb.cnpq.br/wspessoa/servletrecuperafoto?tipo=1&id=K4359756E5")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
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
