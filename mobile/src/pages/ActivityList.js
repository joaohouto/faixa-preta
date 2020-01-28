import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements'

import api from '../services/api';
import CardLoader from '../components/CardLoader';

class ActivityList extends Component {

  state = {
    activityTag: null,
    activities: [],
    search: '',
    displayActivities: [],
    isLoading: true
  }

  componentDidMount(){
    this.loadCustomActivities();
  }

  loadCustomActivities = async () => {

    const { navigation } = this.props;  
    var activityTag = JSON.stringify(navigation.getParam('activityTag', '0'));
    activityTag = activityTag.substring(1, (activityTag.length - 1));

    this.setState({ activityTag });

    const response = await api.get('/activities/tag/'+activityTag);

    this.setState({ activities: response.data, displayActivities: response.data, isLoading: false });
  }

  handleSearchInputChange(input) {

    this.setState({ search: input });

    if(!input == ""){

      const filteredActivities = this.state.activities.filter(activity => 
        activity.name.toLowerCase().includes(input.toLowerCase())
      );

      this.setState({ displayActivities: filteredActivities });
    }else {
      this.setState({ displayActivities: this.state.activities });
    }

  }

  render(){

    const { activities } = this.state;
    const { displayActivities } = this.state;

    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}>
            
            {/* Header */}
            <View style={styles.headerBox}>
              <Text style={styles.headerText}>{this.state.activityTag}</Text>
              <Text style={styles.headerLabel}>{activities.length} treinos</Text>
            </View>

          </View>
          <View style={styles.content}>

            {/* Search input */}
            <View style={styles.searchBox}>
              <TextInput onChangeText={e => this.handleSearchInputChange(e)} value={this.state.search} name="search" style={styles.searchInput} placeholderTextColor="#999" placeholder="Buscar" />
              <TouchableOpacity style={styles.searchIcon}>
                {this.state.search == "" 
                  ? <Icon name='search' type='font-awesome' size={20} color='#999' /> 
                  : <Icon onPress={() => this.setState({ search: "", displayActivities: activities })} name='times' type='font-awesome' size={20} color='#999' />}
              </TouchableOpacity>
            </View>        

            {/* Cards */}
            { !this.state.isLoading ? 
                displayActivities.length > 0 ? displayActivities.map(activity => (

                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Activity', { activity: activity })} key={activity._id} style={styles.activityCard}>
                    <View style={styles.categoryBox}>
                      {activity.tags.map(tag => <Text style={styles.activityCardCategory}>{tag}</Text>)}
                    </View>
                    <Text style={styles.activityCardName}>{activity.name}</Text>
                  </TouchableOpacity>

                ))
                : <View style={styles.messageBox}><Text style={styles.messageText}>Nenhum treino encontrado!</Text></View> 
              : <CardLoader />
            }

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
      paddingHorizontal: 20,
      height: 50,
      borderRadius: 25,
      color: '#555',
      backgroundColor: '#f1f1f1',
      flex: 1
    },

    searchIcon: {
      position: 'absolute',
      right: 20,
      top: 10,
      padding: 15
    },

    messageBox: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: 30
    },

    messageText: {
      fontSize: 16,
      color: "#999",
      fontWeight: 'bold'
    }

  });

export default ActivityList;