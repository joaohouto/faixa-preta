import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

import api from '../services/api';

export default class ExploreActivities extends Component {

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
      <View style={styles.container}>
          <View style={styles.header}>
              <View style={styles.headerTextBox}>
                <Text style={styles.headerText}>aprenda,</Text>
                <Text style={styles.headerText}>compartilhe,</Text>
                <Text style={styles.headerText}>aperfeiçoe-se.</Text>
              </View>
          </View>
          <View style={styles.content}>

            <Text style={styles.label}>Treinos</Text>

            <TouchableOpacity style={styles.activityCard}>
      <Text style={styles.activityCardCategory}>category</Text>
      <Text style={styles.activityCardName}>name</Text>
    </TouchableOpacity>


          </View>
      </View>
  );
  }
}

const ItemList = ({ props }) => {
  return (
    <TouchableOpacity style={styles.activityCard}>
      <Text style={styles.activityCardCategory}>{props.category}</Text>
      <Text style={styles.activityCardName}>{props.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111',
    },

    list: {
      height: 'auto'
    },  

    header: {
      height: 300,
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
