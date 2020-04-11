import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements'

import api from '../services/api';
import { Header, Container, HeaderBox, HeaderLabelBoxItem, HeaderLabelBox, HeaderText, HeaderLabel, Content, Label, Details, ActivityAlert, ActivityAlertText, MoveCard, MoveCardImage, MoveCardBackground, MoveCardName, MoveCardRepetitions, StartButton, StartButtonLoading, Divider, StartButtonText } from '../styles';
import SmallCardLoader from '../components/SmallCardLoader';

export default class Activity extends Component {

  state = {
    activity: {},
    kihonMoves: [],
    kataMoves: [],
    kumiteMoves: [],
    isLoading: true
  }

  componentDidMount() {
    this.loadActivity();
  }

  loadActivity = async () => {

    //Carrega dados do treino
    const { navigation } = this.props;  
    var activity = navigation.getParam('activity', 'null');
    this.setState({ activity });

    //Carrega os movimentos da api
    for (const move of activity.moves) {
      const moveResponse = await api.get('/moves/' + move.move_id);

      if(move.category == "Kihon")
        this.setState({ kihonMoves: this.state.kihonMoves.concat({ activityData: move, moveData: moveResponse.data }) });

      if(move.category == "Kata")
        this.setState({ kataMoves: this.state.kataMoves.concat({ activityData: move, moveData: moveResponse.data }) });

      if(move.category == "Kumite")
        this.setState({ kumiteMoves: this.state.kumiteMoves.concat({ activityData: move, moveData: moveResponse.data }) });

    }

    this.setState({ isLoading: false });

    console.log(activity);

  }

  render() {

    const { activity } = this.state;
    const { kihonMoves } = this.state;
    const { kataMoves } = this.state;
    const { kumiteMoves } = this.state;

    return (
      <Container>
          <Header>
          
              <HeaderText>{activity.name}</HeaderText>
              <HeaderLabelBox>
              {activity.tags ? activity.tags.map(tag => (
                <HeaderLabelBoxItem key={tag}>{tag}</HeaderLabelBoxItem>
              )) : <View />}
              </HeaderLabelBox>

          </Header>
          <Content>

            <Label>Detalhes</Label>
            <Details>{activity.details}</Details>

            <ActivityAlert>
              <Icon name='warning' size={35} color='#ccc' />
              <ActivityAlertText>Treine sempre em locais seguros e não exceda fisicamente seus limites.</ActivityAlertText>
            </ActivityAlert>

            <Divider style={{ width: Dimensions.get('window').width - 40 }} />

              { !this.state.isLoading ? 
                  kihonMoves.length > 0 ? 
                    <Label>Kihon</Label>  
                    : <View />
                : <View style={{ height: 18, width: 60, borderRadius: 15, backgroundColor: '#f1f1f1', margin: 20 }} /> }
              
                { !this.state.isLoading ? 
                    kihonMoves.length > 0 ? kihonMoves.map(move => (
                    <MoveCard onPress={() => this.props.navigation.navigate('Move', { move: move.moveData })} key={move.activityData._id} >
                      <MoveCardImage source={{ uri: move.moveData.image }} />
                      <MoveCardBackground></MoveCardBackground>
                      <MoveCardName>{move.moveData.name}</MoveCardName>
                      <MoveCardRepetitions>x{move.activityData.repetitions}</MoveCardRepetitions>
                    </MoveCard>
                    ))
                    : <View /> 
                  : <SmallCardLoader /> }

              { kataMoves.length > 0 && !this.state.isLoading  ? <Label>Kata</Label>  : <View /> }

              { !this.state.isLoading ? 
                kataMoves.length > 0 ? kataMoves.map(move => (
                  <MoveCard onPress={() => this.props.navigation.navigate('Move', { move: move.moveData })} key={move.activityData._id} >
                      <MoveCardImage source={{ uri: move.moveData.image }} />
                      <MoveCardBackground></MoveCardBackground>
                      <MoveCardName>{move.moveData.name}</MoveCardName>
                      <MoveCardRepetitions>x{move.activityData.repetitions}</MoveCardRepetitions>
                    </MoveCard>
                  )) 
                  : <View /> 
                : <SmallCardLoader /> }
              
              { kumiteMoves.length > 0 && !this.state.isLoading  ? <Label>Kumite</Label>  : <View /> }

              { !this.state.isLoading ? 
                kumiteMoves.length > 0 ? kumiteMoves.map(move => (
                  <MoveCard onPress={() => this.props.navigation.navigate('Move', { move: move.moveData })} key={move.activityData._id} >
                      <MoveCardImage source={{ uri: move.moveData.image }} />
                      <MoveCardBackground></MoveCardBackground>
                      <MoveCardName>{move.moveData.name}</MoveCardName>
                      <MoveCardRepetitions>x{move.activityData.repetitions}</MoveCardRepetitions>
                    </MoveCard>
                  )) 
                  : <View /> 
                : <SmallCardLoader /> }

            { !this.state.isLoading ? (
              <StartButton onPress={() => this.props.navigation.navigate('ActivityRunning', { activity, kihonMoves, kataMoves, kumiteMoves })} >
                <StartButtonText>Treinar</StartButtonText>
              </StartButton>
            ) : (
              <StartButtonLoading />
            ) }

          </Content>
      </Container>
  );
  }
}