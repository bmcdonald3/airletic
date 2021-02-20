import { Grid } from '@material-ui/core'
import React from 'react'
import Bite from '../Bite'

const Bites = () => {
    return (
        <>
        <Grid container spacing ={1}>
            <Grid item xs={3}>
                <Bite />
            </Grid>
            <Grid item xs={3}>
                <Bite />
            </Grid>
            <Grid item xs={3}>
                <Bite />
            </Grid>
            <Grid item xs={3}>
                <Bite />
            </Grid>
        </Grid>
        </>
    )
}

export default Bites
