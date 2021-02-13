import React, { Component } from 'react';
import { Alert } from 'react-native'
import { Icon } from 'react-native-elements'

import { launchActivityNotification, dismissActivityNotification } from '../../services/notifications'

import Button from '../../components/Button'
import MoveItemSmall from '../../components/MoveItemSmall'
import BottomDrawer from '../../components/BottomDrawer'

import { Row } from '../../components/Global';
import { 
  Container, 
  ControlsContainer,
  Timer, 
  Do, 
  MoveName, 
  MoveRepetitions, 
  ButtonElement, 
  TenView, 
  Label, 
  MainWrapper
} from './styles';

class ActivityRunning extends Component {

  state = {
    activity: {},
    moves: [],
    currentMove: 0,
    runnedMoves: [],
    toRunMoves: [],
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
    dismissActivityNotification();
  }

  loadMoves = () => {
    const { activity, kihonMoves, kataMoves, kumiteMoves } = this.props.route.params;

    const moves = kihonMoves.concat(kataMoves.concat(kumiteMoves));

    this.setState({ 
      activity, 
      moves,
      toRunMoves: moves.filter(move => move !== moves[0])
    });

  }

  showAlert = () => {
    Alert.alert(
      'Prepare-se',
      'Quando estiver pronto para iniciar a atividade, toque em iniciar.\n\nUm cronômetro irá gravar o tempo de execução do exercício. Caso queira fazer uma pausa, utilize o grupo de botões inferiores.',
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

    launchActivityNotification();
  }

  stopTimer = () => {
    this.setState({ timerOn: false });
    clearInterval(this.timer);
  }

  handleNext = () => {
    const { currentMove, moves, activity, timerTime, toRunMoves, runnedMoves } = this.state;

    const newRunnedMoves = runnedMoves.concat(moves[currentMove]);

    if (currentMove + 1 < moves.length) {
      this.setState({ 
        currentMove: currentMove + 1,
        toRunMoves: toRunMoves.filter(move => move !== moves[currentMove + 1]),
        runnedMoves: newRunnedMoves
      });
      
    } else {
      this.stopTimer();

      this.setState({ 
        runnedMoves: newRunnedMoves
      });

      dismissActivityNotification();
      this.props.navigation.popToTop();

      if (this.state.timerTime >= 60 * 1000) {
        this.props.navigation.navigate('ActivityFinished', { activity, runnedMoves, timerTime });
      }
    }
  }

  handleCancel = () => {

    const { activity, timerTime, runnedMoves } = this.state;

    Alert.alert(
      'Tem certeza?',
      'O movimento atual não será contabilizado!',
      [
        {
          text: 'Voltar',  
          style: 'cancel'
        },
        { text: 'Finalizar', onPress: () => {
          this.stopTimer();

          dismissActivityNotification();
          this.props.navigation.popToTop();

          if (this.state.timerTime >= 60 * 1000) {
            this.props.navigation.navigate('ActivityFinished', { activity, runnedMoves, timerTime });
          }
        } }
      ],
      { cancelable: false }
    );
  }

  render() {

  const { moves, currentMove, toRunMoves } = this.state;

  const { timerTime, timerOn } = this.state;
  let seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);
 
  return (
    <MainWrapper>
      <Container 
        source={{ uri: timerOn ? moves[currentMove].imageUrl : "default" }}
        style={{ resizeMode: 'contain' }}
        imageStyle={{ opacity: 0.4 }}
      >
        
        <Row style={{ flexDirection: 'column', alignItems: 'flex-start', marginBottom: 60 }}>
          

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

          <TenView />

          <ButtonElement 
            onPress={timerOn ? this.handleNext : this.startTimer}
            style={{ backgroundColor: '#333', width: 50 }}
          >
            <Icon name="arrow-right" type='feather' size={24} color={timerOn ? "#fff" : "#999"} />
          </ButtonElement>
        </Row>
      </ControlsContainer>

      <BottomDrawer>

        <Row style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <Label>Tempo</Label>
          <Timer>{hours}:{minutes}:{seconds}</Timer>
        </Row>

        <Row style={{ flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
          <Label>Próximo</Label>

          { toRunMoves.length > 0 && toRunMoves.map(move => (
            <MoveItemSmall 
              key={move._id}
              name={move.name}
              repetitions={move.repetitions}
            />
          )) }
          
        </Row>

      </BottomDrawer>
    </MainWrapper>
  );
  }
}

export default ActivityRunning;