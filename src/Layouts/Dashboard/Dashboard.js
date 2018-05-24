import React, { Component, Fragment } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import DashboardPage from '../../Pages/Dashboard/DashboardPage';

class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <Navbar brandName="Ticket Manager" />
                <Header title="Dashboard" subtitle="manage your tickets" />
                <Switch>
                    <Route path="/dashboard" component={DashboardPage} />
                    <Redirect to="/dashboard" from= "/" />
                </Switch>
            </Fragment>
        );
    }
}

export default Dashboard;