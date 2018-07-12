import axios from 'axios';

import {LIST_USERS} from './types';
import {api} from '../appSettings';
import {getAutheader} from '../Components/Helper'

export const listUsers = () => async dispatch => {

    try {
        const authHeader = getAutheader();

        const url = `${api}/api/users`;

        const response = await axios.get(url, {headers: authHeader});

        dispatch({
            type: LIST_USERS,
            payload: response.data
        })
        
    } catch (e) {
        
    }
}

