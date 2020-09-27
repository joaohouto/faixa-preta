import styled from 'styled-components';

export const Row = styled.View`
    display: flex;
    margin-bottom: 22px;
    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: 18px;
    color: #111;
    font-weight: bold;
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

export const ActivityImage = styled.ImageBackground`
    width: 120px;
    height: 66px;
    background: #333;
    border-radius: 20px;
    margin-right: 24px
`;
