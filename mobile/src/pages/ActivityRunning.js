import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';

import { Icon, Overlay } from 'react-native-elements'


export default class ActivityRunning extends Component {

  state = {
    activity: {},
    kihonMoves: [],
    kataMoves: [],
    isOverlayVisible: true
  }

  componentDidMount() {
    this.loadActivity();
  }

  loadActivity = () => {

    const { navigation } = this.props;  

    var activity = navigation.getParam('activity', 'null');
    this.setState({ activity });

    var kihonMoves = navigation.getParam('kihonMoves', 'null');
    this.setState({ kihonMoves });

    var kataMoves = navigation.getParam('kataMoves', 'null');
    this.setState({ kataMoves });

    

  }

  render() {

    const { activity } = this.state;
    const { kihonMoves } = this.state;
    const { kataMoves } = this.state;

    console.log(kihonMoves);

    return (
      <View style={styles.container}>

        { kihonMoves.forEach(move, index => (
          <View key={move.info._id}>
            <View style={styles.header}>

              <Image source={require("../assets/moveIcons/activity_alt.png")} style={styles.headerMoveImage} />
              <Text style={styles.moveName}>{move.data.name}</Text>
              <Text style={styles.moveRepetitions}>x{move.info.repetitions}</Text>

            </View>
            <View style={styles.content}>

              <Text style={styles.label}>Próximo</Text>

              <TouchableOpacity style={styles.moveCard}>
                <Image source={require("../assets/moveIcons/activity_alt.png")} style={styles.moveCardImage} />
                <View style={styles.moveCardImageBackground}></View>
                <Text style={styles.moveCardName}></Text>
                <Text style={styles.moveCardRepetitions}>x8</Text>
              </TouchableOpacity>

              {/* Controls */}
              <View style={styles.bottomButtons}>
                <TouchableOpacity style={styles.endButton}>
                  <Text style={styles.endButtonText}>Finalizar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.nextButton}>
                  <Icon name='chevron-right' type='font-awesome' size={25} color='#f1f1f1' />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )) }
          

      </View>
  );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#111',
    },

    header: {
      height: 500,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },

    headerMoveImage: {
      height: 150,
      width: 150,
      margin: 20
    },  

    moveName: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#f1f1f1',
      padding: 20
    },  

    moveRepetitions: {
      fontSize: 25,
      fontWeight: 'bold',
      color: '#ccc',
      padding: 20,
      paddingTop: 0
    },  

    moveDetails: {
      color: '#ccc',
      padding: 20,
      marginTop: 10
    },  

    content: {
      flex: 1,
      minHeight: Dimensions.get('window').height - 230,
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      backgroundColor: '#fff',
    },

    label: {
      padding: 20,
      textTransform: 'uppercase',
      fontWeight: 'bold'
    },

    divider: {
      height: 2,
      width: Dimensions.get('window').width - 40,
      backgroundColor: '#555',
      marginHorizontal: 20
      
    },

    bottomButtons: {
      display: 'flex',
      flexDirection: 'row'
    },  

    nextButton: {
      height: 50,
      width: 50,
      margin: 20,
      marginLeft: 0,
      backgroundColor: '#111',
      borderRadius: 25,
      display: 'flex',
      alignItems:  'center',
      justifyContent: 'center'
    },

    endButton: {
      height: 50,
      backgroundColor: '#ccc',
      margin: 20,
      borderRadius: 25,
      flex: 1,
      display: 'flex',
      alignItems:  'center',
      justifyContent: 'center'
    },

    endButtonText: {
      color: '#fff',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 16
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
