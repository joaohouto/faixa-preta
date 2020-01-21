import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Picker, Slider } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import api from '../services/api';
import Activity from './Activity';

class ExploreActivities extends Component {

  state = {
    activities: []
  }

  componentDidMount(){
    this.loadCustomActivities();
  }

  loadCustomActivities = async () => {
    const response = await api.get('/activities');

    this.setState({ activities: response.data });
  }

  render(){

    const { activities } = this.state;

    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}>
              <View style={styles.headerTextBox}>
                <Text style={styles.headerText}>aprenda,</Text>
                <Text style={styles.headerText}>compartilhe,</Text>
                <Text style={styles.headerText}>aperfeiçoe-se.</Text>
              </View>
          </View>
          <View style={styles.content}>

            <Text style={styles.label}>Treinos</Text>

            { activities.length > 0 ? activities.map(activity => (
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Treino', { activityId: activity._id })} key={activity._id} style={styles.activityCard}>
                <Text style={styles.activityCardCategory}>{activity.category}</Text>
                <Text style={styles.activityCardName}>{activity.name}</Text>
              </TouchableOpacity>
            )) : (
              <Text>
                Carregando...
              </Text>
            )}

          </View>
      </ScrollView>
  );
  }
}

const StackNavigator = createStackNavigator(
  {
    FaixaPreta: ExploreActivities,
    Treino: Activity,
  },

  {
    initialRouteName: 'FaixaPreta',
  }
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111',
    },

    header: {
      height: 250,
    },

    headerTextBox:{
      position: 'absolute',
      bottom: 0,
      padding: 30,
      paddingBottom: 40
    },  

    headerText:{
      color: "#f1f1f1",
      fontSize: 30,
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

    activityCard: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      margin: 10,
      marginHorizontal: 20,
      padding: 20,
      borderRadius: 10,

    },  

    activityCardName: {
      color: '#f1f1f1',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20
    },

    activityCardCategory: {
      fontSize: 14,
      color: '#b3b3b3',
      backgroundColor: '#666666',
      padding: 4,
      paddingHorizontal: 10,
      borderRadius: 100
    }
  });

export default createAppContainer(StackNavigator);