import React from 'react'
import Grid, { GridSpacing } from '@material-ui/core/Grid'

const Watch = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <iframe 
                width='100%' 
                height="315" 
                src="https://www.youtube.com/embed/8SZX4wmV1jU" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen />
            </Grid>
            <Grid item xs={12}>
                <iframe 
                width='100%' 
                height="315" 
                src="https://www.youtube.com/embed/8SZX4wmV1jU" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen />
            </Grid>
            <Grid item xs={12}>
                <iframe 
                width='100%' 
                height="315" 
                src="https://www.youtube.com/embed/8SZX4wmV1jU" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen />
            </Grid>
            <Grid item xs={12}>
                <iframe 
                width='100%' 
                height="315" 
                src="https://www.youtube.com/embed/8SZX4wmV1jU" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen />
            </Grid>
        </Grid>
    );
}

export default Watch
