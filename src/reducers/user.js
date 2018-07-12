import {LIST_USERS} from '../actions/types';

const intialState = {
    list: []
}

export default function(state = intialState, action){

    switch (action.type) {
        case LIST_USERS:
            return {
                ...state,
                list: action.payload
            }
        default:
            return state;
    }
}