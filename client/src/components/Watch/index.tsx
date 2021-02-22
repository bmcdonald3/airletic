import React from 'react'
import Grid, { GridSpacing } from '@material-ui/core/Grid'

const Watch = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <video controls muted>
                    <source src="/video" type="video/mp4"></source>
                </video>
            </Grid>
            <Grid item xs={12}>
            <video controls muted>
                    <source src="/video" type="video/mp4"></source>
                </video>
            </Grid>
            <Grid item xs={12}>
                <video controls muted>
                    <source src="/video" type="video/mp4"></source>
                </video>
            </Grid>
            <Grid item xs={12}>
                <video controls muted>
                    <source src="/video" type="video/mp4"></source>
                </video>
            </Grid>
        </Grid>
    );
}

export default Watch
