import React, { Component } from 'react';
import { Linking } from 'react-native';

import CustomHeader from '../../components/CustomHeader';

import { ContainerLight, PageTitleDark } from '../../components/Global';
import { ButtonsWrapper, Button, ButtonText, LittleText } from './styles';

class Settings extends Component {

  render() {
 
  return (
    <>
      <CustomHeader icon="arrow-left" navigation={this.props.navigation} />
      <ContainerLight>
        <PageTitleDark>Ajustes</PageTitleDark>

        <ButtonsWrapper>

          <Button onPress={() => Linking.openURL("https://faixa-preta.web.app/privacidade")}>
            <ButtonText>Política de Privacidade</ButtonText>
          </Button>
          <Button onPress={() => Linking.openURL("mailto:appfaixapreta@gmail.com")}>
            <ButtonText>Contato</ButtonText>
          </Button>
          <Button onPress={() => Linking.openURL("https://faixa-preta.web.app/sobre")}>
            <ButtonText>Sobre</ButtonText>
          </Button>
          <Button onPress={() => Linking.openURL("https://github.com/joaocou/faixa-preta")}>
            <ButtonText>GitHub</ButtonText>
          </Button>
        </ButtonsWrapper>

      </ContainerLight>
    </>
  );
  }
}

export default Settings;