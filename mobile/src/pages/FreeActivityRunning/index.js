import React, { Component } from 'react';
import { Alert } from 'react-native'
import { Icon } from 'react-native-elements'

import CustomHeader from '../../components/CustomHeader'
import Button from '../../components/Button'

import { Row } from '../../components/Global';
import { 
  Container, 
  ControlsContainer,
  Timer, 
  Do, 
  MoveName, 
  ButtonElement, 
  TenView, 
} from './styles';

class FreeActivityRunning extends Component {

  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0,
  }
  componentDidMount() {
    this.showAlert();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  showAlert = () => {
    Alert.alert(
      'Prepare-se',
      'Aqui quem faz o treino é você.\n\nQuando estiver pronto para iniciar a atividade, toque em iniciar.',
      [
        {
          text: 'Cancelar',
          onPress: () => {
            this.stopTimer();
            this.props.navigation.popToTop();
          },
          style: 'cancel'
        },
        { text: 'Iniciar', onPress: () => this.startTimer() }
      ],
      { cancelable: false }
    );
  }

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerStart: Date.now() - this.state.timerTime,
      timerTime: this.state.timerTime
    });

    this.timer = setInterval(() => {
      this.setState({ timerTime: Date.now() - this.state.timerStart });
    }, 1000);
  }

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  }

  handleCancel = () => {
    Alert.alert(
      'Tem certeza?',
      'Está certo de que deseja finalizar a atividade?',
      [
        {
          text: 'Voltar',
          style: 'cancel'
        },
        { text: 'Finalizar', onPress: () => {
          this.stopTimer();
          
          this.props.navigation.popToTop();
          this.props.navigation.navigate('ActivityFinished', { activity: { name: 'Treino livre' }, timerTime: this.state.timerTime });
        } }
      ],  
      { cancelable: false }
    );
  }

  render() {

  const { timerTime, timerOn } = this.state;
  let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
 
  return (
    <>
      <CustomHeader icon="x" dark={true} navigation={this.props.navigation} />

      <Container>
        
        <Row style={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: 120 }}>

          <Timer>{hours}:{minutes}:{seconds}</Timer>          

          { timerOn ? <Do>execute</Do> : <Do>treino livre</Do> }

          { timerOn ? <MoveName>Treino livre</MoveName> : <MoveName>Pausado</MoveName> }

        </Row>
        
      </Container>

      <ControlsContainer>
        <Row>
          <Button 
            onPress={this.handleCancel}
            style={{ backgroundColor: '#333', flex: 1 }} textColor="#999"
          >
            Finalizar
          </Button>

          <TenView />

          <ButtonElement 
            onPress={() => timerOn ? this.stopTimer() : this.startTimer()}
            style={{ backgroundColor: '#333', width: 50 }}
          >
            <Icon name={timerOn ? "pause" : "play"} type='feather' size={24} color={timerOn ? "#999" : "#fff"} />
          </ButtonElement>
        </Row>
      </ControlsContainer>
    </>
  );
  }
}

export default FreeActivityRunning;