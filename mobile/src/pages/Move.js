import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Linking, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements'

import { Divider, Details } from '../styles';

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
    
    this.setState({ move });
    
  }

  render() {

    const { move } = this.state;

    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}>

            <Image source={{ uri: move.image }} style={styles.moveImage} />

          </View>
          <Image style={styles.headerThumbnail} source={{  }} />
          <View style={styles.content}>
            <Text style={styles.contentTitle}>{move.name}</Text>

            <Text style={styles.label}>Detalhes</Text>

            <Details>{move.details}</Details>

            <View style={{ height: 30 }} />

            <Text style={styles.label}>Youtube</Text>


            { /* Youtube Links */ }

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.carousel}>

                  <TouchableOpacity onPress={() => Linking.openURL("https://www.youtube.com/watch?v=" + move.videoUrl)} style={styles.carouselItem}>
                    <View style={styles.carouselItemIcon}>
                      <Icon name='youtube' type='material-community' size={25} color='#fff' />
                    </View>
                    
                    <Text style={styles.carouselTitle}></Text>

                    <Image style={styles.carouselImage} source={{ uri: "https://img.youtube.com/vi/"+ move.videoUrl +"/0.jpg" }} />
                  </TouchableOpacity>       
                       

              </ScrollView>

          </View>
      </ScrollView>
  );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
    },

    moveImage: {
      height: 200,
      width: 200
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
      minHeight: Dimensions.get('window').height - 300
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

    carousel: {
      marginHorizontal: 10,
      maxHeight: 150, 
    },

    carouselItem: {
      height: 150,
      width: 250,
      backgroundColor: '#000',
      borderRadius: 10,
      marginHorizontal: 10,
      display: 'flex',
      justifyContent: 'flex-end', 
      alignItems: 'flex-start',
      padding: 20
    },

    carouselTitle: {
      color: '#fff',
      fontSize: 20
    },

    carouselDate: {
      color: '#fff'
    },
    carouselImage:{
      height: 150,
      width: 250,
      borderRadius: 10,
      padding: 20,
      position: 'absolute', 
      zIndex: -1,
      opacity: 0.5
    }, 

    carouselItemIcon: {
      position: 'absolute',
      right: 20, 
      top: 20
    },

  });
