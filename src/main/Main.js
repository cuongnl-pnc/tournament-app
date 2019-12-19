import React from "react";
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import Menu from '@material-ui/icons/Menu';
import {Route, Switch} from "react-router-dom";
import HomePage from "./home-page/HomePage";
import makeStyles from "@material-ui/core/es/styles/makeStyles";

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

export default function Main() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline/>

            <AppBar position="relative">
                <Toolbar>
                    <Menu className={classes.icon}/>
                    <Typography variant="h6" color="inherit" noWrap>
                        Tournament
                    </Typography>
                </Toolbar>
            </AppBar>

            <main>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </main>
        </React.Fragment>
    );
}