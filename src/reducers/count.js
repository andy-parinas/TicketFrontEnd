import {COUNT_ALL_TICKETS, COUNT_USER_TICKETS} from '../actions/types';

const initialState = {
    incident: 0,
    request: 0,
    change: 0,
    userOpenIncident: 0,
    userOpenRequest: 0,
    userOpenChange: 0
}

export default function(state = initialState, action){


    switch (action.type) {
        case COUNT_USER_TICKETS:
            return {
                ...state,
                userOpenIncident: action.payload.userOpenIncident,
                userOpenRequest: action.payload.userOpenRequest,
                userOpenChange: action.payload.userOpenChange
            }
        case COUNT_ALL_TICKETS:
            return {
                ...state,
                incident: action.payload.incident,
                request: action.payload.request,
                change: action.payload.change,
            }
        default:
            return state;
    }


}