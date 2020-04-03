import React, { Component } from 'react';
import { Text, View, Dimensions, Linking, AsyncStorage } from 'react-native';
import { Icon, Avatar } from 'react-native-elements'

import { Header, Container, Badge, BasicButton, ExperienceInfoButton, ExperienceLabelXp, BasicButtonText, HeaderText, HeaderLabel, Content, Label, Divider, ProfileCard, ProfileCardImage, ProfileCardTitle, ProfileCardSubtitle, EndButtonText, ExperienceBox, ExperienceLabel, ExperienceBar, ExperienceBarFill } from '../styles';
import { BarChart } from 'react-native-chart-kit'

export default class Profile extends Component {

  state = {
    
  }

  componentDidMount() {
    this.getLocalData();
  }

  getLocalData = async () => {

    try {
      const value = await AsyncStorage.getItem('@treinoFinalizado');

      if (value !== null) {
        console.log(value);
      }
    } catch (e) {
      console.log(e);
    }
  };

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
          data: [10, 20, 30, 40, 50, 60, 70]
        }
      ]
    };

    return (
      <Container>
          <Header>
          
              <HeaderText>Perfil</HeaderText>
              <HeaderLabel>Histórico de treinos</HeaderLabel>

          </Header>
          <Content style={{ minHeight: Dimensions.get('window').height - 250 }}>
            
            <ProfileCard>
            <Avatar
              rounded
              size="large"
              title="J"
              activeOpacity={0.7}
              source={{ uri: 'no' }}
            />

              <View style={{ marginLeft: 20 }}>
                <ProfileCardTitle>João Henrique</ProfileCardTitle>

                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <Icon name='circle' type='material-community' size={15} color='#999' />
                  <ProfileCardSubtitle>Faixa Marrom</ProfileCardSubtitle>
                </View>
              </View>
            </ProfileCard>

            <ExperienceBox>

              <ExperienceInfoButton>
                <Icon name='information' type='material-community' size={20} color='#999' />
              </ExperienceInfoButton>

              <ExperienceLabel>Nível 10</ExperienceLabel>
              <ExperienceLabelXp>300.000xp - 400.000xp</ExperienceLabelXp>

              <ExperienceBar>
                <ExperienceBarFill style={{ width: 100 }} />
              </ExperienceBar>
            </ExperienceBox>

            <Divider style={{ width: Dimensions.get('window').width - 40 }} />


            <Label>Semana</Label>

            <Badge>29/03 - 04/04</Badge>

            <BarChart
              data={dataWeek}
              width={Dimensions.get('window').width - 40 }
              height={200}
              chartConfig={chartConfig}
              style={{ margin: 20 }}
            />

            <BasicButton onPress={() => this.props.navigation.navigate('ActivityOldFinished')}>
              <BasicButtonText>Ver treinos antigos</BasicButtonText>
            </BasicButton>

            <Divider style={{ width: Dimensions.get('window').width - 40 }} />

            <BasicButton onPress={ () => Linking.openURL("https://faixa-preta.web.app/privacidade") } style={{ opacity: 0.5 }}>
              <BasicButtonText>Política de Privacidade</BasicButtonText>
            </BasicButton>


          </Content>
      </Container>
  );
  }
}