import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: #222;

    display: grid;
    grid-template-columns: 250px auto; 
    grid-template-rows: 60px auto;
`;

export const Logo = styled.img`
    height: 20px;
    margin: 20px;
`;

export const Header = styled.div`
    height: 100%;
    width: 100%;
    background: #f1f1f1;

    grid-column-start: 1;
    grid-column-end: 3;
`;

export const LeftBar = styled.div`
    height: 100%;
    width: 100%;
    background: #222;

    display: flex;
    flex-direction: column;
`;

export const Main = styled.div`
    height: 100%;
    width: 100%;
    padding: 60px 80px;
    overflow-y: scroll;

    background: #fff;
`;

export const LinkItem = styled.div`
    width: 100%;
    background: #222;
    padding: 15px 20px;
    color: #fff;
    font-weight: bold;
`;

export const Dot = styled.button`
    height: 30px;
    width: 30px;
    border-radius: 15px;
    background: #ddd;
    margin: 20px 10px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Form = styled.div`
    width: 50%;
`;

export const ActivityImage = styled.img`
    height: 150px;
    min-height: 150px;
    min-width: 350px;
    border-radius: 20px;
    background: #f1f1f1;
`;

export const MoveItemTitle = styled.p`
    font-weight: bold;
    font-size: 14px;
    margin: 20px 10px;
    cursor: pointer;

    :hover {
        opacity: 0.5;
    }
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    width: 100%;
    padding: 25px;
    border-radius: 20px;

    background: #f1f1f1;
    color: #111;

    outline: 0;
`;

export const InputLabel = styled.label`
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #999;
`;

export const Tags = styled.span`
    font-size: 14px;
    color: #999;
    font-weight: bold;
    margin-right: 10px;
`;