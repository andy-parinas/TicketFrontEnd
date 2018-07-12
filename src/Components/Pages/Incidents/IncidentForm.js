import React, {Component, PureComponent} from 'react'


class IncidentForm extends PureComponent{

    constructor(props){
        super(props);
        this.state = {
            ticket: {
                id: 0,
                number: '',
                description: '',
                details: '',
                createdAt: '',
                updatedAt: '',
                createdBy: {
                    id: 0,
                    firstName: '',
                    lastName: ''
                },
                assignedToId: 0,
                assignedTo: {
                    id: 0,
                    firstName: '',
                    lastName: ''
                },
                ticketStatusId: 0,
                status: '',
                ticketPriorityId: 0,
                priority: '',
                ticketType: '',
                queue: '',
                client: {
                    id: 0,
                    name: '',
                    address: '',
                    phone: '',
                    clientType: ''
                },
                configItem: {
                    id: 1,
                    name: '',
                    description: '',
                    configItemType: ''
                }
            }
        }
    }

    componentDidMount(){
        console.log('ComponentDidMount');
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(nextProps.ticket.id != prevState.ticket.id){
            return {
                ticket: nextProps.ticket
            }
        }

        return prevState;
    }




    render(){
        
        const {statuses, priorities, queues} = this.props.properties;
        const users = this.props.users

        const statusOptions = statuses.map(status => {
            return <option value={status.id}> {status.name} </option>
        });

        const priorityOptions = priorities.map(priority => {
            return <option value={priority.id}> {priority.name} </option>
        })

        const userOptions = users.map(user => {
            return <option value={user.id}> {user.fullName} </option>
        })

        return(
            <div className="form iform">
                <div className="form-label iform__label iform__label--num">
                    Ticket Number
                </div>
                <div className="iform__input inform__input--num">
                    <input  className="text-input" type="text" placeholder="Enter Ticket Number" 
                            value={this.state.ticket.number} />
                </div>

                <div className="form-label iform__label iform__label--status">
                    Status
                </div>
                <div className="iform__input inform__input--status">
                    <select className="text-input" value={this.state.ticket.ticketStatusId} >
                        { statusOptions }
                    </select>
                </div>

                <div className="form-label iform__label iform__label--priority">
                    Priority
                </div>
                <div className="iform__input inform__input--priority">
                    <select className="text-input" value={this.state.ticket.ticketPriorityId}>
                        { priorityOptions }
                    </select>
                </div>

                <div className="form-label iform__label iform__label--assign">
                    Assigned To
                </div>
                <div className="iform__input inform__input--assign">
                    <select className="text-input" value={this.state.ticket.assignedToId}>
                        { userOptions }
                    </select>
                </div>

                <div className="form-label iform__label iform__label--description">
                    Description
                </div>
                <div className="iform__input iform__input--description">
                    <input  className="text-input" type="text" placeholder="Enter Ticket Description"
                            value={this.state.ticket.description} />
                </div>
                <div className="form-label iform__label iform__label--detail">
                    Details
                </div>
                <div className="iform__input iform__input--detail">
                    <textarea  rows="10" className="text-input" placeholder="Enter Ticket Details" 
                                value={this.state.ticket.details} ></textarea>
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