import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image, Dimensions, Animated } from 'react-native';

import { Icon, Overlay } from 'react-native-elements'


export default class ActivityRunning extends Component {

  state = {
    moves: [],
    runnedMoves: [],
    currentPage: 1,
    isVisiblePlay: true,
    isVisibleEnd: false,
    isVisibleConfirm: false

  }

  componentDidMount() {
    this.loadActivity();
  }

  loadActivity = () => {

    const { navigation } = this.props;  

    var kihonMoves = navigation.getParam('kihonMoves', 'null');
    var kataMoves = navigation.getParam('kataMoves', 'null');
    var kumiteMoves = navigation.getParam('kumiteMoves', 'null');

    var moves = kihonMoves.concat(kataMoves);
    moves = moves.concat(kumiteMoves);

    this.setState({ moves });
    

  }

  handleNextPage = () => {
    if(this.state.currentPage < this.state.moves.length){

      this.setState({ currentPage: this.state.currentPage + 1 }); //Atualiza a página de movimento atual
      
      this.setState({ runnedMoves: this.state.runnedMoves.concat(this.state.moves.find(move => move.activityData.group_id == this.state.currentPage)) });
    }

  }

  finishActivity = () => {
    this.setState({ runnedMoves: this.state.runnedMoves.concat(this.state.moves.find(move => move.activityData.group_id == this.state.currentPage)) });
    this.setState({ isVisibleEnd: true });
  }


  render() {

    const { moves } = this.state;

    return (
      <View style={styles.container}>

        {/* Modal "Prepare-se" */}
        
        <Overlay 
          isVisible={this.state.isVisiblePlay}
          windowBackgroundColor="rgba(0, 0, 0, .9)"
          width={Dimensions.get('window').width}
          height="auto"
          borderRadius={25}
        >
          <View>
              <Text style={styles.overlayTitle}>Prepare-se</Text>
              <Text style={styles.overlayText}>A partir de agora o seu treino será monitorado.</Text>
              <Text style={styles.overlayText}>Execute os movimentos propostos no seu ritmo e, então, toque no (>) para seguir para o próximo grupo de movimentos. Ao final da atividade, seu progresso será exibido.</Text>

              <View style={styles.divider}></View>

              <View style={styles.activityAlert}>
                <Icon name='warning' size={35} color='#ccc' style={styles.activityAlertIcon} />
                <Text style={styles.activityAlertText}>Não se esqueça: treine sempre em locais seguros e não exceda fisicamente seus limites.</Text>
              </View>

              <TouchableOpacity onPress={() => this.setState({ isVisiblePlay: false })} style={styles.playButton}>
                <Text style={styles.playButtonText}>Iniciar</Text>
              </TouchableOpacity>

          </View>
        </Overlay>


        {/* Modal "Treino finalizado" */}

        <Overlay
          isVisible={this.state.isVisibleEnd}
          windowBackgroundColor="rgba(0, 0, 0, .9)"
          width={Dimensions.get('window').width}
          height={Dimensions.get('window').height-100}
          borderRadius={25}

        >

          <View style={{ height: Dimensions.get('window').height-120 }}>
            <Text style={styles.overlayTitle}>Treino finalizado</Text>

            { this.state.runnedMoves.length >= this.state.moves.length 
              ? <Text style={styles.finalText}>100%!</Text>
              : <Text style={styles.finalText}>Quase!</Text> }

            <Text style={styles.label}>Resumo</Text>

            <ScrollView>
            { this.state.runnedMoves.map(move => (
              <View key={move.activityData._id} style={styles.moveCard}>
                <Image source={{ uri: move.moveData.image }} style={styles.moveCardImage} />
                <View style={styles.moveCardImageBackground}></View>
                <Text style={styles.moveCardName}>{move.moveData.name}</Text>
                <Text style={styles.moveCardRepetitions}>x{move.activityData.repetitions}</Text>
              </View>
              )) }
            </ScrollView>

            <View style={{ display: 'flex', alignItems: 'center' }}>
              <TouchableOpacity style={styles.backToHomeButton} onPress={() => this.props.navigation.goBack()}>
                <Text style={styles.backToHomeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </View>
          </View>         

        </Overlay>


        {/* Modal "Confirmação finalizar treino" */}

        <Overlay
          isVisible={this.state.isVisibleConfirm}
          windowBackgroundColor="rgba(0, 0, 0, .9)"
          width={Dimensions.get('window').width}
          height="auto"
          borderRadius={25}

        >

          <View>
            <Text style={styles.overlayTitle}>Certeza?</Text>

            <Text style={styles.overlayText}>Está certo de que quer finalizar o treino agora?</Text>

            <View style={styles.bottomButtons}>
                <TouchableOpacity onPress={() => this.setState({ isVisibleConfirm: false })} style={styles.endButton}>
                  <Text style={styles.endButtonText}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.setState({ isVisibleEnd: true })} style={styles.endButtonDark}>
                  <Text style={styles.endButtonText}>Finalizar</Text>
                </TouchableOpacity>
            </View>

          </View>
        </Overlay>

        {moves.map(move => (

            <View key={move.activityData._id}>
              <View style={styles.header}>

                <Image source={{ uri: moves.find(move => move.activityData.group_id == this.state.currentPage).moveData.image }} style={styles.headerMoveImage} />
                <Text style={styles.moveName}>{ moves.find(move => move.activityData.group_id == this.state.currentPage).moveData.name}</Text>
                <Text style={styles.moveRepetitions}>{ moves.find(move => move.activityData.group_id == this.state.currentPage).activityData.repetitions}x</Text>

              </View>
              <View style={styles.content}>

                  { moves.find(move => move.activityData.group_id == this.state.currentPage + 1) ? (
                      
                      <View>
                        <Text style={styles.label}>Próximo</Text>

                        <View style={styles.moveCard}>
                          <Image source={{ uri: moves.find(move => move.activityData.group_id == this.state.currentPage + 1).moveData.image }} style={styles.moveCardImage} />
                          <View style={styles.moveCardImageBackground}></View>
                          <Text style={styles.moveCardName}>{moves.find(move => move.activityData.group_id == this.state.currentPage + 1).moveData.name}</Text>
                          <Text style={styles.moveCardRepetitions}>x{moves.find(move => move.activityData.group_id == this.state.currentPage + 1).activityData.repetitions}</Text>
                        </View>

                        <View style={styles.bottomButtons}>
                          <TouchableOpacity onPress={() => this.setState({ isVisibleConfirm: true })} style={styles.endButton}>
                            <Text style={styles.endButtonText}>Finalizar</Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={this.handleNextPage} style={styles.nextButton}>
                            <Icon name='arrow-right' type='font-awesome' size={25} color='#f1f1f1' />
                          </TouchableOpacity>
                        </View>
                      </View>

                    ) : (
                      <View>
                        <View style={{ height: 130, display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                          <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 20 }}>Quase...</Text>
                          <Text>Só mais esse para concluir.</Text>
                        </View>

                        <View style={styles.bottomButtons}>
                          <TouchableOpacity onPress={() => this.setState({ isVisibleConfirm: true })} style={styles.endButton}>
                            <Text style={styles.endButtonText}>Finalizar</Text>
                          </TouchableOpacity>

                          <TouchableOpacity onPress={this.finishActivity} style={styles.endButtonDark}>
                            <Text style={styles.endButtonText}>Concluir</Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    )
                  }


              </View>
            </View>
          ))
        }

      </View>
  );
  }
}

const styles = StyleSheet.create({
    container: {
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
      minHeight: 230,
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
      backgroundColor: '#f1f1f1',
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

    endButtonDark: {
      height: 50,
      backgroundColor: '#111',
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
    },

    overlayTitle: {
      fontSize: 30,
      margin: 20,
      fontWeight: 'bold'
    },

    overlayText: {
      marginHorizontal: 20,
      marginBottom: 30
    },  

    playButton: {
      marginTop: 30,
      height: 50,
      backgroundColor: '#111',
      margin: 20,
      borderRadius: 25,
      width: Dimensions.get('window').width - 60,
      display: 'flex',
      alignItems:  'center',
      justifyContent: 'center'
    },

    playButtonText: {
      color: '#fff',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 16
    },

    activityAlert: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 20,
      paddingVertical: 30
    },

    activityAlertText: {
      color: '#999',
      paddingLeft: 20,
      flex: 1
    },

    finalText: {
      fontSize: 18,
      padding: 20,
      backgroundColor: '#111',
      color: '#fff',
      borderRadius: 30,
      fontWeight: 'bold',
      textAlign: 'center',
      position: 'absolute',
      top: 20,
      right: 20
    },

    backToHomeButton: {
      marginTop: 30,
      height: 50,
      backgroundColor: '#ccc',
      margin: 20,
      borderRadius: 25,
      width: Dimensions.get('window').width - 60,
      display: 'flex',
      alignItems:  'center',
      justifyContent: 'center'
    },

    backToHomeButtonText: {
      color: '#fff',
      textTransform: 'uppercase',
      fontWeight: 'bold',
      fontSize: 16
    },

  });
