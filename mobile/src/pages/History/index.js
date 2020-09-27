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
      let runnedActivities = await AsyncStorage.getItem('@runnedActivities');
      runnedActivities = JSON.parse(runnedActivities);
      console.log(runnedActivities)

      this.setState({ runnedActivities });
    
    } catch(e){
      console.log(e);
    }
  }

  parseTime = (timerTime) => {
    const seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
    const hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

    return hours + ':' + minutes + ':' + seconds;
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
            category={`${activity.date} - ${this.parseTime(activity.time)}`}
          />
        )) }

        <FifityFiveView />

      </ContainerDark>
    </>
  );
  }
}

export default History;