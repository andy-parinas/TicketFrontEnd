import React, {Component} from 'react';
import ArrowDownIcon from "../Icons/ArrowDownIcon";
import {SORT} from "../../Helper";
import ArrowUpIcon from "../Icons/ArrowUpIcon";


const TableCell = props => {

    return(
        <td className="action-table__data">
            {props.data}
        </td>
    )


};


const TableRow = props => {

    const row = props.row;

    const cells = props.columns.map(col => {
    return <TableCell data={row[col.name]} />
    });

    return(
        <tr className="action-table__row">
            {cells}
        </tr>
    )

};



class ActionTable extends Component{

    render(){

        const sort = this.props.sort;

        const rows = this.props.data.map(row => {
            return <TableRow row={row} columns={this.props.columns} />
        });

        const headers = this.props.columns.map( column => {

            let sortComponent;

            if(column.name === sort.column){
                if(sort.direction === SORT.descending){
                    sortComponent = <ArrowDownIcon className="action-table__icon"/>
                }else {
                    sortComponent = <ArrowUpIcon className="action-table__icon"/>
                }

            }

           return <th className={`action-table__head__header`} >
                        <div className="table-header-section">
                            <span> {column.header} </span>
                            {sortComponent? sortComponent : ''}
                        </div>
                   </th>
        });

        return(
            <div className="table-container">
                <table className="action-table">
                    <thead className="action-table__head">
                        <tr className="action-table__head__row">
                            { headers }
                        </tr>
                    </thead>
                    <tbody>
                        { rows }
                    </tbody>
                </table>
            </div>
        )
    }

}

export default ActionTable;