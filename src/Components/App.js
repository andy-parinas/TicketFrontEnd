import React from 'react';
import {Switch, Route} from 'react-router-dom';
import '../scss/app.scss';

import Dashboard from '../Layouts/Dashboard/Dashboard';

const App = () => {

    return <Switch>
              <Route path="/" component={Dashboard} />
           </Switch>

}

export default App;
