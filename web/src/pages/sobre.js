import React from 'react'
import Head from 'next/head'

import Header from '../components/Header'

const About = () => {
  return (
    <>
      <Head>
        <title>Faixa Preta</title>
        <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta type="description" content="Monitore os seus treinos e pesquise por técnicas de Karatê Shotokan com o Faixa Preta." />
        <meta name="theme-color" content="#f1f1f1" />
        
        <link rel="icon" href="./icon.png" />
      </Head>

      <div className="home">
          <Header />

          <div className="content animate-opacity">
            <div className="section" id="width" >
              <h2>Sobre.</h2>
    
              <p>O Faixa Preta é a proposta de um aplicativo para ajudar karatecas em seus treinos individuais, contando com programas de treino específicos e detalhes da execução de técnicas. Além disso, relatórios da execução de treinos podem ser encontrados na seção de estatísticas do app.</p>
              <p>Este é um projeto inicialmente idealizado como um Trabalho de Conclusão de Curso para o Curso Técnico de Informática, do Instituto Federal de Mato Grosso do Sul - Campus Aquidauana.</p>

              <h3>Download</h3>
              <p>Por hora, o aplicativo pode ser testado através do Expo Go (<a href="https://play.google.com/store/apps/details?id=host.exp.exponent&hl=pt_BR&gl=US">Android</a>/<a href="https://apps.apple.com/br/app/expo-client/id982107779?l=en">IOS</a>) ou efetuando a instalação do arquivo .apk para dispositivos Android. Os links se encontram na página inicial do site.</p>
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
                  <div id="img" style={{ background: 'url("./ygo.gif")', backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                  <p><b>Ygo Brito</b><br />
                    Orientador</p>
                </div>

              </div>

            </div>

          </div>

          <div className="footer">
            &copy; 2021 Faixa Preta
          </div>
      </div>
    </>
  );
  
}

export default About