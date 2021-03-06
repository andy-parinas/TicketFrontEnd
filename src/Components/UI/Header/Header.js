import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CogIcon from "../Icons/CogIcon";

class Header extends Component {
    render() {
        return (
            <div className="header">
                <CogIcon className="header__icon"/>
                <h1 className="header__title">
                    {this.props.title}
                    <small className="header__subtitle">{this.props.subtitle}</small>
                </h1>
            </div>
        );
    }
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired
}

export default Header;