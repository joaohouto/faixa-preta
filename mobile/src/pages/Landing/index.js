import React from 'react';
import { StatusBar } from 'react-native'

import { Icon } from 'react-native-elements';
import { Container, Heading, Info, Bold, Button, ButtonText, IconWrapper } from './styles';

import backImg from '../../assets/images/background.jpg';

export default function Landing() {
    return (
        <Container
            source={backImg}
            imageStyle={{ resizeMode: "cover", opacity: 0.2 }}
        >
            <StatusBar barStyle="light-content" />

            <Heading>comece a treinar agora mesmo.</Heading>
            <Info>Ao entrar, você concorda com nossa <Bold>Política de Privacidade</Bold> e <Bold>Termos de Uso</Bold>.</Info>
            
            <Button>
                <ButtonText>ENTRAR</ButtonText>
                <IconWrapper>
                    <Icon 
                        size={25} 
                        color="#999"
                        name="arrow-right-circle" 
                        type="feather" 
                    />
                </IconWrapper>
            </Button>

        </Container>
    );
}