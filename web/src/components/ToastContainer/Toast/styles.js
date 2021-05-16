import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: auto;
  background: rgba(0,0,0,0.7);
  color: #f1f1f1;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
  padding: 20px 30px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  animation: push 0.4s ease-in-out;
  cursor: pointer;
  pointer-events: all;
  @keyframes push {
    from {
      transform: translateX(50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  > strong {
    font-size: 16px;
  }
  > p {
    font-size: 14px;
  }
  > div:first-child {
    min-width: 60px;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;