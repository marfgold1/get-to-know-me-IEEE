import React, { useState } from "react";
import { AppBar, Toolbar, Button, makeStyles, Grid, Hidden,
        ListItem, ListItemText, ListItemIcon, Drawer } from "@material-ui/core";
import { Menu } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import { mainRoutes } from "../../routes/routes";

const useStyles = makeStyles((theme) => ({
    root: {
        backdropFilter: 'blur(15px)'
    },
    menuButton: {
        alignSelf: 'center'
    },
    title: {
        flexGrow: 1,
    },
}));

export const Navbar = () => {
    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);
    const closeDrawer = () => {
        setDrawer(false);
    }
    const openDrawer = () => {
        setDrawer(true);
    }
    return (
            <AppBar color="transparent" elevation={0} className={classes.root}>
                <Toolbar className={classes.menuButton}>
                    <Hidden xsDown>
                        <Grid container justify="center" spacing={5}>
                            {mainRoutes.map((d) => (
                                <Grid item key={d.path}>
                                    <Button component={NavLink} to={d.path}>
                                        {d.label}
                                    </Button>
                                </Grid>
                            ))}
                        </Grid>
                    </Hidden>
                    <Hidden smUp>
                        <Button className={classes.menuButton} startIcon={<Menu />} edge="start" aria-label="menu" onClick={openDrawer}>
                            Menu
                        </Button>
                        <Drawer anchor="top" open={drawer} onClose={closeDrawer}>
                            {mainRoutes.map((d) => (
                                <ListItem button component={NavLink} to={d.path} key={d.path}>
                                    <ListItemIcon>{<d.icon />}</ListItemIcon>
                                    <ListItemText>{d.label}</ListItemText>
                                </ListItem>
                            ))}
                        </Drawer>
                    </Hidden>
                </Toolbar>
            </AppBar>
    )
}