import React, { Component } from 'react';
import { Text, View, Dimensions, AsyncStorage, Alert } from 'react-native';
import { Icon } from 'react-native-elements'

import { Header, Container, FinalizedActivityText, HeaderText, HeaderLabel, Content, Label, Details, ActivityAlert, ActivityAlertText, MoveCard, MoveCardImage, MoveCardBackground, MoveCardName, MoveCardRepetitions, StartButton, StartButtonLoading, Divider, StartButtonText, CenteredContent, BasicButton, BasicButtonText, MessageBox, MessageText } from '../styles';
import SmallCardLoader from '../components/SmallCardLoader';

export default class Activity extends Component {

  state = {
    oldActivities: [],
    isLoading: true
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
        this.setState({ oldActivities: act.reverse(), isLoading: false });
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
          
              <HeaderText>Detalhes</HeaderText>
              <HeaderLabel>Treinos antigos</HeaderLabel>

          </Header>
          <Content style={{ minHeight: Dimensions.get('window').height - 230 }}>

            <Label>Todo o período</Label>

                { !this.state.isLoading ? oldActivities.length > 0 ? oldActivities.map(activity => (
                    <MoveCard key={Math.random()} >
                      <View style={{ position: 'absolute', left: 15, top: 15 }}>
                        <Icon name='check-decagram' type='material-community' size={30} color='#999' />
                      </View>
                      <MoveCardName>[{activity.date}] {activity.activityName}</MoveCardName>
                      <MoveCardRepetitions>+{activity.xpEarned}xp</MoveCardRepetitions>
                    </MoveCard>
                )) : <MessageBox><MessageText>Não existem registros de treinos!</MessageText></MessageBox> 
                   : (
                     <View>
                       <SmallCardLoader />
                       <SmallCardLoader />
                       <SmallCardLoader />
                     </View>
                   )}          
            
          </Content>
      </Container>
  );
  }
}