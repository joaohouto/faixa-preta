import styled from 'styled-components'

export const Image = styled.img`
    height: 200px;
    margin: 200px;
    border-radius: 8px;
    background: #ddd;
`;

export const MoveContainer = styled.div`
    max-height: 80vh;
    margin: 10px 0;
    overflow-y: auto;
    padding-right: 10px;
    border-radius: 8px;
`;

export const Column = styled.div`
    width: 45%;
    
    @media (max-width: 800px) {
        width: 100%;
    }
`;
