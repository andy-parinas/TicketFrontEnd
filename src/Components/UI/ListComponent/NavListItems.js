import React from 'react';
import PropTypes from 'prop-types';
import {NavLink, Link} from 'react-router-dom';


const NavListItem = props => {
    return  (
        <Link className="list-group__nav-item" to={props.to}>
            {props.children}
        </Link>
    );
};

NavListItem.propTypes = {
    
};

export default NavListItem;