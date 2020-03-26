import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements'

import api from '../services/api';
import { Header, Container, FinalizedActivityText, HeaderText, HeaderLabel, Content, Label, Details, ActivityAlert, ActivityAlertText, MoveCard, MoveCardImage, MoveCardBackground, MoveCardName, MoveCardRepetitions, StartButton, StartButtonLoading, Divider, StartButtonText, CenteredContent } from '../styles';
import SmallCardLoader from '../components/SmallCardLoader';

export default class Activity extends Component {

  state = {
    activity: {},
    runnedMoves: [],
  }

  componentDidMount() {
    this.loadRunnedMoves();
  }

  loadRunnedMoves = () => {

    const { navigation } = this.props;  

    let activity = navigation.getParam('activity', 'null');
    let runnedMoves = navigation.getParam('runnedMoves', 'null');

    this.setState({ activity, runnedMoves });
  }

  render() {

    const { runnedMoves } = this.state;
    const { activity } = this.state;

    return (
      <Container>
          <Header>
          
              <HeaderText>Resumo</HeaderText>
              <HeaderLabel>Treino finalizado!</HeaderLabel>

          </Header>
          <Content style={{ minHeight: Dimensions.get('window').height - 230 }}>

          <Label>Info</Label>

            <CenteredContent>
                
              <Icon name='trophy' type='material-community' size={80} color='#999' />

              <FinalizedActivityText>É isso aí!</FinalizedActivityText>
              <Text>Você acaba de finalizar mais um treino.</Text>
              <Text>Continue treinando e não perca o foco!</Text>

              <View style={{ height: 30 }} />

            </CenteredContent>

            <Divider style={{ width: Dimensions.get('window').width - 40 }} />

            <Label>Executado</Label>

                { runnedMoves ? runnedMoves.map(move => (
                    <MoveCard key={move.activityData._id} >
                      <View style={{ position: 'absolute', left: 15, top: 15 }}>
                        <Icon name='check-decagram' type='material-community' size={30} color='#999' />
                      </View>
                      <MoveCardName>{move.moveData.name}</MoveCardName>
                      <MoveCardRepetitions>x{move.activityData.repetitions}</MoveCardRepetitions>
                    </MoveCard>
                )) : <View />}          
            
          </Content>
      </Container>
  );
  }
}