import React, { useState } from 'react';
import Head from 'next/head'

import Header from '../components/Header'

const Home = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

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

          <div className="content">
            <div className="section animate-opacity">
              <h2>O treino que vai além do dojo.</h2>
              <p>O <i>Faixa Preta</i> é a proposta de um app para ajudar karatecas em seus treinos individuais, contando com recursos que facilitam o seu aprendizado e aperfeiçoamento.</p>

              <button className="button" onClick={() => setIsModalOpen(true)}>
                <img alt="" src="./icons/download.svg" />
                Download
              </button>
    
            </div>

            <div className="section flex-end">
              <img className="animate-push" src="./mobile.png" id="mobile" alt="App" />
            </div>
          </div>

          <div 
            className="download-modal" 
            id="modal"
            style={{ display: isModalOpen ? 'flex' : 'none' }}
          >
            <button id="close-modal" onClick={() => setIsModalOpen(false)}>
              <img alt="X" src="./icons/close.svg" />
            </button>

            <ul>
              <li><a className="button disabled"><img alt="Play Store" src="./icons/google-play.svg" /> Google Play</a></li>
              <li><a className="button" href="https://firebasestorage.googleapis.com/v0/b/faixa-preta.appspot.com/o/builds%2Ffaixa-preta-2.0.apk?alt=media&token=8757e0dc-de6e-4539-b6a6-ab994a936d17"><img alt="" src="./icons/android.svg" /> Android APK</a></li>
              <li><a className="button" href="exp://exp.host/@joaohouto/faixa-preta"><img alt="" src="./icons/expo.svg" /> Expo Go</a></li>
            </ul>
          </div>

          <div className="footer">
            &copy; 2021 Faixa Preta
          </div>
      </div>
    </>
  );
  
}

export default Home