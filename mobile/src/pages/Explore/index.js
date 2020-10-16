import React, { useEffect } from 'react';
import { TouchableOpacity, Alert } from 'react-native';

import api  from "../../services/api";

import HomeHeader from '../../components/HomeHeader'
import Badge from '../../components/Badge'

import { ContainerDark, Row } from '../../components/Global'
import { Rectangle, Title, LittleCard, LittleCardText, BigCard, BigCardText, FifityFiveView } from './styles.js'

import kihonImg from '../../assets/images/kihon.png';
import kataImg from '../../assets/images/kata.png';
import kumiteImg from '../../assets/images/kumite.png';
import exameImg from '../../assets/images/exame.png';

const Explore = ({ navigation }) => {

  useEffect(() => {

    const verifyStatus = async () => {
      try {
        const response = await api.get('/');
  
        if(response.data.status !== "Online") {
          Alert.alert('Aviso importante!', 'Os servidores do Faixa Preta estão em manutenção no momento, logo as funcionalidades do app podem não funcionar como o esperado.');
        }
      } catch (e) {
        console.log(e);
      }
    }

    verifyStatus();
  
  }, []);

  

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

        <FifityFiveView />

      </ContainerDark>
    </>
  );
}

export default Explore;