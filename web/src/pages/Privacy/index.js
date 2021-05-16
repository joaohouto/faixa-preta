import React from 'react'

import iconImg from '../../assets/images/icon.svg';

const Login = () => {
    return (
        <div>
            <header style={{ background: '#fafafa' }}>
              <div class="brand">
                <img src={iconImg} alt="Icon" />
                <h1>Faixa Preta</h1>
              </div>
            </header>

            <div class="section" style={{ background: '#fafafa' }}>
              <h2>Política de Privacidade.</h2>
              <p>A plataforma Faixa Preta se compromete a não coletar quaisquer informações pessoais de seus usuários sem aviso prévio. </p>
              <p>Informações de acesso da plataforma podem ser coletadas pelos nossos servidores de forma anônima, para a elaboração de estatísticas de uso de nossos serviços.</p>
              <p>Dados de treinos executados dentro de nossos apps móveis, bem como informações da seção "Estatísticas", são armazenados no próprio dispositivo do usuário, sendo eles de total responsabilidade do indivíduo que o utiliza.</p>

              <h3>Imagens e Direitos Autorais</h3>
              <p>Algumas imagens utilizadas em materiais de divulgação e da interface do app Faixa Preta são cedidas pelos bancos de imagens gratuitos <a href="https://br.freepik.com/">FreePik</a> e <a href="https://unsplash.com/">Unsplash</a>. Imagens de <i>thumbnails</i>, para a visualização de links externos, são de autoria de seus respectivos autores.</p>
              
              <h3>Agradecimentos</h3>
              <p>Agradecimentos especiais aos Senseis <a href="https://www.youtube.com/channel/UCvXNiArxdbsIRkUWYDiQ3Mw">Seamus O'Dowd</a> e <a href="https://www.youtube.com/user/emrahmihyaz">Emrah Mihyaz</a> que nos autorizaram a listar seus vídeos em nossa plataforma.</p>
            </div>

            <footer>
              <p>&copy; 2021 Faixa Preta</p>
            </footer>
        </div>
    );
}

export default Login;