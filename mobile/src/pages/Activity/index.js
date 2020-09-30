import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native'
import { Icon } from 'react-native-elements'

import api from '../../services/api';

import CustomHeader from '../../components/CustomHeader'
import Badge from '../../components/Badge'
import Button from '../../components/Button'
import MoveItem from '../../components/MoveItem'
import LoadingMoveItem from '../../components/LoadingMoveItem'

import { ContainerLight, PageTitleDark, Row } from '../../components/Global';
import { FifityFiveView, Details, WarningBox, WarningBoxText, Label, ButtonWrapper } from './styles';

class Activity extends Component {

  state = {
    activity: {},
    kihonMoves: [],
    kataMoves: [],
    kumiteMoves: [],
    loading: true
  }

  componentDidMount() {
    this.loadActivity();
  }

  loadActivity = async () => {

    const { activity } = this.props.route.params;
    this.setState({ activity });


    for (const move of activity.moves) {
      const moveResponse = await api.get('/moves/' + move.move_id);

      if (moveResponse.data.category === "Kihon")
        this.setState({ kihonMoves: this.state.kihonMoves.concat({ ...moveResponse.data, repetitions: move.repetitions }) });

      if (moveResponse.data.category === "Kata")
        this.setState({ kataMoves: this.state.kataMoves.concat({ ...moveResponse.data, repetitions: move.repetitions }) });

      if (moveResponse.data.category === "Kumite")
        this.setState({ kumiteMoves: this.state.kumiteMoves.concat({ ...moveResponse.data, repetitions: move.repetitions }) });

    }

    this.setState({ loading: false });

  }

  render() {

  const { activity, kihonMoves, kataMoves, kumiteMoves } = this.state;
  const { loading } = this.state;
 
  return (
    <>
      <CustomHeader icon="arrow-left" navigation={this.props.navigation} />
      <ContainerLight>
        <PageTitleDark>{activity.name}</PageTitleDark>

        <Row style={{ justifyContent: 'flex-start' }}>
          { activity.tags && activity.tags.map(tag => (
            <Badge dark={false} key={tag}>{tag}</Badge>
          )) }
        </Row>
        
        <Details>
            {activity.details}
        </Details>

        <WarningBox>
          <Row style={{ justifyContent: 'flex-start' }}>
            <Icon 
              name='alert-triangle' 
              type='feather' 
              size={40} 
              color="#D0D0D0"
            />
            <WarningBoxText>Treine sempre em locais seguros e não exceda fisicamente os seus limites.</WarningBoxText>
          </Row>
        </WarningBox>


        { !loading && kihonMoves.length > 0 ? <Label>Kihon</Label> : <></> }
            
        { !loading ? kihonMoves.length > 0 && kihonMoves.map(move => (
          <TouchableOpacity key={move._id} onPress={() => this.props.navigation.navigate('Move', { move })}>
            <MoveItem 
              name={move.name}
              repetitions={move.repetitions}
              source={{ uri: move.imageUrl }}
            />
          </TouchableOpacity>

        )) : <LoadingMoveItem /> }


        { !loading && kataMoves.length > 0 ? <Label>Kata</Label> : <></> }
            
        { !loading ? kataMoves.length > 0 && kataMoves.map(move => (
          <TouchableOpacity key={move._id} onPress={() => this.props.navigation.navigate('Move', { move })}>
            <MoveItem 
              name={move.name}
              repetitions={move.repetitions}
              source={{ uri: move.imageUrl }}
            />
          </TouchableOpacity>

        )) : <></> }


        { !loading && kumiteMoves.length > 0 ? <Label>Kumite</Label> : <></> }
            
        { !loading ? kumiteMoves.length > 0 && kumiteMoves.map(move => (
          <TouchableOpacity key={move._id} onPress={() => this.props.navigation.navigate('Move', { move })}>
            <MoveItem 
              name={move.name}
              repetitions={move.repetitions}
              source={{ uri: move.imageUrl }}
            />
          </TouchableOpacity>

        )) : <></> }
                 
                

        <FifityFiveView />
        
      </ContainerLight>

      <ButtonWrapper>
        <Button 
          onPress={() => !loading && this.props.navigation.navigate('ActivityRunning', { activity, kihonMoves, kataMoves, kumiteMoves })}
        >
          Treinar
        </Button>
      </ButtonWrapper>

    </>
  );
  }
}

export default Activity;