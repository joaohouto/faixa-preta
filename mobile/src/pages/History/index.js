import React, { Component } from 'react';

import ActivityService from '../../services/activity'

import CustomHeader from '../../components/CustomHeader'
import HistoryItem from '../../components/HistoryItem'
import Badge from '../../components/Badge'
import LoadingMoveItemSearched from '../../components/LoadingMoveItemSearched'

import { ContainerDark, SimpleTextLight, PageTitleLight, Row } from '../../components/Global';
import { FifityFiveView, NotFoundMessage } from './styles';

class History extends Component {

  state = {
    oldActivities: [],
    loading: true
  }

  componentDidMount() {
    this.getOldActivities();
  }

  getOldActivities = async () => {
    const response = await ActivityService.findAll();
    this.setState({ oldActivities: response._array.reverse(), loading: false });
  }

  deleteActivity = (id) => {
    ActivityService.deleteById(id);
    this.getOldActivities();
  }

  render() {

  const { oldActivities, loading } = this.state;

  return (
    <>
      <CustomHeader icon="arrow-left" dark={true} navigation={this.props.navigation} />
      <ContainerDark>

        <PageTitleLight>Histórico</PageTitleLight>
        <SimpleTextLight>Todos os treinos executados por você. Mantenha um item pressionado para excluir.</SimpleTextLight>

        <Badge dark>Nesse ano</Badge>

        { !loading ? 
            oldActivities.length > 0 ? oldActivities.map(activity => (
              <HistoryItem 
                key={activity.id}
                name={activity.name}
                time={activity.time}
                date={activity.date}
                onDelete={() => this.deleteActivity(activity.id)}
              />
            )) : (
              <Row>
                <NotFoundMessage>Não existem registros!</NotFoundMessage>
              </Row>
            ) : <LoadingMoveItemSearched /> }

        <FifityFiveView />

      </ContainerDark>
    </>
  );
  }
}

export default History;