import styled from 'styled-components';

export const Row = styled.View`
    display: flex;
    flex-direction: row;
    margin-bottom: 22px;
`;

export const Section = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;

export const BlackDot = styled.View`
    background: #333;
    height: 20px;
    width: 20px;
    border-radius: 10px;
`;

export const MoveName = styled.Text`
    color: #fff;
    font-size: 13px;
    margin: 0px 20px;
    font-family: 'Roboto-Bold';
`;

export const MoveRepetitions = styled.Text`
    color: #999;
    font-size: 18px;
    font-family: 'Roboto-Bold';
`;
