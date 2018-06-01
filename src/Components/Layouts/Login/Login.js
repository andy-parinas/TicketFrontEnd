import React, {Component, Fragment} from 'react';
import Navbar from "../../UI/Navbar/Navbar";

import TitledCard from '../../UI/TitledCard/TitledCard';
import LoginForm from './LoginForm';

class Login extends Component{

    render(){
        return(
            <Fragment>
                <Navbar brandName="Ticket Manager"/>
                <div className="login">
                    <TitledCard color="dark" title="LOGIN TO TICKET DASHBOARD" >
                        <LoginForm/>
                    </TitledCard>
                </div>
            </Fragment>
        )
    }
}

export default Login;