import React from 'react';
import { TouchableOpacity } from 'react-native';

import HomeHeader from '../../components/HomeHeader'
import Badge from '../../components/Badge'

import { ContainerDark, Row } from '../../components/Global'
import { Rectangle, Title, LittleCard, LittleCardText, BigCard, BigCardText } from './styles.js'

import kihonImg from '../../assets/images/kihon.png';
import kataImg from '../../assets/images/kata.png';
import kumiteImg from '../../assets/images/kumite.png';
import exameImg from '../../assets/images/exame.png';

const Explore = ({ navigation }) => {
  return (
    <>
      <HomeHeader />
      <ContainerDark>

        <Rectangle>
          <Title>
            aprenda,{'\n'}
            compartilhe,{'\n'}
            aperfeiçoe-se.
          </Title>
        </Rectangle>
        
        <Badge dark={true}>Fundamental</Badge>

        <Row style={{ justifyContent: 'space-between' }}>
          <TouchableOpacity onPress={() => navigation.navigate('ActivityList', { tag: 'Kihon' })}>
            <LittleCard source={kihonImg}><LittleCardText>Kihon</LittleCardText></LittleCard>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ActivityList', { tag: 'Kata' })}>
            <LittleCard source={kataImg}><LittleCardText>Kata</LittleCardText></LittleCard>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ActivityList', { tag: 'Kumite' })}>
            <LittleCard source={kumiteImg}><LittleCardText>Kumite</LittleCardText></LittleCard>
          </TouchableOpacity>
        </Row>

        <Badge dark={true}>Recomendado</Badge>

        <TouchableOpacity onPress={() => navigation.navigate('ActivityList', { tag: 'Exame' })}>
          <BigCard source={exameImg}>
            <BigCardText>Exame de Faixa</BigCardText>
          </BigCard>
        </TouchableOpacity>

      </ContainerDark>
    </>
  );
}

export default Explore;