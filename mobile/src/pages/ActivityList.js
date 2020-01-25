import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements'

import api from '../services/api';

class ActivityList extends Component {

  state = {
    activityTag: null,
    activities: []
  }

  componentDidMount(){
    this.loadCustomActivities();
  }

  loadCustomActivities = async () => {

    const { navigation } = this.props;  
    var activityTag = JSON.stringify(navigation.getParam('activityTag', '0'));
    activityTag = activityTag.substring(1, (activityTag.length - 1));

    this.setState({ activityTag });

    const response = await api.get('/activities');

    this.setState({ activities: response.data });
  }

  render(){

    const { activities } = this.state;

    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}>
            
            <View style={styles.headerBox}>
              <Text style={styles.headerText}>{this.state.activityTag}</Text>
              <Text style={styles.headerLabel}>{activities.length} treinos encontrados</Text>
            </View>

          </View>
          <View style={styles.content}>

            <View style={styles.searchBox}>
              <TextInput style={styles.searchInput} placeholderTextColor="#999" placeholder="Buscar" />
              <TouchableOpacity><Icon name='search' size={30} color='#999' /></TouchableOpacity>
            </View>        

            { activities.length > 0 ? activities.map(activity => (
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Activity', { activityId: activity._id })} key={activity._id} style={styles.activityCard}>
                <Text style={styles.activityCardCategory}>{activity.tags}</Text>
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
      marginTop: 40
    },

    activityCardCategory: {
      fontSize: 14,
      color: '#b3b3b3',
      backgroundColor: '#666666',
      padding: 4,
      paddingHorizontal: 15,
      borderRadius: 100,
      position: 'absolute',
      margin: 20
    },

    searchBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      marginTop: 5,
      paddingRight: 15
    },

    searchInput: {
      marginRight: 10,
      paddingHorizontal: 20,
      height: 50,
      borderRadius: 25,
      color: '#555',
      backgroundColor: '#f1f1f1',
      flex: 1
    },

  });

export default ActivityList;