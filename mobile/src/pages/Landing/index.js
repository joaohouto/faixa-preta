import React from 'react';

import backImg from '../../assets/images/background.jpg';

import { Container, Title, PlainText } from './styles';

const Landing = () => {
    return (
        <Container
            source={backImg}
            style={{ resizeMode: 'contain' }}
        >
            <Title>comece a treinar agora mesmo.</Title>
            <PlainText>Ao entrar, você concorda com nossa Política de Privacidade e Termos de Uso.</PlainText>
        </Container>
    );
}

export default Landing;