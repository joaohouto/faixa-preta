import React, { Component } from 'react';
import { View, Dimensions, Linking, AsyncStorage, Alert } from 'react-native';
import { Icon, Avatar } from 'react-native-elements'

import { Container, EndButtonText, SimpleInput, CenteredContent, SimpleInputLabel, EndButtonDark, Label } from '../styles';

export default class Settings extends Component {

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

    if(this.state.userDesc != '' && this.state.userName != ''){
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

    } else {
      Alert.alert('Opa!', 'Você deve preencher todos os campos.');
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

        <Label style={{ color: '#f1f1f1' }}>Perfil</Label>

        <CenteredContent style={{  }}>
          <Avatar
            rounded
            size="large"
            title={this.state.userName.slice(0, 1)}
            activeOpacity={0.7}
          />
        </CenteredContent>
        
        <View>
          <SimpleInputLabel>Nome</SimpleInputLabel>
          <SimpleInput onChangeText={e => this.handleNameChange(e)} value={this.state.userName} name="name" placeholderTextColor="#999" />
        </View>

        <View>
          <SimpleInputLabel>Graduação</SimpleInputLabel>
          <SimpleInput onChangeText={e => this.handleDescriptionChange(e)} value={this.state.userDesc} name="description" placeholderTextColor="#999" />
        </View>

        <EndButtonDark style={{ backgroundColor: '#333' }} onPress={this.setUserInfo}>
          <EndButtonText>Salvar</EndButtonText>
        </EndButtonDark>

      </Container>
  );
  }
}