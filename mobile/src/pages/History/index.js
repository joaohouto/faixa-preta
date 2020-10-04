import React, { Component } from 'react';
import { AsyncStorage } from 'react-native'
import { Icon } from 'react-native-elements'

import CustomHeader from '../../components/CustomHeader'
import MoveItemSearched from '../../components/MoveItemSearched'

import { ContainerDark, SimpleTextLight, PageTitleLight } from '../../components/Global';
import { FifityFiveView } from './styles';

class History extends Component {

  state = {
    runnedActivities: []
  }

  componentDidMount() {
    this.loadData();
  }

  loadData = async () => {

    try {
      const runnedActivities = await AsyncStorage.getItem('@runnedActivities');

      console.log(runnedActivities)

      if (runnedActivities !== null) {
        let act = JSON.parse(runnedActivities);
        this.setState({ runnedActivities: act });
      }
    } catch (e) {
      console.log(e);
    }
  }

  parseTime = (timerTime) => {
    const seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    const hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return hours + ':' + minutes + ':' + seconds;
  }

  fillChart = async () => {

    //Preenche o gráfico de barras
    let { oldActivities } = this.state;
    
    let semana = this.pegarSemanaAtual();
    let xpSemana = [];

    this.setState({ weekPeriod: semana[0].slice(0,5) + " - " + semana[6].slice(0,5) });

    semana.forEach(data => {
      let xpNesseDia = 0;

      oldActivities.forEach(actv => {
        if(data == actv.date){
          xpNesseDia = xpNesseDia + actv.xpEarned;
        }
      });

      xpSemana.push(xpNesseDia);
      xpNesseDia = 0;

    });

    this.setState({ weekXpData: xpSemana });

    console.log("Semana:");
    console.log(xpSemana);

  }

  render() {

  const { runnedActivities } = this.state;

  return (
    <>
      <CustomHeader icon="arrow-left" dark={true} navigation={this.props.navigation} />
      <ContainerDark>

        <PageTitleLight>Histórico</PageTitleLight>
        <SimpleTextLight>Detalhamento de todos os seus treinos executados.</SimpleTextLight>

        { runnedActivities.length > 0 && runnedActivities.map(activity => (
          <MoveItemSearched 
            key={activity.id}
            name={activity.name}
            category={activity.date}
          />
        )) }

        <FifityFiveView />

      </ContainerDark>
    </>
  );
  }
}

export default History;