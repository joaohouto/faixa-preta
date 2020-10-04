import styled from 'styled-components';

export const InputBox = styled.form`
    display: flex;
    flex-direction: column;
    margin-bottom: 14px;
    position: relative; 
`;

export const IconContainer = styled.button`
    position: absolute;
    right: 0;
    background: transparent;
`;

export const Icon = styled.img`
    margin-right: 25px;
    margin-top: 12px;
    cursor: pointer;
`;

export const InputElement = styled.input`
    box-sizing: border-box;
    height: 40px;
    width: 100%;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 14px;
    border-radius: 20px;

    border: 2px solid #ddd;
    background: #fafafa;
    color: #222;

    outline: 0;
`;
