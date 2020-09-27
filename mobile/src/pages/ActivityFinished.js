import React, { Component } from 'react';
import { Text, View, Dimensions, AsyncStorage, Image , Animated, Easing,} from 'react-native';

import { Icon } from 'react-native-elements'
import Confetti from 'react-native-confetti';

import { Header, Container, FinalizedActivityText, HeaderText, HeaderLabel, Content, Label, Details, ActivityAlert, ActivityAlertText, MoveCard, MoveCardImage, MoveCardBackground, MoveCardName, MoveCardRepetitions, StartButton, StartButtonLoading, Divider, StartButtonText, CenteredContent, BasicButton, BasicButtonText } from '../styles';

export default class Activity extends Component {

  state = {
    activity: {},
    runnedMoves: [],
    userXp: 0,
    xpEarned: 0, 
    oldActivities: [],
    fadeAnim: new Animated.Value(0)
  }

  componentDidMount() {
    this.loadRunnedMoves();
    this.getOldActivities();
    this.getUserXp();

    if(this._confettiView) {
      this._confettiView.startConfetti();
    }

    this.animate();
  
  }

    
  animate() {
    Animated.loop(

      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 50,
          duration: 1000,
          easing: Easing.linear
        }
      )
    ).start();
  }

  componentWillUnmount() {
    if(this._confettiView) {
        this._confettiView.stopConfetti();
    }
  }

  loadRunnedMoves = () => {

    const { navigation } = this.props;  

    let activity = navigation.getParam('activity', 'null');
    let runnedMoves = navigation.getParam('runnedMoves', 'null');

    this.setState({ activity, runnedMoves });


    let xpEarned = 0;
    runnedMoves.forEach(move => {

      if(move.moveData.difficulty) {
        xpEarned = xpEarned + (move.activityData.repetitions * move.moveData.difficulty);
      } else {
        xpEarned = xpEarned + (move.activityData.repetitions * 1);
      }


    });

    this.setState({ xpEarned });
    console.log("XP ganho: " + xpEarned);
  }

  saveXpEarned = async () => {

    let activityFinishedData = {
      xpEarned: this.state.xpEarned,
      date: this.getDate(),
      activityName: this.state.activity.name
    };

    let oldActivities = this.state.oldActivities;
    oldActivities = oldActivities.concat(activityFinishedData);

    console.log(oldActivities);

    try {

      await AsyncStorage.setItem('@atividadesFinalizadas', JSON.stringify(oldActivities));
      this.props.navigation.goBack();

    } catch(e){
      console.log(e);
    }

    this.updateUserXp();

  }

  getUserXp = async () => {

    try {
      const userXp = await AsyncStorage.getItem('@userXp');
      console.log("Pego: " + userXp)

      if (userXp !== null) {
          this.setState({ userXp });
          console.log("Estado: " + this.state.userXp)

      }
    } catch(e){
      console.log(e);
    }

  }

  updateUserXp = async () => {

    try {
      if(this.state.userXp == null){
        await AsyncStorage.setItem('@userXp', this.state.xpEarned);

      } else {
        let soma = this.state.userXp + this.state.xpEarned
        console.log(soma)
        await AsyncStorage.setItem('@userXp', soma );
      }
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

  getOldActivities = async () => {
    try {
      const oldActivities = await AsyncStorage.getItem('@atividadesFinalizadas');

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
  }

  render() {

    const { runnedMoves } = this.state;

    return (
      <Container>
          <View style={{ position: 'absolute', top: 0, zIndex: 1 }}>
            <Confetti ref={(node) => this._confettiView = node} timeout={5} confettiCount={50} duration={4000} />
          </View>
          <Header>
          
              <HeaderText>Resumo</HeaderText>
              <HeaderLabel>Treino finalizado!</HeaderLabel>

          </Header>
          <Content style={{ minHeight: Dimensions.get('window').height - 230 }}>

          <Label>Info</Label>

            <CenteredContent>
              <Icon name='trophy' type='material-community' size={80} color='#999' />
              
              <FinalizedActivityText>+{this.state.xpEarned}xp</FinalizedActivityText>
              <Text>É isso aí. Você acaba de finalizar mais um treino.</Text>
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

                <StartButton onPress={this.saveXpEarned}>
                  <StartButtonText>Salvar e Fechar</StartButtonText>
                </StartButton>
            
          </Content>
      </Container>
  );
  }
}