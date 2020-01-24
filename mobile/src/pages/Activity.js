import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

import api from '../services/api';

export default class Activity extends Component {

  state = {
    activity: {},
    kihonMoves: [],
    kataMoves: []
  }

  componentDidMount() {
    this.loadActivity();

  }

  loadActivity = async () => {

    //Get activity _id
    const { navigation } = this.props;  
    var activityId = JSON.stringify(navigation.getParam('activityId', '0'));
    activityId = activityId.substring(1, (activityId.length - 1));// remove the ""

    //Get data from api
    const activityResponse = await api.get('/activities/' + activityId);
    this.setState({ activity: activityResponse.data });

    //Load moves data
    activityResponse.data.moves.map(async move => {
        const moveResponse = await api.get('/moves/' + move.move_id);

        if(move.category == "Kihon")
          this.setState({ kihonMoves: this.state.kihonMoves.concat({ info: move, data: moveResponse.data }) });

        else if(move.category == "Kata")
          this.setState({ kataMoves: this.state.kataMoves.concat(moveResponse.data) });

    });
    
  }

  render() {

    const { activity } = this.state;
    const { kihonMoves } = this.state;
    const { kataMoves } = this.state;

    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}>
            
            <View style={styles.headerBox}>
              <Text style={styles.headerText}>{activity.name}</Text>
              <Text style={styles.headerLabel}>{activity.tags}</Text>
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

              { kihonMoves.length > 0 ? <Text style={styles.label}>Kihon</Text> : <View /> }

                { kihonMoves.length > 0 ? kihonMoves.map(move => (
                  <TouchableOpacity key={move.info._id} style={styles.moveCard}>
                    <Text>{move.data.name}</Text>
                  <Text style={styles.moveCardRepetitions}>x{move.info.repetitions}</Text>
                    </TouchableOpacity>
                  )) : <View /> }

              { kataMoves.length > 0 ? <Text style={styles.label}>Kata</Text> : <View /> }

                { kataMoves.length > 0 ? kataMoves.map(move => (
                  <TouchableOpacity key={move.info._id} style={styles.moveCard}>
                    <Text>{move.data.name}</Text>
                  <Text style={styles.moveCardRepetitions}>x{move.info.repetitions}</Text>
                    </TouchableOpacity>
                  )) : <View /> }

            <TouchableOpacity style={styles.startButton}>
              <Text style={styles.startButtonText}>Iniciar</Text>
            </TouchableOpacity>

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
      position: 'absolute',
      bottom: 60,
      left: 20
    },

    headerLabel: {
      fontSize: 14,
      color: '#b3b3b3',
      backgroundColor: '#666666',
      padding: 4,
      paddingHorizontal: 15,
      borderRadius: 100,
      position: 'absolute',
      bottom: 0,
      margin: 20
    },

    content: {
      flex: 1,
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

    moveCardRepetitions: {
      color: '#999',
      fontSize: 20,
      fontWeight: 'bold',
      position: 'absolute',
      right: 0,
      bottom: 0,
      padding: 20
    }

  });
