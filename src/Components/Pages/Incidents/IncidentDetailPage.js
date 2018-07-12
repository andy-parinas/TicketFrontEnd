import React, {Component} from 'react';
import {connect} from 'react-redux';

import TitledCard from "../../UI/TitledCard/TitledCard";
import IncidentForm from "./IncidentForm";
import * as actions from '../../../actions/ticketActions';

class IncidentDetailPage extends Component{

    componentDidMount(){
        const id = this.props.match.params.id;
        this.props.selectTicket(id)
    }


    render(){
        console.log(this.props.users)
        return(
            <div className="page">
                <TitledCard color="primary" title="Incident Ticket Details" >
                    <IncidentForm   ticket={this.props.ticket} 
                                    properties={this.props.properties} 
                                    users={this.props.users} />
                </TitledCard>
            </div>
        )
    }

}

function mapStateToProps(state){
    return {
        ticket: state.ticket.selected,
        properties: state.ticket.properties,
        users: state.user.list
    }
}

export default connect(mapStateToProps, actions)(IncidentDetailPage);