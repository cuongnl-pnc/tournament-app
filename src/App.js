import React from 'react';
import './App.css';
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import Main from "./main/Main";
import Tournament from "./tournament/Tournament";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route path="/t">
                    <Tournament/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
