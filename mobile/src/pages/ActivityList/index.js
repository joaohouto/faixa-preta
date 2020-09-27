import React, { Component } from 'react';
import { View, TouchableOpacity, RefreshControl } from 'react-native'
import { Icon } from 'react-native-elements'

import api from '../../services/api';

import CustomHeader from '../../components/CustomHeader'
import Badge from '../../components/Badge'
import SearchInput from '../../components/SearchInput'
import ActivityItem from '../../components/ActivityItem'
import LoadingActivityItem from '../../components/LoadingActivityItem'

import { ContainerLight, PageTitleDark, Row } from '../../components/Global';
import { Square, SquareImage, NotFoundMessage, FifityFiveView } from './styles';

import kihonImage from '../../assets/images/kihonFull.png'
import kataImage from '../../assets/images/kataFull.png'
import kumiteImage from '../../assets/images/kumiteFull.png'
import exameImage from '../../assets/images/exameFull.png'

class ActivityList extends Component {

  state = {
    activities: [],
    tag: null,
    listImage: null,
    currentPage: 0,
    totalPages: 0,
    showSearch: true,
    search: '',
    loading: true
  }

  componentDidMount() {
    this.loadTag();
    this.loadActivities();
  }

  loadTag = () => {
    const { tag } = this.props.route.params;
    this.setState({ tag });

    if (tag === "Kihon") 
      this.setState({ listImage: kihonImage });
    if (tag === "Kata") 
      this.setState({ listImage: kataImage });
    if (tag === "Kumite") 
      this.setState({ listImage: kumiteImage });
    if (tag === "Exame") 
      this.setState({ listImage: exameImage });
  }

  loadActivities = async () => {
    await this.setState({ currentPage: this.state.currentPage + 1 });
    
    const response = await api.get('activities?tags=' + this.state.tag + '&name=' + this.state.search + '&page=' + this.state.currentPage);

    await this.setState({ 
      activities: this.state.activities.concat(response.data.docs),
      totalPages: response.data.pages,
      loading: false
    });
  }

  handleSearch = async () => {
    await this.setState({ currentPage: 1, loading: true });
    
    const response = await api.get('activities?name=' + this.state.search + '&tags=' + this.state.tag);

    await this.setState({ 
      activities: response.data.docs,
      totalPages: response.data.pages,
      showSearch: false,
      loading: false
    });

  }

  handleDismiss = async () => {
    await this.setState({ 
      activities: [],
      currentPage: 0,
      showSearch: true,
      search: '', 
      refreshing: false,
      loading: true, 
    });

    await this.loadActivities();
  }

  handleRefresh = async () => {
    await this.setState({ 
      currentPage: 1, 
      refreshing: true, 
      showSearch: true, 
      search: '',
      loading: true
    });
    
    const response = await api.get('activities?tags=' + this.state.tag);

    await this.setState({ 
      activities: response.data.docs,
      totalPages: response.data.pages,
      refreshing: false,
      loading: false
    });
  }

  render() {

  const { activities } = this.state;
  const { loading, currentPage, totalPages } = this.state;
 
  return (
    <>
      <CustomHeader icon="arrow-left" navigation={this.props.navigation} />
      <ContainerLight 
        refreshControl={ <RefreshControl refreshing={this.state.refreshing} onRefresh={this.handleRefresh} />}
      >
        <Row style={{ justifyContent: 'space-between', marginBottom: 20 }}>
          <View>
            <PageTitleDark>{this.state.tag}</PageTitleDark>
            <Badge dark={false}>Lista</Badge>
          </View>
          <Square>  
            <SquareImage source={this.state.listImage} />  
          </Square>
        </Row>

        <SearchInput 
          dark={false} 
          placeholder="O que você está procurando?" 
          value={this.state.search}
          onChangeText={e => this.setState({ search: e })}
          onSearch={this.handleSearch}
          onEndEditing={this.handleSearch}
          showSearch={this.state.showSearch}
          onDismiss={this.handleDismiss}
          style={{ marginBottom: 30 }}
        />

        { !loading ? 
            activities.length > 0 ? activities.map(activity => (
              <TouchableOpacity 
                key={activity._id}
                 onPress={() => this.props.navigation.navigate('Activity', { activity: activity })}
              >
                <ActivityItem 
                  name={activity.name}
                  tags={activity.tags}
                />
              </TouchableOpacity>
            )) : (
              <Row>
                <NotFoundMessage>Nada foi encontrado!</NotFoundMessage>
              </Row>
          ) : (
            <LoadingActivityItem />
          ) }

        { !loading ? currentPage < totalPages && (
          <TouchableOpacity onPress={this.loadMoves}>
            <Row><Icon name='chevron-down' type='feather' size={38} color="#fff" /></Row>
          </TouchableOpacity>
        ) : <></> }

        <FifityFiveView />
        
      </ContainerLight>
    </>
  );
  }
}

export default ActivityList;