import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Dimensions, Image } from 'react-native';
import { Icon } from 'react-native-elements';

import api from '../services/api';
import SmallCardLoader from '../components/SmallCardLoader';

export default class ExploreMoves extends Component {

  state = {
    moves: [],
    search: '',
    displayMoves: [],
    isLoading: true
  }

  componentDidMount() {
    this.loadMoves();
  }

  loadMoves = async () => {
    const response = await api.get('/moves');

    const moves = response.data.sort(m => m.name);
 
    this.setState({ moves, displayMoves: response.data, isLoading: false });
  }

  handleSearchInputChange(input) {

    this.setState({ search: input });

    if(!input == ""){

      const displayMoves = this.state.moves.filter(move => 
                              move.name.toLowerCase().includes(input.toLowerCase())
                            );

      this.setState({ displayMoves });
    }else {
      this.setState({ displayMoves: this.state.moves });
    }

  }

  render() {

    const { moves } = this.state;
    const { displayMoves } = this.state;

    return (
      <ScrollView style={styles.container}>
          <View style={styles.header}>
            
            <View style={styles.headerBox}>
              <Text style={styles.headerText}>Movimentos</Text>
              <View style={styles.categoryBox}>
                <Text style={styles.headerLabel}>Kihon</Text>
                <Text style={styles.headerLabel}>Kata</Text>
                <Text style={styles.headerLabel}>Kumite</Text>
              </View>
            </View>

          </View>
          <View style={styles.content}>

            <View style={styles.searchBox}>
              <TextInput onChangeText={e => this.handleSearchInputChange(e)} value={this.state.search} name="search" style={styles.searchInput} placeholderTextColor="#999" placeholder="Buscar" />
              <TouchableOpacity style={styles.searchIcon}>
                {this.state.search == "" 
                  ? <Icon name='search' type='font-awesome' size={20} color='#999' /> 
                  : <Icon onPress={() => this.setState({ search: "", displayMoves: moves })} name='times' type='font-awesome' size={20} color='#999' />}
              </TouchableOpacity>
            </View>

            { !this.state.isLoading ? 
                displayMoves.length > 0 ? displayMoves.map(move => (

                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Move', { move: move })} key={move._id} style={styles.moveCard}>
                    <Image source={{ uri: move.image }} style={styles.moveCardImage} />
                    <View style={styles.moveCardImageBackground}></View>
                    <Text style={styles.moveCardName}>{move.name}</Text>
                  </TouchableOpacity>

                ))
                : <View style={styles.messageBox}><Text style={styles.messageText}>Nenhum movimento encontrado!</Text></View> 
              : (
                <View>
                  <SmallCardLoader />
                  <SmallCardLoader />
                  <SmallCardLoader />
                  <SmallCardLoader />
                  <SmallCardLoader />
                  <SmallCardLoader />
                </View>
              )
            }

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

    header: {
      height: 150,
    },

    headerBox: {
      position: 'absolute',
      bottom: 0,
      padding: 25
    },

    headerText: {
      color: "#fff",
      fontSize: 40,
      marginBottom: 10
    },

    categoryBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start'
    },

    headerLabel: {
      fontSize: 14,
      color: '#b3b3b3',
      backgroundColor: '#666666',
      padding: 4,
      paddingHorizontal: 15,
      borderRadius: 100,
      marginRight: 5
    },

    content: {
      flex: 1,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      backgroundColor: '#fff',
      minHeight: Dimensions.get('window').height - 260,
    },

    searchBox: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
      marginTop: 5,
      paddingRight: 15
    },

    searchInput: {
      paddingHorizontal: 20,
      height: 50,
      borderRadius: 25,
      color: '#555',
      backgroundColor: '#f1f1f1',
      flex: 1
    },

    searchIcon: {
      position: 'absolute',
      right: 20,
      top: 10,
      padding: 15
    },

    messageBox: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      padding: 30
    },

    messageText: {
      fontSize: 16,
      color: "#999",
      fontWeight: 'bold'
    },

    moveCard: {
      backgroundColor: '#f1f1f1',
      margin: 10,
      marginHorizontal: 20,
      padding: 20,
      borderRadius: 10,
      height: 60
    },
    
    moveCardName: {
      position: 'absolute',
      left: 70,
      bottom: 20
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
      height: 30,
      width: 30,
      position: 'absolute',
      left: 15,
      top: 15,
      borderRadius: 20
    }
  });
