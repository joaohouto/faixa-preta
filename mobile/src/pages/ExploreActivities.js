import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';

import api from '../services/api';
import CardLoader from '../components/CardLoader';

class ExploreActivities extends Component {

  state = {
    activities: []
  }

  componentDidMount(){
    this.loadCustomActivities();
  }

  loadCustomActivities = async () => {
    const response = await api.get('/activities/tag/Exame');

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
          <Image style={styles.headerThumbnail} source={require("../assets/yoko.png")} />
          <View style={styles.content}>

            <Text style={styles.label}>Fundamental</Text>

            <View style={styles.row}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ActivityList', { activityTag: "Kihon" })} style={styles.tagCard}>
                <Text style={styles.tagCardText}>Kihon</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('ActivityList', { activityTag: "Kata" })} style={styles.tagCard}>
                <Text style={styles.tagCardText}>Kata</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('ActivityList', { activityTag: "Kumite" })} style={styles.tagCard}>
                <Text style={styles.tagCardText}>Kumite</Text>
              </TouchableOpacity>
            </View>

            <Text style={styles.label}>Exame de faixa</Text>

            { activities.length > 0 ? activities.map(activity => (
              <TouchableOpacity onPress={() => this.props.navigation.navigate('Activity', { activity: activity })} key={activity._id} style={styles.activityCard}>
                <View style={styles.categoryBox}>
                  {activity.tags.map(tag => <Text style={styles.activityCardCategory}>{tag}</Text>)}
                </View>
                <Text style={styles.activityCardName}>{activity.name}</Text>
              </TouchableOpacity>
            )) : (
              <CardLoader />
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

    headerThumbnail: {
      width: Dimensions.get('window').width,
      height: 250,
      position: 'absolute',
      top: 0,
      zIndex: -99
    }, 

    content: {
      flex: 1,
      minHeight: Dimensions.get('window').height - 330,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      backgroundColor: '#fff',
    },

    label: {
      padding: 20,
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },

    row: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: 20
    },

    tagCard: {
      flex: 1,
      padding: 20,
      backgroundColor: 'rgba(0,0,0,0.5)',
      borderRadius: 10,
      marginHorizontal: 5
    },

    tagCardText: {
      fontSize: 16,
      color: '#fff',
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

    categoryBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },

    activityCardCategory: {
      fontSize: 14,
      color: '#b3b3b3',
      backgroundColor: '#666666',
      padding: 4,
      paddingHorizontal: 15,
      borderRadius: 100,
      marginRight: 5
    },
  });

export default ExploreActivities;