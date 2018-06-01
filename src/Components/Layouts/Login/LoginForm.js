import React from 'react';

export default () => {

    return (
        <div className="login-form">
            <form className="form">
                <div className="form-group">
                    <label className="form__label"> Email Address: </label>
                    <input type="text" className="form__input" placeholder="Enter Email Address" />
                </div>
                <div className="form-group">
                    <label className="form__label" > Password: </label>
                    <input type="password" className="form__input" placeholder="Enter Password" />
                </div>
                <div className="form-group">
                    <input type="submit" className="button login-button" value="Login" />
                </div>
            </form>
        </div>
    )
}