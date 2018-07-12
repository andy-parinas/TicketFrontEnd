import {headers} from '../../appSettings';

export const SORT = {
    ascending: 'ascending',
    descending: 'descending'
};

export const INCIDENT = {
    ticketNumber: 'ticketNumber',
    client: 'clientName',
    description: 'description',
    createdAt: 'createdAt',
    status: 'status',
    user: 'user'
};

export const getAutheader = () =>{

    return  {
        ...headers,
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    }
}