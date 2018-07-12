import {LIST_TICKETS, GET_TICKET, GET_TICKET_PROPERTIES} from '../actions/types';

const initialState = {
    list: [],
    selected: {
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
    },
    properties: {
        statuses: [],
        types: [],
        priorities: [],
        queues: []
    },
    pagination:{
        currentPage: 1,
        totalPages: 1
    },
    errorMessage: ''
}

export default function(state = initialState, action){

    switch (action.type) {       
        case LIST_TICKETS:
            return {
                ...state,
                list: action.payload.tickets,
                pagination: {
                    currentPage: action.payload.pagination.currentPage,
                    totalPages: action.payload.pagination.totalPages
                },
                errorMessage: ''
            }
        case GET_TICKET:
            return {
                ...state,
                selected: action.payload
            }
        
        case GET_TICKET_PROPERTIES:
            return{
                ...state,
                properties: action.payload
            }
        default:
            return state;
    }

}