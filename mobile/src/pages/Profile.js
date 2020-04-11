import React, { Component } from 'react';
import { View, Dimensions, Linking, AsyncStorage } from 'react-native';
import { Icon, Avatar } from 'react-native-elements'

import { Header, Container, Badge, BasicButton, ExperienceInfoButton, ExperienceLabelXp, BasicButtonText, HeaderText, HeaderLabel, Content, Label, Divider, ProfileCard, ProfileCardImage, ProfileCardTitle, ProfileCardSubtitle, EndButtonText, ExperienceBox, ExperienceLabel, ExperienceBar, ExperienceBarFill } from '../styles';
import { BarChart, LineChart } from 'react-native-chart-kit'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default class Profile extends Component {

  state = {
    userName: '',
    userDesc: '',
    oldActivities: [],
    userXp: 0,
    weekPeriod: '',
    weekXpData: []
  }

  componentDidMount() {
    this.preencherGraficos();
    this.getUserInfo();
  }

  preencherGraficos = async () => {

    //Pega treinos antigos
    try {
      const value = await AsyncStorage.getItem('@atividadesFinalizadas');

      if (value !== null) {
        this.setState({ oldActivities: JSON.parse(value) });
      }
    } catch (e) {
      console.log(e);
    }

    //Preenche o gráfico de barras
    let { oldActivities } = this.state;
    
    let semana = this.pegarSemanaAtual();
    let xpSemana = [];

    this.setState({ weekPeriod: semana[0].slice(0,5) + " - " + semana[6].slice(0,5) });

    semana.forEach(data => {
      let xpNesseDia = 0;

      oldActivities.forEach(actv => {
        if(data == actv.date){
          xpNesseDia = xpNesseDia + actv.xpEarned;
        }
      });

      xpSemana.push(xpNesseDia);
      xpNesseDia = 0;

    });

    this.setState({ weekXpData: xpSemana });

    console.log("Semana:");
    console.log(xpSemana);

  };

  getUserXp = async () => {

    try {
      const userXp = await AsyncStorage.getItem('@userXp');

      if (userXp !== null) {
          this.setState({ userXp });
      }
    } catch(e){
      console.log(e);
    }

  }


  gerarCalendario(anoAtual, mesAtual){

    mesAtual--;
  
    let semanasMes = [];
    let qtdDiasMeses = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  
    //Verifica se o ano é bissexto
    if(new Date(anoAtual, 1, 29).getMonth() == 1) {
        qtdDiasMeses[1] = 29;
    }
  
    let diaUm = new Date(anoAtual, mesAtual, 1);
    let diaUmSemana = diaUm.getDay(); //Dom, Seg, Ter, Qua, Qui, Sex ou Sáb - posição na semana do dia 01
  
    let semana = [];
  
    //Se o dia não começa no domingo, pega os outros dias da última semana do mes passado
    if(diaUmSemana > 0) {
        for(let i=diaUmSemana-1; i>=0; i--){
            let qtdDiasMesPassado = qtdDiasMeses[mesAtual-1];
            semana.push(qtdDiasMesPassado -i + '/' + this.tratarNumero(mesAtual) + "/" + anoAtual);
        }
    }
  
    //Preenche o mês todo
    for(let contagemDiasMes=1; contagemDiasMes<=qtdDiasMeses[mesAtual]; contagemDiasMes++){
        if(semana.length < 7){
            semana.push(this.tratarNumero(contagemDiasMes) + '/' + this.tratarNumero(mesAtual + 1) + "/" + anoAtual);
        } else {
            semanasMes.push(semana);
            semana = [];
  
            semana.push(this.tratarNumero(contagemDiasMes) + '/' + this.tratarNumero(mesAtual + 1) + "/" + anoAtual);
        }
    }
  
    //Preenche a última do mês com os dias do próximo mês
    for(let contagemDiasMes=1; contagemDiasMes<=semana.length+1; contagemDiasMes++){
        if(semana.length < 7){
            semana.push(this.tratarNumero(contagemDiasMes) + '/' + this.tratarNumero(mesAtual + 2) + "/" + anoAtual);
        } else {
            semanasMes.push(semana);
            semana = [];
        }
    }
  
    return semanasMes;
  }
  
  tratarNumero(num){
    num < 10 ? num = "0" + num : num = num;
    return num;        
  }
  
  pegarSemanaAtual(){
    let now = new Date();
  
    let dia = now.getDate();
    let mes = now.getMonth()+1;
    let ano = now.getFullYear();
  
    let dataAtual = this.tratarNumero(dia) +"/"+ this.tratarNumero(mes) +"/"+ ano;
    let calendario = this.gerarCalendario(ano, mes);
  
    let semanaAtual;
  
    calendario.forEach(semana => {
        for(let i=0; i<7; i++){
            if(semana[i] == dataAtual){
              semanaAtual = semana;
            }
        }
    });
  
    return semanaAtual;
  }

  getUserInfo = async () => {

    try {
      let user = await AsyncStorage.getItem('@user');

      console.log(user)

      user = JSON.parse(user);

      if (user !== null) {
          this.setState({ userName: user.name, userDesc: user.description });
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
              <HeaderLabel>Estatísticas de treinos</HeaderLabel>

          </Header>
          <Content style={{ minHeight: Dimensions.get('window').height - 250 }}>

            
            <ProfileCard>
              <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Avatar
                  rounded
                  size="large"
                  title={this.state.userName.slice(0, 1)}
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

              <TouchableOpacity onPress={() => this.props.navigation.navigate('ProfileEdit')} style={{ margin: 10 }}>
                <Icon name='pencil' type='material-community' size={20} color='#999' />
              </TouchableOpacity>
            
            </ProfileCard>


            <Label>Semana</Label>
 
            <Badge>{this.state.weekPeriod}</Badge>

            <BarChart
              data={dataWeek}
              width={Dimensions.get('window').width - 40 }
              height={200}
              chartConfig={chartConfig}
              style={{ margin: 20 }}
            />

            <BasicButton onPress={() => this.props.navigation.navigate('ActivityFinishedList')}>
              <BasicButtonText>Detalhes</BasicButtonText>
            </BasicButton>

            <Divider style={{ width: Dimensions.get('window').width - 40 }} />

            <Label>Sobre</Label>

            <BasicButton onPress={ () => Linking.openURL("https://faixa-preta.web.app/privacidade") }>
              <BasicButtonText>Política de Privacidade</BasicButtonText>
            </BasicButton>


          </Content>
      </Container>
  );
  }
}