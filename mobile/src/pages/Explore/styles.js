import styled from 'styled-components';

export const Rectangle = styled.View`
    height: 160px;
    width: 120px;
    background: #222;
    border-radius: 20px;
    margin-bottom: 20px;
`;

export const Title = styled.Text`
    font-size: 36px;
    font-weight: bold;
    color: #fff;
    width: 300px;
    position: absolute;
    top: 20px;
    left: 30px;
`;

export const LittleCard = styled.ImageBackground`
    height: 66px;
    width: 100px;
    background: #222;
    border-radius: 20px;
    margin: 10px 5px;
`;

export const LittleCardText = styled.Text`
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    position: absolute;
    bottom: 10px;
    left: 20px;
`;

export const BigCard = styled.ImageBackground`
    flex: 1;
    height: 100px;
    background: #222;
    border-radius: 20px;
    margin-bottom: 20px;
`;

export const BigCardText = styled.Text`
    font-weight: bold;
    font-size: 24px;
    width: 90px;
    color: #fff;
    position: absolute;
    bottom: 20px;
    left: 30px;
`;

export const FifityFiveView = styled.View`
    height: 55px;
`;