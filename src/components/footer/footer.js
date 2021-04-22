import React from 'react';

import { IconContainer, ListContainer } from './styles';

export default function Footer() {
  return (
    <>
      <IconContainer>
        <ListContainer>
          <li>
            <div className="container-icon">
              <img src="cart.png" alt="" fill="red" />
              <h6>
                Facilidade
                <br /> de compra
              </h6>
            </div>
          </li>
          <li>
            <div className="container-icon">
              <img src="boxes.png" alt="" fill="red" />
              <h6>Quantidade não limitada</h6>
            </div>
          </li>
          <li>
            <div className="container-icon">
              <img src="comodidade.png" alt="" fill="red" />
              <h6>Frete Grátis</h6>
            </div>
          </li>
          <li>
            <div className="container-icon">
              <img src="frete.png" alt="" fill="red" />
              <h6>Agilidade</h6>
            </div>
          </li>
          <li>
            <div className="container-icon">
              <img src="moto.png" alt="" fill="red" />
              <h6>Comodidade</h6>
            </div>
          </li>
        </ListContainer>
      </IconContainer>
    </>
  );
}
