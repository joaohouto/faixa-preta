import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements'

import api from '../services/api';
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

  }

  render() {

    const { activity } = this.state;
    const { kihonMoves } = this.state;
    const { kataMoves } = this.state;
    const { kumiteMoves } = this.state;

    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}>
            
            <View style={styles.headerBox}>
              <Text style={styles.headerText}>{activity.name}</Text>
              <View style={styles.categoryBox}>
                {activity.tags ? activity.tags.map(tag => <Text key={Math.random()} style={styles.headerLabel}>{tag}</Text>) : <Text></Text>}
              </View>
            </View>

          </View>
          <View style={styles.content}>

            <Text style={styles.label}>Detalhes</Text>
            <Text style={styles.details}>{activity.details}</Text>

            <View style={styles.activityAlert}>
              <Icon name='warning' size={35} color='#ccc' style={styles.activityAlertIcon} />
              <Text style={styles.activityAlertText}>Treine sempre em locais seguros e não exceda fisicamente seus limites.</Text>
            </View>

            <View style={styles.divider}></View>

              { !this.state.isLoading ? 
                  kihonMoves.length > 0 ? 
                    <Text style={styles.label}>Kihon</Text>  
                    : <View />
                : <View style={{ height: 18, width: 60, borderRadius: 15, backgroundColor: '#f1f1f1', margin: 20 }} /> }
              
                { !this.state.isLoading ? 
                    kihonMoves.length > 0 ? kihonMoves.map(move => (
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Move', { move: move.moveData })} key={move.activityData._id} style={styles.moveCard}>
                      <Image source={{ uri: move.moveData.image }} style={styles.moveCardImage} />
                      <View style={styles.moveCardImageBackground}></View>
                      <Text style={styles.moveCardName}>{move.moveData.name}</Text>
                      <Text style={styles.moveCardRepetitions}>x{move.activityData.repetitions}</Text>
                    </TouchableOpacity>
                    ))
                    : <View /> 
                  : <SmallCardLoader /> }

              { kataMoves.length > 0 && !this.state.isLoading  ? <Text style={styles.label}>Kata</Text>  : <View /> }

              { !this.state.isLoading ? 
                kataMoves.length > 0 ? kataMoves.map(move => (
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Move', { move: move.moveData })} key={move.activityData._id} style={styles.moveCard}>
                    <Image source={{ uri: move.moveData.image }} style={styles.moveCardImage} />
                    <View style={styles.moveCardImageBackground}></View>
                    <Text style={styles.moveCardName}>{move.moveData.name}</Text>
                    <Text style={styles.moveCardRepetitions}>x{move.activityData.repetitions}</Text>
                  </TouchableOpacity>
                  )) 
                  : <View /> 
                : <SmallCardLoader /> }
              
              { kumiteMoves.length > 0 && !this.state.isLoading  ? <Text style={styles.label}>Kumite</Text>  : <View /> }

              { !this.state.isLoading ? 
                kumiteMoves.length > 0 ? kumiteMoves.map(move => (
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Move', { move: move.moveData })} key={move.activityData._id} style={styles.moveCard}>
                    <Image source={{ uri: move.moveData.image }} style={styles.moveCardImage} />
                    <View style={styles.moveCardImageBackground}></View>
                    <Text style={styles.moveCardName}>{move.moveData.name}</Text>
                    <Text style={styles.moveCardRepetitions}>x{move.activityData.repetitions}</Text>
                  </TouchableOpacity>
                  )) 
                  : <View /> 
                : <SmallCardLoader /> }

            { !this.state.isLoading ? (
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ActivityRunning', { activity, kihonMoves, kataMoves, kumiteMoves })} style={styles.startButton}>
                <Text style={styles.startButtonText}>Treinar</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.startButtonLoading} />
            ) }

          </View>
      </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111',
    },

    header: {
      height: 150,
    },

    headerBox: {
      position: 'absolute',
      bottom: 0,
      padding: 25
    },

    headerText: {
      color: "#fff",
      fontSize: 40,
      marginBottom: 10
    },

    categoryBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },

    headerLabel: {
      fontSize: 14,
      color: '#b3b3b3',
      backgroundColor: '#666666',
      padding: 4,
      paddingHorizontal: 15,
      borderRadius: 100,
      marginRight: 5
    },

    content: {
      flex: 1,
      minHeight: Dimensions.get('window').height - 230,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      backgroundColor: '#fff',
    },

    label: {
      padding: 20,
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },

    details: {
      paddingHorizontal: 20,
      color: '#999'
    },

    activityAlert: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 30
    },

    activityAlertText: {
      color: '#999',
      paddingLeft: 20,
      flex: 1
    },

    divider: {
      height: 2,
      backgroundColor: '#f1f1f1',
      marginHorizontal: 20
      
    },

    startButtonLoading: {
      height: 50,
      backgroundColor: '#111',
      margin: 20,
      borderRadius: 25,
      opacity: 0.2
    },

    startButton: {
      height: 50,
      backgroundColor: '#111',
      margin: 20,
      borderRadius: 25,
      display: 'flex',
      alignItems:  'center',
      justifyContent: 'center'
    },

    startButtonText: {
      color: '#fff',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 16
    },

    moveCard: {
      backgroundColor: '#f1f1f1',
      margin: 10,
      marginHorizontal: 20,
      padding: 20,
      borderRadius: 10,
      height: 60
    },
    
    moveCardName: {
      position: 'absolute',
      left: 70,
      bottom: 20
    },  

    moveCardRepetitions: {
      color: '#999',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'absolute',
      right: 0,
      bottom: 0,
      padding: 20
    },

    moveCardImage: {
      height: 40,
      width: 40,
      position: 'absolute',
      left: 10,
      top: 10,
      zIndex: 2
    },

    moveCardImageBackground: {
      backgroundColor: "#ccc",
      height: 30,
      width: 30,
      position: 'absolute',
      left: 15,
      top: 15,
      borderRadius: 20
    }

  });
