import React, { Component } from 'react';
import { Text, View, Dimensions, Animated } from 'react-native';

import { Icon, Overlay } from 'react-native-elements';
import { OverlayTitle, OverlayText, Divider, AlmostText, ActivityAlert, BottomButtons, EndButtonDarkText, ActivityAlertText, PlayButton, PlayButtonText, EndButton, EndButtonText, EndButtonDark, ActivityRunningHeader, ActivityRunningHeaderImage, ActivityRunningMoveName, ActivityRunningMoveRepetitions, ActivityRunningContent, Label, MoveCard, MoveCardImage, MoveCardBackground, MoveCardName, MoveCardRepetitions, Container, CenteredContent } from '../styles';


export default class ActivityRunning extends Component {

  state = {
    activity: {},
    moves: [],
    runnedMoves: [],
    currentPage: 0,
    isVisiblePlay: true,
    isVisibleConfirm: false

  }

  componentDidMount() {
    this.loadActivity();
  }

  loadActivity = () => {

    const { navigation } = this.props;  

    let activity = navigation.getParam('activity', 'null');
    let kihonMoves = navigation.getParam('kihonMoves', 'null');
    let kataMoves = navigation.getParam('kataMoves', 'null');
    let kumiteMoves = navigation.getParam('kumiteMoves', 'null');

    let moves = kihonMoves.concat(kataMoves);
    moves = moves.concat(kumiteMoves);

    this.setState({ activity, moves });
    

  }

  handleNextPage = () => {
    if(this.state.currentPage < this.state.moves.length){

      this.setState({ currentPage: this.state.currentPage + 1 }); //Atualiza a página de movimento atual
      
      this.setState({ runnedMoves: this.state.runnedMoves.concat(this.state.moves[this.state.currentPage]) });
    }

    console.log("Página: " + this.state.currentPage);

  }

  finishActivity = () => {
    this.props.navigation.popToTop();
    this.props.navigation.navigate('ActivityFinished', { activity: this.state.activity, runnedMoves: this.state.runnedMoves.concat(this.state.moves[this.state.moves.length - 1]) });

  }

  finishUndoneActivity = () =>  {
    this.setState({ isVisibleConfirm: false });
    this.props.navigation.popToTop();
  }

  finishActivityInTheMiddle = () =>  {
    this.setState({ isVisibleConfirm: false });
    this.props.navigation.popToTop();
    this.props.navigation.navigate('ActivityFinished', { activity: this.state.activity, runnedMoves: this.state.runnedMoves });
    
  }

  render() {

    const { moves } = this.state;

    return (
      <Container>

        {/* Modal "Prepare-se" */}
        
        <Overlay 
          isVisible={this.state.isVisiblePlay}
          windowBackgroundColor="rgba(0, 0, 0, .9)"
          width={Dimensions.get('window').width}
          height="auto"
          borderRadius={25}
        >
          <View>
              <OverlayTitle>Prepare-se</OverlayTitle>
              <OverlayText>A partir de agora o seu treino será monitorado.</OverlayText>
              <OverlayText>Execute os movimentos propostos no seu ritmo e ao final seu progresso será exibido..</OverlayText>

              <Divider />

              <ActivityAlert>
                <Icon name='warning' size={35} color='#ccc' />
                <ActivityAlertText>Não se esqueça: treine sempre em locais seguros e não exceda fisicamente seus limites.</ActivityAlertText>
              </ActivityAlert>

              <PlayButton style={{ width: Dimensions.get('window').width - 60 }} onPress={() => this.setState({ isVisiblePlay: false })} >
                <PlayButtonText>Iniciar</PlayButtonText>
              </PlayButton>

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
            <OverlayTitle>Certeza?</OverlayTitle>

            <OverlayText>Está certo de que quer finalizar o treino agora?</OverlayText>

            <BottomButtons>
                <EndButton onPress={() => this.setState({ isVisibleConfirm: false })} >
                  <EndButtonText>Cancelar</EndButtonText>
                </EndButton>

                {
                  this.state.currentPage > 0 ? (
                    <EndButtonDark onPress={this.finishActivityInTheMiddle} >
                      <EndButtonText>Finalizar</EndButtonText>
                    </EndButtonDark>
                  ) : (
                    <EndButtonDark onPress={this.finishUndoneActivity} >
                      <EndButtonText>Finalizar</EndButtonText>
                    </EndButtonDark>
                  )
                }
            </BottomButtons>

          </View>
        </Overlay>



        {/* Exibição do treino */}
        
        { moves.length > 0 ? (

            <View>

              <ActivityRunningHeader style={{ height: Dimensions.get('window').height - 310 }}>

                <ActivityRunningHeaderImage source={{ uri: moves[this.state.currentPage].moveData.image }} />
                <ActivityRunningMoveName>{moves[this.state.currentPage].moveData.name}</ActivityRunningMoveName>
                <ActivityRunningMoveRepetitions>{ moves[this.state.currentPage].activityData.repetitions}x</ActivityRunningMoveRepetitions>

              </ActivityRunningHeader>

              <ActivityRunningContent>

                  { (this.state.currentPage + 1) != moves.length ? (
                      
                      <View>
                        <Label>Próximo</Label>

                        <MoveCard>
                          <MoveCardImage source={{ uri: moves[this.state.currentPage + 1].moveData.image }} />
                          <MoveCardBackground />
                          <MoveCardName>{moves[this.state.currentPage + 1].moveData.name}</MoveCardName>
                          <MoveCardRepetitions>x{moves[this.state.currentPage + 1].activityData.repetitions}</MoveCardRepetitions>
                        </MoveCard>

                        <BottomButtons>
                          <EndButton onPress={() => this.setState({ isVisibleConfirm: true })} >
                            <EndButtonText>Cancelar</EndButtonText>
                          </EndButton>

                          <EndButtonDark style={{ width: 30 }} onPress={this.handleNextPage}>
                            <Icon name='chevron-right' type='material-community' size={30} color='#f1f1f1' />
                          </EndButtonDark>
                        </BottomButtons>
                      </View>

                    ) : (
                      <View>
                        
                        <CenteredContent style={{ height: 136 }} >
                          <AlmostText>Último</AlmostText>
                          <Text>Só mais esse para concluir!</Text>
                        </CenteredContent>

                        <BottomButtons>
                          <EndButton onPress={() => this.setState({ isVisibleConfirm: true })} >
                            <EndButtonText>Cancelar</EndButtonText>
                          </EndButton>

                          <EndButtonDark onPress={this.finishActivity }>
                            <EndButtonText>Finalizar</EndButtonText>
                          </EndButtonDark>
                          
                        </BottomButtons>
                      </View>
                    )
                  }


              </ActivityRunningContent>
            </View>
            
        ) : <View />}
      </Container>
  );
  }
}