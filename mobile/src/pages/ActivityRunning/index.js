import React, { Component } from 'react';
import { Alert, View } from 'react-native'
import { Icon } from 'react-native-elements'

import CustomHeader from '../../components/CustomHeader'
import Button from '../../components/Button'
import MoveItem from '../../components/MoveItem'

import { Row } from '../../components/Global';
import { Container, BottomContainer, Timer, Do, MoveName, MoveRepetitions, ButtonElement, TenView  } from './styles';

import nextImg from '../../assets/icons/next.png'

class ActivityRunning extends Component {

  state = {
    activity: {},
    moves: [],
    currentMove: 0,
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  }
  componentDidMount() {
    this.loadMoves();
    this.showAlert();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  loadMoves = () => {
    const { activity, kihonMoves, kataMoves, kumiteMoves } = this.props.route.params;

    this.setState({ 
      activity, 
      moves: kihonMoves.concat(kataMoves.concat(kumiteMoves))
    });
  }

  showAlert = () => {
    Alert.alert(
      'Prepare-se',
      'Quando estiver pronto para iniciar a atividade, toque em iniciar.\n\nUm cronômetro irá gravar o tempo que você levar para executar o exercício. Caso queira fazer uma pausa, utilize o grupo de botões inferiores.',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
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

  handleNext = () => {
    if (this.state.currentMove + 1 < this.state.moves.length) {
      this.setState({ currentMove: this.state.currentMove + 1 });
      
    } else {
      this.stopTimer();

      const { activity, moves, timerTime } = this.state;

      this.props.navigation.popToTop();
      this.props.navigation.navigate('ActivityFinished', { activity, moves, timerTime });
    }
  }

  handleCancel = () => {
    Alert.alert(
      'Tem certeza?',
      'O grupo de movimentos atuais não será contabilizado no relatório!',
      [
        {
          text: 'Voltar',
          onPress: () => console.log('Cancelado!'),
          style: 'cancel'
        },
        { text: 'Finalizar', onPress: () => {
          this.stopTimer();


        } }
      ],
      { cancelable: false }
    );
  }

  render() {

  const { activity, moves, currentMove } = this.state;

  const { timerTime, timerOn } = this.state;
  let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
 
  return (
    <>
      <CustomHeader icon="x" dark={true} navigation={this.props.navigation} />

      <Container 
        source={{ uri: timerOn && moves[currentMove].imageUrl }}
        
        style={{ resizeMode: 'contain' }}
        imageStyle={{ opacity: 0.5 }}
      >

        <Row style={{ justifyContent: 'flex-start' }}>
          <View style={{ width: 30 }}>
            <View 
              style={{ 
                height: 20, 
                width: 20, 
                borderRadius: 10, 
                backgroundColor: '#fff' 
                }} 
            />
          </View>

          <Timer>{hours}:{minutes}:{seconds}</Timer>
        </Row>
        
        <Row style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
          

          { timerOn && <Do>execute</Do> }

          <MoveName>
            {timerOn ? moves[currentMove].name : 'Pausado'}
          </MoveName>

          { timerOn && (
            <MoveRepetitions>
              x{timerOn && moves[currentMove].repetitions}
            </MoveRepetitions>
          ) }
        </Row>
        
      </Container>
      <BottomContainer>
        <Row style={{ justifyContent: 'flex-start' }}>
          { moves[currentMove + 1] ? (
            <MoveItem 
              dark={true}
              name={moves.length > 0 && moves[currentMove + 1].name}
              repetitions={moves.length > 0 && moves[currentMove + 1].repetitions}
              source={nextImg}
            />
          ) : (
            <View style={{ height: 88 }}>

            </View>
          ) }
        </Row>

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

          <TenView />

          <ButtonElement 
            onPress={timerOn ? this.handleNext : this.startTimer}
            style={{ backgroundColor: '#333', width: 50 }}
          >
            <Icon name="arrow-right" type='feather' size={24} color={timerOn ? "#fff" : "#999"} />
          </ButtonElement>
        </Row>
      </BottomContainer>
    </>
  );
  }
}

export default ActivityRunning;