import React, { useState } from 'react';
import '../style.css'

import mobileImg from '../assets/mobile.png';

import downloadIcon from '../assets/icons/download.svg';
import closeIcon from '../assets/icons/close.svg';
import googleIcon from '../assets/icons/google-play.svg';
import expoIcon from '../assets/icons/expo.svg';
import androidIcon from '../assets/icons/android.svg';

import Header from '../components/Header'

export default function Home() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
      <div className="home">

          <Header />

          <div className="content">
            <div className="section animate-opacity">
              <h2>O treino que vai além do dojo.</h2>
              <p>O <i>Faixa Preta</i> é a proposta de um app para ajudar karatecas em seus treinos individuais, contando com recursos que facilitam o seu aprendizado e aperfeiçoamento.</p>

              <button className="button" onClick={() => setIsModalOpen(true)}>
                <img alt="" src={downloadIcon} />
                Download
              </button>
    
            </div>

            <div className="section flex-end">
              <img className="animate-push" src={mobileImg} id="mobile" alt="App" />
            </div>
          </div>

          <div 
            className="download-modal" 
            id="modal"
            style={{ display: isModalOpen ? 'flex' : 'none' }}
          >
            <button id="close-modal" onClick={() => setIsModalOpen(false)}>
              <img alt="X" src={closeIcon} />
            </button>

            <ul>
              <li><a className="button disabled"><img alt="" src={googleIcon} /> Google Play</a></li>
              <li><a className="button" href="https://firebasestorage.googleapis.com/v0/b/faixa-preta.appspot.com/o/builds%2Ffaixa-preta-2.0.apk?alt=media&token=8757e0dc-de6e-4539-b6a6-ab994a936d17"><img alt="" src={androidIcon} /> Android APK</a></li>
              <li><a className="button" href="exp://exp.host/@joaohouto/faixa-preta"><img alt="" src={expoIcon} /> Expo Go</a></li>
            </ul>
          </div>

          <div className="footer">
            &copy; 2021 Faixa Preta
          </div>
      </div>
  );
  
}
