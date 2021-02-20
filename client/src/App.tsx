import React from 'react';
import Header from './components/Header'
import Watch from './components/Watch'
import Grid, { GridSpacing } from '@material-ui/core/Grid';
import Bites from './components/Bites';

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
      
      <Grid item sm={3} />
      <Grid item xs={12} sm={6}>
        <Watch />
      </Grid>
      <Grid item sm={3} />
    </Grid>
    </>
  );
}

export default App;
