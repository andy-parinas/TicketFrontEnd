import React, {Component} from 'react';
import {connect} from 'react-redux';

import TitledCard from '../../UI/TitledCard/TitledCard';
import {FireIcon, SpinnerIcon, WrenchIcon, FileIcon} from '../../UI/Icons/index';
import Widget from "../../UI/Widget/Widget";
import * as actions from '../../../actions/ticketActions';

class DashboardWidget extends Component {

    componentDidMount(){
        this.props.countTickets('user')
    }

    render(){
        
        const userOpenIncident = this.props.count.userOpenIncident;
        const userOpenRequest = this.props.count.userOpenRequest;
        const userOpenChange = this.props.count.userOpenChange;

        const total = userOpenIncident + userOpenRequest + userOpenChange;

        return(
            <TitledCard title="Your Ticket Summary" >
                <div className="widget-group">
                    <Widget text={userOpenIncident} subtext="Your Open Incidents" >
                        <FireIcon className="widget__icon"/>
                    </Widget>
                    <Widget text={userOpenRequest} subtext="Your Open Requests" >
                        <WrenchIcon className="widget__icon"/>
                    </Widget>
                    <Widget text={userOpenChange} subtext="Your Open Changes">
                        <SpinnerIcon className="widget__icon"/>
                    </Widget>
                    <Widget text={total} subtext="Your Total Tickets">
                        <FileIcon className="widget__icon"/>
                    </Widget>
                </div>
            </TitledCard>
        )
    }
}

function mapStateToProps(state){
    return {
        count: state.count
    }
}

export default connect(mapStateToProps, actions)(DashboardWidget);