import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: #222;

    display: grid;
    grid-template-columns: 250px auto; 
    grid-template-rows: 60px auto;
`;

export const Main = styled.div`
    height: 100%;
    width: 100%;
    padding: 60px 80px;
    overflow-y: scroll;

    background: #fafafa;
`;

export const InputBox = styled.div`
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

    border: 0;
    background: #f1f1f1;
    color: #999;

    outline: 0;
`;
