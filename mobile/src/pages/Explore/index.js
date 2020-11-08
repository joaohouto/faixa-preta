import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

import api  from "../../services/api";

import HomeHeader from '../../components/HomeHeader'
import Badge from '../../components/Badge'

import { Row } from '../../components/Global';
import { Scroll, ContainerDark, ContainerLight, LittleCard, BigCard, FifityFiveView, HorizontalRow, Avatar, Name } from './styles.js'

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
      <Scroll>
        <ContainerLight>
          <Row style={{ justifyContent: 'flex-start' }}>
            <Avatar source={{ uri: "https://avatars0.githubusercontent.com/u/31421876?s=460&u=39d86b3e443bf15e4a1d5a554c0426ae80dc9486&v=4" }} />
          
            <Row style={{ justifyContent: 'space-between', flex: 1 }}>
              <Name>Olá,{'\n'}João Couto</Name>

              <TouchableOpacity>
                <Icon name='more-vertical' type='feather' size={24} color="#fff" />
              </TouchableOpacity>
            </Row>
          </Row>
        </ContainerLight>
        
        <ContainerDark>
          <Badge dark={true}>Fundamental</Badge>

          <HorizontalRow horizontal={true}>
            <TouchableOpacity onPress={() => navigation.navigate('ActivityList', { tag: 'Kihon' })}>
              <LittleCard source={kihonImg} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ActivityList', { tag: 'Kata' })}>
              <LittleCard source={kataImg} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('ActivityList', { tag: 'Kumite' })}>
              <LittleCard source={kumiteImg} />
            </TouchableOpacity>
          </HorizontalRow>

          <Badge dark={true}>Recomendado</Badge>

          <TouchableOpacity onPress={() => navigation.navigate('ActivityList', { tag: 'Exame' })}>
            <BigCard source={exameImg} />
          </TouchableOpacity>

          <FifityFiveView />
        </ContainerDark>

      </Scroll>
    </>
  );
}

export default Explore;