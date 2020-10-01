import React, { Component } from 'react';
import { Linking } from 'react-native'

//import {getLinkPreview} from 'link-preview-js';

import CustomHeader from '../../components/CustomHeader'
import ActivityItem from '../../components/ActivityItem'
import LoadingActivityItem from '../../components/LoadingActivityItem'

import { ContainerLight, Row } from '../../components/Global';
import { Label, Details, ImageBox, Title, Category, ImageBoxContent, FifityFiveView } from './styles';

class Move extends Component {

  state = {
    move: {},
    videos: [],
    loading: true
  }

  componentDidMount() {
    this.loadMove();
  }

  loadMove = async () => {
    const { move } = this.props.route.params;
    await this.setState({ move });

    const { videoUrl } = this.state.move;
    this.setState({ loading: false });

    return

    for (const url of videoUrl) {
      const data = await getLinkPreview('https://youtube.com/watch?v=' + url);

      this.setState({ videos: this.state.videos.concat([{ title: data.title, description: data.description, id: url }]) });
    }

  }

  render() {

  const { move, videos, loading } = this.state;
 
  return (
    <>
      <CustomHeader icon="arrow-left" navigation={this.props.navigation} />
      <ContainerLight>

        <ImageBox>
          <ImageBoxContent source={{ uri: move.imageUrl }} />
        </ImageBox>

        <Category>{move.category}</Category>
        <Title>{move.name}</Title>
        <Details>
          {move.details}
        </Details>

        <Label>YouTube</Label>

        { !loading ? videos.map(video => (
          <ActivityItem 
            key={video.id}
            name={video.title}
            tags={[]}
            source={{ uri: 'https://img.youtube.com/vi/'+ video.id +'/mqdefault.jpg' }}
            onPress={() => Linking.openURL("https://www.youtube.com/watch?v=" + video.id)}
          />
        )) : <LoadingActivityItem /> }

        <FifityFiveView />
        
      </ContainerLight>
    </>
  );
  }
}

export default Move;