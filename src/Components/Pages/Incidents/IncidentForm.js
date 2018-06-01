import React, {Component} from 'react'


class IncidentForm extends Component{

    render(){

        return(
            <div className="form iform">
                <div className="form-label iform__label iform__label--num">
                    Ticket Number
                </div>
                <div className="iform__input inform__input--num">
                    <input className="text-input" type="text" placeholder="Enter Ticket Number" />
                </div>

                <div className="form-label iform__label iform__label--status">
                    Status
                </div>
                <div className="iform__input inform__input--status">
                    <input className="text-input" type="text" placeholder="Enter Ticket Status" />
                </div>

                <div className="form-label iform__label iform__label--priority">
                    Priority
                </div>
                <div className="iform__input inform__input--priority">
                    <input className="text-input" type="text" placeholder="Enter Ticket Priority" />
                </div>

                <div className="form-label iform__label iform__label--assign">
                    Assigned To
                </div>
                <div className="iform__input inform__input--assign">
                    <input className="text-input" type="text" placeholder="Enter Ticket Owner" />
                </div>

                <div className="form-label iform__label iform__label--description">
                    Description
                </div>
                <div className="iform__input iform__input--description">
                    <input className="text-input" type="text" placeholder="Enter Ticket Description" />
                </div>
                <div className="form-label iform__label iform__label--detail">
                    Details
                </div>
                <div className="iform__input iform__input--detail">
                    <textarea className="text-input" placeholder="Enter Ticket Details" ></textarea>
                </div>

                <div className="iform__section">
                    <div className="form-label iform__label iform__label--client">
                        Client Name
                    </div>
                    <div className="iform__input inform__input--client">
                        <input className="text-input" type="text" placeholder="Enter Client Name" />
                    </div>

                    <div className="form-label iform__label iform__label--contact">
                        Contact Name
                    </div>
                    <div className="iform__input inform__input--contact">
                        <input className="text-input" type="text" placeholder="Enter Contact Name" />
                    </div>

                    <div className="form-label iform__label iform__label--email">
                        Email
                    </div>
                    <div className="iform__input inform__input--email">
                        <input className="text-input" type="text" placeholder="Enter Contact Email" />
                    </div>

                    <div className="form-label iform__label iform__label--phone">
                        Phone
                    </div>
                    <div className="iform__input inform__input--phone">
                        <input className="text-input" type="text" placeholder="Enter Contact Phone Number" />
                    </div>

                </div>

                <div className="iform__control">
                    <button className="button">Edit</button>
                    <button className="button">Delete</button>
                    <button className="button">View Journals</button>
                </div>
            </div>
        )
    }
}

export default IncidentForm