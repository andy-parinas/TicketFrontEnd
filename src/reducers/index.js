import {combineReducers} from 'redux';

import authReducer from './auth';
import ticketReducer from './ticket';
import countReducer from './count';

export default combineReducers({
    auth: authReducer,
    ticket: ticketReducer,
    count: countReducer
})