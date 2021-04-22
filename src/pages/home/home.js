import React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Principal, Button } from './styles';

export default function Home() {
  return (
    <>
      <Wrapper>
        <img src="logo-max-doctor.png" alt="logo max doctor" width="400em" />
        <Principal>
          <h1>Avaliação de Luis Felipe</h1>
          <Link to="/maxdoctor">
            <Button>Acessar MaxDotor</Button>
          </Link>
        </Principal>
      </Wrapper>
    </>
  );
}
