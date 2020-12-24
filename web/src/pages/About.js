import React, { Component } from 'react';
import '../style.css'

import ygoImg from '../assets/ygo.gif'

import Header from '../components/Header'

export default class Home extends Component {

  render() {
    return (
        <div className="home">
            <Header />

            <div className="content animate-opacity">
              <div className="section" id="width" >
                <h2>Sobre.</h2>
      
                <p>O Faixa Preta é a proposta de um aplicativo para ajudar karatecas em seus treinos individuais, com programas de treino específicos e detalhes da execução de técnicas. Além disso, relatórios da execução de treinos podem ser encontrados na seção de estatísticas do app.</p>
                <p>Este é um projeto inicialmente idealizado como um Trabalho de Conclusão de Curso para o Curso Técnico de Informática, do Instituto Federal de Mato Grosso do Sul - Campus   Aquidauana-MS.</p>

                <h3>Contato</h3>
                <p>Para elogios, críticas e outros, envie um email para <a href="mailto:appfaixapreta@gmail.com">appfaixapreta@gmail.com</a>.</p>

                <h3>Equipe</h3>
                <div className="team-box">

                  <div className="team-card"> 
                  <div id="img" style={{ background: 'url("https://avatars0.githubusercontent.com/u/31421876?s=460&u=39d86b3e443bf15e4a1d5a554c0426ae80dc9486&v=4")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>

                    <p><b>João Couto</b><br />
                      Desenvolvedor</p>
                  </div>

                  <div className="team-card"> 
                    <div id="img" style={{ background: 'url(' + ygoImg + ')', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
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
