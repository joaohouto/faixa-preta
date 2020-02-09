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
            <TouchableOpacity style={styles.postItem} />
            <TouchableOpacity style={styles.postItem} />
            <TouchableOpacity style={styles.postItem} />
        </Animated.View>        
    )
  }
}


const styles = StyleSheet.create({

  postItem: {
    margin: 5,
    marginHorizontal: 20,
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10, 
    display: 'flex',
    flexDirection: 'row', 
    height: 50
  }, 
    
});
