import React, {Component, Fragment} from 'react';

import {SORT, INCIDENT} from '../../Helper';
import ActionTable from "../../UI/Table/ActionTable";
import {tickets} from "../../../DummyData/tickets";
import Paginate from "../../UI/Pagination/Paginate";



const tableColumns = [
    { header: "Ticket Number", name: INCIDENT.ticketNumber},
    { header: "Client", name: INCIDENT.client, },
    { header: "Description", name: INCIDENT.description ,},
    { header: "Created", name: INCIDENT.createdAt,  },
    { header: "Status", name: INCIDENT.status,  },
    { header: "Owner", name: INCIDENT.user,  }
];

class IncidentTable extends Component{

    constructor(props){
        super(props);
        this.state = {
            sort: {
                column: INCIDENT.client,
                direction: SORT.descending
            }
        }

    }

    render(){

        return(
            <Fragment>
                <ActionTable data={tickets} columns ={tableColumns} sort={this.state.sort} />
                <Paginate currentPage={1} totalPage={10} prevPage={0} nextPage={2} />
            </Fragment>
        )
    }


};

export default IncidentTable;