import React from 'react';
import { Dimensions, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements'

import HomeHeader from '../../components/HomeHeader'
import Badge from '../../components/Badge'
import StatsRow from '../../components/StatsRow'
import BarChart from '../../components/BarChart'

import { ContainerDark, PageTitleLight, Row } from '../../components/Global'

const Statistics = ({ navigation }) => {
  return (
    <>
      <HomeHeader />
      <ContainerDark>
        <PageTitleLight>Desempenho</PageTitleLight>

        <Badge dark={true}>Geral</Badge>
        <StatsRow 
          week="1h33min" 
          month="10h50min" 
          total="999h50min" 
        />

        <Badge dark={true}>Detalhado</Badge>
        <BarChart 
          data={[0, 25, 50, 75, 100, 60, 30]} 
          style={{width: Dimensions.get('window').width - 60 }} 
        />

          <TouchableOpacity onPress={() => navigation.navigate('History')}>
            <Row><Icon name='chevron-down' type='feather' size={38} color="#fff" /></Row>
          </TouchableOpacity>

      </ContainerDark>
    </>
  );
}

export default Statistics;