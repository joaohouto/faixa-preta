import React, { Component } from 'react';
import { View, Dimensions, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements'

import api from '../services/api';
import { Container, Header, HeaderImage, HeaderText, Details, HeaderLabel, Content, ActivityCard, ActivityCardImage, ActivityCardName, CategoryBox , ActivityCardCategory, SearchBox, SearchInput, SearchIcon, PlusDot, CenteredContent, MessageBox, MessageText, HeaderThumbnail } from '../styles';
import CardLoader from '../components/CardLoader';

class ActivityList extends Component {

  state = {
    activityTag: null,
    activityImage: 'deafault',
    activities: [],
    displayActivities: [],
    page: 2,
    pages: 1,
    search: '',
    isLoading: true
  }

  componentDidMount(){
    this.loadActivities();

  }

  getActivitiesOnDevice = async () => {

    //Pegar atividades do dispositivo
    try {
      const localActivities = await AsyncStorage.getItem('@' + activityTag + 'Activities');
      
      if(localActivities == null) {
        this.loadActivities();

      } else {
        this.setState({ activities: localActivities });
      }
    
    } catch(e){
      console.log(e);
    }

  }

  loadActivities = async () => {

    //Pegar tag das atividades
    const { navigation } = this.props;  
    let activityTag = JSON.stringify(navigation.getParam('activityTag', '0'));
    activityTag = activityTag.substring(1, (activityTag.length - 1));

    let activityImage = JSON.stringify(navigation.getParam('activityImage', '0'));
    activityImage = activityImage.substring(1, (activityImage.length - 1));

    this.setState({ activityTag, activityImage });

    //Pegar da API as atividades
    const response = await api.get('/activities?tags=' + activityTag);
    this.setState({ activities: response.data.docs, 
                    displayActivities: response.data.docs, 
                    isLoading: false,
                    pages: response.data.pages
                  });

    //Salvar no dispositivo
    this.saveActivitiesOnDevice();
  }

  saveActivitiesOnDevice = async () => {

    try {
      await AsyncStorage.setItem('@' + this.state.activityTag + 'Activities', JSON.stringify(this.state.activities));
      console.log("Atividades salvas no dispositivo!");

    } catch(e){
      console.log(e);
    }

  }

  loadMoreActivities = async () => {
    this.setState({ page: this.state.page + 1 });

    const response = await api.get('/activities?tags='+ this.state.activityTag +'&page=' + this.state.page);
    this.setState({ activities: this.state.activities.concat(response.data.docs), 
                    displayActivities: this.state.activities.concat(response.data.docs) 
                  });

  }

  handleSearchInputChange(input) {

    this.setState({ search: input });

    if(!input == ""){

      const filteredActivities = this.state.activities.filter(activity => 
        activity.name.toLowerCase().includes(input.toLowerCase())
      );

      this.setState({ displayActivities: filteredActivities });
    }else {
      this.setState({ displayActivities: this.state.activities });
    }

  }

  
  render(){

    const { displayActivities } = this.state;

    return (
      <Container>
          <Header>

              <HeaderText>{this.state.activityTag}</HeaderText>
              <HeaderLabel>{displayActivities.length} treinos</HeaderLabel>

          </Header>

          <HeaderImage source={{ uri: this.state.activityImage }} />

          <Content style={{ minHeight: Dimensions.get("screen").height * 0.75 }}>

            <SearchBox>
              <SearchInput onChangeText={e => this.handleSearchInputChange(e)} value={this.state.search} name="search" placeholderTextColor="#999" placeholder="Buscar" />
              <SearchIcon>
                {this.state.search == "" 
                  ? <Icon name='search' type='font-awesome' size={20} color='#999' /> 
                  : <Icon onPress={() => this.setState({ search: "", displayActivities: this.state.activities })} name='times' type='font-awesome' size={20} color='#999' /> }
              </SearchIcon>
            </SearchBox>      
            
            { !this.state.isLoading ? 
                displayActivities.length > 0 ? displayActivities.map(activity => (

                  <ActivityCard onPress={() => this.props.navigation.navigate('Activity', { activity: activity })} key={activity._id} >
                    <CategoryBox>
                      {activity.tags.map(tag => <ActivityCardCategory key={Math.floor((Math.random() * 100) + 1)} >{tag}</ActivityCardCategory>)}
                    </CategoryBox>
                    <ActivityCardName>{activity.name}</ActivityCardName>

                    <ActivityCardImage style={{ width: Dimensions.get('window').width - 40 }} source={require('../assets/faixa.png')} />
                  </ActivityCard>

                ))
                : <MessageBox><MessageText>Nenhum treino encontrado!</MessageText></MessageBox> 
              : <CardLoader />
            }

            {
              displayActivities.length > 0 && this.state.pages > 1 ? (
                <CenteredContent>
                  <PlusDot onPress={this.loadMoreActivities} />
                </CenteredContent>
              ) : (
                <View />
              )
            }


          </Content>
      </Container>
  );
  }
}

export default ActivityList;