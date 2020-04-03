import React, { Component } from 'react';
import { Text, View, Dimensions, AsyncStorage, Alert } from 'react-native';
import { Icon } from 'react-native-elements'

import api from '../services/api';
import { Header, Container, FinalizedActivityText, HeaderText, HeaderLabel, Content, Label, Details, ActivityAlert, ActivityAlertText, MoveCard, MoveCardImage, MoveCardBackground, MoveCardName, MoveCardRepetitions, StartButton, StartButtonLoading, Divider, StartButtonText, CenteredContent, BasicButton, BasicButtonText } from '../styles';
import SmallCardLoader from '../components/SmallCardLoader';

export default class Activity extends Component {

  state = {
    oldActivities: []
  }

  componentDidMount() {
    this.getOldActivities();
  }

  getOldActivities = async () => {
    try {
      const oldActivities = await AsyncStorage.getItem('@atividadesFinalizadas');

      if (oldActivities !== null) {
        let act = JSON.parse(oldActivities);
        console.log(act);
        this.setState({ oldActivities: act });
      }
    } catch (e) {
      console.log(e);
    }
  }

  render() {

    const { oldActivities } = this.state;

    return (
      <Container>
          <Header>
          
              <HeaderText>Treinos antigos</HeaderText>
              <HeaderLabel>Info</HeaderLabel>

          </Header>
          <Content style={{ minHeight: Dimensions.get('window').height - 230 }}>

            <Label>Todos</Label>

                { oldActivities ? oldActivities.map(activity => (
                    <MoveCard key={Math.random()} >
                      <View style={{ position: 'absolute', left: 15, top: 15 }}>
                        <Icon name='check-decagram' type='material-community' size={30} color='#999' />
                      </View>
                      <MoveCardName>{activity.activityName} - {activity.date}</MoveCardName>
                      <MoveCardRepetitions>+{activity.xpEarned}xp</MoveCardRepetitions>
                    </MoveCard>
                )) : <View />}          
            
          </Content>
      </Container>
  );
  }
}