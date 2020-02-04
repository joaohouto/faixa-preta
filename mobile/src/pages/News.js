import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Icon } from 'react-native-elements'


export default class Activity extends Component {

  state = {
    wkfPosts: []
  }

  componentDidMount() {


  }

  render() {

    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}>
            
            <View style={styles.headerBox}>
              <Text style={styles.headerText}>Notícias</Text>
              <View style={styles.categoryBox}>
                <Text style={styles.headerLabel}>WKF</Text>
                <Text style={styles.headerLabel}>CBK</Text>
                <Text style={styles.headerLabel}>FKMS</Text>
              </View>
            </View>

          </View>
          <View style={styles.content}>
            
            <Text style={styles.label}>WFK</Text>

              <View style={styles.carousel}>
                <View style={styles.carouselItem}>
                  <Text style={styles.carouselDate}>01/01/2020</Text>
                  <Text style={styles.carouselTitle}>Título</Text>
                </View>

                <Icon name='chevron-left' type='font-awesome' size={20} color='#111' />
                <Icon name='chevron-right' type='font-awesome' size={20} color='#111' />

              </View>

              <Text style={styles.details}></Text>


            <View style={styles.divider}></View>

    

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

    divider: {
      height: 2,
      backgroundColor: '#f1f1f1',
      marginHorizontal: 20
      
    },

    carousel: {

    },

    carouselItem: {
      height: 150,
      backgroundColor: '#111',
      borderRadius: 10,
      marginHorizontal: 20
    }

  });
