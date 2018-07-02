import React from 'react';

import {FireIcon, SpinnerIcon, WrenchIcon, FileIcon} from '../../UI/Icons/index';
import ListGroup from "../../UI/ListComponent/ListGroup";
import NavListItem from "../../UI/ListComponent/NavListItems";
import TitledCard from '../../UI/TitledCard/TitledCard';

const SideBoard = props => {

    return(
        <TitledCard title="Dashboard" >
            <ListGroup>
                <NavListItem to="/incidents/all" >
                    <div className="item-group">
                        <FireIcon className="list-icon"/>
                        <span className="item-group__text" style={{flex: 1}} >Incidents</span>
                        <span className="badge badge--default">120</span>
                    </div>
                </NavListItem>
                <NavListItem to="/requests">
                    <div className="item-group">
                        <WrenchIcon className="list-icon"/>
                        <span className="item-group__text" style={{flex: 1}} >Requests</span>
                        <span className="badge badge--default">250</span>
                    </div>
                </NavListItem>
                <NavListItem to="/changes">
                    <div className="item-group">
                        <SpinnerIcon className="list-icon"/>
                        <span className="item-group__text" style={{flex: 1}} >Changes</span>
                        <span className="badge badge--default">58</span>
                    </div>
                </NavListItem>
            </ListGroup>
        </TitledCard>
    )

};


export default SideBoard;