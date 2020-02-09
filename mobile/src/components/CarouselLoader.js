import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing } from 'react-native';

export default class SmallCard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount = () => {
    Animated.loop(

      Animated.timing(
        this.state.fadeAnim,
        {
          toValue: 0.1,
          duration: 1000,
          easing: Easing.bounce,
          friction: 1
        }
      )
    ).start();
  }

  render(){

    return (
        <Animated.View style={{ opacity: this.state.fadeAnim, display: 'flex', flexDirection: 'row' }}>
            <TouchableOpacity style={styles.carouselItem}>
              
              <View style={{ height: 16, width: 60, borderRadius: 10, backgroundColor: "#999" }} />
              <View style={{ height: 50, width: 200, borderRadius: 10, backgroundColor: "#999", marginTop: 10 }} />

            </TouchableOpacity>

            <TouchableOpacity style={styles.carouselItem}>
              
              <View style={{ height: 16, width: 60, borderRadius: 10, backgroundColor: "#999" }} />
              <View style={{ height: 50, width: 200, borderRadius: 10, backgroundColor: "#999", marginTop: 10 }} />

            </TouchableOpacity>
        </Animated.View>        
    )
  }
}


const styles = StyleSheet.create({
  carouselItem: {
    height: 150,
    width: 250,
    backgroundColor: 'rgba(0,0,0,0.5)',
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
