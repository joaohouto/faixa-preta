import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Card extends Component {
  render() {
    return (
        <TouchableOpacity style={styles.activityCard}>
            <View style={styles.categoryBox}>
                <Text style={styles.activityCardCategory}>{this.props.tags}</Text>
            </View>
            <Text style={styles.activityCardName}>{this.props.name}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
    activityCard: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        margin: 10,
        marginHorizontal: 20,
        padding: 20,
        borderRadius: 10,
  
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
        marginRight: 5
      },
});