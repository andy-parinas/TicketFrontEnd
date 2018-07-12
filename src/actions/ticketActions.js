import axios from 'axios'

import {api, headers} from '../appSettings';
import {LIST_TICKETS, COUNT_ALL_TICKETS, COUNT_USER_TICKETS, GET_TICKET, GET_TICKET_PROPERTIES} from './types';

const emptyTicket = {
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
        assignedTo: {
            id: 0,
            firstName: '',
            lastName: ''
        },
        status: '',
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

export const createTicket = (ticketData) => async dispatch => {
    try {


    }catch(e){

    }
}

export const listTickets = (listParams) => async dispatch => {

    try{

        const apiHeader = {
            ...headers,
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }

        const url = `${api}/api/tickets`;
        const response = await axios.get(url, {headers: apiHeader});
        const page = response.headers;

        const payload = {
            tickets: response.data,
            pagination: JSON.parse(page.pagination)
        }

        dispatch({
            type: LIST_TICKETS,
            payload: payload
        });

    }catch(e){


    }

}


export const selectTicket = (ticketId) => async dispatch => {

    const apiHeader = {
        ...headers,
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
    
    try {

        const url = `${api}/api/tickets/${ticketId}`;

        const response = await axios.get(url, {headers: apiHeader});

        dispatch({
            type: GET_TICKET,
            payload: response.data
        })

    } catch (e) {
        if(e.response.status == 404){
            dispatch({
                type: GET_TICKET,
                payload: emptyTicket
            })
        }
    }

}

export const getTicketProperties = () => async dispatch => {

    try{
        const apiHeader = {
            ...headers,
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }

        const url = `${api}/api/tickets/properties`;

        const response = await axios.get(url, {headers: apiHeader});

        dispatch({
            type: GET_TICKET_PROPERTIES,
            payload: response.data
        })

    }catch(e){


    }

}

export const countTickets = (countParams) => async dispatch => {

    const apiHeader = {
        ...headers,
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }

    const userId = localStorage.getItem('userId');

    const url = `${api}/api/tickets/counts`;

    const paylod = {
        incident: 0,
        request: 0,
        change: 0,
        userOpenIncident: 0,
        userOpenRequest: 0,
        userOpenChange: 0
    }

    if(countParams == 'user'){

        const userOpenIncident = await axios.get(`${url}?ticketType=Incident&assignedTo=${userId}`, {headers: apiHeader});
        const userOpenRequest = await axios.get(`${url}?ticketType=Service%20Request&assignedTo=${userId}`, {headers: apiHeader});
        const userOpenChange = await axios.get(`${url}?ticketType=Change&assignedTo=${userId}`, {headers: apiHeader});

        paylod.userOpenIncident = userOpenIncident.data;
        paylod.userOpenRequest = userOpenRequest.data;
        paylod.userOpenChange = userOpenChange.data;

        dispatch({
            type: COUNT_USER_TICKETS,
            payload: paylod
        })
    }

    if(countParams == 'all'){

        const incidentResponse = await axios.get(`${url}?ticketType=Incident`, {headers: apiHeader});
        const requestResponse = await axios.get(`${url}?ticketType=Service%20Request`, {headers: apiHeader});
        const changeResponse = await axios.get(`${url}?ticketType=Change`, {headers: apiHeader});

        paylod.incident = incidentResponse.data;
        paylod.request = requestResponse.data;
        paylod.change = changeResponse.data;

        dispatch({
            type: COUNT_ALL_TICKETS,
            payload: paylod
        })
    }

}