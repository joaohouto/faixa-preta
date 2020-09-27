import React, { Component } from 'react';
import { View, TouchableOpacity, Image } from 'react-native'
import { Icon } from 'react-native-elements'

import api from '../../services/api';

import CustomHeader from '../../components/CustomHeader'
import ActivityItem from '../../components/ActivityItem'

import { ContainerLight, PageTitleDark, Row } from '../../components/Global';
import { Label, Details, ImageBox, Title, Category, ImageBoxContent } from './styles';

class Move extends Component {

  state = {
    move: {}
  }

  componentDidMount() {
    this.loadMove();
  }

  loadMove = () => {

    const { move } = this.props.route.params;
    this.setState({ move });

    console.log(move.videoUrl)

  }

  render() {

  const { move } = this.state;
 
  return (
    <>
      <CustomHeader icon="arrow-left" navigation={this.props.navigation} />
      <ContainerLight>

        <ImageBox>
          <ImageBoxContent source={{ uri: move.image }} />
        </ImageBox>

        <Category>{move.category}</Category>
        <Title>{move.name}</Title>
        <Details>
          {move.details}
        </Details>

        { move.videos && <Label>YouTube</Label> }

        { move.videos && move.videos.map(video => (
          <ActivityItem 
            key={video.url}
            name={video.name}
            tags={[video.author]}
            source={{ uri: 'https://img.youtube.com/vi/'+ video.url +'/1.jpg' }}
          />
        )) }
        
      </ContainerLight>
    </>
  );
  }
}

export default Move;