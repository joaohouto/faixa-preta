import styled from 'styled-components'

export const Container = styled.ImageBackground`
    flex: 1;
    background: #222;
    padding: 30px;

    display: flex;
    justify-content: space-between;
`;

export const BottomContainer = styled.View`
    height: 200px;
    background: #111;
    padding: 30px;
`;

export const Timer = styled.Text`
    font-size: 24px;
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
    font-size: 36px;
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

export const TenView = styled.View`
    width: 10px;
`;