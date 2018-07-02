import axios from 'axios';

import {AUTH_ERROR, AUTH_USER} from './types';
import {api, headers} from '../appSettings';

export const register = (userData) => async dispatch => {

    try{
        const response = await axios.post('http://localhost:5000/api/auth', userData);

        dispatch({
            type: AUTH_USER,
            payload: response.data
        })

    }catch(e){
        dispatch({
            type: AUTH_ERROR,
            payload: 'User Registration Error'
        })
    }

};

export const login = (loginData, callback) => async dispatch => {

    try{
        const response = await axios.post(`${api}/api/auth/login`, JSON.stringify(loginData), {headers});

        dispatch({
            type: AUTH_USER,
            payload: response.data
        })

        localStorage.setItem('token', response.data)
        callback();
    }catch(e){
        dispatch({
            type: AUTH_ERROR,
            payload: 'Login Failed'
        })
    }
}