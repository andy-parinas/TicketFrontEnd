import React, { Component } from 'react';
import {connect} from 'react-redux';

import TitledCard from '../../UI/TitledCard/TitledCard';
import DashboardWidget from "./DashboardWidget";
import DashboardTable from "./DashboardTable";
import * as actions from '../../../actions/ticketActions';

class DashboardPage extends Component {


    constructor(props){
        super(props);
        this.state = {

        }

        this.handleTableClickEvent = this.handleTableClickEvent.bind(this);
    }


    handleTableClickEvent(id){
        this.props.history.push(`/incidents/${id}`)
    }

    render() {
       
        return (
            <div className="page" >
                <DashboardWidget/>
                <TitledCard color="secondary" title="Latest Open Tickets" >
                    <DashboardTable onRowClick={this.handleTableClickEvent} />
                </TitledCard>
            </div>
        );
    }
}


export default connect(null, actions)(DashboardPage);