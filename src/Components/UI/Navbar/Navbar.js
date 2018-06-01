import React from 'react';

const Navbar = (props) => {
    return (
        <div className="navbar" >
            <div className="navbar__brand">
                {props.brandName}
            </div>
            { props.menu }
        </div>
    );
};

export default Navbar;