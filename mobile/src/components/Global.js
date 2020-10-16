import styled from 'styled-components';


export const ContainerLight = styled.ScrollView`
    flex: 1;
    padding: 30px;
    background: #fff;
`;

export const ContainerDark = styled.ScrollView`
    flex: 1;
    padding: 30px;
    background: #111;
`;

export const PageTitleDark = styled.Text`
    font-size: 48px;
    font-weight: bold;
    color: #111;
`;

export const PageTitleLight = styled.Text`
    font-size: 48px;
    font-weight: bold;
    color: #fff;
`;

export const SimpleTextDark = styled.Text`
    font-size: 14px;
    color: #555;
    margin-bottom: 22px;
    margin-top: 22px;
`;

export const SimpleTextLight = styled.Text`
    font-size: 14px;
    color: #aaa;
    margin-bottom: 22px;
    margin-top: 22px;
`;

export const Bold = styled.Text`
    font-weight: bold;
`;

export const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

export const FifityFiveView = styled.View`
    height: 55px;
`;