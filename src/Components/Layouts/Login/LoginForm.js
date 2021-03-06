import React, {Component} from 'react';

class LoginForm extends Component {
    
    

    render(){
        return (
            <div className="login-form">
                <form className="form">
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
        )
    }
   
}

export default LoginForm;