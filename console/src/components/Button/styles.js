import styled from 'styled-components';

export const ButtonElement = styled.button`
    box-sizing: border-box;
    height: 40px;
    padding-left: 25px;
    padding-right: 25px;
    font-size: 14px;
    border-radius: 20px;

    border: 0;
    background: #111;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;

    cursor: pointer;
    outline: 0;

    :hover {
        opacity: 0.5;
    }
`;
