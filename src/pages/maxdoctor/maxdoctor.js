import React from 'react';

import { Wrapper } from './styles';
import Header from '../../components/header/header';
import Form from '../../components/form/form';
import Footer from '../../components/footer/footer';

export default function MaxDoctor() {
  return (
    <>
      <Wrapper>
        <Header />
        <Form />
        <Footer />
      </Wrapper>
    </>
  );
}
