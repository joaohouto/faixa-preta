import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Linking, ScrollView } from 'react-native';

import { Icon } from 'react-native-elements'
import { Font } from 'expo';  

import { Divider, Details, Label } from '../styles';

export default class Move extends Component {

  state = {
    move: {}, 
    loading: true
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

            <Label>Detalhes</Label>

            <Details>{move.details}</Details>

            <Divider />

            <Text style={styles.label}>Youtube</Text>


            { /* Youtube Links */ }

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={styles.carousel}>

                  { move.videoUrl ? move.videoUrl.map(url => (
                    <TouchableOpacity key={url} onPress={() => Linking.openURL("https://www.youtube.com/watch?v=" + url)} style={styles.carouselItem}>
                      <View style={styles.carouselItemIcon}>
                        <Icon name='youtube' type='material-community' size={25} color='#fff' />
                      </View>
                      
                      <Text style={styles.carouselTitle}></Text>

                      <Image style={styles.carouselImage} source={{ uri: "https://img.youtube.com/vi/"+ url +"/0.jpg" }} />
                    </TouchableOpacity>       
                  )) : <View /> }
                       

              </ScrollView>

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

    moveImage: {
      height: 200,
      width: 200
    },

    header: {
      height: 250,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
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
      minHeight: Dimensions.get('window').height - 300
    },

    contentTitle: {
      fontSize: 35,
      padding: 20,
      paddingBottom: 0,
      fontWeight: 'bold',
      color: '#111'
    },

    label: {
      padding: 20,
      textTransform: 'uppercase',
      fontWeight: 'bold',
      color: '#111'
    },

    details: {
      paddingHorizontal: 20,
      color: '#111'
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
      opacity: 1
    }, 

    carouselItemIcon: {
      position: 'absolute',
      right: 20, 
      top: 20,
      opacity: 0.5
    },

  });
