import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'

import api from '../services/api';

export default class Activity extends Component {

  state = {
    activity: {},
    moves: []
  }

  componentDidMount() {
    this.loadActivity();
  }

  loadActivity = async () => {

    const { navigation } = this.props;
    var activityId = JSON.stringify(navigation.getParam('activityId', '0'));

    activityId = activityId.substring(1, (activityId.length - 1));//remove ""

    const response = await api.get('/activities/' + activityId);
 
    this.setState({ activity: response.data });

    var finalMoves = [];
    this.state.activity.moves.map(move => {
      finalMoves.push(move);
    });

    this.setState({ moves: finalMoves });
  }

  render() {

    const { activity } = this.state;
    const { moves } = this.state;

    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}>
            
            <View style={styles.headerBox}>
              <Text style={styles.headerBoxText}>{activity.name}</Text>
            </View>

          </View>
          <View style={styles.content}>

            <Text style={styles.label}>Detalhes</Text>

              <Text style={styles.details}>{activity.details}</Text>

            <View style={styles.activityAlert}>
              <Icon
                name='warning'
                size={35}
                color='#999'
                style={styles.activityAlertIcon}
              />
              <Text style={styles.activityAlertText}>Lembre-se: treine sempre em locais seguros e não exceda fisicamente seus limites.</Text>
            </View>

            <View style={styles.divider}></View>

            <Text style={styles.label}>Fundamentos</Text>

            {moves.length > 0 ? moves.map(move => (
              <Text key={move._id}>{move.name}</Text>
            )) : <Text>Opa</Text>}

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

    headerBoxText: {
      color: "#fff",
      fontSize: 40
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
      padding: 20,
    },

    activityAlertText: {
      color: '#999',
      paddingLeft: 20,
      flex: 1
    },

    divider: {
      height: 2,
      backgroundColor: '#ccc',
      marginHorizontal: 20
      
    }

  });
