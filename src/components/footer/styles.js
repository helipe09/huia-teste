import styled from 'styled-components';

export const IconContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 23rem;
`;

export const ListContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  flex-flow: wrap row;

  width: 23rem;
  margin: auto;
  height: 23rem;

  .container-icon {
    display: inline-block;
    width: 100%;
    height: 50px;
    text-align: center;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    flex-direction: column;
    h6 {
      color: #6b6a6b;
    }
  }

  list-style: none;
  padding: 0;
  li:nth-child(1) {
    width: 45%;
  }
  li:nth-child(2) {
    width: 45%;
  }

  img {
    width: 80px;
  }
  h6 {
    text-transform: uppercase;
  }
`;
