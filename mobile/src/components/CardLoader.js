import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Animated, Easing } from 'react-native';

export default class Card extends Component {

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
          <TouchableOpacity key="01" style={styles.activityCard}>
            <View style={styles.categoryBox}>
                <Text style={styles.activityCardCategory}></Text>
            </View>
            <View style={{ width: 200, height: 20, backgroundColor: '#ccc', marginTop: 20, borderRadius: 5 }}></View>
        </TouchableOpacity>

        <TouchableOpacity key="02" style={styles.activityCard}>
            <View style={styles.categoryBox}>
                <Text style={styles.activityCardCategory}></Text>
            </View>
            <View style={{ width: 200, height: 20, backgroundColor: '#ccc', marginTop: 20, borderRadius: 5 }}></View>
        </TouchableOpacity>

        <TouchableOpacity key="03" style={styles.activityCard}>
            <View style={styles.categoryBox}>
                <Text style={styles.activityCardCategory}></Text>
            </View>
            <View style={{ width: 200, height: 20, backgroundColor: '#ccc', marginTop: 20, borderRadius: 5 }}></View>
        </TouchableOpacity>

        <TouchableOpacity key="04" style={styles.activityCard}>
            <View style={styles.categoryBox}>
                <Text style={styles.activityCardCategory}></Text>
            </View>
            <View style={{ width: 200, height: 20, backgroundColor: '#ccc', marginTop: 20, borderRadius: 5 }}></View>
        </TouchableOpacity>
        </Animated.View>        
    )
  }
}


const styles = StyleSheet.create({
    activityCard: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        margin: 10,
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 10
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
        marginRight: 5,
        width: 80
      }
});
