import React, { Component } from 'react';
import { Linking } from 'react-native';

import logoImg from '../../assets/logo.png';

import CustomHeader from '../../components/CustomHeader';

import { ContainerLight, PageTitleDark, Row } from '../../components/Global';
import { ButtonsWrapper, Button, ButtonText, Logo } from './styles';

class Settings extends Component {

  render() {
 
  return (
    <>
      <CustomHeader icon="arrow-left" navigation={this.props.navigation} />
      <ContainerLight>
        <PageTitleDark>Ajustes</PageTitleDark>

        <ButtonsWrapper>
          <Button>
            <ButtonText>Exportar dados de treinos</ButtonText>
          </Button>
          <Button>
            <ButtonText>Importar dados de treinos</ButtonText>
          </Button>
          <Button onPress={() => Linking.openURL("https://faixa-preta.web.app/faq")}>
            <ButtonText>Perguntas frequentes</ButtonText>
          </Button>
          <Button onPress={() => Linking.openURL("https://faixa-preta.web.app/privacidade")}>
            <ButtonText>Política de Privacidade</ButtonText>
          </Button>
          <Button onPress={() => Linking.openURL("https://faixa-preta.web.app/contato")}>
            <ButtonText>Contato</ButtonText>
          </Button>
          <Button>
            <ButtonText>Sair</ButtonText>
          </Button>
        </ButtonsWrapper>

        <Row>
          <Logo source={logoImg} />
        </Row>

      </ContainerLight>
    </>
  );
  }
}

export default Settings;