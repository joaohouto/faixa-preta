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
        <Animated.View style={{ opacity: this.state.fadeAnim }}>
            <TouchableOpacity style={styles.moveCard}>
                <View style={styles.moveCardImageBackground}></View>
                <Text style={styles.moveCardRepetitions}>xX</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.moveCard}>
                <View style={styles.moveCardImageBackground}></View>
                <Text style={styles.moveCardRepetitions}>xX</Text>
            </TouchableOpacity>
        </Animated.View>        
    )
  }
}


const styles = StyleSheet.create({
    moveCard: {
        backgroundColor: '#999',
        margin: 10,
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 10,
        height: 60
      },
  
      moveCardRepetitions: {
        color: '#999',
        fontSize: 20,
        fontWeight: 'bold',
        position: 'absolute',
        right: 0,
        bottom: 0,
        padding: 20
      },
  
      moveCardImage: {
        height: 40,
        width: 40,
        position: 'absolute',
        left: 10,
        top: 10,
        zIndex: 2
      },
  
      moveCardImageBackground: {
        backgroundColor: "#ccc",
        height: 40,
        width: 40,
        position: 'absolute',
        left: 10,
        top: 10,
        borderRadius: 20
      }
  
});
