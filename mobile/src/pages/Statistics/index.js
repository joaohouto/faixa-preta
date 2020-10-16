import React, { Component } from 'react';
import { Dimensions, TouchableOpacity, AsyncStorage } from 'react-native';
import { Icon } from 'react-native-elements'

import { parseTime, gerarCalendario, pegarSemanaAtual } from '../../services/calendar';

import HomeHeader from '../../components/HomeHeader'
import Badge from '../../components/Badge'
import StatsRow from '../../components/StatsRow'
import BarChart from '../../components/BarChart'

import { ContainerDark, PageTitleLight, Row, SimpleTextLight, FifityFiveView } from '../../components/Global'

export default class Statistics extends Component {

  state = {
    oldActivities: [],
    weekPeriod: null,
    weekData: [],
    weekTime: null,
    monthTime: null,
    totalTime: null,
    loading: true
  }

  componentDidMount() {

    const { navigation } = this.props;

    this.focusListener = navigation.addListener('didFocus', () => {
      this.getOldActivities();
    });

    this.getOldActivities();
  }

  getOldActivities = async () => {
    try {
      const oldActivities = await AsyncStorage.getItem('@oldActivities');

      if (oldActivities !== null) {
        if(oldActivities == "1"){
          this.setState({ oldActivities: [] });

        } else {
          let act = JSON.parse(oldActivities);

          /// console.log(act)

          this.setState({ oldActivities: act });
        }
      }

      
    } catch(e){
      console.log(e);
    }

    this.fillChart();
    this.fillRow();
    
  }

  fillChart = async () => {

    let { oldActivities } = this.state;
    
    let week = pegarSemanaAtual();
    let weekData = [];

    week.forEach(data => {
      let timeOnDay = 0;

      oldActivities.forEach(actv => {
        if(data == actv.date){
          timeOnDay = timeOnDay + actv.time;
        }
      });

      weekData.push(timeOnDay);
      timeOnDay = 0;

    });

    this.setState({ 
      weekData, 
      weekPeriod: week[0].slice(0,5) + " até " + week[6].slice(0,5),
      loading: false 
    });

  }

  fillRow = async () => {

    const { weekData, oldActivities } = this.state;
    
    // semana
    let weekTime = weekData.reduce((a, b) => a + b);

    // mês
    let now = new Date();
    let currentMonth = now.getMonth()+1;
    let monthTime = 0;

    oldActivities.map(item => {
      const date = item.date.split('/');

      if(date[1] == currentMonth) {
        monthTime = monthTime + item.time;
      }
    });

    // total
    let totalTime = oldActivities.map(a => a.time);
    totalTime = totalTime.reduce((a, b) => a + b);

    
    this.setState({
      weekTime: parseTime(weekTime),
      monthTime: parseTime(monthTime),
      totalTime: parseTime(totalTime)
    });
  }

  render() {

    const { weekData, weekPeriod, loading } = this.state;
    const { weekTime, monthTime, totalTime } = this.state;

    return (
      <>
        <HomeHeader />
        <ContainerDark>
          <PageTitleLight>Desempenho</PageTitleLight>
  
          <Badge dark={true}>Geral</Badge>
          <StatsRow 
            week={weekTime} 
            month={monthTime} 
            total={totalTime} 
          />
  
          <Badge dark={true}>Detalhado</Badge>
          <SimpleTextLight>Semana atual: {weekPeriod}</SimpleTextLight>

          <BarChart 
            data={loading ? [0,0,0,0,0,0,0] : weekData} 
            style={{ width: Dimensions.get('window').width - 60 }} 
          />

            <TouchableOpacity onPress={() => this.props.navigation.navigate('History')}>
              <Row><Icon name='chevron-down' type='feather' size={38} color="#fff" /></Row>
            </TouchableOpacity>

            <FifityFiveView />
  
        </ContainerDark>
      </>
    );
  }
}
