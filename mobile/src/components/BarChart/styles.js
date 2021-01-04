import styled from 'styled-components';

export const Container = styled.View`
    height: 260px;
    display: flex;
    flex-direction: column;
    margin: 0 30px;
`;

export const FirstRow = styled.View`
    height: 80%;
    width: 100%;
    display: flex;
    flex-direction: row;
`;

export const SecondRow = styled.View`
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: row;
`;

export const SectionLeft = styled.View`
    width: 15%;
`;

export const SectionRight = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-around;
    position: relative;
    width: 85%;
`;

export const Section = styled.View`
    height: 25%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const LeftLabel = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #999;
    margin-top: 10px;
`;

export const Overlay = styled.View`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`;

export const Line = styled.View`
    height: 25%;
    width: 100%;
`;

export const Column = styled.View`
    width: 8%;
    background: #999;
    border-radius: 4px;
`;

export const SectionBlank = styled.View`
    width: 15%;
    height: 100%;
`;

export const SectionBottom = styled.View`
    display: flex;  
    flex-direction: row;
    justify-content: space-around;
    height: 100%;
    width: 85%;
`;

export const BottomLabel = styled.Text`
    font-size: 12px;
    font-weight: bold;
    margin-top: 10px;
    color: #999;
`;
