import React from 'react';
import {Switch, Route} from 'react-router-dom';
import '../scss/app.scss';

import Dashboard from './Layouts/Dashboard/Dashboard';
import Login from "./Layouts/Login/Login";

const App = () => {

    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Dashboard} />
        </Switch>
    )

};

export default App;
