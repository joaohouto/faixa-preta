import styled from 'styled-components';

export const ButtonElement = styled.button`
    box-sizing: border-box;
    width: auto;
    height: 40px;
    padding: 10px 30px;
    font-size: 14px;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;

    border: 0;
    background: #0071BC;
    color: #fafafa;
    text-transform: uppercase;
    font-weight: bold;

    cursor: pointer;
    outline: 0;

    :hover {
        opacity: 0.5;
    }
    transition: box-shadow 0.2s ease-in-out;

:focus {
    box-shadow: 0 0 0px 3px rgba(0,0,0,0.1);
}
`;

export const Spin = styled.div`
    width: 15px;
    height: 15px;
    opacity: 0.7;
    border: 2px solid #fff;
    border-top: 2px solid #999;
    border-radius: 50%;
    animation: 1s spin linear infinite;

    @keyframes spin {
        to { transform: rotate(360deg); }
    }
`;
