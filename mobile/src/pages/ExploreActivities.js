import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';

class ExploreActivities extends Component {

  componentDidMount(){
    
  }

  render(){

    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}>
              <View style={styles.headerTextBox}>
                <Text style={styles.headerText}>aprenda,</Text>
                <Text style={styles.headerText}>compartilhe,</Text>
                <Text style={styles.headerText}>aperfeiçoe-se.</Text>
              </View>
          </View>
          <Image style={styles.headerThumbnail} source={require("../assets/home.png")} />
          <View style={styles.content}>

            <Text style={styles.label}>Fundamental</Text>

            <View style={styles.row}>
              <TouchableOpacity onPress={() => this.props.navigation.navigate('ActivityList', { activityTag: "Kihon" })} style={styles.tagCard}>
                <Text style={styles.tagCardText}>Kihon</Text>
                <Image style={styles.tagCardImage} source={require('../assets/kihon.png')} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('ActivityList', { activityTag: "Kata" })} style={styles.tagCard}>
                <Text style={styles.tagCardText}>Kata</Text>
                <Image style={styles.tagCardImage} source={require('../assets/kata.png')} />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('ActivityList', { activityTag: "Kumite" })} style={styles.tagCard}>
                <Text style={styles.tagCardText}>Kumite</Text>
                <Image style={styles.tagCardImage} source={require('../assets/kumite.png')} />
              </TouchableOpacity>
            </View>
            

            <Text style={styles.label}>Especiais</Text>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('ActivityList', { activityTag: "Exame" })} style={styles.activityCard}>
              
              <View style={styles.categoryBox}>
                <Text style={styles.activityCardCategory}>Kihon</Text>
                <Text style={styles.activityCardCategory}>Kata</Text>
                <Text style={styles.activityCardCategory}>Kumite</Text>
              </View>

              <Text style={styles.activityCardName}>Exame de faixa</Text>

              <Image style={styles.activityCardImage} source={require('../assets/exame.png')} />
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
      minHeight: Dimensions.get('window').height - 380,
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
      backgroundColor: '#555',
      borderRadius: 10,
      marginHorizontal: 5,
      height: 57,
      width: 110,
    },

    tagCardImage: {
      height: 57,
      width: 110,
      position: 'absolute',
      top: 0,
      right: 0,
      borderRadius: 10,
      zIndex: -1,
      opacity: 0.8
    },

    tagCardText: {
      fontSize: 16,
      color: '#fff',
      fontWeight: 'bold'
    },

    activityCard: {
      height: 105,
      backgroundColor: '#555',
      margin: 10,
      marginHorizontal: 20,
      padding: 20,
      borderRadius: 10,

    },  

    activityCardImage: {
      height: 105,
      width: Dimensions.get('window').width - 40,
      position: 'absolute',
      top: 0,
      left: 0,
      borderRadius: 10,
      zIndex: -1,
      opacity: 0.8

    },

    activityCardName: {
      color: '#f1f1f1',
      fontSize: 18,
      fontWeight: 'bold',
      marginTop: 20
    },

    extraCard: {
      height: 80,
      backgroundColor: '#999',
      margin: 10,
      marginHorizontal: 20,
      padding: 20,
      borderRadius: 10,
    },

    extraCardImage: {
      height: 80,
      width: Dimensions.get('window').width - 40,
      position: 'absolute',
      top: 0,
      left: 0,
      borderRadius: 10,
      zIndex: -1,
      opacity: 0.8

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

    center: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    plusDot: {
      height: 30,
      width: 30,
      backgroundColor: '#ddd',
      borderRadius: 30,
      borderColor: '#f1f1f1',
      borderWidth: 5,
      margin: 20
    }
  });

export default ExploreActivities;