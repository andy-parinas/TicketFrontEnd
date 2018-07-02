import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom';


const NavbarMenu = props => {


    return(
        <Fragment>
            <ul className="navbar__menu" style={{flex: 1}}>
                <li className="navbar__menu__item">
                    <NavLink to="/dashboard" className="menu__link" href=""> Dashboard </NavLink>
                </li>
                <li className="navbar__menu__item">
                    <NavLink to="/incidents" className="menu__link" href=""> Incident Management </NavLink>
                </li>
                <li className="navbar__menu__item">
                    <NavLink to="/requestmanagement" className="menu__link" href="">Service Request </NavLink>
                </li>
                <li className="navbar__menu__item">
                    <NavLink to="/changemanagement" className="menu__link" href=""> Change Management </NavLink>
                </li>
            </ul>
            <ul className="navbar__menu">
                <li className="navbar__menu__item">
                    <a className="menu__link" href="">Logout </a>
                </li>
            </ul>
        </Fragment>
    )

};


export default NavbarMenu;