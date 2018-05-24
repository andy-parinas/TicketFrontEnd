import React, { Component } from 'react';

import TitledCard from '../../Components/TitledCard/TitledCard';

class DashboardPage extends Component {
    render() {
        return (
            <div className="page" >
                <div className="row">
                    <div className="col-2">
                        <TitledCard title="Dashboard" >
                            <h1> Sample Card </h1>
                        </TitledCard>
                    </div>
                    <div className="col-6">
                        <TitledCard title="Dashboard" >
                            <h1> Sample Card </h1>
                        </TitledCard>
                    </div>
                </div>
            </div>
        );
    }
}

export default DashboardPage;