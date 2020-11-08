import styled from 'styled-components'
import { Dimensions } from 'react-native'

export const Container = styled.ImageBackground`
    width: 100%;
    height: ${Dimensions.get('screen').height - 240}px;
    background: #222;
    padding: 30px;
    display: flex;
    justify-content: space-between;
`;

export const BottomContainer = styled.View`
    height: 200px;
    width: 100%;
    background: #111;
    padding: 30px;
    border-top-right-radius: 40px;
    border-top-left-radius: 40px;

    position: absolute;
    bottom: 0;
`;

export const Timer = styled.Text`
    font-size: 20px;
    color: #999;
    font-weight: bold;
`;

export const Do = styled.Text`
    font-size: 18px;
    color: #999;
    font-weight: bold;
    margin-bottom: 10px;
`;

export const MoveName = styled.Text`
    font-size: 34px;
    color: #fff;
    font-weight: bold;
`;

export const MoveRepetitions = styled.Text`
    font-size: 24px;
    color: #999;
    font-weight: bold;
`;

export const ButtonElement = styled.TouchableOpacity`
    height: 50px;
    display: flex;
    border-radius: 25px;
    justify-content: center;
    align-items: center;

    background: #111;
`;

export const Label = styled.Text`
    font-size: 18px;
    color: #333;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 20px;
`;

export const TenView = styled.View`
    width: 10px;
`;