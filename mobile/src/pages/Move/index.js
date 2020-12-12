import React, { Component } from 'react';
import { Linking } from 'react-native'

import { getLinkPreview } from 'link-preview-js';

import CustomHeader from '../../components/CustomHeader'
import ActivityItem from '../../components/ActivityItem'
import LoadingActivityItem from '../../components/LoadingActivityItem'

import { ContainerLight, Row } from '../../components/Global';
import { Label, Details, ImageBox, Title, Category, FifityFiveView } from './styles';

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
    
    for (const url of videoUrl) {
      if (url !== "default") {
        const data = await getLinkPreview('https://youtube.com/watch?v=' + url);
      
        this.setState({ 
          videos: this.state.videos.concat([{ title: data.title, description: data.description, id: url }]) 
        });
      }
    }
    
    this.setState({ loading: false });
  }

  render() {

  const { move, videos, loading } = this.state;
 
  return (
    <>
      <CustomHeader icon="arrow-left" navigation={this.props.navigation} />
      <ContainerLight>

        <ImageBox 
          style={{ 
              borderBottomLeftRadius: 20,
              borderBottomRightRadius: 20,
              borderTopRightRadius: 20,
              borderTopLeftRadius: 20,
              overflow: 'hidden',
              borderRadius: 20
          }} 
          source={{ uri: move.imageUrl }} 
        />

        <Category>{move.category}</Category>
        <Title>{move.name}</Title>
        <Details>
          { move.details }
        </Details>

        <Label>YouTube</Label>

        { !loading ? videos.map(video => (
          <ActivityItem 
            key={video.id}
            name={video.title.slice(0, 15) + "..."}
            tags={[video.description.slice(0, 20) + "..."]}
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