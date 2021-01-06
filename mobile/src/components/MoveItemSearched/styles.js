import styled from 'styled-components';

export const Row = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    margin-bottom: 22px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #fff;
    max-width: 240px;
    font-family: 'Roboto-Bold';
`;

export const Tags = styled.Text`
    font-size: 14px;
    color: #999;
    font-family: 'Roboto-Bold';
`;

export const Section = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const MoveImage = styled.ImageBackground`
    width: 66px;
    height: 66px;
    background: #333;
    border-radius: 20px;
    margin-right: 24px
`;

