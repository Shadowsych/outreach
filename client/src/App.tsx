import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/">
        <div>Testing</div>
      </Route>
    </Switch>
  </BrowserRouter>
);

export default App;
