import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Table from './components/Table/Table'

function App() {
  return (
    <Switch>
      <Route exact path="/" component={Table} />
    </Switch>
  );
}

export default App;
