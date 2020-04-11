import React, { Component } from 'react';
import '../style.css';

import logo from '../assets/logo-x.svg';
import background from '../assets/background.jpg';

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
              <div className="section">
                <h2>Contato.</h2>
                <p>Para elogios, críticas e outros, envie um email para <a href="mailto:appfaixapreta@gmail.com">appfaixapreta@gmail.com</a> ou use o formulário abaixo.</p>

                <form>
                  <p>
                    <label>Nome</label><br />
                    <input className="input" placeholder="O seu nome" readOnly/>
                  </p>

                  <p>
                    <label>Email</label><br />
                    <input className="input" placeholder="O seu email" readOnly />
                  </p>

                  <p>
                    <label>Assunto</label><br />
                    <input className="input" placeholder="O que te motiva a nos contatar?" readOnly />
                  </p>

                  <p>
                    <label>Mensagem</label><br />
                    <textarea className="input" placeholder="A sua mensagem" readOnly></textarea>
                  </p>

                  <p><button className="input-button" type="submit" disabled>Enviar</button></p>
                </form>

              </div>


              <div className="section"></div>
            </div>

            <div className="footer">
              &copy; 2020 Faixa Preta
            </div>
        </div>
    );
  }
}
