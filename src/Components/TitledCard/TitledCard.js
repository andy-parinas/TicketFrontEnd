import React from 'react';
import PropTypes from 'prop-types';

const TitledCard = props => {

    const children = props.children;
    const color = props.color? props.color : 'primary';

    return(
        <div className="card">
            <div className={`card__header card__header--${color}`}>
                {props.title}
            </div>
            <div className="card__body">
                { children }
            </div>
        </div>
    )

}

TitledCard.propType = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired
}

export default TitledCard;