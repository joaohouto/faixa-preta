import React, { useState } from 'react';
import '../style.css'

import background from '../assets/background.jpg';
import downloadIcon from '../assets/icons/download.svg';
import googleIcon from '../assets/icons/google-play.svg';
import expoIcon from '../assets/icons/expo.svg';

import Header from '../components/Header'

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
      <div className="home">

          <Header />

          <div className="content animate-opacity">
            <div className="section">
              <h2>O treino que vai além do dojo.</h2>
              <p>O <i>Faixa Preta</i> é a proposta de um app para ajudar karatecas em seus treinos individuais, contando com recursos que facilitam o seu aprendizado e aperfeiçoamento.</p>

              <a href="javascript:void()" id="downButton">
                <button className="button" onClick={() => setIsModalOpen(true)}><img alt="" src={downloadIcon} /> Download</button>
              </a>
    
            </div>

            <img src={background} id="belt" alt="Faixa"/>

            <div className="section"></div>
          </div>

          <div 
            className="download-modal" 
            id="modal"
            style={{ display: isModalOpen ? 'flex' : 'none' }}
          >
            <button id="close-modal" onClick={() => setIsModalOpen(false)}>
              X
            </button>

            <ul>
              <li><a className="button disabled"><img alt="" src={googleIcon} /> Google Play</a></li>
              <li><a className="button" href="exp://exp.host/@joaohouto/faixa-preta"><img alt="" src={expoIcon} /> Expo Go</a></li>
              <li><a href="https://firebasestorage.googleapis.com/v0/b/faixa-preta.appspot.com/o/builds%2Ffaixa-preta-f27a107bb7744657895267be393e2a3b-signed.apk?alt=media&token=2cb208c8-8289-4645-937f-e1040829accb">Arquivo .apk (Android)</a></li>
            </ul>
          </div>

          <div className="footer">
            &copy; 2021 Faixa Preta
          </div>
      </div>
  );
  
}
