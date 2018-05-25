import React, { Component, Fragment } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Navbar from '../Navbar/Navbar';
import Header from '../Header/Header';
import DashboardPage from '../../Pages/Dashboard/DashboardPage';
import SideBoard from "./SideBoard";


class Dashboard extends Component {
    render() {
        return (
            <Fragment>
                <Navbar brandName="Ticket Manager" />
                <Header title="Dashboard" subtitle="manage your tickets" />
                <div className="row">
                    <div className="col-2">
                        <SideBoard/>
                    </div>
                    <div className="col-6">
                        <Switch>
                            <Route path="/dashboard" component={DashboardPage} />
                            <Redirect to="/dashboard" from= "/" />
                        </Switch>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Dashboard;