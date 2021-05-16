import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    width: 100%;
    background: #222;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

export const LinkItem = styled.button`
    width: 100%;
    background: #222;
    padding: 15px 20px;
    color: #fff;
    font-weight: bold;
    border: 0;
    cursor: pointer;
    font-size: 16px;
    text-align: left;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;
