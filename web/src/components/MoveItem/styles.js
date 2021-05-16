import styled from 'styled-components';

export const Row = styled.div`
    width: 100%;
    margin-bottom: 22px;
    
    display: grid;
    grid-template-columns: 100px auto 20px;
`;

export const Title = styled.span`
    font-size: 18px;
    color: #111;
    font-weight: bold;
`;

export const Tags = styled.span`
    font-size: 14px;
    color: #999;
    font-weight: bold;
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const Options = styled.div`
    width: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

export const Button = styled.button`
    width: 20px;
    height: 20px;
    background: #ddd;
    border-radius: 10px;
    border: 0;
    color: #111;
    cursor: pointer;
    margin: 5px 0px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ActivityImage = styled.div`
    width: 80px;
    height: 80px;
    background: #f1f1f1;
    border-radius: 20px;
    margin-right: 24px
`;

