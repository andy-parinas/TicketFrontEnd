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

        const token = response.data.token;
        const user = response.data.user;

        localStorage.setItem('token', token);
        localStorage.setItem('user', user.name);
        localStorage.setItem('userId', user.id);

        callback();

    }catch(e){
        dispatch({
            type: AUTH_ERROR,
            payload: 'Login Failed'
        })
    }
}

export const logout = () => dispatch => {

    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('userId');

    const payload = {
        token: '',
        user : {
            name: '',
            id: ''
        }
    }

    dispatch({
        type: AUTH_USER,
        payload: payload
    })

}