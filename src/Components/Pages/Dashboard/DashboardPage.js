import React, { Component } from 'react';

import TitledCard from '../../UI/TitledCard/TitledCard';
import DashboardWidget from "./DashboardWidget";
import DashboardTable from "./DashboardTable";

class DashboardPage extends Component {
    render() {
        return (
            <div className="page" >
                <DashboardWidget/>
                <TitledCard color="secondary" title="Latest Open Tickets" >
                    <DashboardTable/>
                </TitledCard>
            </div>
        );
    }
}

export default DashboardPage;