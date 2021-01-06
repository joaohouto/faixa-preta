import styled from 'styled-components';

export const InputBox = styled.View`
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;
    position: relative; 
`;

export const IconContainer = styled.TouchableOpacity`
    position: absolute;
    right: -15px;
    top: -12px;
    margin-right: 25px;
    margin-top: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 60px;

`;

export const InputElement = styled.TextInput`
    height: 40px;
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 14px;
    border-radius: 20px;
    font-family: 'Roboto-Regular'

    border: 0;
    background: #f1f1f1;
    color: #999;

`;
