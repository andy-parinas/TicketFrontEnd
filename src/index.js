import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import reduxThunk from 'redux-thunk';

import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

const store = createStore(reducers,
    { auth: { 
        authenticated: localStorage.getItem('token'),
        user: localStorage.getItem('user'),
        userId: localStorage.getItem('userId')
    }}, applyMiddleware(reduxThunk))



const app = <Provider store={store}>
                <BrowserRouter><App /></BrowserRouter>
            </Provider>

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
