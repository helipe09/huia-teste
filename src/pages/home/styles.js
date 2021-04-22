import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Principal = styled.div`
  margin-top: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: #000;
  }
`;

export const Button = styled.button`
  background-color: #9c83be;
  margin-top: 1.5rem;
  border-radius: 1rem;
  padding: 1.1rem;
  transition: opacity 0.3s;
  font-size: 1.3rem;
  &:hover {
    opacity: 0.8;
  }
`;
