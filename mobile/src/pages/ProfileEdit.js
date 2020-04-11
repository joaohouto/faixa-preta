import React, { Component } from 'react';
import { View, Dimensions, Linking, AsyncStorage } from 'react-native';
import { Icon, Avatar } from 'react-native-elements'

import { Container, EndButtonText, SimpleInput, H1, EndButtonDark, CenteredContent } from '../styles';

export default class Profile extends Component {

  state = {
    userName: '',
    userDesc: ''
  }

  componentDidMount() {
    this.getUserInfo();
  }

  getUserInfo = async () => {

    try {
      let user = await AsyncStorage.getItem('@user');

      user = JSON.parse(user);

      if (user !== null) {
          this.setState({ userName: user.name, userDesc: user.description });
      }
    } catch(e){
      console.log(e);
    }

  }

  setUserInfo = async () => {

    try {

      let user = {
        name: this.state.userName,
        description: this.state.userDesc
      }

      await AsyncStorage.setItem('@user', JSON.stringify(user));

      this.props.navigation.goBack();
    } catch(e){
      console.log(e);
    }

  }


  handleNameChange = (e) =>{
    this.setState({ userName: e });
  }

  handleDescriptionChange = (e) =>{
    this.setState({ userDesc: e });
  }

  render() {

    return (
      <Container>

        <CenteredContent style={{ marginTop: 20, marginBottom: 20 }}>
          <Avatar
            rounded
            size="xlarge"
            title={this.state.userName.slice(0, 1)}
            activeOpacity={0.7}
          />
        </CenteredContent>
        
        <SimpleInput onChangeText={e => this.handleNameChange(e)} value={this.state.userName} name="name" placeholderTextColor="#999" placeholder="Nome"  />
        <SimpleInput onChangeText={e => this.handleDescriptionChange(e)} value={this.state.userDesc} name="description" placeholderTextColor="#999" placeholder="Descrição"  />

        <EndButtonDark onPress={this.setUserInfo}>
          <EndButtonText>Salvar</EndButtonText>
        </EndButtonDark>

      </Container>
  );
  }
}