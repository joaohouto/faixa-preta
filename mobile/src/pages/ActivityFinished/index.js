import React, { Component } from 'react';
import { AsyncStorage } from 'react-native'
import { Icon } from 'react-native-elements'


import CustomHeader from '../../components/CustomHeader'
import Badge from '../../components/Badge'

import { ContainerDark, Row, PageTitleLight } from '../../components/Global';
import { Container, GoodJob, Details, Square, RowBox, RowBoxItem, RowTitle, BlackDot, MoveName, MoveRepetitions, FifityFiveView } from './styles';

class ActivityFinished extends Component {

  state = {
    activity: {},
    moves: [],
    timerTime: null
  }

  componentDidMount() {
    this.loadData();
    setTimeout(() => this.saveData(), 2000);
  }

  loadData = () => {
    const { activity, moves, timerTime } = this.props.route.params;

    this.setState({ activity, moves, timerTime });
  }

  saveData = async () => {

    const data = {
      id: this.getDate() + this.state.timerTime,
      name: this.state.activity.name,
      date: this.getDate(),
      time: this.state.timerTime
    }

    try {
      const runnedActivities = JSON.parse(await AsyncStorage.getItem('@runnedActivities'));

      let newRunnedActivities;

      if (runnedActivities !== null) {
        if(runnedActivities == "1"){
          newRunnedActivities = []

        } else {
          newRunnedActivities = JSON.parse(runnedActivities);
        }
      }
      
      await AsyncStorage.setItem('@runnedActivities', JSON.stringify(newRunnedActivities));
    
    } catch(e){
      console.log(e);
    }
  }

  getDate() {
    var data = new Date();

    var dia     = data.getDate();          
    var mes     = data.getMonth();          
    var ano4    = data.getFullYear();       
    mes += 1;

    if(dia < 10){
      dia = "0" + dia;
    }

    if(mes < 10){
      mes = "0" + mes;
    }

    return dia + '/' + mes + '/' + ano4;
  }

  render() {

  const { activity, moves, timerTime } = this.state;

  const seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  const minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  const hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

  return (
    <>
      <CustomHeader icon="arrow-left" dark={true} navigation={this.props.navigation} />

      <Container>
        <Row style={{ flexDirection: 'column', alignItems: 'flex-start', width: 200 }}>
          <GoodJob>Bom trabalho!</GoodJob>
          <Details>Mantenha foco nos treinos para poder ver sua evolução no futuro.</Details>
        </Row>

        <Row style={{ marginLeft: 30 }}>
          <Square>
            <Icon name="check-circle" type='feather' size={70} color="#999" containerStyle={{ position: 'relative', right: 20, bottom: 20 }} />
          </Square>
        </Row>
       
      </Container>
      <ContainerDark>

        <PageTitleLight>Finalizado</PageTitleLight>

        <RowBox>
          <RowBoxItem style={{ marginRight: 30 }}>
            <Icon name="info" type='feather' size={20} color="#999" />
            <RowTitle>{activity && activity.name}</RowTitle>
          </RowBoxItem>

          <RowBoxItem>
            <Icon name="clock" type='feather' size={20} color="#999" />
            <RowTitle>{hours}:{minutes}:{seconds}</RowTitle>
          </RowBoxItem>
        </RowBox>

        <Badge dark={true}>Executado</Badge>


        { moves.length > 0 && moves.map(move => (
          <Row 
            key={move._id}
            style={{ justifyContent: 'flex-start', alignItems: 'center', height: 20, marginBottom: 20, marginTop: 10 }}
          >
            <BlackDot />
            <MoveName>{move.name}</MoveName>
            <MoveRepetitions>x{move.repetitions}</MoveRepetitions>
          </Row>
        )) }

        <FifityFiveView />

      </ContainerDark>
    </>
  );
  }
}

export default ActivityFinished;