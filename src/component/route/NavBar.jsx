import React from "react";
import { Button } from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import {Typography} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/core/Menu';

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" color="ingerit" aria-label="Menu">
                        <MenuIcon/>
                    </IconButton>
                    <Typography variant="h6">
                        WHO.M.I.
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}

const style = {
    flexGrow: 1
}

export default NavBar;
