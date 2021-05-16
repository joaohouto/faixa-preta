import React from 'react'
import { useHistory } from 'react-router-dom'

import { IconDownload, IconInfoCircle } from 'tabler-icons'

import iconImg from '../../assets/images/icon.svg';
import mobileImg from '../../assets/images/mobile.png';
import androidImg from '../../assets/icons/android.svg';
import expoImg from '../../assets/icons/expo.svg';
import googleImg from '../../assets/icons/google-play.svg';

const Login = () => {
    const { history } = useHistory();

    return (
        <div>
            <div className="home-section">
                <div className="wrapper">
                    <header>
                        <div className="brand">
                            <img src={iconImg} />
                            <h1>Faixa Preta</h1>
                        </div>
    
                        <a href="/privacidade/">Política de Privacidade</a>
                        <a id="icon" href="/privacidade/"><IconInfoCircle color="#777" /></a>
                    </header>
    
                    <div className="wrapper">
                        <div className="column">
                            <h2 className="animate-opacity-one">O treino que vai além do dojo.</h2>
                            <p className="animate-opacity-two">O Faixa Preta é a proposta de um app para ajudar karatecas em seus treinos individuais, contando com recursos que facilitam o seu aprendizado e aperfeiçoamento.</p>
    
                            <a href="#download">
                                <button className="animate-opacity-three">
                                    <IconDownload color="#fff" style={{ marginRight: 10 }} />
                                    Download
                                </button>
                            </a>
                    </div>
                    
                    <img style={{ objectFit: 'contain' }} src={mobileImg} alt="App" />
                    </div>
                </div>
            </div>

            <div className="section" style={{ background: "#fff" }}>
                <div className="wrapper">
                    <h2>Sobre.</h2>
                    <p>O Faixa Preta é a proposta de um aplicativo para ajudar karatecas em seus treinos individuais, contando com programas de treino específicos e detalhes da execução de técnicas. Além disso, relatórios da execução de treinos podem ser encontrados na seção de estatísticas do app.</p>
                    <p>Este é um projeto inicialmente idealizado como um Trabalho de Conclusão de Curso para o Curso Técnico de Informática, do Instituto Federal de Mato Grosso do Sul - Campus Aquidauana. Orientado pelo Prof. Dr. Ygo Brito e desenvolvido pelo aluno João Couto.</p>
                    <p>Para elogios, críticas e outros, envie um email para <a href="mailto:appfaixapreta@gmail.com">appfaixapreta@gmail.com</a>.</p>
                </div>
            </div>

            <div id="download" className="download-section">

                <a href="https://expo.io/@joaohouto/projects/faixa-preta">
                    <button className="download">
                        <img src={expoImg} alt="Expo" />
                    
                        <div>
                        <span>Teste com</span>
                        <h3>Expo Go</h3>
                        </div>
                    </button>
                </a>
              
                <a href="https://firebasestorage.googleapis.com/v0/b/faixa-preta.appspot.com/o/builds%2Ffaixa-preta.apk?alt=media&token=221dc3b3-7e45-4583-a884-40fc24a1aa8f">
                    <button className="download">
                        <img src={androidImg} alt="Android" />
                    
                        <div>
                        <span>Download do</span>
                        <h3>APK Android</h3>
                        </div>
                    </button>
                </a>

            </div>

            <footer className="bg-dark">
                <div className="wrapper">
                    <p>&copy; 2021 Faixa Preta</p>
                </div>
            </footer>
        </div>
    );
}

export default Login;