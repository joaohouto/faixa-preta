import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements';

import HomeHeader from '../../components/HomeHeader'
import Badge from '../../components/Badge'

import { Row, PageTitleLight, SimpleTextLight } from '../../components/Global';
import { 
  Scroll, 
  LittleContainer, 
  ContainerLight, 
  LittleCard, 
  BigCard, 
  FifityFiveView, 
  HorizontalRow, 
  DarkButton, 
  DarkButtonText
} from './styles.js'

import kihonImg from '../../assets/images/kihon.png';
import kataImg from '../../assets/images/kata.png';
import kumiteImg from '../../assets/images/kumite.png';
import exameImg from '../../assets/images/exame.png';

const Explore = ({ navigation }) => {

  return (
    <>
      <HomeHeader />
      <Scroll>
        <ContainerLight>
          
          <Row style={{ justifyContent: 'space-between', flex: 1 }}>
            <Row style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
              <PageTitleLight>Explorar</PageTitleLight>
            </Row>

            <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
              <Icon name='more-vertical' type='feather' size={24} color="#999" />
            </TouchableOpacity>
          </Row>
          
          <SimpleTextLight>
            Procure por treinos já prontos ou monitore o seu tempo em um treino livre.
          </SimpleTextLight>

          <DarkButton onPress={() => navigation.navigate('FreeActivityRunning')}>
            <Icon name='plus-circle' type='feather' size={24} color="#999" />
          
            <DarkButtonText>
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