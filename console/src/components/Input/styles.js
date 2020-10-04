import styled from 'styled-components';

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

export const InputLabel = styled.label`
    font-size: 14px;
    font-weight: bold;
    color: #999;
    margin-bottom: 8px;
`;

export const InputElement = styled.input`
    box-sizing: border-box;
    height: 40px;
    width: 350px;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 14px;
    border-radius: 20px;

    border: 2px solid #ddd;
    background: #fafafa;
    color: #111;

    outline: 0;
`;
