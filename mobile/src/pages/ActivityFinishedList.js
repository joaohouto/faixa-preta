import React, { Component } from 'react';
import { View, Dimensions, AsyncStorage } from 'react-native';

import { BarChart } from 'react-native-chart-kit'

import { Header, Badge, FinishedActivityCard, FinishedActivityCardDate, FinishedActivityCardXp, FinishedActivityCardName, Container, HeaderText, HeaderLabel, Content, Label, MoveCard, MoveCardName, MoveCardRepetitions, MessageBox, MessageText } from '../styles';
import SmallCardLoader from '../components/SmallCardLoader';


export default class Activity extends Component {

  state = {
    oldActivities: [],
    weekPeriod: '',
    weekXpData: [],
    isLoading: true
  }

  componentDidMount() {
    this.preencherGraficos();
  }

  preencherGraficos = async () => {

    //Pega treinos antigos
    try {
      const oldActivities = await AsyncStorage.getItem('@atividadesFinalizadas');

      if (oldActivities !== null) {
        let act = JSON.parse(oldActivities);
        this.setState({ oldActivities: act });

        console.log(act.reverse());

      }

      this.setState({ isLoading: false });

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

    const { oldActivities } = this.state;

    return (
      <Container>
          <Header>
          
              <HeaderText>Histórico</HeaderText>
              <HeaderLabel>Treinos antigos</HeaderLabel>

          </Header>
          <Content style={{ minHeight: Dimensions.get('screen').height * 0.75 }}>    

            <Label>Esta semana</Label>
 
            <Badge>{this.state.weekPeriod}</Badge>
            
            <BarChart
              data={dataWeek}
              width={Dimensions.get('window').width -40 }
              height={200}
              chartConfig={chartConfig}
              fromZero={true}
              style={{ margin: 20, marginBottom: 10 }}
              yAxisSuffix="xp"

            />    

            <Label>Tudo</Label>

                { !this.state.isLoading ? oldActivities.length > 0 ? oldActivities.map(activity => (
                    <FinishedActivityCard key={Math.random()} >
                      <FinishedActivityCardDate>{activity.date}</FinishedActivityCardDate>
                      <FinishedActivityCardName>{activity.activityName}</FinishedActivityCardName>
                      <FinishedActivityCardXp>{activity.xpEarned}xp</FinishedActivityCardXp>
                    </FinishedActivityCard>
                )) : <MessageBox><MessageText>Não existem registros de treinos!</MessageText></MessageBox> 
                   : (
                     <View>
                       <SmallCardLoader />
                       <SmallCardLoader />
                       <SmallCardLoader />
                       <SmallCardLoader />
                       <SmallCardLoader />
                       <SmallCardLoader />
                     </View>
                   )}          
            
          </Content>
      </Container>
  );
  }
}