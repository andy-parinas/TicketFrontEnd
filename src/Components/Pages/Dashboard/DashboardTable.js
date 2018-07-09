import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import * as actions from '../../../actions/ticketActions';
import SimpleTable from "../../UI/Table/SimpleTable";
import {tickets} from "../../../DummyData/tickets";
import Paginate from "../../UI/Pagination/Paginate";
import ActionTable from '../../UI/Table/ActionTable';
import {SORT, INCIDENT} from '../../Helper';

const tableColumns = [
    { header: "Ticket Number", name:"number" },
    { header: "Client", name:"clientName" },
    { header: "Description", name:"description" },
    { header: "Created At", name:"createdAt" }
];

class DashboardTable extends Component{


    constructor(props){
        super(props);
        this.state = {
            sort: {
                column: INCIDENT.createdAt,
                direction: SORT.descending
            }
        }

    }

    componentDidMount(){
        this.props.listTickets();
    }

    


    render(){
        const currentPage = this.props.pagination.currentPage;
        const totalPage = this.props.pagination.totalPages;

        return(
            <Fragment>
                <ActionTable columns={tableColumns} data={this.props.tickets} sort={this.state.sort} />
                <Paginate   currentPage={currentPage} 
                            totalPage={totalPage} 
                            prevPage={currentPage - 1} nextPage={currentPage + 1} />
            </Fragment>

        )
    }
}

function mapStateToProps(state){
    return{
        tickets: state.ticket.list,
        pagination: state.ticket.pagination
    }
}


export default connect(mapStateToProps, actions)(DashboardTable);