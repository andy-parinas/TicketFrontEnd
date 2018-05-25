import React, {Component} from 'react';

import TitledCard from '../../Components/TitledCard/TitledCard';
import {FireIcon, SpinnerIcon, WrenchIcon, FileIcon} from '../../Components/Icons';
import Widget from "../../Components/Widget/Widget";

class DashboardWidget extends Component {


    render(){

        return(
            <TitledCard title="Your Ticket Summary" >
                <div className="widget-group">
                    <Widget text="25" subtext="Your Open Incidents" >
                        <FireIcon className="widget__icon"/>
                    </Widget>
                    <Widget text="15" subtext="Your Open Requests" >
                        <WrenchIcon className="widget__icon"/>
                    </Widget>
                    <Widget text="8" subtext="Your Open Changes">
                        <SpinnerIcon className="widget__icon"/>
                    </Widget>
                    <Widget text="48" subtext="Your Total Tickets">
                        <FileIcon className="widget__icon"/>
                    </Widget>
                </div>
            </TitledCard>
        )
    }
}

export default DashboardWidget;