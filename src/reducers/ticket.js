import {LIST_TICKETS} from '../actions/types';

const initialState = {
    list: [],
    selected: {
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
        console.log(action.payload.pagination.totalPages)
            return {
                ...state,
                list: action.payload.tickets,
                pagination: {
                    currentPage: action.payload.pagination.currentPage,
                    totalPages: action.payload.pagination.totalPages
                },
                errorMessage: ''
            }
    
        default:
            return state;
    }

}