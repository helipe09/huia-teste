import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/home/home';
import MaxDoctor from './pages/maxdoctor/maxdoctor';
import Content from './components/content/content';

export default function Routes() {
  return (
    <BrowserRouter>
      <Content>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/maxdoctor" exact component={MaxDoctor} />
        </Switch>
      </Content>
    </BrowserRouter>
  );
}
