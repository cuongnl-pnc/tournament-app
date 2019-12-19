import React from "react";
import CssBaseline from "@material-ui/core/es/CssBaseline/CssBaseline";
import AppBar from "@material-ui/core/es/AppBar/AppBar";
import Toolbar from "@material-ui/core/es/Toolbar/Toolbar";
import Typography from "@material-ui/core/es/Typography/Typography";
import ArrowBack from '@material-ui/icons/ArrowBack';
import {Route, Switch} from "react-router-dom";
import makeStyles from "@material-ui/core/es/styles/makeStyles";
import TourInfoPage from "./info-page/InfoPage";
import TourTablesPage from "./tables-page/TablesPage";
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';

const useStyles = makeStyles(theme => ({
    tab: {
        flexGrow: 1,
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

export default function Tournament() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

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
                        Giai hoi cau
                    </Typography>
                </Toolbar>
            </AppBar>
            <Paper square className={classes.tab}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="fullWidth"
                    indicatorColor="secondary"
                    textColor="secondary"
                    aria-label="icon label tabs example"
                >
                    <Tab icon={<PhoneIcon />} label="RECENTS" />
                    <Tab icon={<FavoriteIcon />} label="FAVORITES" />
                    <Tab icon={<PersonPinIcon />} label="NEARBY" />
                </Tabs>
            </Paper>
            <main>


                <Switch>
                    <Route path="/info">
                        <TourInfoPage/>
                    </Route>
                    <Route path="/tables">
                        <TourTablesPage/>
                    </Route>
                    <Route path="/matchs">
                        <TourInfoPage/>
                    </Route>
                    <Route path="/teams">
                        <TourInfoPage/>
                    </Route>
                    <Route path="/scores">
                        <TourInfoPage/>
                    </Route>
                </Switch>
            </main>
        </React.Fragment>
    );
}