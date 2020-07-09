import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom'
import Table from './components/Table/Table'
import Card from './components/Card/Card'


function App() {
  return (
    <Switch>
      <Redirect exact from='/' to='/catalog' />
      <Route exact path='/catalog' component={Table} />
      <Route path='/catalog/:id' component={Card} />
    </Switch>
  );
}

export default App;
