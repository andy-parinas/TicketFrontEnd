import React, {Component} from 'react';
import TitledCard from "../../UI/TitledCard/TitledCard";
import SearchIcon from "../../UI/Icons/SearchIcon";
import IncidentTable from "./IncidentTable";

class IncidentListPage extends Component {


    render(){
        return(
            <div className="page">
                <TitledCard color="primary" title="Latest Incident Tickets" >
                    <div className="search">
                        <input className="search__input text-input" type="text"/>
                        <button className="button search__button">
                            <SearchIcon className="button__icon"/>
                        </button>
                    </div>
                    <IncidentTable/>
                </TitledCard>
            </div>
        )
    }

}

export default IncidentListPage;