import React, { Component, Fragment } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Navbar from '../../UI/Navbar/Navbar';
import Header from '../../UI/Header/Header';
import DashboardPage from '../../Pages/Dashboard/DashboardPage';
import SideBoard from "./SideBoard";
import NavbarMenu from '../../UI/Navbar/NavbarMenu'
import IncidentListPage from "../../Pages/Incidents/IncidentListPage";
import IncidentDetailPage from "../../Pages/Incidents/IncidentDetailPage";
import IncidentManagementPage from "../../Pages/Incidents/IncidentManagementPage";
import RequestManagementPage from "../../Pages/Requests/RequestManagementPage";
import ChangeManagementPage from "../../Pages/Changes/ChangeManagementPage";


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
                            <Route path="/incidents/all" component={IncidentListPage} />
                            <Route path="/incidents/:id" component={IncidentDetailPage} />
                            <Route path="/incidents" component={IncidentManagementPage} />
                            <Route path="/requestmanagement" component={RequestManagementPage} />
                            <Route path="/changemanagement" component={ChangeManagementPage} />
                            <Redirect to="/dashboard" from= "/" />
                        </Switch>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Dashboard;