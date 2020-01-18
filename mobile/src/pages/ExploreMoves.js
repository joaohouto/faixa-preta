import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

import api from '../services/api';

export default class ExploreMoves extends Component {

  state = {
    moves: []
  }

  componentDidMount() {
    this.loadMoves();
  }

  loadMoves = async () => {
    const response = await api.get('/moves');
 
    this.setState({ moves: response.data });
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
            <View style={styles.headerBox}>
              <Text style={styles.headerBoxText}>Movimentos</Text>
            </View>
          </View>
          <View style={styles.content}>
              <TextInput style={styles.searchInput} placeholderTextColor="#999" placeholder="Buscar" />

                {this.state.moves.map(move => (
                  <TouchableOpacity key={move._id} style={styles.moveCard}>
                    <Text>{move.name}</Text>
                  </TouchableOpacity>
                ))}

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

    moveCard: {
      backgroundColor: '#f1f1f1',
      margin: 10,
      marginHorizontal: 20,
      padding: 20,
      borderRadius: 10,
      height: 60
    },  

    header: {
      height: 200,
    },

    headerBox: {
      position: 'absolute',
      bottom: 0,
      padding: 25
    },

    headerBoxText: {
      color: "#fff",
      fontSize: 40
    },

    content: {
      flex: 1,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      backgroundColor: '#fff',
    },

    searchInput: {
      margin: 10,
      marginTop: 15,
      paddingHorizontal: 20,
      height: 50,
      borderRadius: 25,
      color: '#555',
      backgroundColor: '#f1f1f1'
    }
  });
