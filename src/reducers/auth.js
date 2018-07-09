import {AUTH_USER, AUTH_ERROR} from '../actions/types';
const initialState = {
    authenticated: '',
    user: '',
    userId: '',
    errorMessage: ''
}

export default function(state = initialState, action){

    switch (action.type) {
        case AUTH_USER:
            return {
                ...state,
                authenticated: action.payload.token,
                user: action.payload.user.name,
                userId: action.payload.user.id,
                errorMessage: ''
            }
        
        case AUTH_ERROR:
            return {
                ...state,
                errorMessage: action.payload
            }
        default:
            return state
    }

}