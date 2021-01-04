import React from 'react';

import { Linking } from 'react-native';

import { Icon } from 'react-native-elements';
import { Container, Heading, Info, Bold, Button, ButtonText, IconWrapper, InfoText } from './styles';

import backImg from '../../assets/images/background.jpg';

export default function Landing({ navigation }) {

    const navigateToApp = () => {

        navigation.reset({
            index: 0,
            routes: [{name: 'BottomTabs'}],
        });
    }

    return (
        <Container
            source={backImg}
            imageStyle={{ resizeMode: "cover", opacity: 0.5 }}
        >
            <Heading>Comece a treinar agora mesmo.</Heading>
            <Info onPress={() => Linking.openURL("https://faixa-preta.web.app/privacidade")}>
                <InfoText>Ao entrar, você concorda com nossa <Bold>Política de Privacidade</Bold> e <Bold>Termos de Uso</Bold>.</InfoText>
            </Info>
            
            <Button onPress={navigateToApp}>
                <ButtonText>Prosseguir para o app</ButtonText>
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