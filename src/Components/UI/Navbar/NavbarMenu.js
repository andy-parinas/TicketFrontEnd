import React, {Fragment, Component} from 'react';
import {NavLink} from 'react-router-dom';


class NavbarMenu extends Component {


    render(){
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
                        <NavLink to="/servicerequests" className="menu__link" href="">Service Requests </NavLink>
                    </li>
                    <li className="navbar__menu__item">
                        <NavLink to="/changemanagement" className="menu__link" href=""> Change Management </NavLink>
                    </li>
                </ul>
                <ul className="navbar__menu">
                    <li className="navbar__menu__item" >
                        <button className='btn-link' onClick={this.props.logout}>Logout</button>
                    </li>
                </ul>
            </Fragment>
        )
    }
    

}

export default NavbarMenu;
// export default connect(null, actions)(NavbarMenu);