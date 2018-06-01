import React, {Component} from 'react';
import TitledCard from "../../UI/TitledCard/TitledCard";
import IncidentForm from "./IncidentForm";


class IncidentDetailPage extends Component{

    render(){

        return(
            <div className="page">
                <TitledCard color="primary" title="Incident Ticket Details" >
                    <IncidentForm/>
                </TitledCard>
            </div>
        )
    }

}


export default IncidentDetailPage;