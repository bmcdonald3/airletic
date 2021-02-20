import React from 'react'
import { AppBar, Toolbar, IconButton, Typography, Button, makeStyles, Theme, createStyles, Menu, MenuItem } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Header = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
      setAnchorEl(event.currentTarget);
    };
    
    const handleClose = () => {
      setAnchorEl(null);
    };
    return (
        <div className={classes.root}>
            <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
                <MenuIcon />
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>Watch live</MenuItem>
                    <MenuItem onClick={handleClose}>News</MenuItem>
                </Menu>
                <Typography variant="h6" className={classes.title}>
                Airletic
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
