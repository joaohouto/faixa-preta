import styled from 'styled-components';

export const Row = styled.TouchableOpacity`
    display: flex;
    flex-direction: row;
    margin-bottom: 22px;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #fff;
    font-weight: bold;
    max-width: 240px;
`;

export const Tags = styled.Text`
    font-size: 14px;
    color: #999;
    font-weight: bold;
`;

export const Section = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const MoveImage = styled.View`
    width: 66px;
    height: 66px;
    background: #333;
    border-radius: 20px;
    margin-right: 24px;
    padding: 10px;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;


export const Day = styled.Text`
    font-size: 24px;
    color: #ddd;
    font-weight: bold;
`;

export const Month = styled.Text`
    font-size: 9px;
    color: #ddd;
`;

export const Year = styled.Text`
    font-size: 9px;
    color: #ddd;
`;