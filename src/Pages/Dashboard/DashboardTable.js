import React, {Component} from 'react';
import SimpleTable from "../../Components/Table/SimpleTable";
import {tickets} from "../../DummyData/tickets";

const tableColumns = [
    { header: "Ticket Number", name:"ticketNumber" },
    { header: "Client", name:"client" },
    { header: "Description", name:"description" }
];

class DashboardTable extends Component{

    render(){

        return(
            <SimpleTable columns={tableColumns} data={tickets} />
        )
    }
}


export default DashboardTable;