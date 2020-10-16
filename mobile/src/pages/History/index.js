import React, { Component } from 'react';
import { AsyncStorage } from 'react-native'
import { Icon } from 'react-native-elements'

import CustomHeader from '../../components/CustomHeader'
import HistoryItem from '../../components/HistoryItem'
import Badge from '../../components/Badge'
import LoadingMoveItemSearched from '../../components/LoadingMoveItemSearched'

import { ContainerDark, SimpleTextLight, PageTitleLight } from '../../components/Global';
import { FifityFiveView } from './styles';

class History extends Component {

  state = {
    oldActivities: [],
    loading: true
  }

  componentDidMount() {
    this.getOldActivities();
  }

  getOldActivities = async () => {
    try {
      const oldActivities = await AsyncStorage.getItem('@oldActivities');

      if (oldActivities !== null) {
        if(oldActivities == "1"){
          this.setState({ oldActivities: [] });

        } else {
          let act = JSON.parse(oldActivities);

          this.setState({ 
            oldActivities: act.reverse(),
            loading: false 
          });
        }
      }

    } catch(e){
      console.log(e);
    }

  }

  render() {

  const { oldActivities, loading } = this.state;

  return (
    <>
      <CustomHeader icon="arrow-left" dark={true} navigation={this.props.navigation} />
      <ContainerDark>

        <PageTitleLight>Histórico</PageTitleLight>
        <SimpleTextLight>Todos os treinos executados por você.</SimpleTextLight>

        <Badge>Tudo</Badge>

        { !loading ? oldActivities.length > 0 && oldActivities.map(activity => (
          <HistoryItem 
            key={activity.id}
            name={activity.name}
            time={activity.time}
            date={activity.date}
          />
        )) : <LoadingMoveItemSearched /> }

        <FifityFiveView />

      </ContainerDark>
    </>
  );
  }
}

export default History;