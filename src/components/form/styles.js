import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 23rem;

  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  label {
    display: inline;
    border-bottom: 2px solid #9c83be;
    padding-bottom: 5px;
    padding-right: 0.5rem;
  }

  input {
    margin-bottom: 1rem;
    width: 20rem;
    height: 2rem;
    background-color: transparent;
    border-bottom: 2px solid #9c83be;
  }

  select {
    margin-bottom: 1rem;
    width: 21rem;
    height: 2rem;
    background-color: transparent;
    border-bottom: 2px solid #9c83be;
  }

  form button {
    margin-bottom: 3rem;
    background-color: #9c83be;
    color: #fff;
    height: 3rem;
    width: 23rem;
    border-radius: 0.2rem;
    text-align: center;
    h3 {
      font-weight: 400;
      letter-spacing: 0.3rem;
    }
    transition: opacity 0.3s;
    &:hover {
      opacity: 0.8;
    }
  }
  h4 {
    font-size: 1.2rem;
    font-weight: 400;
    color: #7e479b;
    text-align: center;
  }
`;

export const Descricao = styled.div`
  display: flex;
  align-self: center;
  text-align: center;
  width: 20rem;
  border: 1px solid black;
`;
