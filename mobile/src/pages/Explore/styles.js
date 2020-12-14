import styled from 'styled-components';

import { Dimensions } from 'react-native'

export const Scroll = styled.ScrollView`
    background: #111;
`;

export const ContainerDark = styled.View`
    flex: 1;
    background: #111;
    padding: 30px;
`;

export const LittleContainer = styled.View`
    flex: 1;
    background: #111;
    padding: 0 30px;
`;

export const ContainerLight = styled.View`
    background: #222;
    padding: 30px;
`;

export const LittleCard = styled.Image`
    height: 80px;
    width: 130px;
    background: #222;
    border-radius: 20px;
    margin: 10px 0px;
    margin-right: 20px;
`;

export const BigCard = styled.Image`
    height: ${(Dimensions.get('screen').width - 30) / 3.4}px;
    width: ${(Dimensions.get('screen').width - 60)}px;
    background: #222;
    border-radius: 20px;
    margin-bottom: 20px;
`;

export const FifityFiveView = styled.View`
    height: 55px;
`;

export const HorizontalRow = styled.ScrollView`
    
`;

export const DarkButton = styled.TouchableOpacity`
    width: 100%;
    height: 50px;
    background: #111;
    border-radius: 25px;
    justify-content: center;
    align-items: center;
    padding: 0 20px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;

export const DarkButtonText = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #999;
    margin: 0 20px;
`;