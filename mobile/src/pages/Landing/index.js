import React, { useEffect } from 'react';
import * as Permissions from "expo-permissions";
import { Linking } from 'react-native';

import DatabaseInit from '../../database/init';

import { Icon } from 'react-native-elements';
import { Container, Heading, Info, Bold, Button, ButtonText, IconWrapper, InfoText } from './styles';

import backImg from '../../assets/images/background.jpg';

export default function Landing({ navigation }) {

    useEffect(() => {
        askPermissions();
        new DatabaseInit();
    }, []);

    askPermissions = async () => {
        const { status: existingStatus } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
            const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
            finalStatus = status;
        }
        if (finalStatus !== "granted") {
            return false;
        }
        return true;
    };

    const navigateToApp = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'BottomTabs'}],
        });
    }

    return (
        <Container
            source={backImg}
            imageStyle={{ resizeMode: "cover", opacity: 1 }}
        >
            <Heading>Comece a treinar agora mesmo.</Heading>
            <Info onPress={() => Linking.openURL("https://faixa-preta.web.app/privacidade")}>
                <InfoText>Ao prosseguir, você concorda com nossos <Bold>Termos de Uso</Bold> e <Bold>Política de Privacidade</Bold>.</InfoText>
            </Info>
            
            <Button onPress={navigateToApp}>
                <ButtonText>Entrar</ButtonText>
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