import React, {Component} from 'react';

const TableCell = props => {

    return(
        <td className="tsimple__data">{props.data}</td>
    )

};

const TableRow = props => {

    const cells = props.columns.map(column => {
       return <TableCell key={Math.random()} data={props.row[column.name]} />
    });

    return(
        <tr className="tsimple__row">
            {cells}
        </tr>
    )

};

class SimpleTable extends Component {

    render(){

        const columns = this.props.columns

        const rows = this.props.data.map(row => {
            return <TableRow key={Math.random()} row={row} columns={columns} />
        });

        const headers = columns.map(column => {
            return <th key={Math.random()} className="tsimple__head__header" > {column.header} </th>
        });

        return(
            <div className="table-container">
            <table className="tsimple">
                <thead className="tsimple__head">
                <tr className="tsimple__head__row">
                    {headers}
                </tr>
                </thead>
                <tbody className="tsimple__body">
                    {rows}
                </tbody>
            </table>
            </div>
        )
    }
}


export default SimpleTable;