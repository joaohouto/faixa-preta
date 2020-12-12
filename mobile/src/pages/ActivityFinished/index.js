import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

import { getDate } from '../../services/calendar';

import CustomHeader from '../../components/CustomHeader'
import Badge from '../../components/Badge'
import { Icon } from 'react-native-elements'

import { Row, PageTitleLight } from '../../components/Global';
import { ContainerDark, Container, GoodJob, Details, Square, RowBox, RowBoxItem, RowTitle, BlackDot, MoveName, MoveRepetitions, FifityFiveView } from './styles';

class ActivityFinished extends Component {

  state = {
    activity: {},
    moves: [],
    timerTime: null,
    oldActivities: []
  }

  componentDidMount() {
    this.loadData();
    this.getOldActivities();
  }

  loadData = () => {

    const { activity, moves, timerTime } = this.props.route.params;

    this.setState({ activity, moves, timerTime });
  }

  saveData = async () => {

    let activityFinishedData = {
      id: this.state.activity.name.replace(' ', '') + getDate().replace('/', '-') + this.state.timerTime + Math.random(),
      date: getDate(),
      name: this.state.activity.name,
      time: this.state.timerTime
    };

    let { oldActivities } = this.state;
    oldActivities = oldActivities.concat(activityFinishedData);

    console.log(oldActivities);

    try {
      await AsyncStorage.setItem('@oldActivities', JSON.stringify(oldActivities));

    } catch(e){
      console.log(e);
    }

  }

  getOldActivities = async () => {
    try {
      const oldActivities = await AsyncStorage.getItem('@oldActivities');

      if (oldActivities !== null) {
        if(oldActivities == "1"){
          this.setState({ oldActivities: [] });

        } else {
          let act = JSON.parse(oldActivities);
          this.setState({ oldActivities: act });
        }
      }

    } catch(e){
      console.log(e);
    }

    this.saveData();
  }

  render() {

  const { activity, moves, timerTime } = this.state;

  const seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  const minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  const hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

  return (
    <>
      <CustomHeader icon="arrow-left" dark={true} navigation={this.props.navigation} />

      <ScrollView style={{ backgroundColor: '#111' }}>
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

        { moves && <Badge dark={true}>Executado</Badge> }


        { moves && moves.length > 0 && moves.map(move => (
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
      </ScrollView>
    </>
  );
  }
}

export default ActivityFinished;