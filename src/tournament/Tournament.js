import React from "react";
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import ArrowBack from '@material-ui/icons/ArrowBack';
import {Route, Switch, useRouteMatch} from "react-router-dom";
import makeStyles from "@material-ui/core/es/styles/makeStyles";
import TourInfoPage from "./info-page/InfoPage";
import TourTablesPage from "./tables-page/TablesPage";
import TourTeamsPage from "./teams-page/TeamsPage";

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
}));

export default function Tournament() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    let {path} = useRouteMatch();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <CssBaseline/>

            <AppBar position="relative" color="primary">
                <Toolbar>
                    <ArrowBack className={classes.icon}/>
                    <Typography variant="h6" color="inherit" noWrap>
                        Header
                    </Typography>
                </Toolbar>
            </AppBar>

            <main>
                <Switch>
                    <Route exact path={path}>
                        <TourInfoPage/>
                    </Route>
                    <Route path={`${path}/tables`}>
                        <TourTablesPage/>
                    </Route>
                    <Route path={`${path}/matches`}>
                        <TourInfoPage/>
                    </Route>
                    <Route path={`${path}/teams`}>
                        <TourTeamsPage/>
                    </Route>
                    <Route path={`${path}/scores`}>
                        <TourInfoPage/>
                    </Route>
                </Switch>
            </main>
        </React.Fragment>
    );
}