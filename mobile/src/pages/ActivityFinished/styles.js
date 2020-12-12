import styled from 'styled-components'
import { Dimensions } from 'react-native'

export const Container = styled.View`
    background: #222;
    padding: 30px;
    height: 130px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const ContainerDark = styled.View`
    background: #111;
    padding: 40px 30px;
    flex: 1;
`;

export const GoodJob = styled.Text`
    color: #fff;
    font-size: 24px;
    font-weight: bold;
`;

export const Details = styled.Text`
    color: #fff;
    font-size: 14px;
    margin-top: 10px;
`;

export const Square = styled.View`
    background: #333;
    height: 70px;
    width: 70px;
    border-radius: 20px;
`;

export const RowBox = styled.View`
    margin: 30px 0px;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export const RowBoxItem = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: ${(Dimensions.get('screen').width -45) /2 }px;
`;

export const RowTitle = styled.Text`
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    margin-left: 10px;
`;

export const BlackDot = styled.View`
    background: #333;
    height: 20px;
    width: 20px;
    border-radius: 10px;
`;

export const MoveName = styled.Text`
    color: #fff;
    font-size: 14px;
    font-weight: bold;
    margin: 0px 20px;
`;

export const MoveRepetitions = styled.Text`
    color: #999;
    font-size: 18px;
    font-weight: bold;
`;

export const FifityFiveView = styled.View`
    height: 55px;
`;