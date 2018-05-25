import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, Link} from 'react-router-dom';


const NavListItem = props => {
    return  (
        <NavLink className="list-group__nav-item" to="/">
            {props.children}
        </NavLink>
    );
};

NavListItem.propTypes = {
    
};

export default NavListItem;