import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';

import Navbar from "../../UI/Navbar/Navbar";
import TitledCard from '../../UI/TitledCard/TitledCard';
import LoginForm from './LoginForm';
import * as actions from '../../../actions';

class Login extends Component{

    constructor(props) {
        super(props);
        this.state = {
            loginData: {
                email: '',
                password: ''
            }
        }

        this.handleInputChangeEvent = this.handleInputChangeEvent.bind(this)
        this.handleFormSubmitEvent = this.handleFormSubmitEvent.bind(this);
    }


    handleInputChangeEvent(event){
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            ...this.state,
            loginData: {
                ...this.state.loginData,
                [name]: value
            }
        })
    }

    handleFormSubmitEvent(event){
        event.preventDefault();
        this.props.login(this.state.loginData, ()=>{
            this.props.history.push('/dashboard');
        })
    }

    render(){
        return(
            <Fragment>
                <Navbar brandName="Ticket Manager"/>
                <div className="login">
                    <TitledCard color="dark" title="LOGIN TO TICKET DASHBOARD" >
                        <div className="login-form">
                            <form className="form" onSubmit={this.handleFormSubmitEvent} >
                                <div className="form-group">
                                    <label className="form__label"> Email Address: </label>
                                    <input  type="text" className="form__input" 
                                            placeholder="Enter Email Address" name='email'
                                            value={this.state.loginData.email} onChange={this.handleInputChangeEvent} />
                                </div>
                                <div className="form-group">
                                    <label className="form__label" > Password: </label>
                                    <input  type="password" className="form__input" 
                                            placeholder="Enter Password" name='password' 
                                            value={this.state.loginData.password} onChange={this.handleInputChangeEvent} />
                                </div>
                                <div className="form-group">
                                    <input type="submit" className="button login-button" value="Login" />
                                </div>
                            </form>
                        </div>
                    </TitledCard>
                </div>
            </Fragment>
        )
    }
}

export default connect(null, actions)(Login);