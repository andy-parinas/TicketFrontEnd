import React, {Component, Fragment} from 'react';
import SimpleTable from "../../UI/Table/SimpleTable";
import {tickets} from "../../../DummyData/tickets";
import Paginate from "../../UI/Pagination/Paginate";

const tableColumns = [
    { header: "Ticket Number", name:"ticketNumber" },
    { header: "Client", name:"client" },
    { header: "Description", name:"description" }
];

class DashboardTable extends Component{

    render(){

        return(
            <Fragment>
                <SimpleTable columns={tableColumns} data={tickets} />
                <Paginate currentPage={1} totalPage={10} prevPage={0} nextPage={2} />
            </Fragment>

        )
    }
}


export default DashboardTable;