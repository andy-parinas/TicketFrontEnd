import React from 'react';

const Navbar = (props) => {
    return (
        <div className="navbar" >
            <div className="navbar__brand">
                {props.brandName}
            </div>
            <ul className="navbar__menu" style={{flex: 1}}>
                <li className="navbar__menu__item"> 
                    <a className="menu__link" href=""> Dashboard </a>
                </li>
                <li className="navbar__menu__item"> 
                    <a className="menu__link" href=""> Incident Management </a>
                </li>
                <li className="navbar__menu__item"> 
                    <a className="menu__link" href="">Service Request </a>
                </li>
                <li className="navbar__menu__item">
                    <a className="menu__link" href=""> Change Management </a>
                </li>
            </ul>
            <ul className="navbar__menu">
                <li className="navbar__menu__item"> 
                    <a className="menu__link" href="">Logout </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;