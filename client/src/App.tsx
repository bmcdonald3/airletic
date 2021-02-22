//@ts-nocheck
import React from 'react';
import Header from './components/Header'
import Watch from './components/Watch'
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Bites from './components/Bites';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Home from './components/Home';
import Player from './components/Player';

function App() {
  return (
    <>
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Header />
      </Grid>

      <Grid item xs={12}>
        <Bites />
      </Grid>
      
      {/*<Grid item sm={3} />
      <Grid item xs={12} sm={6}>
        <Watch />
      </Grid>
  <Grid item sm={3} />*/}
    </Grid>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/player/:id" component={Player}></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
