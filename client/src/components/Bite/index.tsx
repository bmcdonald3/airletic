import { Button, Card, CardActions, CardContent, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});

const Bite = () => {
    const classes = useStyles();
    return (
        <>
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Bite
                </Typography>
                <Typography variant="h5" component="h2">
                    Big news in sports
                </Typography>
                <Typography variant="body2" component="p">
                    <br />
                    {'"Matthew Stafford Traded to Rams"'}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
        </>
    )
}

export default Bite