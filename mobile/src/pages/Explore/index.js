import React, { useEffect } from 'react';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

import api  from "../../services/api";

import HomeHeader from '../../components/HomeHeader'
import Badge from '../../components/Badge'

import { Row } from '../../components/Global';
import { 
  Scroll, 
  LittleContainer, 
  ContainerLight, 
  LittleCard, 
  BigCard, 
  FifityFiveView, 
  HorizontalRow, 
  KarateImage, 
  Heading, 
  DarkButton, 
  DarkButtonText, 
  HeadingBold
} from './styles.js'

import kihonImg from '../../assets/images/kihon.png';
import kataImg from '../../assets/images/kata.png';
import kumiteImg from '../../assets/images/kumite.png';
import exameImg from '../../assets/images/exame.png';
import karateImg from '../../assets/images/karate.png';

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

          <KarateImage source={karateImg} />
          
          <Row style={{ justifyContent: 'space-between', flex: 1 }}>
            <Row style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <Heading>Boa noite,</Heading>
              <HeadingBold>João Henrique.</HeadingBold>
            </Row>

            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Icon name='circle' type='feather' size={24} color="#999" />
            </TouchableOpacity>
          </Row>

          <DarkButton>
            <Icon name='plus-circle' type='feather' size={24} color="#999" />
          
            <DarkButtonText 
              onPress={() => navigation.navigate('FreeActivityRunning')}
            >
              TREINO LIVRE
            </DarkButtonText>
          </DarkButton>
        </ContainerLight>
        
        <LittleContainer>
          <Badge dark={true}>Fundamental</Badge>
        </LittleContainer>

        <HorizontalRow horizontal={true}>
          <TouchableOpacity style={{ marginLeft: 30 }} onPress={() => navigation.navigate('ActivityList', { tag: 'Kihon' })}>
            <LittleCard source={kihonImg} />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('ActivityList', { tag: 'Kata' })}>
            <LittleCard source={kataImg} />
          </TouchableOpacity>

          <TouchableOpacity style={{ marginRight: 30 }} onPress={() => navigation.navigate('ActivityList', { tag: 'Kumite' })}>
            <LittleCard source={kumiteImg} />
          </TouchableOpacity>
        </HorizontalRow>

        <LittleContainer>
          <Badge dark={true}>Recomendado</Badge>

          <TouchableOpacity onPress={() => navigation.navigate('ActivityList', { tag: 'Exame' })}>
            <BigCard source={exameImg} />
          </TouchableOpacity>

          <FifityFiveView />
        </LittleContainer>

      </Scroll>
    </>
  );
}

export default Explore;