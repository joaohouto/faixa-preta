import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

import api from '../services/api';

export default class Move extends Component {

  state = {
    move: {}
  }

  componentDidMount() {
    this.loadMove();

  }

  loadMove = async () => {

    //Get move _id
    const { navigation } = this.props;  
    const move = navigation.getParam('move', '0');
    this.setState({ move: move.data });
    
  }

  render() {

    const { move } = this.state;

    return (
      <View style={styles.container}>
          <View style={styles.header}>

            <TouchableOpacity onPress={() => this.props.navigation.navigate('WebVisualizer', { url: move.videoUrl })}><Icon name='play-circle' type='font-awesome' size={60} color='#ccc' /></TouchableOpacity>

          </View>
          <Image style={styles.headerThumbnail} source={{ uri: "https://img.youtube.com/vi/kJ5xNaSIeTI/mqdefault.jpg" }} />
          <View style={styles.content}>
            <Text style={styles.contentTitle}>{move.name}</Text>

            <Text style={styles.label}>Detalhes</Text>

            <Text style={styles.details}>{move.details}</Text>

            <View style={styles.divider}></View>

          </View>
      </View>
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
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)'
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
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      backgroundColor: '#fff',
    },

    contentTitle: {
      fontSize: 35,
      padding: 20,
      paddingBottom: 0,
      fontWeight: 'bold'
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

    divider: {
      height: 2,
      backgroundColor: '#f1f1f1',
      margin: 20,
      
    },

  });
