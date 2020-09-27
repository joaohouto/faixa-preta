import React, { Component } from 'react';
import { View, Dimensions, Text, Linking, AsyncStorage } from 'react-native';
import { Icon, Avatar } from 'react-native-elements'

import { Header, Container, CategoryBox, ActivityCardCategory, BasicButton, ActivityCard, ActivityCardName, ActivityCardImage, ActivityHistoryCard, ActivityHistoryCardText, BasicButtonText, HeaderText, HeaderLabel, Content, Label, Divider, ProfileCard, ProfileCardImage, ProfileCardTitle, ProfileCardSubtitle, EndButtonText, ExperienceBox, ExperienceLabel, ExperienceBar, ExperienceBarFill, HeaderLabelBox, HeaderLabelBoxItem } from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Profile extends Component {

  state = {
    userName: null,
    userDesc: null,
    oldActivities: [],
    weekPeriod: '',
    weekXpData: []
  }

  componentDidMount() {

    const { navigation } = this.props;

    this.focusListener = navigation.addListener('didFocus', () => {
      this.getUserInfo();
    });

    this.getUserInfo();
  }


  getUserInfo = async () => {

    try {
      let user = await AsyncStorage.getItem('@user');

      console.log(user)

      user = JSON.parse(user);

      if (user !== null) {
          this.setState({ userName: user.name, userDesc: user.description });
      } else {
        this.setState({ userName: 'Usuário', userDesc: 'Faixa Branca' });
      }
    } catch(e){
      console.log(e);
    }

  }


  render() {

    const chartConfig = {
      backgroundColor: "#fff",
      backgroundGradientFrom: "#fff",
      backgroundGradientTo: "#fff",
      color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      
    }

    const dataWeek = {
      labels: ["Dom", "Seg", "Ter", "Qua", "Quin", "Sex", "Sáb"],
      datasets: [
        {
          data: this.state.weekXpData
        }
      ]
    }

    return (
      <Container>
          <Header>
          
              <HeaderText>Perfil</HeaderText>
              <HeaderLabelBox>
                <HeaderLabelBoxItem>Estatísticas</HeaderLabelBoxItem>
                <HeaderLabelBoxItem>Sobre</HeaderLabelBoxItem>
              </HeaderLabelBox>

          </Header>
          <Content style={{ minHeight: Dimensions.get('window').height - 250 }}>

            
            <ProfileCard>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Avatar
                  rounded
                  size="large"
                  title={this.state.userName ? this.state.userName.slice(0, 1) : ''}
                  activeOpacity={0.7}
                  source={{ uri: 'no' }}
                />

                <View style={{ marginLeft: 20 }}>
                  <ProfileCardTitle>{this.state.userName}</ProfileCardTitle>

                  <View style={{ display: 'flex', flexDirection: 'row' }}>
                    <Icon name='information' type='material-community' size={15} color='#999' />
                    <ProfileCardSubtitle>{this.state.userDesc}</ProfileCardSubtitle>
                  </View>

                </View>
              </View>

              <TouchableOpacity onPress={() => this.props.navigation.navigate('Settings')} style={{ padding: 10 }}>
                <Icon name='gear' type='font-awesome' size={20} color='#999' />
              </TouchableOpacity>
            
            </ProfileCard>

            <Divider style={{ width: Dimensions.get('window').width - 40 }} />



            <ActivityCard onPress={() => this.props.navigation.navigate('ActivityFinishedList')} >
              <CategoryBox>
                <ActivityCardCategory>Treinos antigos</ActivityCardCategory>
              </CategoryBox>
              <ActivityCardName>Histórico</ActivityCardName>

              <ActivityCardImage style={{ width: Dimensions.get('window').width - 40 }} source={require('../assets/historico.png')} />
            </ActivityCard>


            <Label>Sobre</Label>

            <BasicButton onPress={ () => Linking.openURL("https://faixa-preta.web.app/privacidade") }>
              <BasicButtonText>Política de Privacidade</BasicButtonText>
            </BasicButton>


          </Content>
      </Container>
  );
  }
}