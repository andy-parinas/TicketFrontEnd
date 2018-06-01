import React, { Component, Fragment } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Navbar from '../../UI/Navbar/Navbar';
import Header from '../../UI/Header/Header';
import DashboardPage from '../../Pages/Dashboard/DashboardPage';
import SideBoard from "./SideBoard";
import NavbarMenu from '../../UI/Navbar/NavbarMenu'
import IncidentsPage from "../../Pages/Incidents/IncidentsPage";
import IncidentDetailPage from "../../Pages/Incidents/IncidentDetailPage";


class Dashboard extends Component {
    render() {

        const menu = <NavbarMenu/>;

        return (
            <Fragment>
                <Navbar brandName="Ticket Manager" menu={menu} />
                <Header title="Dashboard" subtitle="manage your tickets" />
                <div className="container">
                    <div className="side-board">
                        <SideBoard/>
                    </div>
                    <div className="content-page">
                        <Switch>
                            <Route path="/dashboard" component={DashboardPage} />
                            <Route path="/incidents/show" component={IncidentDetailPage} />
                            <Route path="/incidents" component={IncidentsPage} />
                            <Redirect to="/dashboard" from= "/" />
                        </Switch>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Dashboard;