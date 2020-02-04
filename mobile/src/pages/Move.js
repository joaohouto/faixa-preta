import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';
import { Icon } from 'react-native-elements'

export default class Move extends Component {

  state = {
    move: {}
  }

  componentDidMount() {
    this.loadMove();
  }

  loadMove = async () => {

    const { navigation } = this.props;  
    const move = navigation.getParam('move', '0');
    this.setState({ move: move.moveData });
    
  }

  render() {

    const { move } = this.state;

    return (
      <View style={styles.container}>
          <View style={styles.header}>

            <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/watch?v=" + move.videoUrl)}><Icon name='play-circle' type='font-awesome' size={60} color='#ccc' /></TouchableOpacity>

          </View>
          <Image style={styles.headerThumbnail} source={{ uri: "https://img.youtube.com/vi/"+ move.videoUrl +"/0.jpg" }} />
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
      backgroundColor: '#000',
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
      backgroundColor: '#111',
    },

    contentTitle: {
      fontSize: 35,
      padding: 20,
      paddingBottom: 0,
      fontWeight: 'bold',
      color: '#ddd'
    },

    label: {
      padding: 20,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      color: '#999'
    },

    details: {
      paddingHorizontal: 20,
      color: '#999'
    },

    divider: {
      height: 2,
      backgroundColor: '#333',
      margin: 20,
      
    },

  });
