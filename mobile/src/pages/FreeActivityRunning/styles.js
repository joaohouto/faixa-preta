import styled from 'styled-components'

export const Container = styled.ImageBackground`
    flex: 1;
    background: #222;
    padding: 30px;
    display: flex;
    justify-content: flex-end;
`;

export const ControlsContainer = styled.View`
    width: 100%;
    background: #111;
    padding: 20px 30px;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;

    position: absolute;
    bottom: 0;
    z-index: 2;
`;

export const Timer = styled.Text`
    font-size: 36px;
    color: #999;
    margin-bottom: 60px;
    font-family: 'Roboto-Bold';
`;

export const Do = styled.Text`
    font-size: 18px;
    color: #999;
    margin-bottom: 10px;
    font-family: 'Roboto-Bold';
`;

export const MoveName = styled.Text`
    font-size: 34px;
    color: #fff;
    font-family: 'Roboto-Bold';
`;

export const MoveRepetitions = styled.Text`
    font-size: 24px;
    color: #999;
    font-family: 'Roboto-Bold';
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
    font-size: 14px;
    color: #444;
    text-transform: uppercase;
    margin-bottom: 10px;
    font-family: 'Roboto-Bold';
`;


export const TenView = styled.View`
    width: 10px;
`;