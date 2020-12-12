import styled from 'styled-components'
import { Dimensions } from 'react-native'

export const Details = styled.Text`
    font-size: 14px;
    color: #555;
    margin-bottom: 30px;
`;

export const Label = styled.Text`
    font-size: 14px;
    color: #111;
    font-weight: bold;
    text-transform: uppercase;
    margin-bottom: 30px;
    margin-top: 10px;
`;

export const Category = styled.Text`
    font-size: 14px;
    color: #555;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 30px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #111;
    font-weight: bold;
    margin-bottom: 20px;
`;

export const ImageBox = styled.ImageBackground`
    height: ${Dimensions.get('screen').width - 60}px;
    width: ${Dimensions.get('screen').width - 60}px;
    background: #111;
    border-radius: 20px;
`;

export const FifityFiveView = styled.View`
    height: 55px;
`;