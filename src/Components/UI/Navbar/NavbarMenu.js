import React, {Fragment} from 'react';


const NavbarMenu = props => {


    return(
        <Fragment>
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
        </Fragment>
    )

};


export default NavbarMenu;