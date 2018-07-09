import React, {Component} from 'react';
import {connect} from 'react-redux';

import {FireIcon, SpinnerIcon, WrenchIcon, FileIcon} from '../../UI/Icons/index';
import ListGroup from "../../UI/ListComponent/ListGroup";
import NavListItem from "../../UI/ListComponent/NavListItems";
import TitledCard from '../../UI/TitledCard/TitledCard';
import * as actions from '../../../actions/ticketActions';

class SideBoard extends Component {


    componentDidMount(){
        this.props.countTickets('all');
    }

   
    render(){

        return(
            <TitledCard title="Dashboard" >
                <ListGroup>
                    <NavListItem to="/incidents/all" >
                        <div className="item-group">
                            <FireIcon className="list-icon"/>
                            <span className="item-group__text" style={{flex: 1}} >Incidents</span>
                            <span className="badge badge--default">{this.props.count.incident} </span>
                        </div>
                    </NavListItem>
                    <NavListItem to="/requests">
                        <div className="item-group">
                            <WrenchIcon className="list-icon"/>
                            <span className="item-group__text" style={{flex: 1}} >Requests</span>
                            <span className="badge badge--default">{this.props.count.request}</span>
                        </div>
                    </NavListItem>
                    <NavListItem to="/changes">
                        <div className="item-group">
                            <SpinnerIcon className="list-icon"/>
                            <span className="item-group__text" style={{flex: 1}} >Changes</span>
                            <span className="badge badge--default"> {this.props.count.change}</span>
                        </div>
                    </NavListItem>
                </ListGroup>
            </TitledCard>
        )
    }

}


function mapStateToProps(state){

    return {
        count: state.count
    }
}

export default connect(mapStateToProps, actions)(SideBoard);